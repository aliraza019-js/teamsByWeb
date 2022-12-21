<template lang="pug">
v-layout
  h2 {{props.org.name}} list component
</template>

<script setup>
const props = defineProps(['org'])
console.log('org', props.org)
</script>

<style lang="scss" scoped>

</style>