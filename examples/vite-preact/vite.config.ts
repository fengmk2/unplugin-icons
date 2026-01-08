import Preact from '@preact/preset-vite'
import { defineConfig } from '@voidzero-dev/vite-plus'
import Icons from 'unplugin-icons/vite'
import Inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Preact(),
    Inspect(),
    Icons({
      compiler: 'jsx',
      jsx: 'preact',
    }),
  ],
})
