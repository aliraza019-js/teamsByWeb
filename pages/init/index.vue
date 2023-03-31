<template lang="pug">
v-container
  v-layout.d-flex.flex-column.align-center.justify-center
    v-card.shadow.ma-3(min-width="450")
      v-card-text
        p first card

    v-card.shadow.ma-3(min-width="450")
      v-card-text
        p second card
        
</template>

<script setup>
// imports
// page definition
definePageMeta({
  layout: 'init'
})

// data
const msgText = ref('')
const msgType = ref('error')
const msgIsVisible = ref(true)
// methods
// hooks
</script>

<style lang="scss" scoped>
.primary-gradient {
  background-image: linear-gradient($secondary, $primary);
}

.replace {
  position: relative;
  top: 18px;
  right: 33px;
}
</style>