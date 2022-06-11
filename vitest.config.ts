import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    /*
      https://vitest.dev/config/#update
      Update snapshot files automatically when running tests. 
      Witouth this, outdated snapshots will become obsolote and
      not be updated.
    */
    update: true,
    /*
      https://vitest.dev/config/#environment
      happy-dom is a "better" alternative to jsdom.
      It's a JavaScript implementation of a web browser without 
      its graphical user interface. It includes many web standards
      from WHATWG DOM and HTML.
    */
    environment: 'happy-dom',
    setupFiles: ['src/__testing__/setup.ts'],
    globals: true,
  },
})
