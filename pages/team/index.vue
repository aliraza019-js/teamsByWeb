<template lang="pug">
v-card(width="100%" flat)
  v-layout
    v-app-bar(flat color="transparent")
      v-app-bar-title Teams
      v-btn(icon)
        v-icon mdi-menu
    v-main
      v-container
        v-divider.mt--10
        v-card.mt-5(flat)
          v-tabs(v-model="tab" height="35px")
            v-tab(value="one") Kollegen
            v-tab(value="two") Teams

          v-card-text
            v-window(v-model="tab")
              v-window-item(value="one")
                common-person-list(v-for="(person, index) in persons" :key="index" :person="person")

              v-window-item(value="two")
                common-team-list(v-for="(team, index) in teams" :key="index" :team="team")
</template>

<script setup>

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