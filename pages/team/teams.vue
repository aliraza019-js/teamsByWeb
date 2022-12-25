<template lang="pug">
v-container
  CommonTeamList(v-for="(team, index) in teams" :key="index" :team="team")
  v-btn(nuxt :to="localePath('/d/team/123')") detail page
</template>

<script setup>
const teams = [
  { name: 'Amy Lee', title: 'title 1', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker379473135243521174_lHzLHNBAa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670403726734' },
  { name: 'Frank Werner', title: 'title 2', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker379473135243521174_lHzLHNBAa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670403726734' },
  { name: 'Flo Eutert', title: 'title 3', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker379473135243521174_lHzLHNBAa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670403726734' },
  { name: 'Anne Winkler', title: 'title 4', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker379473135243521174_lHzLHNBAa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670403726734' },
  { name: 'Danny Crane', title: 'title 5', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker379473135243521174_lHzLHNBAa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670403726734' }
]
</script>

<style lang="scss" scoped>

</style>