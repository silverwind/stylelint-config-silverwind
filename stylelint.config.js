// @ts-check
import {defineConfig} from "stylelint-define-config";

export default defineConfig({
  extends: "stylelint-config-recommended",
  plugins: [
    "stylelint-declaration-strict-value",
    "stylelint-declaration-block-no-ignored-properties",
    "stylelint-value-no-unknown-custom-properties",
    "@stylistic/stylelint-plugin",
  ],
  overrides: [
    {files: ["**/*.html"], customSyntax: "postcss-html"},
  ],
  ignoreFiles: [
    "**/dist/**",
    "**/build/**",
    "**/node_modules/**",
  ],
  rules: {
    "@stylistic/at-rule-name-case": null,
    "@stylistic/at-rule-name-newline-after": null,
    "@stylistic/at-rule-name-space-after": null,
    "@stylistic/at-rule-semicolon-newline-after": null,
    "@stylistic/at-rule-semicolon-space-before": null,
    "@stylistic/block-closing-brace-empty-line-before": null,
    "@stylistic/block-closing-brace-newline-after": null,
    "@stylistic/block-closing-brace-newline-before": null,
    "@stylistic/block-closing-brace-space-after": null,
    "@stylistic/block-closing-brace-space-before": null,
    "@stylistic/block-opening-brace-newline-after": null,
    "@stylistic/block-opening-brace-newline-before": null,
    "@stylistic/block-opening-brace-space-after": null,
    "@stylistic/block-opening-brace-space-before": "always-multi-line",
    "@stylistic/color-hex-case": null,
    "@stylistic/declaration-bang-space-after": "never",
    "@stylistic/declaration-bang-space-before": null,
    "@stylistic/declaration-block-semicolon-newline-after": null,
    "@stylistic/declaration-block-semicolon-newline-before": null,
    "@stylistic/declaration-block-semicolon-space-after": null,
    "@stylistic/declaration-block-semicolon-space-before": "never",
    "@stylistic/declaration-block-trailing-semicolon": null,
    "@stylistic/declaration-colon-newline-after": null,
    "@stylistic/declaration-colon-space-after": null,
    "@stylistic/declaration-colon-space-before": "never",
    "@stylistic/function-comma-newline-after": null,
    "@stylistic/function-comma-newline-before": null,
    "@stylistic/function-comma-space-after": null,
    "@stylistic/function-comma-space-before": null,
    "@stylistic/function-max-empty-lines": 0,
    "@stylistic/function-parentheses-newline-inside": null,
    "@stylistic/function-parentheses-space-inside": null,
    "@stylistic/function-whitespace-after": null,
    "@stylistic/indentation": 2,
    "@stylistic/linebreaks": null,
    "@stylistic/max-empty-lines": 2,
    "@stylistic/max-line-length": null,
    "@stylistic/media-feature-colon-space-after": null,
    "@stylistic/media-feature-colon-space-before": "never",
    "@stylistic/media-feature-name-case": null,
    "@stylistic/media-feature-parentheses-space-inside": null,
    "@stylistic/media-feature-range-operator-space-after": "always",
    "@stylistic/media-feature-range-operator-space-before": "always",
    "@stylistic/media-query-list-comma-newline-after": null,
    "@stylistic/media-query-list-comma-newline-before": null,
    "@stylistic/media-query-list-comma-space-after": null,
    "@stylistic/media-query-list-comma-space-before": null,
    "@stylistic/named-grid-areas-alignment": null,
    "@stylistic/no-empty-first-line": null,
    "@stylistic/no-eol-whitespace": true,
    "@stylistic/no-extra-semicolons": true,
    "@stylistic/no-missing-end-of-source-newline": null,
    "@stylistic/number-leading-zero": null,
    "@stylistic/number-no-trailing-zeros": null,
    "@stylistic/property-case": "lower",
    "@stylistic/selector-attribute-brackets-space-inside": null,
    "@stylistic/selector-attribute-operator-space-after": null,
    "@stylistic/selector-attribute-operator-space-before": null,
    "@stylistic/selector-combinator-space-after": null,
    "@stylistic/selector-combinator-space-before": null,
    "@stylistic/selector-descendant-combinator-no-non-space": null,
    "@stylistic/selector-list-comma-newline-after": null,
    "@stylistic/selector-list-comma-newline-before": null,
    "@stylistic/selector-list-comma-space-after": "always-single-line",
    "@stylistic/selector-list-comma-space-before": "never-single-line",
    "@stylistic/selector-max-empty-lines": 0,
    "@stylistic/selector-pseudo-class-case": "lower",
    "@stylistic/selector-pseudo-class-parentheses-space-inside": "never",
    "@stylistic/selector-pseudo-element-case": "lower",
    "@stylistic/string-quotes": "double",
    "@stylistic/unicode-bom": null,
    "@stylistic/unit-case": "lower",
    "@stylistic/value-list-comma-newline-after": null,
    "@stylistic/value-list-comma-newline-before": null,
    "@stylistic/value-list-comma-space-after": null,
    "@stylistic/value-list-comma-space-before": null,
    "@stylistic/value-list-max-empty-lines": 0,
    "at-rule-no-unknown": [true, {ignoreAtRules: ["tailwind", "unocss"]}],
    "at-rule-no-vendor-prefix": true,
    "color-function-notation": null, // TODO": ["modern", {ignore: "with-var-inside"}]
    "declaration-block-no-duplicate-properties": [true, {ignore: ["consecutive-duplicates-with-different-values"]}],
    "declaration-block-no-redundant-longhand-properties": [true, {ignoreShorthands: ["flex-flow", "overflow", "grid-template"]}],
    // @ts-expect-error - https://github.com/stylelint-types/stylelint-define-config/issues/1
    "declaration-property-unit-disallowed-list": {"line-height": ["em"]},
    // @ts-expect-error - https://github.com/stylelint-types/stylelint-define-config/issues/1
    "declaration-property-value-disallowed-list": {"word-break": ["break-word"]},
    "font-family-name-quotes": "always-where-recommended",
    "function-calc-no-unspaced-operator": true,
    "function-name-case": "lower",
    "function-url-quotes": "always",
    "import-notation": "string",
    "keyframe-block-no-duplicate-selectors": true,
    "keyframe-declaration-no-important": true,
    "length-zero-no-unit": [true, {ignore: ["custom-properties"], ignoreFunctions: ["var"]}],
    "media-feature-name-no-vendor-prefix": true,
    "no-descending-specificity": null,
    "no-empty-source": null,
    "no-invalid-double-slash-comments": true,
    "no-invalid-position-at-import-rule": [true, {ignoreAtRules: ["tailwind"]}],
    "no-unknown-animations": null, // disabled until multi-file linting works
    "no-unknown-custom-media": null, // disabled until multi-file linting works
    "no-unknown-custom-properties": null,  // disabled until multi-file linting works
    "plugin/declaration-block-no-ignored-properties": true,
    "scale-unlimited/declaration-strict-value": [["/color$/"], {ignoreValues: "/^(inherit|transparent|unset|initial|currentcolor|none)$/", ignoreFunctions: true, disableFix: true, expandShorthand: true}],
    "selector-attribute-quotes": "always",
    "selector-no-vendor-prefix": true,
    "selector-type-case": "lower",
    "selector-type-no-unknown": [true, {ignore: ["custom-elements"]}],
    "shorthand-property-no-redundant-values": true,
    "value-no-vendor-prefix": [true, {ignoreValues: ["box", "inline-box"]}],
  },
});
