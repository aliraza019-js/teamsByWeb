<template lang="pug">
v-container
  v-row(class="mb-3")
    v-col(cols="12" sm="4" v-for="(project, index) in projects" :key="index")
      CommonProjectList(:project="project")
  v-row(class="my-3 d-flex justify-center align-center")
    v-col(cols="12" sm="4")
      v-btn(v-if="projects.length" :loading="loading" @click="load") {{ getButtonText }}
</template>

<script setup>
import { useProjectStore } from '~/stores/projects'

// page
definePageMeta({
  activeRoute: 'project'
});
const loading = ref(false)

const { getProjects, projects } = useProjectStore()

function load() {
  loading.value = true
  let limit = projects.value.length > 10 ? 10 : 99;
  setTimeout(async () => {
    await getProjects(limit)
    loading.value = false
  }, 1000)
}

const getButtonText = computed(() => {
  return projects.value.length > 10 ? 'Show Less' : 'Show More';
});

onMounted(async () => {
  await getProjects(10)
})

const localePath = useLocalePath();

// data
</script>