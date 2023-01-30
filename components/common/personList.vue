<template lang="pug">
v-card(class="" width="100%" height="100%" elevation="3")
  v-row()
    v-col(cols="auto")
      img(class="profilePic" src="./profile_pic_default.png" alt="non found" )
    v-col()
      div(class="title") {{ props.person.title }}
      div(class="name") {{props.person.name}}
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
    max-width: 60px;
    max-height: 60px;
    border-radius: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
  }
 
  
</style>