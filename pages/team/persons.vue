<template lang="pug">
v-container
  CommonPersonList(v-for="(person, index) in persons" :key="index" :person="person")
  v-btn(nuxt :to="localePath('/d/team/person/123')") detail page
</template>

<script setup>
const persons = [
  { name: 'testname', title: 'testtitle', imgUrl: 'whatever' },
  { name: 'testname', title: 'testtitle', imgUrl: 'whatever' },
  { name: 'testname', title: 'testtitle', imgUrl: 'whatever' },
  { name: 'testname', title: 'testtitle', imgUrl: 'whatever' }
]
</script>

<style lang="scss" scoped>

</style>