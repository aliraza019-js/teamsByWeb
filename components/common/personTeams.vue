<template lang="pug">
CommonCard
  template(#title)
    span(class="text-secondary d-flex align-center") Teams
  template(#body)
    v-card-text

      v-row(class="mt-5 mb-5")

        v-col(cols="12" sm="4" v-for="(t, index) in 3" key="index")
          v-card(outlined max-width="400")
            v-row
              v-img(src="/app/img/team_pic_default.png").d-sm-none.d-md-flex.d-lg-none.d-xl-flex
              v-card-text
                v-col
                  div(class="text") CMS for the future
                  div(class="title") AEM Specialists
        
</template>


<script setup>
const props = defineProps(['teams']);
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

.small-box {
  background: primaryTextPale 0% 0% no-repeat padding-box;
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

</style>