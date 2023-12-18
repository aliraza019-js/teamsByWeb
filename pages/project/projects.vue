<template lang="pug">
v-container
  v-row(class="mb-3")
    v-col(cols="12" sm="4" v-for="(project, index) in projectsData" :key="index")
      CommonProjectList(:project="project")
  v-row(class="my-3 d-flex justify-center align-center")
    v-col(cols="12" sm="4" v-if="showLoadMoreButton")
      v-btn(:loading="loading" @click="load") {{ getButtonText }}
</template>
  
<script setup>
import { ref, watch, onMounted, onBeforeUnmount, computed } from 'vue';
import { useProjectStore } from '~/stores/projects';

// page
definePageMeta({
  activeRoute: 'project',
});

const loading = ref(false);
const showLoadMoreButton = ref(false);

const { getProjects, projects } = useProjectStore();

const initialLimit = ref(20);
const subsequentLimit = ref(10);
const skip = ref(0);
const projectsData = ref([]);

function load() {
  loading.value = true;
  setTimeout(async () => {
    // Fetch next 10 records, skipping the last 20 records
    await getProjects(subsequentLimit.value, skip.value + initialLimit.value);
    const newProjects = projects.value.data.slice(-subsequentLimit.value);
    projectsData.value = projectsData.value.concat(newProjects);
    loading.value = false;
    skip.value += subsequentLimit.value;
  }, 1000);
}

watch(
  () => projects.value.data ?? [],
  (newData, oldData) => {
    if (newData && newData.length !== oldData.length) {
      if (newData.length >= 10 && projects.value.count >= projects.value.limit) {
        showLoadMoreButton.value = true;
      } else {
        showLoadMoreButton.value = false;
      }
    }
  }
);

const getButtonText = computed(() => {
  return skip.value === 0 ? 'Load More' : 'THE NEXT 10';
});

function handleScroll() {
  // console.log('Handling scroll...');
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  const triggerHeight = 100;

  if (scrollPosition >= triggerHeight && !loading.value && showLoadMoreButton.value) {
    load();
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

onMounted(async () => {
  await getProjects(initialLimit.value, skip.value);
  projectsData.value = projects.value.data;
  showLoadMoreButton.value = projects.value.data && projects.value.data.length >= 10 ? true : false;
});

const localePath = useLocalePath();
</script>
  