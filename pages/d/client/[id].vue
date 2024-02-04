<template lang="pug">
v-progress-linear( indeterminate v-if="!clients" :size="64")
CommonCardContainer(v-else :title="clients.name" :tabRoutes="getTabRoutes")
  template(#prependTitleAtributes)
    v-btn(icon class="ml-0" to="/team/teams")
      v-icon mdi-arrow-left
  template(#titleAtributes)
    v-btn(icon)
      v-icon mdi-menu

  v-card-text
    NuxtPage(:clients="clients" @refresh="fetchClients")
</template>

<script setup>
import { useClientStore } from "~/stores/clients";
definePageMeta({
  activeRoute: 'team'
})

const { getClientById } = useClientStore()
const route = useRoute();
const title = ref('Customer 1')
const clients = ref(null)

const getTabRoutes = computed(() => {
  const baseRoutes = [
    {
      label: "projectdetails.general",
      link: `/d/client/${route.params.id}/general`
    },
    {
      label: "projectdetails.teams",
      link: `/d/client/${route.params.id}/team`,
    },
    {
      label: "projectdetails.skills",
      link: `/d/client/${route.params.id}/skills`,
    },
  ];

  console.log('clients.value', clients.value)
  if (clients.value && clients.value.isAdmin) {
    baseRoutes.push({
      label: "team.payments",
      link: `/d/client/${route.params.id}/payment`,
    });
  }

  return baseRoutes;
});

/**
 * Fetches a customer by their ID and updates the customer value.
 *
 * @return {Promise<void>} A promise that resolves once the customer value is updated.
 */
const fetchClients = async () => {
  clients.value = await getClientById(route.params.id)

}

onMounted(async () => {
  await fetchClients()
});
</script>
