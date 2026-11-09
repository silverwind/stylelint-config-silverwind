# stylelint-config-silverwind
[![](https://img.shields.io/npm/v/stylelint-config-silverwind.svg)](https://www.npmjs.org/package/stylelint-config-silverwind) [![](https://packagephobia.com/badge?p=stylelint-config-silverwind)](https://packagephobia.com/result?p=stylelint-config-silverwind)

> Extensive stylelint configuration

## Usage

```sh
pnpm add -D stylelint-config-silverwind
```

In `stylelint.config.js`:

```js
import {base} from "stylelint-config-silverwind";

export default base({
  referenceFiles: ["src/vars.css"],
});
```

`base` spreads top-level stylelint options over the defaults and merges `rules`.

Setting `referenceFiles` enables the `no-unknown-animations`, `no-unknown-custom-media` and `no-unknown-custom-properties` rules, which check usages against the files that define them.

© [silverwind](https://github.com/silverwind), distributed under BSD licence
