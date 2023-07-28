<template lang="pug">
v-card(class="d-flex flex-row rounded-l" width="100%" height="100%" elevation="3" style="align-items:center;" :to="localePath(`/d/team/person/${person._id}/general`)")  
    v-col(class="imgCol")
      v-avatar(size=56)
        img(:src="person.profileImage.url" class="profilePic") 
    v-col()
      v-row()
        div(class="text-caption") {{ person.title }}
      v-row()
        h4 {{ person.givenName }}
</template>
  
<script setup>
const props = defineProps(['person'])
const localePath = useLocalePath();
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