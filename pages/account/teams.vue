<template lang="pug">
v-container
  div(v-for="team in teams" :key="team._id")
    v-card(class="rounded-lg")
      v-row(class="rounded-xl" justify="space-between")
        v-col(cols="12" sm="4" class="d-flex rounded-xl")
          div(class="d-flex w-100 align-center justify-space-between rounded-lg")
            div(class="rounded-s-lg company" :style="{height: '65px', width: '47%', backgroundImage: `url(${companyImg})`}")
            p(class="font-weight-bold mx-2") {{team.clientName}}
            v-icon(icon="mdi-plus")
        v-col(cols="12" sm="4" class="d-flex align-center justify-end")
          div(class="d-flex w-100 pr-2 align-center justify-space-between rounded-lg")
            v-icon(icon="mdi-web")
            p(class="font-weight-bold mx-2") computacenter.com
            v-icon(icon="mdi-arrow-right")
    v-row(class="mt-3")
      v-col(cols="12" sm="4" v-for="(item ,index) in team.teams" :key="index")
        v-card(height="65px" rounded="lg")
          div(class="d-flex h-100 align-center")
            div(class="rounded-s-lg company h-100" :style="{ width: '41%', backgroundImage: `url(${item.img})`}")
            p(class="font-weight-bold mx-2") {{item.text}}
</template>

<script setup>
definePageMeta({
  activeRoute: 'account'
});

import {useUserTeamStore} from "~/stores/user-teams";

const {getUserTeams} =useUserTeamStore()
const companyImg = 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80';

const teams = ref({});

const fetchUserTeams = async  ()=>{
const response = await getUserTeams()
    console.log(response)
  teams.value = response
}

onMounted(() => {
    fetchUserTeams()
})
</script>

<style lang="scss" scoped>
.company {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

</style>