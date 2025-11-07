import babelParser from "@babel/eslint-parser";
import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import reactPlugin from "eslint-plugin-react";

export default [
    {
        ignores: ["node_modules/", "public/", "vendor/", "build/", "dist/"],
    },
    js.configs.recommended,
    {
        files: ["**/*.jsx"],
        languageOptions: {
            parser: babelParser,
            parserOptions: {
                requireConfigFile: false,
                babelOptions: {
                    presets: ["@babel/preset-react"],
                },
            },
            ecmaVersion: 2020,
            sourceType: "module",
            globals: {
                window: "readonly",
                document: "readonly",
                navigator: "readonly",
                console: "readonly",
                route: "readonly",
            },
        },
        plugins: {
            import: importPlugin,
            react: reactPlugin,
        },
        rules: {
            "react/jsx-uses-vars": "error",
            "react/jsx-uses-react": "error",
            "import/order": [
                "error",
                {
                    groups: [
                        "builtin",
                        "external",
                        "internal",
                        "parent",
                        "sibling",
                        "index",
                    ],
                    pathGroups: [
                        {
                            pattern: "@/**",
                            group: "internal",
                        },
                    ],
                    alphabetize: { order: "asc", caseInsensitive: true },
                },
            ],
        },
        settings: {
            react: {
                version: "detect",
            },
            "import/resolver": {
                alias: {
                    map: [["@", "./resources/js"]],
                    extensions: [".js", ".jsx", ".ts", ".tsx"],
                },
            },
        },
    },
    // TypeScriptファイル用
    {
        files: ["**/*.ts", "**/*.tsx"],
        languageOptions: {
            parser: tsparser,
            parserOptions: {
                project: "./tsconfig.json",
                ecmaFeatures: { jsx: true },
            },
            globals: {
                window: "readonly",
                document: "readonly",
                navigator: "readonly",
                console: "readonly",
            },
        },
        plugins: {
            import: importPlugin,
            "@typescript-eslint": tseslint,
        },
        rules: {
            "import/order": [
                "error",
                {
                    groups: [
                        "builtin",
                        "external",
                        "internal",
                        "parent",
                        "sibling",
                        "index",
                    ],
                    pathGroups: [
                        {
                            pattern: "@/**",
                            group: "internal",
                        },
                    ],
                    alphabetize: { order: "asc", caseInsensitive: true },
                },
            ],
        },
        settings: {
            "import/resolver": {
                alias: {
                    map: [["@", "./resources/js"]],
                    extensions: [".js", ".jsx", ".ts", ".tsx"],
                },
            },
        },
    },
    // JSファイル用
    {
        files: ["**/*.js"],
        languageOptions: {
            globals: {
                window: "readonly",
                document: "readonly",
                navigator: "readonly",
                console: "readonly",
            },
        },
        plugins: {
            import: importPlugin,
        },
        rules: {
            "import/order": [
                "error",
                {
                    groups: [
                        "builtin",
                        "external",
                        "internal",
                        "parent",
                        "sibling",
                        "index",
                    ],
                    pathGroups: [
                        {
                            pattern: "@/**",
                            group: "internal",
                        },
                    ],
                    alphabetize: { order: "asc", caseInsensitive: true },
                },
            ],
        },
        settings: {
            "import/resolver": {
                alias: {
                    map: [["@", "./resources/js"]],
                    extensions: [".js", ".jsx", ".ts", ".tsx"],
                },
            },
        },
    },
];
