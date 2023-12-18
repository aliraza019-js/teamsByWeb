<template lang="pug">
v-row()
  v-col(cols="12")
    CommonCard
      template(#title)
        span(class="text-secondary d-flex align-center") {{$t('projects.aboutProject')}}
        v-btn(icon size="small" variant="plain" color="primaryTextPale" @click="editDesc = true")
          v-icon mdi-pencil
      template(#body)
        v-container(class="px-0")
          p {{ projectsData && projectsData[0].desc  }}
  v-col(cols="12")
    CommonCard
      template(#title)
        span(class="text-secondary d-flex align-center") {{$t('projectdetails.Organization')}}
        div(class="d-flex align-center")
          img(:src="projectsData && projectsData[0].org && projectsData[0].org.profileImage ? projectsData[0].org.profileImage.thumbnail : imgIcon" height="35")
      template(#body)
        v-container(class="px-0 pb-0")
          div(class="d-flex align-start flex-column")
            div(class="d-flex")
              p(class="place") Herisau | Switzerland
            p(class="orgName") {{projectsData && projectsData[0].org.name}}
  v-col(cols="12")
    CommonCard
      template(#title)
        span(class="text-secondary d-flex align-center") {{$t('projectdetails.projectOverview')}}
        div(class="d-flex rounded-lg project-status px-2")
          v-img(class="pl-2" :src="projectsData && projectsData[0].status == 'done' ? done : timer")
          p(class="px-2 text-capitalize text-center") Project {{ projectsData && projectsData[0].status ? projectsData[0].status : 'Excecuting'}}
      template(#body)
        v-row(class="mt-4")
          v-col(cols="12" sm="6")
            v-select(v-model="selectedStatus" @update:model-value="updateStatus" :loading="loading" item-title="name" item-value="value" density="comfortable" single-line :items="items")
          v-col(cols="12" sm="6")
            v-text-field(type="date" v-model="dateFrom" density="comfortable" single-line variant="solo")
            //- v-btn(rounded="pill" size="large" :loading="loading" :disabled="disabled" color="secondary" width="100%" @click="updateStatus") Update
            CommonSnackbar(v-if="showSnackbar" :message="snackbarMessage" :success="snackbarSuccess")
        ProjectsEditProjectDescription(:persistent="true" :project="projectsData && projectsData[0]" @refresh="refresh" min-height="500" width="500" :isDialogVisible="editDesc" @update:isDialogVisible="(value) => editDesc = false")
</template>
          <!-- v-col(cols="12" sm="4")
            v-text-field(type="date" v-model="dateTo" density="comfortable" single-line variant="solo") -->

<script setup>
import { defineProps, onMounted, ref } from 'vue'
import { useProjectStore } from '~/stores/projects'
import { useRoute } from 'vue-router'
import done from '@/assets/icons/project/done.svg';
import timer from '@/assets/icons/project/timer.svg';
definePageMeta({
  activeRoute: 'project'
})
const editDesc = ref(false)
let showSnackbar = ref(false)
let snackbarMessage = ref('')
let snackbarSuccess = ref(false)

const emit = defineEmits(['refresh'])
const { getProjectById } = useProjectStore()
const { updateProjectDescription } = useProjectStore()

const route = useRoute();
const projectValueData = ref(null)
const projects = defineProps(['projectsData'])
const dateFrom = ref(new Date())
const dateTo = ref(new Date())
const disabled = ref(false)
const loading = ref(false)
const selectedStatus = ref('')
const items = ref(
  [{ name: 'Initiation', value: 'initiation' }, { name: 'Planning', value: 'planning' }, { name: 'Excecuting', value: 'excecuting' }, { name: 'Monitoring', value: 'monitoring' }, { name: 'Done', value: 'done' }]
)

// {{ projectsData && projectsData[0].name }}

const refresh = () => {
  emit('refresh')
  editDesc.value = false
}


onMounted(async () => {
  // getting value of project detial
  projectValueData.value = await getProjectById(route.params.id)
  // For Status
  if (projectValueData.value && projectValueData.value.length > 0 && projectValueData.value[0].status) {
    selectedStatus.value = projectValueData.value[0].status
  } else {
    selectedStatus.value = 'Excecuting'

  }
  // Date From
  if (projectValueData.value && projectValueData.value.length > 0 && projectValueData.value[0].dateFrom) {
    const dateStr = new Date(projectValueData.value[0].dateFrom);
    dateFrom.value = dateStr.toISOString().split('T')[0];
  } else {
    dateFrom.value = new Date()
  }
  // For Date To
  if (projectValueData.value && projectValueData.value.length > 0 && projectValueData.value[0].dateTo) {
    const dateStrTo = new Date(projectValueData.value[0].dateTo);
    dateTo.value = dateStrTo.toISOString().split('T')[0];
  } else {
    dateTo.value = new Date()
  }
})

watch(selectedStatus, (newStatus) => {
  if (projects && projects.length) {
    projects[0].status = newStatus;
    projectsData[0].status = newStatus
  }
})

const updateStatus = () => {
  // console.log('Updating status...', selectedStatus.value);

  loading.value = true
  disabled.value = true
  showSnackbar.value = false
  const statusData = {
    status: selectedStatus.value,
  }
  updateProjectDescription(projectValueData.value[0]._id, { ...statusData }).then(() => {
    showSnackbar.value = true
    snackbarMessage.value = "Status Updated Successfully"
    snackbarSuccess.value = true
    emit('refresh')
  }).finally(() => {
    snackbarSuccess.value = false
    loading.value = false
    disabled.value = false
  }).catch(() => {
    showSnackbar.value = true
    snackbarMessage.value = "Status Update Failed"
    snackbarSuccess.value = false
    loading.value = false
    disabled.value = false
  })
};
const imgIcon = ref('https://ik.imagekit.io/teamstage/image_picker_3125430F-511F-43C9-B086-AB64D48351B8-2200-000002773AA5F329_PAgGU5JhU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669902515925');
</script>

<style lang="scss" scoped>
.project-status {
  height: 36px;
  width: 120px;

  p {
    font-size: 10px;
    margin-top: 2px;
    width: 90px;
    font-weight: 300;
  }
}
</style>