<template lang="pug">
v-container
    v-row
        v-col(cols="12" sm="6" )
            div(v-for="(item, index) in data.contacts" :key="index" class="d-flex my-4 gap-10 align-items justify-start")
                v-icon(color="#707070") {{getIcon(item.type)}}
                p(class="mb-0 font-weight-bold") {{ item.value }}
</template>

<script setup>
defineProps({
    data:{}
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
  }
}
</script>

<style lang="scss" scoped>

</style>