<template lang="pug">
v-container
  CommonPersonList(v-for="person in persons" :person="person" style="display:inline-block")
  v-btn(nuxt :to="localePath('/d/team/person/123')") detail page
</template>

<script setup>
const persons = [
  { name: 'Amy Lee', title: 'Senior Project Manager', imgUrl: '../../img/profile_pic_default.png' },
  { name: 'Frank Werner', title: 'Dynamic Optimatization Manager', imgUrl: '../../img/profile_pic_default.png' },
  { name: 'Flo Eutert', title: 'Chief Mobility Strategist', imgUrl: '../../img/profile_pic_default.png' },
  { name: 'Anne Winkler', title: 'Teamlead | CPM', imgUrl: '../../img/profile_pic_default.png' },
  { name: 'Danny Crane', title: 'Global Communications Supervisor', imgUrl: '../../img/profile_pic_default.png' },
  { name: 'Amy Lee', title: 'Senior Project Manager', imgUrl: '../../img/profile_pic_default.png' },
  { name: 'Frank Werner', title: 'Dynamic Optimatization Manager', imgUrl: '../../img/profile_pic_default.png' },
  { name: 'Flo Eutert', title: 'Chief Mobility Strategist', imgUrl: '../../img/profile_pic_default.png' },
  { name: 'Anne Winkler', title: 'Teamlead | CPM', imgUrl: '../../img/profile_pic_default.png' },
  { name: 'Danny Crane', title: 'Global Communications Supervisor', imgUrl: '../../img/profile_pic_default.png' },
  { name: 'Amy Lee', title: 'Senior Project Manager', imgUrl: '../../img/profile_pic_default.png' },
  { name: 'Frank Werner', title: 'Dynamic Optimatization Manager', imgUrl: '../../img/profile_pic_default.png' },
  { name: 'Flo Eutert', title: 'Chief Mobility Strategist', imgUrl: '../../img/profile_pic_default.png' },
  { name: 'Anne Winkler', title: 'Teamlead | CPM', imgUrl: '../../img/profile_pic_default.png' },
  { name: 'Danny Crane', title: 'Global Communications Supervisor', imgUrl: '../../img/profile_pic_default.png' },
]
</script>

<style lang="scss" scoped>

</style>