<template lang="pug">
v-layout
  v-card 
   v-card-subtitle {{team.name}} 
</template>

<script setup>
 const props = defineProps(['team'])

console.log('team', props.team)
</script>

<style lang="scss" scoped>

</style>