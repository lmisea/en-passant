import react from '@vitejs/plugin-react'
import { URL } from 'node:url'
import { UserConfigExport, defineConfig } from 'vite'

const app = async (): Promise<UserConfigExport> => {
  return defineConfig({
    plugins: [react()],
    assetsInclude: ['/sb-preview/runtime.js'],
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname,
      },
    },
  })
}

export default app
