<template lang="pug">
v-card(class="" width="100%" height="100%" elevation="3")
  v-row(align="center" justify="left")
    v-col(cols="auto")
      v-avatar(size="60")
        img(class="profilePic" src="./profile_pic_default.png" alt="non found" )
    v-col()
      div(class="text-caption") {{ props.person.title }}
      h4 {{props.person.name}}
</template>

<script setup>
const props = defineProps(['person'])
console.log('person', props.person)
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Nunito');
  .profilePic{
    max-width: 60px;
    max-height: 60px;  
  }
 
  
</style>