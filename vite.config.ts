import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import vue from '@vitejs/plugin-vue';
import * as dotenv from 'dotenv';
import { fileURLToPath, URL } from 'node:url';
import path from 'path';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: process.env.VITE_HOST || 'localhost',
        port: parseInt(process.env.VITE_PORT || '8082', 10),
        // proxy: {
        //     "/socket.io": {
        //         target: process.env.VITE_SOCKET_URL || 'http://localhost:8080',
        //         changeOrigin: true,
        //         secure: false,
        //         ws: true
        //     },
        // },
        // strictPort: true,
        // hmr: {
        //     overlay: false,
        //     clientPort: parseInt(process.env.VITE_PORT || '8082', 10),
        // },
    },
    plugins: [
        tsconfigPaths(),
        vue(),
        eslint(),
        VueI18nPlugin({
            include: path.resolve(__dirname, './src/locales/**'),
            runtimeOnly: false,
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js',
        },
    },
});
