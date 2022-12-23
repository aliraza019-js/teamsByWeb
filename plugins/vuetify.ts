import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createI18n, useI18n } from 'vue-i18n'
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'

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
        // locale: {
        //     adapter: createVueI18nAdapter({
        //         i18n,
        //         useI18n
        //     })
        // },
        theme: {
            defaultTheme: 'light',
            themes: {
                dark: {
                    dark: true,
                    colors: {
                        primary: '#021328',
                        secondary: '#0D6EFD',
                        accent: '#02FE5D',
                        info: '#FFDDA9',
                        // warning: colors.amber.base,
                        // error: colors.deepOrange.accent4,
                        // success: colors.green.accent3
                    }
                },
                light: {
                    dark: false,
                    colors: {
                        primary: '#021328',
                        secondary: '#0D6EFD',
                        accent: '#02FE5D',
                        info: '#FFDDA9',
                        bgDefault: '#ffffff',
                        bgAccent: '#f2f2f2',
                        error: '#b71c1c',
                        warning: '#fc7a30',
                        // success: colors.green.accent3,
                    }
                }
            }
        },
        components,
        directives,
    })

    nuxtApp.vueApp.use(vuetify)
})
