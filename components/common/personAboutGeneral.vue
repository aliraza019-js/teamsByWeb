<template lang="pug">
v-container
  v-card(class="elevation-8")
    v-row.align-center.mt-1
      v-col(class="d-flex align-center")
        div(class="small-box")
        div(class="blueH").ml-6 Über Amy
    v-row
      v-col
        v-divider.inline.mr-8
    v-row
      div(class="title") Title
    v-row
      div(class="title2") Senior Project Manager
    v-row
      div(class="blueDes") Description
    v-row
      div(class text) Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget.



</template>

<script>

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
  color: #06A69D;
  opacity: 1;
}

.small-box {
  background: #06A69D 0% 0% no-repeat padding-box;
  border-radius: 0px 4px 4px 0px;
  opacity: 1;
  top: 186px;
  left: 620px;
  width: 10px;
  height: 48px;
}

</style>