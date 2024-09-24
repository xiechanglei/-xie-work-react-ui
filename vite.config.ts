import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import {glob} from "glob";
import {extname, relative} from 'path'
import {fileURLToPath} from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
    // 转发
    server: {
        proxy: {
            '/font/boxicon': {
                target: 'http://view.jqueryfuns.com/2023/3/6/499645bc04e396f0b7bf573bdbe46f0d/static/font/',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/font\/boxicon/, '')
            }
        }
    },
    plugins: [
        react(),
        dts({
            include: ["lib"],
        })
    ],
    build: {
        copyPublicDir: false,
        outDir: './dist',
        lib: {
            entry: './lib/index.ts',
            name: 'xieReactUi',
            formats: ['es'],
            fileName: (format) => `xie-react-ui.${format}.js`
        },
        rollupOptions: {
            external: ['react', 'react-dom', "react/jsx-runtime", "@emotion/react", "@emotion/styled"],
            input: Object.fromEntries(
                glob.sync('lib/**/*.{ts,tsx}').map(file => [
                    relative('lib', file.slice(0, file.length - extname(file).length)),
                    fileURLToPath(new URL(file, import.meta.url))
                ])
            ),
            output: {
                assetFileNames: 'assets/[name][extname]',
                entryFileNames: '[name].js',
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    "react/jsx-runtime": "jsxRuntime",
                    "@emotion/react": "emotionReact",
                    "@emotion/styled": "emotionStyled"
                }
            }
        }
    }
})
