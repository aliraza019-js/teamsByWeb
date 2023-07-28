<template lang="pug">
CommonCard
  template(#title)
    span(class="text-secondary d-flex align-center") {{ $t('personContact.title') }}
    v-btn(icon size="small" variant="plain" color="primaryTextPale" @click="dialogAddContact = true") 
     v-icon mdi-pencil
  template(#body)
    v-container
            v-row
                v-col(cols="12" sm="6" )
                  div(v-for="(item, index) in contactInfo.contacts" :key="index" class="d-flex my-4 gap-10 align-items justify-start")
                    v-icon(color="#707070") {{getIcon(item.type)}}
                    p(class="mb-0 font-weight-bold") {{ item.value }}
                v-col(cols="12" sm="6" )
                  div(v-for="(item, index) in contactInfo.social" :key="index" class="d-flex my-4 gap-10 align-items justify-start")
                    v-icon(color="#707070") {{getIcon(item.type)}}
                    p(class="mb-0 font-weight-bold") {{ item.value }}

</template>
<script setup>


const props = defineProps(['contactInfo']);

const getIcon = (type)=>{
  switch (type) {

      case 'phone':
          return 'mdi-phone-classic' ;
       case 'mobile':
          return 'mdi-phone' ;
      case 'mail':
          return 'mdi-email-outline' ;
      case 'web':
          return 'mdi-web' ;
      case 'fax':
          return 'mdi-fax' ;
      case 'linkedin':
          return 'mdi-linkedin' ;
      case 'xing':
          return 'mdi-xing' ;
      case 'facebook':
          return 'mdi-facebook' ;
      case 'instagram':
        return 'mdi-instagram' ;
      case 'tiktok':
          return 'mdi-music-note-eighth' ;
      case 'twitter':
          return 'mdi-twitter' ;
      case 'other':
        return 'mdi-link'
  }
}
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

.text {
  text-align: left;
  font: normal normal bold 16px/22px Nunito;
  letter-spacing: 0.4px;
  color: #1C1C1C;
  opacity: 1;
}

</style>