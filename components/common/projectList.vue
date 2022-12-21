<template lang="pug">
v-layout
  h2 project list component
</template>

<script setup>
const props = defineProps(['project'])
console.log('projects', props.project)
</script>

<style lang="scss" scoped>

</style>