
<template lang="pug">
v-row(class="overflow-auto h-100 scroll-container")
      v-col(cols="12")
        CommonCard
          template(#title)
            span(class="text-secondary d-flex align-center" ) {{$t('personAbout.about') +" "+ response.name}}
          template(#body)
            p(class="description pt-3 text-body-1 font-weight-medium text-green") {{$t('personAbout.description')}}
            p(class="pt-2 text-justify") {{response.description ? response.description :'description......'}}
        CommonCard
            template(#title)
              span(class="text-secondary d-flex align-center") {{ $t('personContact.title') }}
              v-btn(icon size="small" variant="plain" color="primaryTextPale") 
               v-icon mdi-pencil
            template(#body)
              v-container
                      v-row
                          v-col(cols="12" sm="6" )
                            div(v-for="(item, index) in response.contacts" :key="index" class="d-flex my-4 gap-10 align-items justify-start")
                              v-icon(color="#707070") {{getIcon(item.type)}}
                              p(class="mb-0 font-weight-bold") {{ item.value }}
                          v-col(cols="12" sm="6" )
                            div(v-for="(item, index) in response.social" :key="index" class="d-flex my-4 gap-10 align-items justify-start")
                              v-icon(color="#707070") {{getIcon(item.type)}}
                              p(class="mb-0 font-weight-bold") {{ item.value }}
</template>
    
  
  <script setup>
    import {useTeamsStore} from '~/stores/teams'
    const response = ref({});
    const route = useRoute()
    const {getTeamsById} = useTeamsStore()
    onMounted(async () => {
        response.value = await getTeamsById(route.params.id)
    })
  
  definePageMeta({
    activeRoute: 'team'
  })
  
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
  .underline {
    position: absolute;
    width: 100%;
    left: 0px;
    top: 56px;
    right: 0px;
    height: 1px;
    background-color: rgb(204, 204, 204);
  }
  </style>