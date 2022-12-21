<template lang="pug">
v-layout
  h2 personlist component
</template>

<script setup>
const props = defineProps(['person'])
console.log('person', props.person)
</script>

<style lang="scss" scoped>

</style>