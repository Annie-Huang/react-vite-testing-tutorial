import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

// https://stackoverflow.com/questions/73392328/vs-code-showing-eslint-error-but-vitest-is-working-vi-is-not-defined
// seems we should not use 'vite-plugin-eslint' anymore
import vitest from '@vitest/eslint-plugin';

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  // {
  //   files: ['**/*.{test.js,test.jsx}'],
  //   languageOptions: {
  //     ecmaVersion: 2020,
  //     globals: globals.jest,
  //   },
  // },
  {
    files: ['**/*.{test.js,test.jsx}'],
    plugins: {
      vitest,
    },
    languageOptions: {
      globals: {
        ...vitest.environments.env.globals,
        // Doesn't seem to be able to get rid of the "ESLint: 'global' is not defined.(no-undef)" in the UserProfile.test.jsx
        fetch: 'writable',
      },
    },
    rules: {
      ...vitest.configs.recommended.rules,
    },
    // ...vitest.configs.all,
  },
];
