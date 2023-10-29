<template lang="pug">
v-container
  v-row(class="mb-3")
    v-col(cols="12" sm="4" v-for="(project, index) in projects" :key="index")
      CommonProjectList(:project="project") asdad
</template>

<script setup>
import {useProjectStore} from '~/stores/projects'

// page
definePageMeta({
  activeRoute: 'project'
});

const {getProjects, projects} = useProjectStore()


onMounted(async () => {
  await getProjects()
})


// data
const localePath = useLocalePath();
</script>