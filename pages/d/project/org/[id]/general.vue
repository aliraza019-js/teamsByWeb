<template lang="pug">
v-container(class="pa-0")
  v-row(style="height: 500px" class="overflow-auto scroll-container")
    v-col(cols="12")
      CommonCard
        template(#title)
          span(class="text-secondary d-flex align-center") {{$t('personAbout.about')}}
          v-btn(icon size="small" variant="plain" color="primaryTextPale" @click="editAbout = true")
            v-icon mdi-pencil
        template(#body)
          p(class="pt-3") {{ customer && customer[0].desc }}
    v-col(cols="12")
      CommonCard
        template(#title)
          span(class="text-secondary d-flex align-center") {{ customer && customer[0].name }}
          div(class="d-flex align-center")
            v-btn(icon size="small" variant="plain" color="secondary" @click="editContact = true")
              v-icon(color="") mdi-pencil
        template(#body)
          CommonContactInformation(:data="customer && customer[0]")
  ProjectsEditAboutCustomer(:persistent="true" :customer="customer && customer[0]" @refresh="refresh" min-height="500" width="500" :isDialogVisible="editAbout" @update:isDialogVisible="(value) => editAbout = false")
  ProjectsCustomerContactForm(:persistent="true" :customer="customer && customer[0]" @refresh="refresh" min-height="500" width="500" :isDialogVisible="editContact" @update:isDialogVisible="(value) => editContact = false")
</template>

<script setup>
// page
definePageMeta({
  activeRoute: 'project',
});

defineProps(['customer'])
const emit = defineEmits(['refresh'])


const editAbout = ref(false)
const editContact = ref(false)

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

const refresh = () => {
  emit('refresh')
  editAbout.value = false
}


</script>

<style lang="scss" scoped>
.project-status {
  height: 36px;

  p {
    font-size: 10px;
  }
}
</style>
