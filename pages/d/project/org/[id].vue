<template lang="pug">
CommonCardContainer(:title="title" :tabRoutes="tabRoutes")
  template(#prependTitleAtributes)
    v-btn(icon class="ml-0" to="/project/orgs")
      v-icon mdi-arrow-left
  template(#titleAtributes)
    v-btn(icon)
      v-icon mdi-menu

  v-card-text
    NuxtPage
</template>

<script setup>
import { useCustomerStore } from "~/stores/customers";
definePageMeta({
  activeRoute: 'project'
})

const {getCustomertById} = useCustomerStore()
const route = useRoute();
const title = ref('Customer 1')


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


onMounted(async () => {
  const customer = await getCustomertById(route.params.id)
  console.log(customer)
});
</script>
