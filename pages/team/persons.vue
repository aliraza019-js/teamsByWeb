<template lang="pug">
v-container
  v-row
    v-col(cols="12" sm="4" v-for="(person, index) in persons" :key="index")
      CommonPersonList(:person="person")
  v-btn(nuxt :to="localePath('/d/team/person/123')") detail page
</template>

<script setup>
definePageMeta({
  activeRoute: 'team'
})
const persons = [
  { name: 'testname', title: 'testtitle', imgUrl: 'whatever' },
  { name: 'testname', title: 'testtitle', imgUrl: 'whatever' },
  { name: 'testname', title: 'testtitle', imgUrl: 'whatever' },
  { name: 'testname', title: 'testtitle', imgUrl: 'whatever' }
]
</script>

<style lang="scss" scoped>

</style>