<template lang="pug">
v-container
  p person detail
</template>

<script setup>
const route = useRoute()
console.log(route.params.id)
</script>