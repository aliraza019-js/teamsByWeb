import en from "./locales/en.json";
import de from "./locales/de.json";
import pugPlugin from "vite-plugin-pug"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    experimental: {
        writeEarlyHints: false,
    },
    runtimeConfig: {
        public: {
            apiURL: process.env.API_URL || 'https://intg.team-stage.com/api'
        }
    },
    modules: [
        '@nuxtjs/i18n'
    ],
    app: {
        baseURL: '/app/'
    },
    css: [
        'vuetify/lib/styles/main.sass',
        'mdi/css/materialdesignicons.min.css',
        '@/assets/main.scss',
        '@/assets/comps.scss'
    ],
    build: {
        transpile: ['vuetify'],
    },
    i18n: {
        locales: ['en', 'de'],
        defaultLocale: 'en',
        vueI18n: {
            fallbackLocale: 'en',
            messages: {
                en,
                de
            }
        }
    },
    // nitro: {
    //     preset: 'node-server'
    // },
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
            pugPlugin(),
            // VueI18nVitePlugin({
            //     include: [
            //         resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')
            //     ]
            // })
        ]
    }

})

