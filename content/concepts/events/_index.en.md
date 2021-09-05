---
title: Events
weight: 25
chapter: false
---

Events are events happened that the webhook subscribed to. For example, push, ping, issue_comment, etc...

These are stored and linked back to if they have a unique ID. For github, they do, but GitLab doesn't provide
one so Krok generates one to distinguish.

An event looks like this:

```
krokctl list events --repository-id 1
ID      EVENT-ID                                REPOSITORY-ID   VCS     CREATED-AT                      COMMAND-RUNS
1       0c618450-0e76-11ec-8c0c-5833cfe526dc    1               1       2021-09-05 00:00:00 +0000 UTC   -
```

Get details for an even by running:

```
krokctl get event --id 1
ID      EVENT-ID                                REPOSITORY-ID   VCS PAYLOAD                                       CREATED-AT                      COMMAND-RUNS
3       3bd4e2e0-0e76-11ec-86f0-c3d44bc76eef    1               1   {"zen":"Keep it logically awesome.",...}      2021-09-05 00:00:00 +0000 UTC   1; test; success
```

The command run is a collection of commands which have executed for this event. In this case the command named `test` with id `1` run with end status `success`.

You can get details of that run by saying:

```
krokctl get run --id 1
ID      EVENT-ID        NAME    STATUS  CREATED-AT                      OUTCOME
1       3               test    success 2021-09-05 00:00:00 +0000 UTC   "platform: github,event-type: ,payload: ..."
```

This command simply checks what it received. It's used for integration testing as well.
