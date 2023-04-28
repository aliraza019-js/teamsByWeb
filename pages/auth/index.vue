<template lang="pug">
div
</template>

<script setup>
const localePath = useLocalePath()
definePageMeta({
  layout: 'login',
  ignoreAuth: true,
})
onMounted(() => {
  navigateTo(localePath('/auth/sign-in'))
})
</script>