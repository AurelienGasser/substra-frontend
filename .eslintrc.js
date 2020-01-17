module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "rules": {
        "indent": [0],
        "template-curly-spacing" : [0, "never"],
        "react/destructuring-assignment": [0],
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "react/jsx-filename-extension": [0],
        "react/jsx-closing-tag-location": [0],
        "react/no-unescaped-entities": [0],
        "react/no-danger": [0],
        "react/no-array-index-key": [0],
        "react/sort-comp": [0],
        "import/no-extraneous-dependencies": [0],
        "import/no-dynamic-require": [0],
        "import/extensions": [0],
        "camelcase": [0],
        "one-var": [0],
        "no-nested-ternary": [0],
        "brace-style": [2, 'stroustrup'],
        "no-confusing-arrow": [0],
        "object-property-newline": [2, {"allowMultiplePropertiesPerLine": true}],
        "no-shadow": [0],
        "global-require": [0],
        "no-console": [0, {"allow": ["warn", "error"]}],
        "no-lonely-if": [0],
        "no-restricted-syntax": [0],
        "no-underscore-dangle": [0],
        "import/no-webpack-loader-syntax": [0],
        "import/no-unresolved": [0],
        "import/no-useless-path-segments": [0], // for react-universal-component lazy loading
        "arrow-parens": [2],
        "max-len": [0],
        "no-unused-vars": [2, {"args": "none"}],
        "consistent-return": [0],
        "no-bitwise": [0],
        "function-paren-newline": [0],
        "jsx-a11y/label-has-for": [0],
        "jsx-a11y/href-no-hash": "off",
        "jsx-a11y/anchor-is-valid": ["warn", { "aspects": ["invalidHref"] }],
        "jsx-a11y/click-events-have-key-events": [0],
        "jsx-a11y/no-static-element-interactions": [0],
        "no-multi-assign": [0],
        "no-mixed-operators": [0],
        "prefer-destructuring": [0],

        // helper for fixing common lint errors
        "func-names": [2],
        "import/first": [2],
        "import/newline-after-import": [2],
        "import/no-mutable-exports": [2],
        "import/prefer-default-export": [2],
        "react/forbid-prop-types": [2],
        "react/jsx-closing-bracket-location": [2],
        "react/jsx-no-bind": [2],
        "react/no-string-refs": [2],
        "react/no-unused-prop-types": [2],
        "react/prefer-es6-class": [2],
        "react/prefer-stateless-function": [2],
        "react/prop-types": [2],
        "no-param-reassign": [2],
        "no-undef": [2],

        // babel
        "object-curly-spacing": [0],
        "babel/object-curly-spacing": [2, 'never'],
    },
    "plugins": [
        "babel",
        "react",
        "jsx-a11y",
        "import",
        "jest",
    ],
    "env": {
        "jest/globals": true,
    },
    "overrides": [
        {
            "files": "**/*.spec.js",
            "rules": {
                "no-unused-expressions": [0],
            }
        }
    ]
};
