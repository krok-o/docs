---
title: Docker
weight: 30
---

Using Docker and docker-compose.

## Images

## docker-compose

The following docker-compose yaml file will deploy Krok with the bare minimum requirements and local volumes and traefik.

```yaml
version: '3.3'

services:
  krok:
    image: krokhook/krok:v0.0.4
    networks:
      - traefik-public
      - default
    volumes:
      - /vault:/vault
      - /plugins:/plugins
    deploy:
      labels:
        - "traefik.backend=krok"
        - "traefik.constraint-label=traefik-public"
        - "traefik.docker.network=traefik-public"
        - "traefik.enable=true"
        - "traefik.http.routers.krok-http.rule=Host(`krok.cronohub.org`)"
        - "traefik.http.routers.krok-http.entrypoints=http"
        - "traefik.http.routers.krok-http.middlewares=https-redirect"
        - "traefik.http.routers.krok-https.rule=Host(`krok.cronohub.org`)"
        - "traefik.http.routers.krok-https.entrypoints=https"
        - "traefik.http.routers.krok-https.tls=true"
        - "traefik.http.routers.krok-https.tls.certresolver=le"
        - "traefik.http.services.krok.loadbalancer.server.port=3000"
    command:
      - --hookbase=krok.app
      - --db-username=krok
      - --db-hostname=krokdb:5432
      - --db-password=password123
      - --file-vault-location=/vault
      - --plugin-location=/plugins
    ports:
      - 9998:9998
    depends_on:
      - krokdb

  krokdb:
    image: postgres:11
    restart: always
    environment:
      - POSTGRES_USER=krok
      - POSTGRES_PASSWORD=password123
      - POSTGRES_DB=krok
    networks:
      - traefik-public
      - default
    volumes:
      - /postgres:/var/lib/postgresql/data
      - /dbinit:/docker-entrypoint-initdb.d

networks:
  traefik-public:
    external: true
```
