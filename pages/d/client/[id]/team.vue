<template lang="pug">
v-container(class="pa-0" style="height: 500px")
  v-row(class="overflow-auto scroll-container")
    v-col(v-if="canShowTeams" class="text-center" cols="12")
      v-img(width="75%" class="mx-auto my-10" style="opacity: 0.5; border-radius: 10px;" src="https://img.team-stage.com/placeholder/new/team1_oVhR_PZdI.webp")
    v-col(cols="12" sm="4" v-for="item , index in teams" :key="index")
      v-card(class="d-flex rounded-l" width="100%" height="70px" elevation="3" style="align-items:center;" :to="localePath(`/d/team/t/${item._id}/about`)")
        v-col(class="imgCol")   
          img(v-if="item.profileImage && item.profileImage.url" :src="item.profileImage.url" class="teamPic")
          img(v-else src="https://img.team-stage.com/placeholder/new/team1_oVhR_PZdI.webp" class="teamPic")
        v-col(class="ml-2")
          v-row() 
            body-2 {{ item.title }}
          v-row()  
            h4 {{ item.name  }}
</template>

<script setup>
import { useUserStore } from "~/stores/user";
import { useProjectStore } from "~/stores/projects";

definePageMeta({
  activeRoute: 'team'
});

const localePath = useLocalePath()
const { user } = useUserStore()
const { getTeamsByClientId } = useProjectStore()
const route = useRoute();
const teams = ref([])
const canShowTeams = ref(false)
const props = defineProps(['clients']);

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
    const teamsData = await getTeamsByClientId(props.clients?._id);
    teams.value = teamsData.data
    if (teams.value?.length) {
      canShowTeams.value = false
    } else {
      canShowTeams.value = true
    }
    // console.log('teams.value', teams.value)
  } catch (error) {
    // console.error('Error fetching teams:', error);
  }
})

</script>

<style lang="scss" scoped> .teamPic {
   width: 100%;
   height: 100%;
 }

 .imgCol {
   padding: 0px;
   height: 100%;
   max-width: 100px;
   min-width: 53px;
 }
</style>