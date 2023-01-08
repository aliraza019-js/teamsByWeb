<template lang="pug">
v-container
  .d-flex.align-center.justify-center
    v-card.l-card.rounded-xl.mt-5.pa-10(flat width="100%" max-width="560px")
      v-card-title.text-center.pt-10
        span.text-h4 {{ $t('password.restorePassword') }}
      v-card-text.align-center.justify-center.text-center
        p {{ $t('password.enterEmail') }}
        ClientOnly
          FormsPassword
</template>

<script setup>
import { useUsersStore } from '~~/stores/users';

definePageMeta({
  layout: 'login'
})
</script>

<style lang="scss" scoped>
.l-card {
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.09);
  border: 1px solid rgb(204, 204, 204);
}
</style>