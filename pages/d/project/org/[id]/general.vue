<template lang="pug">
v-container(class="pa-0")
  v-row(style="height: 500px" class="overflow-auto scroll-container")
    v-col(cols="12")
      CommonCard
        template(#title)
          span(class="text-secondary d-flex align-center") {{$t('projects.clients.about')}}
          v-btn(icon size="small" variant="plain" color="primaryTextPale" @click="editAbout = true")
            v-icon mdi-pencil
        template(#body)
          p(class="pt-3") {{ customer && customer[0].desc }}
    v-col(cols="12")
      CommonCard
        template(#title)
          span(class="text-secondary d-flex align-center") {{ $t('projects.clients.contactInfo') }}
          div(class="d-flex align-center")
            v-btn(icon size="small" variant="plain" color="secondary" @click="editContact = true")
              v-icon(color="") mdi-plus
        template(#body)
          CommonContactInformation(:data="customer && customer[0]")
    v-col(cols="12")
      CommonCard
        template(#title)
          span(class="text-secondary d-flex align-center") {{ $t('projects.clients.Social') }}
          div(class="d-flex align-center")
            v-btn(icon size="small" variant="plain" color="secondary" @click="editSocial = true")
              v-icon(color="") mdi-plus
        template(#body)
          CommonSocialInformation(:data="customer && customer[0]")
    v-col(cols="12")
      CommonCard
        template(#title)
          span(class="text-secondary d-flex align-center") {{ $t('projects.clients.location') }}
          div(class="d-flex align-center")
            //- v-btn(icon size="small" variant="plain" color="secondary" @click="editLocation = true")
            //-   v-icon(color="") mdi-plus
        template(#body)
          <div v-if="placeData" id="map" style="height: 400px;"></div>
          <div v-else>No Location Found</div>
          //- <div id="currentMap" style="height: 400px;"></div>
  ProjectsEditAboutCustomer(:persistent="true" :customer="customer && customer[0]" @refresh="refresh" min-height="500" width="500" :isDialogVisible="editAbout" @update:isDialogVisible="(value) => editAbout = false")
  ProjectsCustomerContactForm(:persistent="true" :customer="customer && customer[0]" @refresh="refresh" min-height="500" width="500" :isDialogVisible="editContact" @update:isDialogVisible="(value) => editContact = false")
  ProjectsCustomerSocialForm(:persistent="true" :customer="customer && customer[0]" @refresh="refresh" min-height="500" width="500" :isDialogVisible="editSocial" @update:isDialogVisible="(value) => editSocial = false")
  ProjectsCustomerLocationForm(:persistent="true" :customer="customer && customer[0]" @refresh="refresh" min-height="500" width="500" :isDialogVisible="editLocation" @update:isDialogVisible="(value) => editLocation = false")

</template>
  
<script setup>
import { useGoogleMap } from '../googleMap';
import { ref, onMounted, defineProps } from 'vue';


// page
definePageMeta({
  activeRoute: 'project',
});

const emit = defineEmits(
  ['update:isDialogVisible', 'refresh']
)

const props = defineProps(['customer']);
const apikey = 'AIzaSyDnyubLPHsExGa9cPVshPJMhBQRjl0BIZs';
const placeData = ref(props.customer && props.customer[0]?.address?.geometry);


const editAbout = ref(false);
const editContact = ref(false);
const editSocial = ref(false);
const editLocation = ref(false)

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
  emit('refresh');
  editAbout.value = false;
  editLocation.value = false
};

const { map } = useGoogleMap(apikey, placeData.value);
</script>
  
<style lang="scss" scoped>
.project-status {
  height: 36px;

  p {
    font-size: 10px;
  }
}
</style>
  