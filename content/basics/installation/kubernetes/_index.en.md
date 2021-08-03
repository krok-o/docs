---
title: Kubernetes
weight: 20
---

Using Kubernetes.

## Helm charts

The [Helm charts](https://github.com/krok-o/helm-charts) repository provides helm charts to deploy Krok with ease.

Clone the repository, or download the bundled manifests from the release page.

Once done, run `helm install krok` and it should install Krok with basic settings without using persistence.

To enable persistence run:

```
helm install --set persistence.enabled=true krok
```
