<template lang="pug">
v-card(flat width="100%")
  v-card-text.d-flex.flex-column.align-center.justify-center
    span.text-h5 {{ $t('login.alreadyLoggedIn') }}

  v-card-text
    v-btn.stretch.rounded-xl(:to="localePath('/')" color="secondary")
      v-icon.mr-2 mdi-arrow-right
      span {{ $t('login.goToApp') }}
  v-card-text
    layout-or-divider.mb-2
    v-btn.stretch.rounded-xl(@click="signOut()" color="secondary" variant="outlined") 
      v-icon.mr-2 mdi-logout-variant
      span {{ $t('navLinks.signout') }}
</template>

<script setup>
//methods
const signOut = async () => {
  try {
    await fbSignOut()
  }
  catch (err) {
    console.log('err', err)
  }
}
</script>