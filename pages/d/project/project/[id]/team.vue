<template lang="pug">
v-row
  v-col(cols="12" sm="4" v-for="team , index in teams" :key="index")
    v-card(rounded="lg" class="elevation-4")
      v-card-text(class="d-flex py-1")
        v-avatar(size="60" :image="team.profileImage ? team.profileImage.url : img")
        div(class="d-flex flex-column justify-center w-100 pl-3")
          span(style="width: 139px" class="truncate") {{team.title}}
          p(class="text-body-1") {{team.name}}
</template>
  
<script setup>
import { useTeamsStore } from "~/stores/teams";

// data
const localePath = useLocalePath()

const img = ref('https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80');


const { getTeams, teams } = useTeamsStore()

onMounted(async () => {
  await getTeams()
})

</script>
  
<style lang="scss" scoped></style>