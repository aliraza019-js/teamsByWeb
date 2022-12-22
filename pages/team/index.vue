<template lang="pug">
v-container
  v-layout
    v-card()
      v-tabs(v-model="tab")
        v-tab(value="one") Kollegen
        v-tab(value="two") Teams
      v-card-text
        v-window(v-model="tab")
          v-window-item(value="one")  
            CommonPersonList(v-for="person in persons" :person="person" style="display:inline-block")
          v-window-item(value="two")
            CommonTeamList(v-for="team in teams" :team="team" style="display:inline-block")
</template>

<script setup>
definePageMeta({
  name: 'team',
  layout: 'app'
})

// data
const tab = ref(null)
const persons = [
  { name: 'Amy Lee', title: 'title 1', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker379473135243521174_lHzLHNBAa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670403726734' },
  { name: 'Frank Werner', title: 'title 2', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker379473135243521174_lHzLHNBAa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670403726734' },
  { name: 'Flo Eutert', title: 'title 3', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker379473135243521174_lHzLHNBAa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670403726734' },
  { name: 'Anne Winkler', title: 'title 4', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker379473135243521174_lHzLHNBAa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670403726734' },
  { name: 'Danny Crane', title: 'title 5', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker379473135243521174_lHzLHNBAa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670403726734' },
  { name: 'Amy Lee', title: 'title 1', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker379473135243521174_lHzLHNBAa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670403726734' },
  { name: 'Frank Werner', title: 'title 2', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker379473135243521174_lHzLHNBAa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670403726734' },
  { name: 'Flo Eutert', title: 'title 3', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker379473135243521174_lHzLHNBAa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670403726734' },
  { name: 'Anne Winkler', title: 'title 4', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker379473135243521174_lHzLHNBAa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670403726734' },
  { name: 'Danny Crane', title: 'title 5', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker379473135243521174_lHzLHNBAa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670403726734' },
  { name: 'Amy Lee', title: 'title 1', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker379473135243521174_lHzLHNBAa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670403726734' },
  { name: 'Frank Werner', title: 'title 2', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker379473135243521174_lHzLHNBAa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670403726734' },
  { name: 'Flo Eutert', title: 'title 3', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker379473135243521174_lHzLHNBAa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670403726734' },
  { name: 'Anne Winkler', title: 'title 4', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker379473135243521174_lHzLHNBAa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670403726734' },
  { name: 'Danny Crane', title: 'title 5', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker379473135243521174_lHzLHNBAa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670403726734' }
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
@import url('https://fonts.googleapis.com/css?family=Nunito');
:deep(.title) {
    text-align: left;
    font: normal normal normal 12px/16px Nunito;
    letter-spacing: 0px;
    color: #1C1C1C;
    opacity: 1;
}
:deep(.name) {
    text-align: left;
    font: normal normal bold 16px/22px Nunito;
    letter-spacing: 0px;
    color: #1C1C1C;
    opacity: 1;
  }
</style>