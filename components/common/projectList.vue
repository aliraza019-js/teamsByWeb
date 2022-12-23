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
                | 22 July 2022 - Tenant name
              .title.mt-1
                a(href='###').title Relaunch volkswagen.com
        v-col(lg='6' md='6')
          v-card.grey-box.mr-12(height='48px' width='95px')
            v-row.mt-0
              v-col.ml-1
                v-icon.icon
                  | mdi-check-circle 
              v-col.iconText.mr-3
                p
                  = 'Project Started'
            
      v-row
        v-divider.divider.mt-5.mr-10.ml-10.mb-5
      v-row.align-center
        .ml-10
        v-col.d-flex(lg='2')
          v-img(src='https://ik.imagekit.io/teamstage/image_picker_3125430F-511F-43C9-B086-AB64D48351B8-2200-000002773AA5F329_PAgGU5JhU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669902515925').photo
        v-col(lg='9')
          v-row
            v-col(align='left')
              | time here
            v-col(align='right')
              | catalog 
          v-row.mr-1.ml-1
            | Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
            | Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, 
            | ultricies nec, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
            | Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,.
      v-row
        v-col.d-flex.ml-10.mb-4.mt-2
          v-icon.icon-one-color 
            | mdi-message-reply-text
          p.ml-2
            = '24 comments'
        v-col.d-flex.mb-4.mt-2.mr-12.justify-end
          v-icon.icon-one-color 
            | mdi-thumb-up-outline
          p.ml-2
            ='1.2k likes'  
</template>

<script setup>

const props = defineProps({
  'title': String,
  'orgName': String
})


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
  max-height: 150px;
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
  width: 18px;
  height: 24px;
}
.iconText {
  text-align: left;
  font: normal normal 10px/13px Nunito;
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
