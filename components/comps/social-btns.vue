<template lang="pug">
.d-flex.flex-column.align-center.justify-center.pa-8.shadow.rounded
  v-btn.bg-google.mb-3.social-btn(rounded prepend-icon="mdi-google")
    span {{ $t('login.signInWithGoogle') }}
  v-btn.bg-facebook.mb-3.text-white.social-btn(rounded prepend-icon="mdi-facebook" @click="signinFb()")
    span {{ $t('login.signInWithFacebook') }}
  v-btn.bg-apple.mb-3.text-white.social-btn(rounded prepend-icon="mdi-apple")
    span {{ $t('login.signInWithApple') }}
</template>

<script setup>
// imports

// data

// methods
const signinFb = async () => {
  console.log('sign in with facebook')
  const res = await fbSignInWithFb()
  console.log('and?', res)
}

// hooks
</script>

<style lang="scss" scoped>
.social-btn {
  width: 100%;
  max-width: 300px;
}
</style>