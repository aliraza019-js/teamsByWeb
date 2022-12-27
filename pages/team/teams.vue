<template lang="pug">
v-container
  CommonTeamList(v-for="team in teams" :team="team" style="display:inline-block")
  v-btn(nuxt :to="localePath('/d/team/123')") detail page
</template>

<script setup>
const teams = [
  { name: 'Amy Lee', title: 'title 1', imgUrl: '../../img/team_pic_default.png' },
  { name: 'Frank Werner', title: 'title 2', imgUrl: '../../img/team_pic_default.png' },
  { name: 'Flo Eutert', title: 'title 3', imgUrl: '../../img/team_pic_default.png' },
  { name: 'Anne Winkler', title: 'title 4', imgUrl: '../../img/team_pic_default.png' },
  { name: 'Danny Crane', title: 'title 5', imgUrl: '../../img/team_pic_default.png' }
]
</script>

<style lang="scss" scoped>

</style>