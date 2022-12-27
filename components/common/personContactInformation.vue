<template lang="pug">
v-container
  v-card(class="elevation-8")
    v-row.align-center.mt-1
      v-col(class="d-flex align-center")
        div(class="small-box")
        div(class="blueH").ml-6 Kontakt Informationen
    v-row
      v-col
        v-divider.inline.mr-8
    v-row
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

</style>