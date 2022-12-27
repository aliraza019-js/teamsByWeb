<template lang="pug">
v-container
  CommonPersonList(v-for="person in persons" :person="person" style="display:inline-block")
  v-btn(nuxt :to="localePath('/d/team/person/123')") detail page
</template>

<script setup>
const persons = [
  { name: 'Amy Lee', title: 'Senior Project Manager', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker379473135243521174_lHzLHNBAa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670403726734' },
  { name: 'Frank Werner', title: 'Dynamic Optimatization Manager', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker379473135243521174_lHzLHNBAa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670403726734' },
  { name: 'Flo Eutert', title: 'Chief Mobility Strategist', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker379473135243521174_lHzLHNBAa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670403726734' },
  { name: 'Anne Winkler', title: 'Teamlead | CPM', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker379473135243521174_lHzLHNBAa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670403726734' },
  { name: 'Danny Crane', title: 'Global Communications Supervisor', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker379473135243521174_lHzLHNBAa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670403726734' },
  { name: 'Amy Lee', title: 'Senior Project Manager', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker379473135243521174_lHzLHNBAa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670403726734' },
  { name: 'Frank Werner', title: 'Dynamic Optimatization Manager', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker379473135243521174_lHzLHNBAa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670403726734' },
  { name: 'Flo Eutert', title: 'Chief Mobility Strategist', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker379473135243521174_lHzLHNBAa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670403726734' },
  { name: 'Anne Winkler', title: 'Teamlead | CPM', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker379473135243521174_lHzLHNBAa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670403726734' },
  { name: 'Danny Crane', title: 'Global Communications Supervisor', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker379473135243521174_lHzLHNBAa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670403726734' },
  { name: 'Amy Lee', title: 'Senior Project Manager', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker379473135243521174_lHzLHNBAa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670403726734' },
  { name: 'Frank Werner', title: 'Dynamic Optimatization Manager', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker379473135243521174_lHzLHNBAa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670403726734' },
  { name: 'Flo Eutert', title: 'Chief Mobility Strategist', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker379473135243521174_lHzLHNBAa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670403726734' },
  { name: 'Anne Winkler', title: 'Teamlead | CPM', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker379473135243521174_lHzLHNBAa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670403726734' },
  { name: 'Danny Crane', title: 'Global Communications Supervisor', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker379473135243521174_lHzLHNBAa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670403726734' },
]
</script>

<style lang="scss" scoped>

</style>