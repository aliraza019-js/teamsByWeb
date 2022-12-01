<template>

  <div class="heading text-center mt-10">
    {{ $t('signUp.label.login')}}
  </div>

  <FormsSignUp/>

  <div class="text-center mt-16">

    <div class="d-inline-block mr-1">
      {{ $t('signUp.existingAccount1')}}
    </div>
    <NuxtLink :to="localePath('/sign-in')" class="d-inline-block text-decoration-underline">
      {{ $t('signUp.existingAccount2')}}
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