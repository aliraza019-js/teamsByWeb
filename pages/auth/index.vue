<template lang="pug">
h2 auth index
</template>

<script setup>
definePageMeta({
  layout: 'login'
})

const localePath = useLocalePath()
onMounted(() => {
  navigateTo(localePath('/auth/sign-in'))
  console.log('mounted')
})
</script>