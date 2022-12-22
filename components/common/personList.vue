<template lang="pug">
v-layout
  v-card(class='mt-4 mb-4 ml-4 mr-4 elevation-2 outlined mx-auto d-flex align-center' width="330" height="72")
   v-row()  
    v-col(class='ml-2' cols="3")  
      v-img(class="profilePic" src="../img/profile_pic_default.png" alt="Avatar")
    v-col(align-self="left") 
      div(class="title" ) {{ person.title }}
      div(class="name") {{ person.name  }}
</template>

<script setup>
const props = defineProps(['person'])
console.log('person', props.person)
</script>

<style lang="scss" scoped>
  .profilePic{
    max-width: 56px;
    max-height: 56px;
    border-radius: 50%;
  }
</style>