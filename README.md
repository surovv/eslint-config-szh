# eslint-config-szh
eslint configuration

1. Extends: `eslint-config-airbnb-base` `plugin:fp/recommended`
2. Plugins: `eslint-plugin-fp`

Some rules are being overridden.

Install with `peerDependencies`:

```sh
yarn add eslint eslint-config-szh -DE
```

Add to package.json:

```json
"eslintConfig": {
  "extends": "szh"
}
```
