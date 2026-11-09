# stylelint-config-silverwind
[![](https://img.shields.io/npm/v/stylelint-config-silverwind.svg)](https://www.npmjs.org/package/stylelint-config-silverwind) [![](https://packagephobia.com/badge?p=stylelint-config-silverwind)](https://packagephobia.com/result?p=stylelint-config-silverwind)

> Extensive stylelint configuration

## Usage

```sh
pnpm add -D stylelint-config-silverwind
```

In `stylelint.config.js`:

```js
/** @type {import("stylelint").Config} */
export default {
  extends: "stylelint-config-silverwind",
};
```

Or pass top-level options to `base`, which spreads them over the defaults and merges `rules`. Setting `referenceFiles` enables the `no-unknown-*` rules, which check custom properties, animations and custom media against the files that define them:

```js
import {base} from "stylelint-config-silverwind";

export default base({
  referenceFiles: ["src/vars.css"],
});
```

© [silverwind](https://github.com/silverwind), distributed under BSD licence
