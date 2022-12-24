<template lang="pug">
v-container
  p team detail
</template>

<script setup>
const route = useRoute()
console.log(route.params.id)
</script>