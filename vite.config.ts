import { defineConfig } from 'vite'
import path from "path"
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
const pathSrc = path.resolve(__dirname, "./src");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additonalData: `@import "${pathSrc}/scss/mixins";`
  //     }
  //   }
  // }
})
