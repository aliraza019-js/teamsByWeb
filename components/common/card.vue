<template lang="pug">
v-card(:color="color" class="rounded-lg elevation-4 relative py-3 px-6 mb-3" :loading="loading")
  v-card-title(class="align-center d-flex justify-space-between px-0 font-weight-bold")
    div(class="left-rounded position-absolute rounded-lg")
    slot(name="title")
  v-card-text(class="px-0")
    slot(name="subtitle")
    slot(name="body")
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: undefined
  },
  loading: {
    type: Boolean,
    default: false
  }
});
</script>

<style lang="scss" scoped>
.v-card-title {
  border-bottom: 1px solid #E2E2E2;
}


.left-rounded {
  background: $text-link;
  width: 30px;
  height: 48px;
  left: -17px;
}
</style>