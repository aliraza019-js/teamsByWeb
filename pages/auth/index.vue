<template lang="pug">
div
  p auth page
</template>

<script setup>
definePageMeta({
  layout: 'login'
})

const localePath = useLocalePath()
definePageMeta({
  layout: 'login',
  ignoreAuth: true,
})
onMounted(() => {
  navigateTo(localePath('/auth/sign-in'))
  console.log('mounted')
})
</script>