import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import js from "@eslint/js";

export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"},rules:{...js.configs.recommended.rules,"quotes":["warn","double"],"semi":["warn","always"]}},
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];