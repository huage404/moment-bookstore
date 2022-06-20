import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 配置 vant 按需加载
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

// 给 setup 语法糖设置 name
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueSetupExtend(),
    Components({
      resolvers: [VantResolver()]
    })
  ]
})
