declare const _default: {
    extends: string;
    reportUnscopedDisables: true;
    reportNeedlessDisables: true;
    reportInvalidScopeDisables: true;
    plugins: string[];
    overrides: {
        files: string[];
        customSyntax: string;
    }[];
    ignoreFiles: string[];
    rules: {
        "@stylistic/at-rule-name-case": any;
        "@stylistic/at-rule-name-newline-after": any;
        "@stylistic/at-rule-name-space-after": any;
        "@stylistic/at-rule-semicolon-newline-after": any;
        "@stylistic/at-rule-semicolon-space-before": any;
        "@stylistic/block-closing-brace-empty-line-before": any;
        "@stylistic/block-closing-brace-newline-after": any;
        "@stylistic/block-closing-brace-newline-before": any;
        "@stylistic/block-closing-brace-space-after": any;
        "@stylistic/block-closing-brace-space-before": any;
        "@stylistic/block-opening-brace-newline-after": any;
        "@stylistic/block-opening-brace-newline-before": any;
        "@stylistic/block-opening-brace-space-after": any;
        "@stylistic/block-opening-brace-space-before": string;
        "@stylistic/color-hex-case": any;
        "@stylistic/declaration-bang-space-after": string;
        "@stylistic/declaration-bang-space-before": any;
        "@stylistic/declaration-block-semicolon-newline-after": any;
        "@stylistic/declaration-block-semicolon-newline-before": any;
        "@stylistic/declaration-block-semicolon-space-after": any;
        "@stylistic/declaration-block-semicolon-space-before": string;
        "@stylistic/declaration-block-trailing-semicolon": any;
        "@stylistic/declaration-colon-newline-after": any;
        "@stylistic/declaration-colon-space-after": any;
        "@stylistic/declaration-colon-space-before": string;
        "@stylistic/function-comma-newline-after": any;
        "@stylistic/function-comma-newline-before": any;
        "@stylistic/function-comma-space-after": any;
        "@stylistic/function-comma-space-before": any;
        "@stylistic/function-max-empty-lines": number;
        "@stylistic/function-parentheses-newline-inside": any;
        "@stylistic/function-parentheses-space-inside": any;
        "@stylistic/function-whitespace-after": any;
        "@stylistic/indentation": number;
        "@stylistic/linebreaks": any;
        "@stylistic/max-empty-lines": number;
        "@stylistic/max-line-length": any;
        "@stylistic/media-feature-colon-space-after": any;
        "@stylistic/media-feature-colon-space-before": string;
        "@stylistic/media-feature-name-case": any;
        "@stylistic/media-feature-parentheses-space-inside": any;
        "@stylistic/media-feature-range-operator-space-after": string;
        "@stylistic/media-feature-range-operator-space-before": string;
        "@stylistic/media-query-list-comma-newline-after": any;
        "@stylistic/media-query-list-comma-newline-before": any;
        "@stylistic/media-query-list-comma-space-after": any;
        "@stylistic/media-query-list-comma-space-before": any;
        "@stylistic/named-grid-areas-alignment": any;
        "@stylistic/no-empty-first-line": any;
        "@stylistic/no-eol-whitespace": boolean;
        "@stylistic/no-extra-semicolons": boolean;
        "@stylistic/no-missing-end-of-source-newline": any;
        "@stylistic/number-leading-zero": any;
        "@stylistic/number-no-trailing-zeros": any;
        "@stylistic/property-case": string;
        "@stylistic/selector-attribute-brackets-space-inside": any;
        "@stylistic/selector-attribute-operator-space-after": any;
        "@stylistic/selector-attribute-operator-space-before": any;
        "@stylistic/selector-combinator-space-after": any;
        "@stylistic/selector-combinator-space-before": any;
        "@stylistic/selector-descendant-combinator-no-non-space": any;
        "@stylistic/selector-list-comma-newline-after": any;
        "@stylistic/selector-list-comma-newline-before": any;
        "@stylistic/selector-list-comma-space-after": string;
        "@stylistic/selector-list-comma-space-before": string;
        "@stylistic/selector-max-empty-lines": number;
        "@stylistic/selector-pseudo-class-case": string;
        "@stylistic/selector-pseudo-class-parentheses-space-inside": string;
        "@stylistic/selector-pseudo-element-case": string;
        "@stylistic/string-quotes": string;
        "@stylistic/unicode-bom": any;
        "@stylistic/unit-case": string;
        "@stylistic/value-list-comma-newline-after": any;
        "@stylistic/value-list-comma-newline-before": any;
        "@stylistic/value-list-comma-space-after": any;
        "@stylistic/value-list-comma-space-before": any;
        "@stylistic/value-list-max-empty-lines": number;
        "at-rule-no-unknown": (boolean | {
            ignoreAtRules: string[];
        })[];
        "at-rule-no-vendor-prefix": boolean;
        "color-function-notation": any;
        "declaration-block-no-duplicate-properties": (boolean | {
            ignore: string[];
        })[];
        "declaration-block-no-redundant-longhand-properties": (boolean | {
            ignoreShorthands: string[];
        })[];
        "declaration-property-unit-disallowed-list": {
            "line-height": string[];
        };
        "declaration-property-value-disallowed-list": {
            "word-break": string[];
        };
        "font-family-name-quotes": string;
        "function-calc-no-unspaced-operator": boolean;
        "function-name-case": string;
        "function-url-quotes": string;
        "import-notation": string;
        "keyframe-block-no-duplicate-selectors": boolean;
        "keyframe-declaration-no-important": boolean;
        "length-zero-no-unit": (boolean | {
            ignore: string[];
            ignoreFunctions: string[];
        })[];
        "media-feature-name-no-vendor-prefix": boolean;
        "no-descending-specificity": any;
        "no-empty-source": any;
        "no-invalid-double-slash-comments": boolean;
        "no-invalid-position-at-import-rule": (boolean | {
            ignoreAtRules: string[];
        })[];
        "no-unknown-animations": any;
        "no-unknown-custom-media": any;
        "no-unknown-custom-properties": any;
        "plugin/declaration-block-no-ignored-properties": boolean;
        "property-no-deprecated": (boolean | {
            ignoreProperties: string[];
        })[];
        "scale-unlimited/declaration-strict-value": (string[] | {
            ignoreValues: string;
            ignoreFunctions: boolean;
            disableFix: boolean;
            expandShorthand: boolean;
        })[];
        "selector-attribute-quotes": string;
        "selector-no-vendor-prefix": boolean;
        "selector-type-case": string;
        "selector-type-no-unknown": (boolean | {
            ignore: string[];
        })[];
        "shorthand-property-no-redundant-values": boolean;
        "value-no-vendor-prefix": (boolean | {
            ignoreValues: string[];
        })[];
    };
};
export default _default;
//# sourceMappingURL=index.d.ts.map