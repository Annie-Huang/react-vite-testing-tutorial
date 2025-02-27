import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    // https://vitest.dev/config/#environment
    environment: 'jsdom',
  },
});
