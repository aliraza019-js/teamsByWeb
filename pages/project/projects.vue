<template lang="pug">
v-container
  v-row(class="mb-3")
    v-col(cols="12" sm="4" v-for="(project, index) in projects.data" :key="index")
      CommonProjectList(:project="project")
  v-row(class="my-3 d-flex justify-center align-center")
    v-col(cols="12" sm="4" v-if="showLoadMoreButton")
      v-btn(:loading="loading" @click="load") {{ getButtonText }}
</template>

<script setup>
import { watch } from 'vue';
import { useProjectStore } from '~/stores/projects'

// page
definePageMeta({
  activeRoute: 'project'
});

const loading = ref(false)
const showLoadMoreButton = ref(false)

const { getProjects, projects } = useProjectStore()

const limit = ref(10)
const skip = ref(0)

function load() {
  loading.value = true
  // skip.value += limit.value
  limit.value += 10
  setTimeout(async () => {
    await getProjects(limit.value, skip.value)
    loading.value = false
  }, 1000)
}

watch(() => projects.value.data ?? [], (newData, oldData) => {
  if (newData && newData.length !== oldData.length) {
    if (newData.length >= 10 && projects.value.count >= projects.value.limit) {
      showLoadMoreButton.value = true
    } else {
      showLoadMoreButton.value = false
    }
  }
});

const getButtonText = computed(() => {
  return limit.value == 10 ? 'Load More' : 'THE NEXT 10';
});

onMounted(async () => {
  await getProjects(limit.value, skip.value)
  showLoadMoreButton.value = projects.value.data && projects.value.data.length >= 10 ? true : false
})

const localePath = useLocalePath();
</script>
