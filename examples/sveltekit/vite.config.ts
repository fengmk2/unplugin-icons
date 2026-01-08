import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from '@voidzero-dev/vite-plus'
import Icons from 'unplugin-icons/vite'

export default defineConfig({
  plugins: [
    sveltekit(),
    Icons({
      compiler: 'svelte',
    }),
  ],
})
