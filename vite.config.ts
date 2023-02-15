import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import vitePluginImp from 'vite-plugin-imp'
// import { createStyleImportPlugin, AntdResolve } from 'vite-plugin-style-import'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        vitePluginImp({
            libList: [
                {
                    libName: "antd",
                    style: (name) => `antd/es/${name}/style`,
                },
            ],
        })
    ],
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
                modifyVars: {},
            },
        }
    },
  resolve:{
    alias:{
      "@":path.resolve(__dirname,'./src')
    }
  }
})
