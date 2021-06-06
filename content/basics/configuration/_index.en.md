---
date: 2021-06-09T16:50:16+02:00
title: Configuration
weight: 20
---

## Configuration options for the root command

These are the currently configurable options for Krok:

{{% notice info %}} Make sure to check out the [Release](https://github.com/krok-o/krok/releases) section of Krok for the latest built binaries for all supported platforms. {{% /notice %}}


```console
Krok server

Usage:
  krok [flags]

Flags:
      --auto-tls                              --auto-tls
      --cache-dir string                      --cache-dir /home/user/.server/.cache
      --db-hostname string                    --db-hostname localhost:5432 (default "localhost:5432")
      --db-name string                        --db-name krok (default "krok")
      --db-password string                    --db-password password123 (default "password123")
      --db-username string                    --db-username krok (default "krok")
      --debug                                 --debug
      --default-maximum-command-runtime int   Given in seconds. (default 30)
      --email-apikey string                   --email-apikey ********
      --email-domain string                   --email-domain krok.com
      --file-vault-location string            --file-vault-location /tmp/krok/vault (default "/tmp/krok/vault")
      --google-client-id string               --google-client-id my-client-id}
      --google-client-secret string           --google-client-secret my-client-secret}
  -h, --help                                  help for krok
      --hookbase string                       --hookbase localhost (default "localhost")
      --hostname string                       --hostname localhost:9998 (default "localhost:9998")
      --plugin-location string                --plugin-location /tmp/krok/plugins (default "/tmp/krok/plugins")
      --proto string                          --proto http (default "http")
      --server-crt-path string                --server-crt-path /home/user/.server/server.crt
      --server-key-path string                --server-key-path /home/user/.server/server.key
      --token string                          --token <somerandomdata>
```

Let's go over them one section at a time:

```
      --auto-tls                              --auto-tls
      --cache-dir string                      --cache-dir /home/user/.server/.cache
```

This sets up the underlying web server, [Echo](https://echo.labstack.com/), to use automatic TLS settings.

```
      --db-hostname string                    --db-hostname localhost:5432 (default "localhost:5432")
      --db-name string                        --db-name krok (default "krok")
      --db-password string                    --db-password password123 (default "password123")
      --db-username string                    --db-username krok (default "krok")
```

Krok uses a postgres database to store various data. These are all settings to reach the database.

```
      --default-maximum-command-runtime int   Given in seconds. (default 30)
```

The maximum seconds a command can run. In case of long running commands, this should be set to a higher default.

```
      --email-apikey string                   --email-apikey ********
      --email-domain string                   --email-domain krok.com
```

As of this writing, email notifications are not yet implemented, but they, eventually, will be. In that case, these are Mailgun settings which Krok is using.

