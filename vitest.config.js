import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    // https://vitest.dev/config/#environment
    environment: 'jsdom',
    // https://stackoverflow.com/questions/77611978/invalid-chai-property-in-vitest
    setupFiles: ['./setupTests.js'],
  },
});
