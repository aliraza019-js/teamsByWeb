<template lang="pug">
v-layout
  v-card.card.ma-4.elevation-2.d-flex.stretch 
    v-card.ml-3.stretch.elevation-0
      div.place.mt-3
      | {{ org.place }}
      p.orgName
        | {{ org.name }}
    v-card.d-flex.align-self-center.stretch.justify-end.elevation-0
      v-img(:src = "org.imgUrl").img.mr-5
</template>

<script setup>
const props = defineProps(['org'])
</script>

<style lang="scss" scoped>

.place {
  font: normal normal normal 12px/16px Nunito;
  color: #1C1C1C;
  opacity: 1;
}

.orgName {
  font: normal normal bold 16px/22px Nunito;
  letter-spacing: 0px;
  color: #0966CB;
  opacity: 1;
}

.card {
  min-height: 72px;
}

.img {
  max-width:52px;
  border: 1px solid #E1E1E1;
}
</style>