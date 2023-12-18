<template lang="pug">
v-container(class="pa-0" style="height: 500px")
  v-row(class="overflow-auto scroll-container")
    v-col(cols="12" sm="4" v-for="item , index in teams" :key="index")
      v-card(rounded="lg" class="elevation-4")
        v-card-text(class="d-flex py-1")
          v-avatar(size="60" :image="item.profileImage ? item.profileImage.url : img")
          div(class="d-flex flex-column justify-center w-100 pl-3")
            span(style="width: 139px" class="truncate") Senior Project manager
            p(class="font-weight-bold text-body-1") {{item.name}}
</template>

<script setup>
import { useProjectStore } from "~/stores/projects";

definePageMeta({
  activeRoute: 'project'
});

const { getTeamsByClientId } = useProjectStore()
const route = useRoute();
const teams = ref([])
const props = defineProps(['customer']);

const img = ref('https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80');
const items = ref(
  [
    {
      title: 'Senior Projekt Manager',
      name: 'Amy Lee'
    },
    {
      title: 'Dynamic Optimization Administrator',
      name: 'Amy Lee'
    },
    {
      title: 'Dynamic Optimization Administrator',
      name: 'Adaline Bins'
    },
    {
      title: 'Teamlead | CPM',
      name: 'Florian Eutert'
    }
  ]
);

onMounted(async () => {
  try {
    // console.log('customer customer customer', props.customer[0].clientId)
    const teamsData = await getTeamsByClientId(props.customer[0].clientId);
    teams.value = teamsData.data
    // console.log('teams.value', teams.value)
  } catch (error) {
    // console.error('Error fetching teams:', error);
  }
})

</script>