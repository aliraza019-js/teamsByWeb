<template lang="pug">
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
})
</script>