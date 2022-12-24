<template lang="pug">
v-container
  p project detail
</template>

<script setup>
const route = useRoute()
console.log(route.params.id)
</script>