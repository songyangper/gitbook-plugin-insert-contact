# gitbook-plugin-insert-contact

NPM package [here](https://www.npmjs.com/package/gitbook-plugin-insert-contact)

```
npm i gitbook-plugin-insert-contact
```
gitbook plugin insert contact

```json
{
    "plugins": ["insert-contact", "another plugin 1", "another plugin 2"]
}
```

You will also need to provide author and style in your `book.json`:

```json
{
    "plugins": ["insert-contact", "another plugin"],
    "pluginsConfig": {
        "insert-contact": {
            "author": "***",
            "style": "background: none; max-height: 30px; min-height: 30px; color: #ddd"
        }
    }
}
```
