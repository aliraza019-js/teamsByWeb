<template lang="pug">
v-card(height="65px" rounded="lg" :to="localePath(`/d/project/project/${project._id}/general`)")
  div(class="d-flex h-100")
    div(class="rounded-s-lg image h-100" :style="{ width: '34%', backgroundImage: `url(${project && project.profileImage && project.profileImage.url ? project.profileImage.url :  imgIcon})`}")
    div(class="d-flex w-100 px-2 justify-space-between align-center")
      div(class="d-flex flex-column")
        div(class="title") {{project.org && project.org.name }}
        p(class="orgName") {{ project.name && project.name.slice(0, 10) + '...' }}
      div(class="d-flex rounded-lg align-center project-status")
        //- v-icon(:icon="project.status == 'done' ? 'mdi-check-circle' : 'mdi-timer-sand'" size="x-small" style="color: primaryTextPale") 
        v-img(class="pl-2" :src="project.status == 'done' ? done : timer")
        p(class="pl-1 text-capitalize") Project {{project.status ? project.status : 'Excecuting'}}
</template>

<script setup>
import done from '@/assets/icons/project/done.svg';
import timer from '@/assets/icons/project/timer.svg';
defineProps(['project']);
const localePath = useLocalePath();
const imgIcon = ref('https://ik.imagekit.io/teamstage/image_picker7844532559891803069_gd9EOekZJx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1671194068429')

</script>

<style lang="scss" scoped>
.image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.project-status {
  height: 36px;
  width: 63px;

  p {
    width: 44px;
    font-size: 8px;
    font-weight: 300;
  }
}


.title {
  font: normal normal normal 10px/20px Nunito;
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
