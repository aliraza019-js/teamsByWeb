<template lang="pug">
v-menu(theme="light" location="left")
  template(v-slot:activator="{props}")
    v-btn(icon v-bind="props")
      v-avatar(color="primary")
        v-img(src="https://cdn.vuetifyjs.com/images/john.jpg")

  v-card(min-width="230px")
    v-list
      v-list-item(:to="localePath('/account')")
        template(v-slot:prepend)
          v-icon mdi-arrow-right
        v-list-item-title {{ $t('account.account') }}
      v-list-item(@click="signout()")
        template(v-slot:prepend)
          v-icon mdi-logout-variant
        v-list-item-title {{ $t('navLinks.signout') }}

      v-list-item(@click="toggleTheme()")
        template(v-slot:prepend)
          v-icon mdi-theme-light-dark
        v-list-item-title theme

</template>

<script setup>
import { useTheme } from 'vuetify'
const theme = useTheme()
const localePath = useLocalePath()
const signout = async () => {
  await fbSignOut()
  navigateTo(localePath('/auth'))
}
const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  console.log('toggled theme')
}
</script>