<template lang="pug">
v-container
  v-row(class="mb-3")
    v-col(cols="12" sm="4" v-for="(project, index) in projects" :key="index")
      CommonProjectList(:project="project")
</template>

<script setup>
import {projects} from "@/@fakeDb/database.json";
// page
definePageMeta({
  activeRoute: 'project'
})

// data
const localePath = useLocalePath();
</script>