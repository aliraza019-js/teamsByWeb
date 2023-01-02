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
                        background: '#2C2C2C',
                        surface: '#3C3C3C',
                        primaryText: '#ffffff',
                        primary: '#021328',
                        secondary: '#0D6EFD',
                        accent: '#02FE5D',
                        info: '#FFDDA9',
                        error: '#b71c1c',
                        warning: '#fc7a30',
                        cardBorder: '#3C3C3C'
                        // success: colors.green.accent3
                    }
                },
                light: {
                    dark: false,
                    colors: {
                        background: '#FFFFFF',
                        surface: '#FFFFFF',
                        primaryText: '#1C1C1C',
                        primary: '#021328',
                        secondary: '#0D6EFD',
                        accent: '#02FE5D',
                        info: '#FFDDA9',
                        error: '#b71c1c',
                        warning: '#fc7a30',
                        bgAccent: '#f2f2f2',
                        cardBorder: '#e2e2e2'
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
