<template lang="pug">
v-progress-linear( indeterminate v-if="!clients" :size="64")
CommonCardContainer(v-else :title="clients.name" :tabRoutes="getTabRoutes")
  template(#prependTitleAtributes)
    v-btn(icon class="ml-0" :to="previousRouteId ? `/d/team/t/${previousRouteId}/about` : `/team/teams`")
      v-icon mdi-arrow-left
  template(#titleAtributes)
    v-btn(icon)
      v-icon mdi-menu
  v-card-text
    NuxtPage(:clients="clients" @refresh="fetchClients" @previous-route-id="getPreviousRouteId")
</template>

<script setup>
import { useClientStore } from "~/stores/clients";

definePageMeta({
  activeRoute: 'team',
})


const { getClientById } = useClientStore();

// const { getClientById } = useClientStore();
const router = useRouter();
const route = useRoute();
const title = ref('Customer 1');
const clients = ref(null);
const previousRouteId = ref(null);

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

  if (clients.value && clients.value.isAdmin) {
    baseRoutes.push({
      label: "team.payments",
      link: `/d/client/${route.params.id}/payment`,
    });
  }

  return baseRoutes;
});

const getPreviousRouteId = (id) => {
  previousRouteId.value = id;
}

const fetchClients = async () => {
  clients.value = await getClientById(route.params.id);
  const store = useClientStore();

  // Now, you can call the store method
  console.log('route fetchClients in ID', store.getPreviousRouteId());
};


onMounted(async () => {
  await fetchClients();

});
</script>

