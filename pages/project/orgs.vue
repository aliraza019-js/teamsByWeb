<template lang="pug">
v-container
  v-row(class="mb-3")
    v-col(cols="12" sm="4" v-for="(org, index) in orgs" :key="index")
      CommonOrgList(:org="org")
</template>

<script setup>
import {orgs} from "@/@fakeDb/database.json";
// page
definePageMeta({
  activeRoute: 'project'
});
</script>