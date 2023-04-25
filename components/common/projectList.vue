<template lang="pug">
v-card(height="65px" rounded="lg")
  div(class="d-flex h-100")
    div(class="rounded-s-lg image h-100" :style="{ width: '34%', backgroundImage: `url(${project.imgUrl})`}")
    div(class="d-flex w-100 px-2 justify-space-between align-center")
      div(class="d-flex flex-column")
        div(class="title") {{ project.title }}
        p(class="orgName") {{ project.orgName }}
      div(class="d-flex rounded-lg align-center project-status")
        v-icon(:icon="project.status == 'done' ? 'mdi-check-circle' : 'mdi-timer-sand'" size="small" style="color: #06A69D") 
        p(class="pl-1 text-capitalize") Project {{project.status}}
</template>

<script setup>
const props = defineProps(['project']);
</script>

<style lang="scss" scoped>

.image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
}

.project-status {
  height: 36px;
  p {
    width: 51px;
    font-size: 9px;
  }
}


.title {
  font: normal normal normal 12px/16px Nunito;
  letter-spacing: 0px;
  color: #1C1C1C;
  opacity: 1;
}

.orgName {
  font: normal normal bold 12px/20px Nunito;
  letter-spacing: 0px;
  color: #0966CB;
  opacity: 1;
}

</style>
