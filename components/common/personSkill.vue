<template lang="pug">
v-layout
  v-row
    v-container
      v-card(elevation='8')
        v-row.align-center.mt-3
          v-col(lg='6' md='6' sm='6')
            v-row
              v-col(md='1' sm='1')
                .small-box
              v-col(md='10' sm='0')
                .title-skills.mt-3 Projekt/Agile
          v-col(lg='6' md='6')
            v-row.mr-12
              v-col
                v-icon.icon-edit
                  | mdi-pencil
        v-row
          v-divider.divider.mr-12.ml-12.mb-1
        v-row.align-center
          .ml-1
        v-row.d-flex.ml-10.flex-row
          v-row.d-flex.ml-10.mb-10.mt-10.flex-row
            v-col.d-flex.mb-2(md='6' sm='12' v-for="items in skills").flex-sm-row.justify-center
              v-row 
                v-col(cols='6')
                  .small-title {{items.name}}
                  .title-text {{items.title}}
                v-col(cols='6')
                  v-icon.star.ml-2.mt-3(v-for="n in items.rating")
                    | mdi-star
                  v-icon.star.ml-2.mt-3(v-for="n in 5 - items.rating")
                    | mdi-star-outline
                    
</template>
    
<script setup>
const props = defineProps(['skills'])
// console.log('projects', props.project)

const skills = [
  { name: 'Agile1', title: 'Agile Coach', rating: 5 },
  { name: 'Agile2', title: 'Scrum Product Owner (cert.)', rating: 2 },
  { name: 'Agile3', title: 'Scrum Master (cert.)', rating: 4 },
  { name: 'Agile4', title: 'Scaled Scrum(LeSS)', rating: 3 },
  { name: 'Agile5', title: 'Software Quality Manager', rating: 1 },
  { name: 'Agile6', title: 'Software Developer', rating: 5 },
  { name: 'Agile7', title: 'Test Designer', rating: 4 }

]

</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Nunito');

.small-title {
  text-align: left;
  font: normal normal normal 12px/16px Nunito;
  letter-spacing: 0.3px;
  color: #1C1C1C;
  opacity: 1;
}

.title-skills {
  text-align: left;
  font: normal normal bold 20px/27px Nunito;
  letter-spacing: 0.5px;
  color: #0965CB;
  opacity: 1;
  width: 138px;
  height: 27px;
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

.icon-edit {
  float: right;
  width: 18px;
  height: 18px;
  background: -moz-linear-gradient(180deg, #04C785 0%, #0966CB 100%);
  background: -webkit-linear-gradient(180deg, #04C785 0%, #0966CB 100%);
  background: linear-gradient(180deg, #04C785 0%, #0966CB 100%);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.divider {
  border: 0.5px solid #707070;
  opacity: 0.23;
}

.title-text {
  text-align: left;
  font: normal normal bold 16px/22px Nunito;
  letter-spacing: 0.4px;

}

.star {
  color: primaryTextPale;
  width: 16px;
  height: 15px;
}
</style>