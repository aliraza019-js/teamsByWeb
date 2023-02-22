<template lang="pug">
v-layout 
  v-card.card.ma-4.elevation-2.d-flex.stretch
    v-card(min-width=80).d-flex.elevation-0
      v-img(:src="project.imgUrl").img
    v-card.ml-2.stretch.d-flex.elevation-0
      div.title.mt-4
        | {{ project.title }}
        p.orgName
          | {{ project.orgName }}
    v-card(min-width="61").elevation-0.mr-2
     v-card.mt-4
      div.iconCard


</template>

<script setup>
const props = defineProps(['project'])
</script>

<style lang="scss" scoped>

.card {
  height:72px;
}

.border {
  border: #1C1C1C;
}



.img {
  scale: 1.7;
  border: 0px solid white;
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
  border-radius: 4px;
  background-size: 100% 100%;
}

</style>
