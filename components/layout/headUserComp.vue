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

</template>

<script setup>
const localePath = useLocalePath()
const signout = async () => {
  try {
    await fbSignOut()
    navigateTo(localePath('/auth'))
  }
  catch (err) {
    console.log('err', err)
  }
}
</script>