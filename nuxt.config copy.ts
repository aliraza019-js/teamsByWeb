// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        API_URL: 'https://test.team-stage.com/api',
        APP_BASE_URL: 'http://localhost:3000',
        FIREBASE_API_KEY: 'AIzaSyAUQtH-du-W8We3I1LvN6e0HTOXh-D-OdI',
        FIREBASE_AUTH_DOMAIN: 'teamstage-dev.firebaseapp.com',
        FIREBASE_PROJECT_ID: 'teamstage-dev',
        FIREBASE_STORAGE_BUCKET: 'teamstage-dev.appspot.com',
        FIREBASE_MESSAGING_SENDER_ID: '1074253651684',
        FIREBASE_APP_ID: '1:1074253651684:web:2247589de48557762c96f1',
        FIREBASE_MEASUREMENT_ID: 'G-MBMW935BYG',
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
        '@/assets/comps.scss'
    ],
    build: {
        transpile: ['vuetify', '@vuepic/vue-datepicker'],

    },
    i18n: {
        strategy: 'prefix_except_default',
        langDir: 'lang',
        locales: [
            { code: 'en', iso: 'en-US', file: 'en.json' },
            { code: 'de', iso: 'de-De', file: 'de.json' }
        ],
        lazy: true,
        defaultLocale: 'en',
        //baseUrl: process.env.BASE_URL,
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
