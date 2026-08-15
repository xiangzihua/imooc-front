import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { join } from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[name]'
    })
  ],
  resolve: {
    alias: {
      '@': join(__dirname, '/src')
    }
  },
  // 代理
  server: {
    proxy: {
      // 代理所有/api的请求，该请求将被代理到target中
      '/api': {
        target: 'https://api.imooc-front.lgdsunday.club/',
        changeOrigin: true
      }
    }
  }
})
