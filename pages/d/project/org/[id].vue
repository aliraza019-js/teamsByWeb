<template lang="pug">
v-progress-linear( indeterminate v-if="!customer" :size="64")
CommonCardContainer(v-else :title="customer.name" :tabRoutes="tabRoutes")
  template(#prependTitleAtributes)
    v-btn(icon class="ml-0" to="/project/orgs")
      v-icon mdi-arrow-left
  template(#titleAtributes)
    v-btn(icon)
      v-icon mdi-menu

  v-card-text
    NuxtPage(:customer="customer" @refresh="fetchCustomer")
</template>

<script setup>
import { useCustomerStore } from "~/stores/customers";
definePageMeta({
  activeRoute: 'project'
})

const {getCustomertById} = useCustomerStore()
const route = useRoute();
const title = ref('Customer 1')
const customer = ref(null)

const tabRoutes = ref(
  [
    {
      label: "projectdetails.general",
      link: `/d/project/org/${route.params.id}/general`
    },
    {
      label: "projectdetails.teams",
      link: `/d/project/org/${route.params.id}/team`,
    },
    {
      label: "projectdetails.projects",
      link: `/d/project/org/${route.params.id}/project`,
    }
  ]
);
/**
 * Fetches a customer by their ID and updates the customer value.
 *
 * @return {Promise<void>} A promise that resolves once the customer value is updated.
 */
const fetchCustomer= async  ()=>{
  customer.value = await getCustomertById(route.params.id)

}

onMounted(async () => {
  await fetchCustomer()
});
</script>
