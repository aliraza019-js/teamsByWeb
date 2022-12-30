<template lang="pug">
v-layout 
  v-card(width="330px" height="72px").mt-4.mb-4.ml-4.mr-4.elevation-2.d-flex
    v-container 
      v-row(align="center" justify="center")
        v-col(cols="4" lg="3" xs="3")
          v-img(:src='project.imgUrl').img
        v-col
          div.title
            | {{ project.title }}
          div.orgName
            | {{ project.orgName }}
        v-col

</template>

<script setup>

const props = defineProps(['project'])
console.log('projects', props.project)
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Nunito');
@media only screen and (max-width: 600px) {
  .v-card{
  width: 100%;
  height: 100%;
  }
  .v-layout{
  width: 100%;
  }
}

.card {
  border-radius: 5px;
}

.row {
}

.img {
  max-width: 100px;
  max-height: 72px;
  transform: scale(1.5);
}

.title {
  font: normal normal normal 12px/16px Nunito;
  letter-spacing: 0px;
  color: #1C1C1C;
  opacity: 1;
}

.orgName {
  font: normal normal bold 16px/22px Nunito;
  letter-spacing: 0px;
  color: #0966CB;
  opacity: 1;
}

.iconCard {
  width:61px;
  background: #1C1C1C 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
}


</style>
