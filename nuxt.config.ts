// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    runtimeConfig: {
        public: {
            API_URL: process.env.API_URL,
            APP_BASE_URL: process.env.BASE_URL,
            FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
            FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
            FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
            FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
            FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
            FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
            FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID
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
        },
        pageTransition: { name: 'slide-fade', mode: 'out-in' },
        layoutTransition: { name: 'slide-fade', mode: 'out-in' }
    },
    modules: [
        '@nuxtjs/i18n',
        '@nuxtjs/plausible',
        'nuxt-icons',
        '@pinia/nuxt',
    ],
    css: [
        'vuetify/lib/styles/main.sass',
        'mdi/css/materialdesignicons.min.css',
        '@/assets/main.scss',
        '@/assets/comps.scss',
    ],
    build: {
        transpile: ['vuetify'],
    },
    i18n: {
        strategy: 'prefix_except_default',
        langDir: 'locales',
        locales: [
            { code: 'en', iso: 'en-US', file: 'en.json' },
            { code: 'de', iso: 'de-De', file: 'de.json' }
        ],
        lazy: true,
        defaultLocale: 'en',
        baseUrl: process.env.BASE_URL,
        // vueI18n: './i18n.config.ts'
    },
    nitro: {
        logLevel: 1
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/vars.scss" as *;'
                }
            }
        },
    }
})