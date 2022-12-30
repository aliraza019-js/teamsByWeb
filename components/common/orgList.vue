<template lang="pug">
v-layout
  v-card.card.mt-4.mb-4.ml-4.mr-4.elevation-2.d-flex
    v-container
      v-row
        v-col(cols="8" lg="8" xs="8")
          div.place
            | {{ org.place }}
          div.orgName
            | {{ org.name }}
        v-col(cols="3" lg="3" xs="3").ml-5
          v-img(:src='org.imgUrl').img
</template>

<script setup>
const props = defineProps(['org'])
console.log('org', props.org)
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Nunito');

@media only screen and (max-width: 320px) {
  .v-card {
    width: 90%;
  }

  .v-layout {
    width: 100%;
  }
}

.place {
  text-align: left;
  font: normal normal normal 12px/16px Nunito;
  color: #1C1C1C;
  opacity: 1;
}

.orgName {
  text-align: left;
  font: normal normal bold 16px/22px Nunito;
  letter-spacing: 0px;
  color: #0966CB;
  opacity: 1;
}

.card {
  width: 330px;
  height: 72px;
  border-radius: 5px;
}

.img {
  border: 1px solid #E1E1E1;
  margin-top: -10%;
}
</style>