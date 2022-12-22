import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createI18n, useI18n } from 'vue-i18n'
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
// import { createI18n, useI18n } from '@nuxtjs/i18n'

import en from '../locales/en.json'
import de from '../locales/de.json'

export default defineNuxtPlugin(nuxtApp => {

    // const i18n = createI18n({
    //     fallbackLocale: 'en',
    //     messages: {
    //         en,
    //         de
    //     }
    // })

    const vuetify = createVuetify({
        // icons: {
        //     defaultSet: 'mdi',
        //     aliases,
        //     sets: {
        //         mdi,
        //     },
        // },
        components,
        directives,
    })

    nuxtApp.vueApp.use(vuetify)
})

// /**
//  * definition of both vuetify and i18n plugins as one needs the other
//  */

// import { createVuetify, ThemeDefinition } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'
// import colors from 'vuetify/lib/util/colors'
// import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
// import { createI18n, useI18n } from 'vue-i18n'
// import en from '../locales/en.json'
// import de from '../locales/de.json'
// import { defineNuxtPlugin } from "#imports";

// export default defineNuxtPlugin(nuxtApp => {

//     const i18n = createI18n({
//         fallbackLocale: 'en',
//         messages: {
//             en,
//             de
//         }
//     })

//     const vuetify = createVuetify({
//         locale: {
//             adapter: createVueI18nAdapter({
//                 i18n,
//                 useI18n
//             })
//         },
//         theme: {
//             defaultTheme: 'light',
//             themes: {
//                 dark: {
//                     dark: true,
//                     colors: {
//                         primary: '#0965CB',
//                         secondary: '#04C785',
//                         info: '#FFDDA9',
//                         accent: colors.amber.darken3,
//                         warning: colors.amber.base,
//                         error: colors.deepOrange.accent4,
//                         success: colors.green.accent3
//                     }
//                 },
//                 light: {
//                     dark: false,
//                     colors: {
//                         primary: '#0965CB',
//                         secondary: '#04C785',
//                         info: '#FFDDA9',
//                         bgDefault: '#ffffff',
//                         bgAccent: '#f2f2f2',
//                         accent: '#279b5e',
//                         error: '#b71c1c',
//                         warning: '#fc7a30',
//                         //info: colors.teal.lighten1,
//                         success: colors.green.accent3,
//                     }
//                 }
//             }
//         },
//         components,
//         directives
//     })

//     nuxtApp.vueApp.use(vuetify)
// })