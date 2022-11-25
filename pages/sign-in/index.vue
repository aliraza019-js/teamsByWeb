<template>

  <div class="heading text-center mt-10">
    Sign In
  </div>

  <FormsSignIn/>

  <div class="text-center mt-16">

    <div class="d-inline-block mr-1">
      Noch keinen Account?
    </div>
    <NuxtLink :to="localePath('/signup')" class="d-inline-block text-decoration-underline">
      Hier registrieren
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