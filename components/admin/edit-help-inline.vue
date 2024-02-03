<template lang="pug">
v-card(flat)
  v-card-text.pt-15
    ts-editor.pa-2.elevated-4.rounded(v-model="formData.contentDe" transition="scale-transition")
</template>

<script setup>
// imports

// data

// form
const formData = ref({})

// methods

// hooks
</script>