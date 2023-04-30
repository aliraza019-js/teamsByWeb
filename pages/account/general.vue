<template lang="pug">
v-container
  //- AccountGeneralAbout

  CommonCard(:loading="loadingUser")
    template(#title)
      span(class="text-secondary d-flex align-center") {{$t('personAbout.about')}}
      // implement edit component
      AccountGeneralEditAbout
      //- v-btn(icon size="small" variant="plain" color="#06A69D" @click="editAbout = !editAbout")
        v-icon mdi-pencil
    template(#body)
      p.px-0.pt-5.font-weight-medium.text-subtitle-1 {{$t('personAbout.title')}}
      p.text-h6.font-weight-bold {{ user.title }}
      p.description.pt-3.pb-1.text-body-1.font-weight-medium {{$t('personAbout.description')}}
      p.text-justify {{ user.desc }}

  CommonCard 
    template(#title)
      span(class="text-secondary d-flex align-center") {{$t('personContact.title')}}
      div(class="d-flex align-center")
        v-btn(icon size="small" variant="plain" color="secondary")
          v-icon(color="") mdi-plus-circle-outline
        v-btn(icon size="small" variant="plain" color="#06A69D")
          v-icon mdi-pencil
    template(#body)
      v-container
        v-row
          v-col(cols="12" sm="6" v-for="item , index in contactPerson" :key="index" class="d-flex gap-10 align-items justify-start")
            v-icon(color="#707070") {{item.icon}}
            p(class="mb-0 font-weight-bold") {{item.text}}
  GeneralEditAboutMe(:persistent="true" v-bind="formData" min-height="500" width="500" :isDialogVisible="editAbout" @update:isDialogVisible="(value) => editAbout = value")
</template>

<script setup>
// imports
import { useUserStore } from '~/stores/user'

// page meta
definePageMeta({
  activeRoute: 'account'
});

// data
const { user, loadingUser } = useUserStore()

const contactPerson = ref([
  {
    icon: "mdi-pencil",
    text: "+49 511 123456-0"
  },
  {
    icon: "mdi-email",
    text: "mail@mail.com"
  },
  {
    icon: "mdi-cellphone",
    text: "+49 511 123456-0"
  },
  {
    icon: "mdi-instagram",
    text: "@trusteddecisions.com"
  }
]);

const editAbout = ref(false)
const formData = reactive({
  title: "Senior Product manager",
  description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,"
});


</script>