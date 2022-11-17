import en from "./locales/en.json";
import de from "./locales/de.json";
import {resolve, dirname} from 'node:path'
import {fileURLToPath} from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'


// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    experimental: {
        writeEarlyHints: false,
    },
    vue: {
        config: {
            baseUrl: '/app/'
        }
    },
    runtimeConfig: {
        public: {
            apiURL: process.env.API_URL || 'https://intg.team-stage.com/api'
        }
    },
    router: {
        base: '/app/'
    },
    css: [
        'vuetify/lib/styles/main.sass',
        'mdi/css/materialdesignicons.min.css',
        '@/assets/main.scss'
    ],
    build: {
        transpile: ['vuetify'],
    },
    nitro: {
        preset: 'node-server'
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/vars.scss" as *;'
                }
            }
        },
        plugins: [
            VueI18nVitePlugin({
                include: [
                    resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')
                ]
            })
        ]
    }

})

