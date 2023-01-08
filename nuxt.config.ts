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
            apiURL: process.env.VUE_APP_API_URL || 'https://intg.team-stage.com/api',
            firebaseApiKey: process.env.VUE_APP_FIREBASE_API_KEY
        }
    },
    app: {
        baseURL: '/app/',
        head: {
            viewport: 'width=device-width, initial-scale=1',
            title: 'TeamStage',
            titleTemplate: '%s - TeamStage',
            meta: [
                { name: 'description', content: 'For consultants only' }
            ],
        }
    },
    modules: [
        '@nuxtjs/i18n',
        '@nuxtjs/plausible',
        'nuxt-icons',
        ['@pinia/nuxt', {
            autoImports: ['defineStore']
        }],
    ],
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
            fallbackLocale: 'de',
            messages: {
                en,
                de
            }
        }
    },
    plausible: {
        trackLocalhost: false,
        autoOutboundTracking: true
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

