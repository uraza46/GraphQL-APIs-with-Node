import { FlatCompat } from '@eslint/eslintrc';
import { default as js, default as pluginJs } from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ['**/node_modules', '**/dist', '**/.eslintrc.js', '**/.prettierrc', '**/.env'],
  },
  ...compat.extends('eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      prettier,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      indent: 'off',
      'prefer-rest-params': 'warn',
      'prefer-spread': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-var-requires': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      'prettier/prettier': 'error',
      'no-use-before-define': 'warn',
      'no-console': 'error',
      'object-shorthand': 'error',
      'no-unused-expressions': 'error',
    },
    files: ['**/*.ts', '**/*.js'],
    ignores: ['**/node_modules', '**/dist', '**/eslint.config.mjs', '**/.prettierrc', '**/.env'],
  },
];
