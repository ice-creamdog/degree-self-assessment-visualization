//导入defineConfig插件以后,修改此文件就可以有代码提示了
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
//路径处理模块
import * as path from 'path'

export default defineConfig({
  //定义别名
  alias: {
    '@': path.resolve(__dirname, './src'),
    coms: path.resolve(__dirname, './src/components')
  },
  //通过插件形式挂载vue
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ]
})
