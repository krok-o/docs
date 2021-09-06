---
title: Tutorials
weight: 50
pre: "<b>4. </b>"
chapter: true
---

### Chapter 4

# Tutorials

Discover some usages and tutorials with Krok.

## Terraform

I'm going to show a Terraform file which will create the following setup:

- repository on github subscribed to events `push` and `issue_comment`
- command with two settings, `token` -> in vault, `message` -> regular setting
- adding relationships from command -> platform and command -> repository

```terraform
/*
 * Create the krok provider.
 */
provider "krok" {
}

/*
 * Create github platform token.
 */
resource "krok_platform" "github" {
  platform_id = 1
  token = "token"
}

/*
 * Create a repository.
 */
resource "krok_repository" "skarlso_test" {
  name = "skarlso-test"
  url = "https://github.com/Skarlso/test"
  vcs = 1
  auth {
    secret = "secret"
  }
  commands = [krok_command.issue_commenter.id]
  events = ["push", "issue_comment"]
}

/*
 * Create a setting for this command.
 */
resource "krok_command_setting" "token" {
  key = "token"
  value = "<GITHUB_TOKEN>"
  in_vault = true
  command_id = krok_command.issue_commenter.id
}

/*
 * Create a setting for this command.
 */
resource "krok_command_setting" "message" {
  key = "message"
  value = "This is my regular bot response message."
  in_vault = false
  command_id = krok_command.issue_commenter.id
}

/*
 * Create an Issue commenter command.
 */
resource "krok_command" "issue_commenter" {
  name = "issue-commenter"
  image = "krokhook/issue-commenter-command:v0.0.1"
  platforms = [1]
}

```
