import en from "./locales/en.json";
import de from "./locales/de.json";

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
    i18n: {
        locales: [
            {code: 'en', iso: 'en-US'},
            {code: 'de', iso: 'de-DE'}
        ],
        strategy: 'prefix',
        defaultLocale: 'de',
        rootRedirect: {
            statusCode: 301,
            path: 'de'
        },
        vueI18n: {
            legacy: false,
            globalInjection: true,
            locale: 'de',
            fallbackLocale: 'en',
            messages: {
                en,
                de
            }
        }
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
            // VueI18nVitePlugin({
            //     include: [
            //         resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')
            //     ]
            // })
        ]
    }

})

