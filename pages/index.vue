<template lang="pug">
v-container.d-flex.algin-center.justify-center
  v-card(loading width="100%" max-width="450px")
    v-card-title Init Screen
    v-card-text.d-flex.align-center.justify-center(style="width:100%; height:100%;")
      v-img(src="/app/img/logo_sm.png" contain max-width="350px")
</template>

<script setup>
const localePath = useLocalePath()
// later we check here for user auth state and forward to auth/sign-in or home
// furthermore we can preload certain stuff before forwarding
onMounted(() => {
  setTimeout(() => {
    navigateTo(localePath('/home'))
  }, 2000)

})
</script>