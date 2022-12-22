<template lang="pug">
v-layout
  v-card(class='mt-4 mb-4 ml-4 mr-4 elevation-2 outlined mx-auto d-flex align-center' style='width: 330px; height: 72px;')
   v-row()  
    v-col(class='ml-2' cols="3")  
      v-img(class="profilePic" src="../img/profile_pic_default.png")
    v-col(align-self="left"  ) 
      p(class="title" ) {{ person.title }}
      p(class="name") {{ person.name  }}
</template>

<script setup>
const props = defineProps(['person'])
console.log('person', props.person)
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Nunito');
  .title{
    text-align: left;
    font: normal normal normal 12px/16px Nunito;
    letter-spacing: 0px;
    color: #1C1C1C;
    opacity: 1;
  }
  .name{
    text-align: left;
    font: normal normal bold 16px/22px Nunito;
    letter-spacing: 0px;
    color: #1C1C1C;
    opacity: 1;
  }
  .profilePic{
    max-width: 56px;
    max-height: 56px;
    border-radius: 50%;
  }
</style>