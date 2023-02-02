<template lang="pug">
v-card(class="d-flex flex-row rounded-l" width="100%" height="100%" elevation="3" style="align-items:center;")
  v-col(class="imgCol")
    v-avatar(size=56)
      img(:src="person.imgUrl" class="profilePic") 
  v-col()
    v-row()
      div(class="text-caption") {{ person.title }}
    v-row()
      h4 {{ person.name }}
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
    
  .imgCol{
    max-width:65px; 
    margin-top:1px;
    margin-bottom:1px;
    margin-left:2px;
    padding:0;
  }
</style>