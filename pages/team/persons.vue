<template lang="pug">
CommonPersonList(v-for="(person, index) in persons" :key="index" :person="person")
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