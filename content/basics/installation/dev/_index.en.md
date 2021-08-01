---
title: Development
weight: 30
---

Building from source and using a test database.

It's really simple to build and deploy Krok for development. Here, I'm going to describe the basic
architecture of Krok, and how to build and develop it.

## Test Database

Krok server comes with a Makefile command to create and run a test database.

To execute it, simply run:

```
make test-db
```

To remove the test database run:

```
make rm-test-db
```

The integration tests located under `tests/livestore` contain tests which test with an actual database.
This is done with an ephemeral test container that is bootstrapped on each test run and then scrapped.
The code responsible for that is under `tests/livestore/init_test.go` which hijacks the main test runner
of Go to launch a Docker container first. Then sets up the variable `hostname` which will contain the ephemeral
container's port endpoint.

## Packages

The following packages are of relevance:

### /cmd

The entry point of the root command for Krok. Inside, `root.go` wires up all the dependencies of the providers
contained under pkg/providers.

### /dbinit

Contains the SQL script which primes the database with the correct schema.

### /docs

Contains release docs and the swagger main doc file.

### /errors

Defines the errors which are returned by the Krok API.

### /generate_interface_mocks

Contains a small Go script which gathers all of the interfaces defined in pkg/providers. It generates mockery
stubs for all of them to be used in unit tests.

### /helm

Contains helm files used to deploy Krok on Kubernetes. More about that under [kubernetes](/kubernetes).

### /swagger

Contains swagger details such as, the swagger.json and the generated swagger.md file.

### /tests

Contains integration tests.

### /.github

Contains Github Actions definitions responsible for releasing, testing and building Krok.

### /pkg/providers

Krok has an architecture using something called `providers`. The providers provide a specific functionality
for a certain Interface. For example, there is an interface for Platforms, and the concrete implementations are
Github, Gitlab, Gitea, etc. These providers are then dependencies for other providers.

Consider the following:

There is a provider for database access called Connector. The Connector is used by the RepositoryStorer provider
which implement repository based database operation. I.e.: CRUD operations. And others like, the CommandStorer,
UserStorer, etc.

There is also another called DockerConverter which providers implementation for detecting if we are in a Docker environment.
This is necessary, because in a Docker environment, secrets like, database password, database username, are passed via
files, like:

```go
const (
	dockerSecretPrefix = "/run/secrets"
)
```

And so the DockerConverter detects this and converts secrets to files. If it's not running there, it returns the
value as is, which is the case when running locally or in Kubernetes.

These are the providers which are wired up in `root.go`. The reason for them is that they de-couple other providers
from services they don't care about so they can be easily unit tested with mocked out dependencies which they don't care about.

Root go them wires up concrete implementations like this:

```go
	converter := environment.NewDockerConverter(environment.Dependencies{
		Logger: log,
	})
    ...
    connector := livestore.NewDatabaseConnector(krokArgs.store, livestore.Dependencies{
		Logger:    log,
		Converter: converter,
	})
    ...
   	commandStore, err := livestore.NewCommandStore(livestore.CommandDependencies{
		Dependencies: deps,
		Connector:    connector,
	})
    ...
    // Then a handler provider is created which actually implement echo handling functions:
	commandHandler := handlers.NewCommandsHandler(handlers.CommandsHandlerDependencies{
		CommandStorer: commandStore,
		Logger:        log,
		Plugins:       pw,
	})
    // And at the end, the Krok server gets all the handlers..
	sv := server.NewKrokServer(krokArgs.server, server.Dependencies{
		Logger:                 log,
		HookHandler:            hookHandler,
		UserMiddleware:         userMiddleware,
		CommandHandler:         commandHandler,
		CommandSettingsHandler: commandSettingsHandler,
		CommandRunHandler:      commandRunHandler,
		RepositoryHandler:      repoHandler,
		APIKeyHandler:          apiKeysHandler,
		AuthHandler:            authHandler,
		TokenHandler:           tp,
		VCSTokenHandler:        vcsTokenHandler,
		SupportedPlatformList:  supportedPlatformListHandler,
		EventsHandler:          eventHandler,
		VaultHandler:           vaultHandler,
		UserHandler:            userHandler,
		ReadyHandler:           readyHandler,
	})

    // and is then executed...
	// Run service & server
	g, ctx := errgroup.WithContext(context.Background())

	g.Go(func() error {
		return sv.Run(ctx)
	})

	if err := g.Wait(); err != nil {
		log.Err(err).Msg("Failed to run")
	}
```

That's it.

### /pkg/server

This contains the Krok server code; middleware and the Krok server definition. Krok uses [echo](https://echo.labstack.com/).
It also contains the endpoint definitions for everything and uses Groups to define what requires admin access and what not.
Things like the URL callbacks don't use authentication. That is up to the hook it self to be secure through other means; such as
a secret in case of Github.

Krok uses plain HTTP REST endpoint ATM. Though later that will change to GRPC using [grpc-gateway](https://github.com/grpc-ecosystem/grpc-gateway).

### /pkg/models

This package contains all the models which Krok uses internally and to generate JSON payloads for responses.

## Tests

We don't accept code changes unless they are covered via tests. The providers themselves use mockery for dependencies and
should be able to test all sorts of things.

The handlers are just providers and the test should reflect what the end user will experience when calling them.

## Makefile

The Makefile contains all sorts of helper targets as well, such as `bootstrap`, `generate_mocks` and others.

## Swagger

Swagger is used to annotate all API endpoints. At the time of this writing it's missing auth information and a couple of
other nice details, but it's under development. Any API change requires an update to api_reference and the swagger data.

To update run:

```
make swagger && make swagger-docs
```

## Releases and Docker Container

To run a release, create a new doc under `docs/release_notes` with a new tag like v0.1.15.md and enter proper information
like, issues closed, pull requests merged, etc. ( later this will be somewhat automated with release drafter ).

Then tag the release with `git tag -a v0.1.15 -m ''` and push it to main `git push origin v0.1.15` and this will
trigger goreleaser to create a release. If everything is successful a new release should exist under releases in Github
and a new docker image should have been pushed to [Docker Hub](https://hub.docker.com/r/krokhook/krok).