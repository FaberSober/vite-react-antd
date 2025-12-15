import path from 'node:path';
import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, loadEnv } from 'vite';
import Pages from 'vite-plugin-pages';
import UnoCSS from 'unocss/vite'


// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log('loadEnv(mode, process.cwd())', loadEnv(mode, process.cwd()));
  return {
    plugins: [
      UnoCSS(),
      react(),
      Pages({
        exclude: ['**/components/*.tsx', '**/modal/*.tsx'],
      }),
      visualizer({
        open: true, //注意这里要设置为true，否则无效
        gzipSize: true,
        brotliSize: true,
      }),
    ],
    //* css模块化
    css: {
      modules: {
        // css模块化 文件以.module.[css|less|scss]结尾
        // 回调必须返回 `local`，`global`，或者 `pure`
        mode: (resourcePath: string) => {
          // 形如xx.module.scss的样式，会使用local模块化编译。其他的则返回全局样式
          if (/\.module\.(css|scss)$/i.test(resourcePath)) {
            return 'local';
          }
          return 'global';
        },
        generateScopedName: '[name]__[local]___[hash:base64:5]',
        hashPrefix: 'prefix',
      },
    },
    resolve: {
      alias: [
        { find: /^~@/, replacement: path.resolve(__dirname, 'src') },
        // { find: /^~/, replacement: '' },
        { find: '@', replacement: path.resolve(__dirname, 'src') },
        // fix less import by: @import ~
        // less import no support webpack alias '~' · Issue #2185 · vitejs/vite
        // { find: /^~antd/, replacement: "antd" },
      ],
    },
    // server: {
    //   open: true,
    //   proxy: {
    //     '/api': {
    //       target: loadEnv(mode, process.cwd()).VITE_APP_BASE_URL,
    //       changeOrigin: true,
    //     },
    //   },
    // },
  };
});
