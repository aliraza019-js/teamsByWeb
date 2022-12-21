<template lang="pug">
v-layout
  h2 team list component
</template>

<script setup>
const props = defineProps(['team'])
console.log('team', props.team)
</script>

<style lang="scss" scoped>

</style>