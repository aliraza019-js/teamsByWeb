<template lang="pug">
v-menu(theme="light" location="left")
  template(v-slot:activator="{props}")
    v-btn(icon v-bind="props")
      v-avatar(color="primary")
        //- v-img(src="https://cdn.vuetifyjs.com/images/john.jpg")
        v-img(:src="user.profileImage.url + '?tr=h-50,w-50,fo-face'")

  v-card(min-width="230px")
    v-list
      v-list-item(:to="localePath('/account')")
        template(v-slot:prepend)
          v-icon(icon="mdi-arrow-right")
        v-list-item-title {{ $t('account.account') }}
      v-list-item(@click="signOut()")
        template(v-slot:prepend)
          v-icon(icon="mdi-logout-variant")
        v-list-item-title {{ $t('navLinks.signout') }}

      v-list-item(@click="toggleTheme()")
        template(v-slot:prepend)
          v-icon(icon="mdi-theme-light-dark")
        v-list-item-title theme

</template>

<script setup>
// imports
import { useTheme } from 'vuetify'
import { useUserStore } from '~/stores/user'
import { useAuthStore } from '~/stores/auth'

// data
const theme = useTheme()
const { user } = useUserStore()
const { signOut } = useAuthStore()

//methods
const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  console.log('toggled theme')
}
</script>