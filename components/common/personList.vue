<template lang="pug">
v-card(class='mt-auto mb-5 ml-4 mr-4 elevation-2 outlined mx-auto d-flex fluid' width="29%" height="10%")
  v-row(align="center" justify="center")  
    v-col(align="start" class='ml-2')  
      v-img(class="profilePic" :src="person.imgUrl" alt="Avatar")
    v-col(cols="8") 
      div(class="title" ) {{ person.title }}
      div(class="name") {{ person.name  }}
</template>

<script setup>
const props = defineProps(['person'])
console.log('person', props.person)
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Nunito');
  .title {
    text-align:left;
    vertical-align: text-top;
    font: normal normal normal 12px/16px Nunito;
    letter-spacing: 0px;
    color: #1C1C1C;
    opacity: 1;
  }
  .name {
    text-align:left;
    vertical-align: text-top;
    font: normal normal bold 16px/22px Nunito;
    letter-spacing: 0px;
    color: #1C1C1C;
    opacity: 1;
  }
  .profilePic{
    min-width: 30px;
    min-height: 30px;
    border-radius: 50%;
  }
  
  
</style>