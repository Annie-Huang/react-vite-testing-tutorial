import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  // https://stackoverflow.com/questions/70519656/referenceerror-react-is-not-defined-migrating-from-cra-to-vite-and-nx
  plugins: [eslint(), react()],
  test: {
    // https://vitest.dev/config/#environment
    environment: 'jsdom',
    // https://stackoverflow.com/questions/77611978/invalid-chai-property-in-vitest
    setupFiles: ['./setupTests.js'],
    // https://stackoverflow.com/questions/75971024/describe-is-not-defined-in-vitest
    // https://vitest.dev/config/#globals
    // Otherwise, you will keep getting 'ReferenceError: expect is not defined' error
    globals: true,
  },
});
