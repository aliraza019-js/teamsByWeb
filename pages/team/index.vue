<template lang="pug">
v-container
  v-layout
    v-card
      v-tabs(v-model="tab")
        v-tab(value="one") Kollegen
        v-tab(value="two") Teams
      v-card-text
        v-window(v-model="tab")
          v-window-item(value="one")
            CommonPersonList(v-for="person in persons" :person="person")

          v-window-item(value="two")
            CommonTeamList(v-for="team in teams" :team="team")
</template>

<script setup>
definePageMeta({
  name: 'team',
  layout: 'app'
})

// data
const tab = ref(null)
const persons = [
  { name: 'testname', title: 'testtitle', imgUrl: 'whatever' },
  { name: 'testname', title: 'testtitle', imgUrl: 'whatever' },
  { name: 'testname', title: 'testtitle', imgUrl: 'whatever' },
  { name: 'testname', title: 'testtitle', imgUrl: 'whatever' }
]
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