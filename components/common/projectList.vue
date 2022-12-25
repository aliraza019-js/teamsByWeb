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
              .small-title-left
                | {{ project.title }}
              .title.mt-1
                a(href='###').title {{ project.orgName }}
        v-col(lg='6' md='6')
          v-card.grey-box.mr-12(height='48px' width='95px')
            v-row.mt-0
              v-col(cols="3").ml-1
                v-icon.icon.v-icon--size-large
                  | mdi-check-circle
              v-col(cols="8").iconText.mt-0
                | {{ project.status }}
            
      v-row
        v-divider.divider.mt-2.mr-10.ml-10
      v-row.align-center
        .ml-10
        v-col.d-flex(lg='2')
          v-img(:src='project.imgUrl').photo
        v-col(lg='9')
          v-row
            v-col(align='left')
              | {{ project.time }}
            v-col(align='right')
              | {{ project.catalog }}
          v-row.mr-1.ml-1
            | {{ project.intro}}
      v-row
        v-col.d-flex.ml-10.mb-4.mt-1
          v-icon.icon-one-color 
            | mdi-message-reply-text
          p.ml-2
            | {{project.comments}}
            | comments
        v-col.d-flex.mb-4.mt-2.mr-12.justify-end
          v-icon.icon-one-color 
            | mdi-thumb-up-outline
          p.ml-2
            | {{ project.likes}}
            | likes
</template>

<script setup>

const props = defineProps(['project'])
console.log('projects', props.project)
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Nunito');

@media (max-width: 600px){
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
  font: normal normal normal 16px/22px Nunito;
  letter-spacing: 0.4px;
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


.photo {
  max-width: 150px;
  border-radius: 8px;
}
.title {
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

.icon {
  color: transparent;
  background-clip: text;
  background-image:linear-gradient(to bottom, #04C785 0%, #0966CB 100%);
}
.iconText {
  text-align: left;
  font: normal normal 13px Nunito;
}

.icon-one-color{
  color:#04C785;
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
  float:left;
  text-align: left;
}
.grey-box {
  background-color: #1C1C1C15;
  float: right;
  text-align: left;
  font: normal normal normal 13px/15px Nunito;
  letter-spacing: 0.33px;
  color: #1C1C1C;
  opacity: 1;
}
</style>
