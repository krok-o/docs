---
title: Repositories
weight: 10
chapter: false
---

Repositories are in a 1:1 match to hooks. What are repositories? The repositories on the various platforms that Krok supports.

For example, a repository on Github. A repository is registered on Krok which then calls back to the platform and creates a webhook
which will link back to Krok.

Once a repository is registered in Krok and a hook is successfully created, commands can be tied to that repository. Commands are executed
on specific event types. Let's follow an example.

Consider the following repository: [Skarlso Test](https://github.com/Skarlso/test). I would like to register this repository with Krok.

I can either use [KrokCTL](https://github.com/krok-o/krokctl) or the official [Terraform Provider](https://github.com/krok-o/terraform-provider-krok).

This guide uses `krokctl`.

First, register the repository:

```console
krokctl create repository --events push --name test-repo-1 --secret secret --vcs 1 --url https://github.com/Skarlso/test
```

What are these values?

- events -- defines what event to subscribe to when creating the webhook
- name -- name of the registered repository
- secret -- the secret which github needs for webhooks
- vcs -- this is Krok representation of Github provider of the repository
- url -- where the repository lives. This should be provided in `http` format

If everything is successful, looking at Github, should show as a successfully created webhook.

{{% notice info %}} Krok responds to the Ping event on its own coming from Github. {{% /notice %}}

Now, the repository on its own, doesn't really do much. We need [Commands](/commands) in order for it to be useful.

Once we have our command which we would like to run on each [Event](/events) we create a relationship to that command for this repository.

Do that, run:

```
krokctl relationship command add --command-id 1 --repository-id 1
```

We can get the IDs by `list`ing repositories and the commands with

```
krokctl list repositories
krokctl list commands
```

... which should show existing repositories and commands that have been created.

Once the relationship exists, when an event happens, all of the associated commands will be executed. On details for what the commands
will get, please follow the [Commands](/commands) section of the documentation.

## What is the point?

What is the point of these repositories then? Simple. You can have multiple repositories on multiple providers or a single providers, that doesn't matter.
What matters is, that the same command with the same configuration will run for all of the repositories. Once set up, everything will work the same way
with the same settings, which can be overwritten if necessary.

Imagine, you have a suite of repositories and you run a bot for each of them doing cleanup work, responding to issues, comments and pull requests.
If a new repository comes along you don't have to configure anything via github actions and set up a new connection and secrets whatnot in Github,
you just register the repository in Krok and add the relationship to the bot command and DONE. It will work the same way as for the rest of the repositories.