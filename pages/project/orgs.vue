<template lang="pug">
v-container
  v-row(class="mb-3")
    v-col(cols="12" sm="4" v-for="(org, index) in orgs" :key="index")
      CommonOrgList(:org="org")
  v-btn(nuxt :to="localePath('/d/project/org/123/general')" color="blue" variant="outlined")
    nuxt-icon.mr-2(name="feather/users")
    span detail page
</template>

<script setup>
import {orgs} from "@/@fakeDb/database.json";
// page
definePageMeta({
  activeRoute: 'project'
});
</script>