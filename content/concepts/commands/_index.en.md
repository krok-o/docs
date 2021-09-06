---
title: Commands
weight: 25
chapter: false
---

What are commands? Commands are at the heart of the Krok. Without commands, Krok doesn't do much.

Commands can be bots which do things on PRs, or comment on issues or run on a set schedule. They can be things like
a blog builder which pushes the content up to a repository, a slack notification which acts on events,
a bot which reacts to pull requests, cleanup jobs, artifact generators and pusher... etc.

Let's look at how they work, what requirements they have and how to create one.

## Structure

Commands are contained in containers. A container has everything that a command needs. They can be written in whatever
language you choose as long as the following requirements are met:

There are three command line options which a command must accept in the following format:

```
--platform github
--event-type push
--payload <bas64 encoded JSON payload>
```

What are these settings? The platform is the platform from which the event came from. `github`, `gitlab`, `gitea`, `bitbucket` etc.
The event-type defines the type of the event. This will be a platform specific string. Which means it's something like `push` for Github
and `Push Hook` for gitlab, and so on. The payload is a base64 encoded string of the whole payload that was attached to this event.

The payload is passed on to the commands so the command can then further analyse it and act on it. Like, getting the comment for an `issue_comment`
event, or getting the SSH url and cloning the repository to build and push an image somewhere. Or deploy to an existing environment.

## Creating

To create a command, run:

```
krokctl create command --name test --image krokhook/integration-test-command:v0.0.1
ID      NAME            SCHEDULE        IMAGE                                           ENABLED REPOSITORIES    PLATFORMS
1       test            -               krokhook/integration-test-command:v0.0.1        true    -               -

```

Once created, we need to define what platforms this command supports. Commands can be made available for all platforms or just a few or
a single one. This means that when there is an event coming from Github it will only run commands which support this platform.

To associate this command with a platform, a relationship must be added to the platform much like for repositories.

The following command

```
krokctl relationship platform add --command-id 1 --platform-id 1
Success!
```

... adds support for platform 1 (github) to the command-id `1` which is the test command created above. Now this command will be run
on Github related events.

## Settings

Commands can have settings which are passed in as `--%s=%s` where the first `%s` is the key and the second `%s` is the value.

To create settings for a command run:

```
krokctl create setting --command-id 1 --in-vault --key token --value xoxb-1234-1234-ccc
```

What's `in-vault` you might ask? Good question. If `--in-vault` is set, the setting will be stored securely in an AES encrypted
vault. Later, more options will be made available. Right now, the vault is seeded at startup and then AES encrypted using Go's
well written encryption library. No self backed encryption is used. Once stored in vault, it cannot be moved to non-vault. If need
arises to recreate or edit, the previous value is lost.