<template lang="pug">
v-container
  v-row
    v-col(cols="12" sm="4" v-for="(team, index) in teams" :key="index")
      CommonTeamList(:team="team")
  v-row.my-5
    v-divider
    v-btn.mt-5(nuxt :to="localePath('/d/team/123')") detail page
  

      
  
</template>

<script setup>
const teams = [
  { name: 'Amy Lee', title: 'Sales', imgUrl: '../../img/team_pic_default.png' },
  { name: 'Frank Werner', title: 'Design', imgUrl: '../../img/team_pic_default.png' },
  { name: 'Flo Eutert', title: 'Quality Management ', imgUrl: '../../img/team_pic_default.png' },
  { name: 'Anne Winkler', title: 'Development', imgUrl: '../../img/team_pic_default.png' },
  { name: 'Danny Crane', title: 'Testing', imgUrl: '../../img/team_pic_default.png' }
]
</script>

<style lang="scss" scoped>

</style>