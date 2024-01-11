<template lang="pug">
v-container
  v-row(class="mb-3")
    v-col(cols="12" sm="4" v-for="(org, index) in orgsData" :key="index")
      CommonOrgList(:org="org")
  v-row(class="my-3 d-flex justify-center align-center")
    v-col(cols="12" sm="4" v-if="showLoadMoreButton")
      v-btn(:loading="loading" @click="load") {{ getButtonText }}
</template>

<script setup>
// import {orgs} from "@/@fakeDb/database.json";
import { ref, watch, onMounted, onBeforeUnmount, computed } from 'vue';
import { useCustomerStore } from '~/stores/customers'

// page
definePageMeta({
  activeRoute: 'project'
});

const loading = ref(false);
const showLoadMoreButton = ref(false);

const initialLimit = ref(20);
const subsequentLimit = ref(10);
const skip = ref(0);
const orgsData = ref([]);

const { getCustomers, customers } = useCustomerStore()

function load() {
  loading.value = true;
  setTimeout(async () => {
    // Fetch next 10 records, skipping the last 20 records
    await getCustomers(subsequentLimit.value, skip.value + initialLimit.value);
    const newOrgs = customers.value.data.slice(-subsequentLimit.value);
    orgsData.value = orgsData.value.concat(newOrgs);
    loading.value = false;
    skip.value += subsequentLimit.value;
  }, 1000);
}



watch(
  () => customers.value.data ?? [],
  (newData, oldData) => {
    if (newData && newData.length !== oldData.length) {
      if (newData.length >= 10 && customers.value.count >= customers.value.limit) {
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
  await getCustomers(initialLimit.value, skip.value)
  orgsData.value = customers.value.data;
  showLoadMoreButton.value = customers.value.data && customers.value.data.length >= 10 ? true : false;
})



</script>