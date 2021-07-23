# Krok Documentation

Welcome. This is the documentation for [Krok](https://krok.app).

## Contributing

To contribute to this documentation you have to do the following:

- download [hugo](https://github.com/gohugoio/hugo/releases)
- edit the content in the content folder (take head of the weight that is assigned to the pages)
- run the hugo server locally from the doc folder (`hugo serve`)
- verify that the edited content looks good
- submit a PR

Once the PR is merged, github actions will publish the documentation under https://krok.app.

The api documentation is available through Swagger and is generated in Krok directly
then copied over here. If there is a change in the API, run the following commands:

```
make swagger && make swagger-docs
```

Fix any errors which might occur then copy the content from `docs/swagger.md` to the API docs.

Note, when writing the API docs, there is a bug where the swagger generates `# <span id="list-commands"></span>`
in front of all entities for some reason. I opened a [ticket](https://github.com/go-swagger/go-swagger/issues/2612). For now, we just replace it.
`s/# <span id=".*"></span>/#/g`.