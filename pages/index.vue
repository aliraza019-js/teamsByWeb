<template lang="pug">
v-layout 
  v-container
    v-card(elevation='8')
      v-row.align-center.mt-3
        v-col(lg='6' md='6' sm='6')
          v-row
            v-col.klein(md='1' sm='1')
              .small-box
            v-col.klein2(md='10' sm='10')
              .title.mt-3 Projekt/Agile
        v-col(lg='6' md='6')
          v-row.mr-12
              v-col
                v-icon.icon
                  | mdi-pencil

      v-row
        v-divider.divider.mr-12.ml-12.mb-1
      v-row.align-center
        .ml-1
      ul
        li(v-for="n in 2")
          v-row.d-flex.ml-15.mb-10.mt-10
            v-row
              v-col(cols='3')
                .small-title Agil
                .text Agile Coach
              v-col
                v-icon.star.ml-3.mt-3(v-for="n in 5")
                  | mdi-star
                
              v-col(cols='3')
                .small-title Agil
                .text Agile Coach
              v-col
                v-icon.star.ml-3.mt-3(v-for="n in 5")
                  | mdi-star

  </template>
<script setup>
const props = defineProps({
  'title': String,
  'orgName': String
})

const skills = [
  {name: 'Agile' , title: 'Agile Coach', rating: '1'},
  {name: 'Agile' , title: 'Agile Coach', rating: '1'},
  {name: 'Agile' , title: 'Agile Coach', rating: '1'},
  {name: 'Agile' , title: 'Agile Coach', rating: '1'},
  {name: 'Agile' , title: 'Agile Coach', rating: '1'}
]


console.log('projects', props.project)
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Nunito');

@media (max-width: 600px) {
  .klein {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%;
  }

  .klein2 {
    flex: 0 0 8.3333333333%;
    max-width: 87.33%;
  }
}

.small-title {
  text-align: left;
  font: normal normal normal 12px/16px Nunito;
  letter-spacing: 0.3px;
  color: #1C1C1C;
  opacity: 1;
}

.small-title-left {
  text-align: left;
  font: normal normal normal 16px/22px Nunito;
  letter-spacing: 0.4px;
  color: #1C1C1C;
  opacity: 1;
}

.small-title-right {
  text-align: right;
  font: normal normal normal 16px/22px Nunito;
  letter-spacing: 0.4px;
  color: #1C1C1C;
  opacity: 1;
}



.title {
  text-align: left;
  font: normal normal bold 20px/27px Nunito;
  letter-spacing: 0.5px;
  color: #0965CB;
  opacity: 1;
  width: 138px;
  height: 27px;
}

.small-box {
  background: #06A69D 0% 0% no-repeat padding-box;
  border-radius: 0px 4px 4px 0px;
  opacity: 1;
  top: 293px;
  left: 620px;
  width: 10px;
  height: 48px;
}

.icon {
  float: right;
  width: 18px;
  height: 18px;
  background: linear-gradient(180deg, #04C785 0%, #0966CB 100%) 0% 0% no-repeat padding-box;
}

.divider {
  border: 0.5px solid #707070;
  opacity: 0.23;
}

.bold {
  font: normal normal bold 14px/19px Nunito;
  letter-spacing: 0.35px;
  color: #1C1C1C;
  opacity: 1;
}

.text-box {
  float: left;
  text-align: left;
}

.transparent-box {
  float: right;
  opacity: 1;
  background: transparent linear-gradient(180deg, #04C785 0%, #0966CB 100%) 0% 0% no-repeat padding-box;
}

.text {
  text-align: left;
  font: normal normal bold 16px/22px Nunito;
  letter-spacing: 0.4px;

}

.star{
  color: #06A69D;
  width: 16px;
  height: 15px;
}
</style>