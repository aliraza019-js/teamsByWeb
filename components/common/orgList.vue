<template lang="pug">
v-card(height="65px" rounded="lg")
  div(class="d-flex w-100 justify-space-between align-center px-4 h-100")
    div(class="d-flex align-start flex-column") 
      div(class="d-flex")
        p(class="place") {{org.city}} | {{org.country}}
      p(class="orgName") {{org.name}}
    div(class="border rounded-lg pa-2")
      v-img(:src="org.imgUrl" width="30")
</template>

<script setup>
const props = defineProps(['org']);
</script>
