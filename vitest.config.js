import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
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
