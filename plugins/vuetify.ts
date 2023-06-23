import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        icons: {
            defaultSet: 'mdi',
            aliases,
            sets: { mdi }
        },
        theme: {
            defaultTheme: 'light',
            themes: {
                dark: {
                    dark: true,
                    colors: {
                        background: '#2C2C2C',
                        surface: '#3C3C3C',
                        primaryText: '#ffffff',
                        primaryTextPale: '#ffffff',
                        primary: '#021328',
                        secondary: '#0D6EFD',
                        accent: '#02FE5D',
                        green: '#06A69D',
                        info: '#FFDDA9',
                        error: '#b71c1c',
                        warning: '#fc7a30',
                        cardBorder: '#3C3C3C',
                        greenSecondary: "#04C785",
                        lightBlue: '#e4edf8'
                        // success: colors.green.accent3
                    }
                },
                light: {
                    dark: false,
                    colors: {
                        background: '#FFFFFF',
                        surface: '#FFFFFF',
                        primaryText: '#1C1C1C',
                        primaryTextPale: '#06A69D',
                        primary: '#021328',
                        secondary: '#0D6EFD',
                        accent: '#02FE5D',
                        green: '#06A69D',
                        info: '#FFDDA9',
                        error: '#b71c1c',
                        warning: '#fc7a30',
                        bgAccent: '#f2f2f2',
                        cardBorder: '#e2e2e2',
                        greenSecondary: "#04C785",
                        lightBlue: '#e4edf8'
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
