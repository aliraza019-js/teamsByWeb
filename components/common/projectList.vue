<template lang="pug">
v-layout
  v-card.card.mt-4.mb-4.ml-4.mr-4.elevation-2.d-flex
    v-container
      v-row.row
        v-col(cols="auto")
          v-img(:src='project.imgUrl').img
        v-col(cols="auto")
          div.title.mt-4
            | {{ project.title }}
          div.orgName
            | {{ project.orgName }}
        v-col(cols="auto")
          div.iconCard.mt-5
</template>

<script setup>

const props = defineProps(['project'])
console.log('projects', props.project)
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Nunito');

@media only screen and (max-width: 320px) {
  .v-card {
    width: 100%;
  }

  .v-layout {
    width: 100%;
  }
}

.card {
  height: 72px;
  width: 330px;
  border-radius: 5px;
}

.border {
  border: #1C1C1C;
}

.row {
  margin-left: -10%;
  margin-top: -10%;
}


.img {
  width: 100px;
  height: 72px;
  transform: scale(1.1);
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
  width: 61px;
  height: 32px;
  background-image: url("/img/icon_project_started.png");
  background-size: 100% 100%;
  border-radius: 4px;
  opacity: 1;
}

.icon {
  width: 62px;
  height: 31px;
  margin-top: -10%;
}
</style>
