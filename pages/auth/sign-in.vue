<template lang="pug">
v-container
  .d-flex.align-center.justify-center
    v-card.l-card.mt-5.pa-10(flat width="100%" max-width="560px")
      v-card-title.text-center
        span.text-h4 {{ $t('login.label.login') }}

      v-card-text(v-if="!userState.isLoggedIn")
        ClientOnly
          CompsSocialBtns

      layout-or-divider.my-5
      v-card-text
        ClientOnly
          forms-sign-in(v-if="!userState.isLoggedIn")
          forms-already-signed-in(v-if="userState.isLoggedIn")

      v-card-text.text-center
        nuxt-link(:to="localePath('/auth/sign-up')")
          span {{ $t('login.noAccount1') }} {{ ' ' }}
          span {{ $t('login.noAccount2') }}
</template>

<script setup>
import { useUsersStore } from '~~/stores/users';

definePageMeta({
  layout: 'login',
  ignoreAuth: true,
})

// data
const userState = useUsersStore()
const localePath = useLocalePath()


</script>

<style lang="scss" scoped>
.l-card {
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.09);
  border: 1px solid rgb(204, 204, 204);
}
</style>