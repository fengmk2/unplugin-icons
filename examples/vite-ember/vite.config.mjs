import { ember, extensions } from '@embroider/vite'
import { babel } from '@rollup/plugin-babel'
import { defineConfig } from '@voidzero-dev/vite-plus'
import Icons from 'unplugin-icons/vite'

export default defineConfig({
  plugins: [
    ember(),
    Icons({
      compiler: 'ember',
    }),
    // extra plugins here
    babel({
      babelHelpers: 'runtime',
      extensions,
    }),
  ],
})
