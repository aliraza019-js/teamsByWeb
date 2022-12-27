<template lang="pug">
v-layout
  v-card(class='mt-4 mb-4 ml-4 mr-4 elevation-2 outlined mx-auto d-flex' width="330" height="67")
   v-row(align="center" justify="center")  
    v-col(class='ml-2' cols="3")  
      v-img(class="profilePic" src="../img/profile_pic_default.png" alt="Avatar")
    v-col(align="left") 
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
  @media only screen and (max-width: 600px) {
    .v-card{
    width: 90%;
    }
    .v-layout{
    width: 100%;
    }
  }
</style>