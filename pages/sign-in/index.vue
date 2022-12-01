<template>

  <div class="heading text-center mt-10">
    {{ $t('login.label.login') }}
  </div>

  <FormsSignIn/>

  <div class="text-center mt-16">

    <div class="d-inline-block mr-1">
      {{ $t('login.noAccount1') }}
    </div>
    <NuxtLink :to="localePath('/sign-up')" class="d-inline-block text-decoration-underline">
      {{ $t('login.noAccount2') }}
    </NuxtLink>

  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.heading {
  color: #0965CB;
  font-size: 4vh;
}

</style>