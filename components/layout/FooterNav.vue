<template lang="pug">
v-bottom-navigation(rounded="true")
  v-btn(nuxt v-for="(item, index) in shortNav" :key="index" :to="localPath(item.to)")
    icon-feather(:icon="item.icon")
    span.text-caption.align-self-center {{ $t(`navLinks.${item.titleRef}`) }}
</template>

<script setup>
const props = defineProps(['navItems'])
const shortNav = props.navItems.slice(0, 5)
const localPath = useLocalePath()
</script>

<style lang="scss" scoped>

</style>