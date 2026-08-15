import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import eslintPluginAstro from 'eslint-plugin-astro';
import globals from 'globals';

export default [
  {
    ignores: ['dist/', '.astro/', 'node_modules/'],
  },

  js.configs.recommended,
  prettierConfig,
  ...eslintPluginAstro.configs.recommended,

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        Swiper: 'readonly',
        dataLayer: 'writable',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
];
