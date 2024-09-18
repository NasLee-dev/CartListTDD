import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { UserConfig as VitestUserConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    jsxImportSource: "@emotion/react",
  })],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: './src/setupTests.ts',
  }
}) as UserConfig & VitestUserConfig
