<template lang="pug">
v-card(class="d-flex flex-row" width="100%" height="100%" elevation="3" style="align-items:center;")
  v-col(style="max-width:65px; padding:2px;")
    v-avatar(size=56 )
      img(class="profilePic" src="./profile_pic_default.png" alt="Avatar")
  v-col()
    v-row()
      div(class="text-caption" style="font") {{ props.person.title }}
    v-row()
      h4 {{props.person.name}}
</template>

<script setup>
const props = defineProps(['person'])
console.log('person', props.person)
</script>

<style lang="scss" scoped>

  .profilePic{
    max-width: 60px;
    max-height: 60px;  
  }
  
</style>