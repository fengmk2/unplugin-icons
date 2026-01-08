import React from '@vitejs/plugin-react-refresh'
import { defineConfig } from '@voidzero-dev/vite-plus'
import Icons from 'unplugin-icons/vite'
import Inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    React(),
    Icons({
      compiler: 'jsx',
      jsx: 'react',
    }),
    Inspect(),
  ],
})
