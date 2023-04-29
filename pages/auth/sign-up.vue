<template lang="pug">
v-container
  .d-flex.align-center.justify-center
    v-card.l-card.rounded-xl.mt-5.pa-10(flat width="100%" max-width="560px")
      v-card-title.text-center.pt-10
        span.text-h4 {{ $t('signUp.label.login') }}
      v-card-text
        ClientOnly
          FormsAlreadySignedIn(v-if="userState.isLoggedIn")
          forms-sign-up(v-if="!userState.isLoggedIn")

      v-card-text.mt-5(v-if="!userState.isLoggedIn")
        layout-or-divider
        comps-social-btns

      v-card-text.text-center
        nuxt-link(:to="localePath('/auth/sign-in')")
          span {{ $t('signUp.existingAccount1') }} {{ ' ' }}
          span {{ $t('signUp.existingAccount2') }}
</template>

<script setup>
// page
definePageMeta({
  layout: 'login',
  ignoreAuth: true,
})
</script>

<style lang="scss" scoped>
.l-card {
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.09);
  border: 1px solid rgb(204, 204, 204);
}
</style>