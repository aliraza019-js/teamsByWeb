<template lang="pug">
v-container
  v-card(class="elevation-8")
    v-row.align-center.mt-1
      v-col(class="d-flex align-center")
        div(class="small-box")
        div(class="blueH").ml-6 Teams
    v-card-text
      v-row
        v-col
          v-divider.inline.mr-8
      v-row
        v-card(class="mt-4 mb-4 ml-4 mr-4 mx-auto d-flex" elevation="1")
          v-row
            v-col(col="4")
              v-img(class="pic" src="../../public/img/team_pic_default.png")
            v-col(class="mr-10")
              div(class="text") CMS for the future
              div(class="title") AEM Specialists
        v-card(class="mt-4 mb-4 ml-4 mr-4 mx-auto d-flex" elevation="1")
          v-row
            v-col(col="4")
              v-img(class="pic" src="../../public/img/profile_pic_default.png")
            v-col(class="mr-10")
              div(class="text") Bilanz, GuV, CashFlow
              div(class="title") Finanzplanung
        v-card(class="mt-4 mb-4 ml-4 mr-4 mx-auto d-flex" elevation="1")
          v-row
            v-col(col="4")
              v-img(class="pic" src="../../public/img/profile_pic_default.png")
            v-col(class="mr-10")
              div(class="text") Personal-Steuerung
              div(class="title") HR Managment
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

.title {
  text-align: left;
  font: normal normal bold 16px/22px Nunito;
  letter-spacing: 0px;
  color: #1C1C1C;
  opacity: 1;
}

.text{
  text-align: left;
  font: normal normal normal 12px/16px Nunito;
  letter-spacing: 0px;
  color: #1C1C1C;
  opacity: 1;
}

.pic{
  max-width: 100px;
  max-height: 67px;
  border-radius: 1%;
  }

</style>