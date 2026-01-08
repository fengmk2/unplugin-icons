import type { UserConfig } from '@voidzero-dev/vite-plus'
import Icons from 'unplugin-icons/vite'

const config: UserConfig = {
  plugins: [
    Icons({
      compiler: 'raw',
    }),
  ],
}

export default config
