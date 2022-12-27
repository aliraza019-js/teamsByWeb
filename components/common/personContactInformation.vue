<template lang="pug">
v-container
  v-card.elevation-8
    v-row.align-center.mt-1
      v-col(class="d-flex align-center")
        div(class="small-box")
        div(class="blueH").ml-6 Kontakt Informationen
    v-row
      v-col
        v-divider.inset.mr-8
    v-row
      v-col(cols="12" md="6" sm="6")
        v-row
          v-icon(color="#1C1C1C") mdi-phone
          div(class="text ml-5") +49 511 123456-0
        v-row.mt-12
          v-icon(color="#1C1C1C" ) mdi-cellphone
          div(class="text ml-5") +49 172 12345678
      v-col(cols="12" md="6" sm="6")
        v-row
          v-icon(color="#1C1C1C") mdi-email
          div(class="text ml-5") spaus@27apps.com
        v-row.mt-12
          v-icon(color="#1C1C1C") mdi-instagram
          a(href="###" class="text ml-5") @27appsCom

</template>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css?family=Nunito');

.blueH {
  text-align: left;
  font: normal normal bold 20px/27px Nunito;
  letter-spacing: 0.5px;
  color: #0965CB;
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

.text {
  text-align: left;
  font: normal normal bold 16px/22px Nunito;
  letter-spacing: 0.4px;
  color: #1C1C1C;
  opacity: 1;
}

</style>