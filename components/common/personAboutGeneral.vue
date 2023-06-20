<template lang="pug">
CommonCard
  template(#title)
    span(class="text-secondary d-flex align-center") {{$t('personAbout.about') + " " + about.familyName}}
  template(#body)
    p(class="px-0 pt-5 font-weight-medium text-subtitle-1") {{$t('personAbout.title')}}
    p(class="text-h6 font-weight-bold") {{about.title}}
    p(class="description pt-3 text-body-1 font-weight-medium text-green") {{$t('personAbout.description')}}
    p(class="pt-2 text-justify") {{ about.desc }}
</template>

<script setup>
const props = defineProps(['about'])

</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css?family=Nunito');

.blueH {
  text-align: left;
  font: normal normal bold 20px/27px Nunito;
  letter-spacing: 0.5px;
  color: #0965CB;
  opacity: 1;
}

.title {
  text-align: left;
  font: normal normal normal 16px/22px Nunito;
  letter-spacing: 0.4px;
  color: #1C1C1C;
  opacity: 1;
}

.title2 {
  text-align: left;
  font: normal normal bold 20px/27px Nunito;
  letter-spacing: 0.5px;
  color: #1C1C1C;
  opacity: 1;
}

.text {
  text-align: left;
  font: normal normal normal 16px/22px Nunito;
  letter-spacing: 0.4px;
  color: #1C1C1C;
  opacity: 1;
}

.blueDes {
  text-align: left;
  font: normal normal normal 16px/22px Nunito;
  letter-spacing: 0.4px;
  color: primaryTextPale;
  opacity: 1;
}

.small-box {
  background: primaryTextPale 0% 0% no-repeat padding-box;
  border-radius: 0px 4px 4px 0px;
  opacity: 1;
  top: 293px;
  left: 620px;
  width: 10px;
  height: 48px;
}


</style>