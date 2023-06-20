<template lang="pug">
CommonCardContainer(:title="$t('projects.projects')" :tabRoutes="tabRoutes")
  template(#tabsAtributes) 
    div(class="d-flex gap-10 justify-space-between")
      v-menu(theme="light" :close-on-content-click="false" eager location="start" )
        template(v-slot:activator="{props}")
          v-btn(size="regular" v-bind="props" color="secondary" icon="mdi-magnify" plain)
        v-card(min-width="300" )
          v-list
            v-list-item
              v-text-field(variant="underlined" density="compact" single-line hide-details append-inner-icon="mdi-magnify" label="Search")
      v-btn(icon)
        v-icon mdi-filter-variant
  template(#titleAtributes)
    v-menu(theme="light" location="bottom" )
      template(v-slot:activator="{props}")
        v-btn(size="regular" v-bind="props"  icon="mdi-menu" plain)
      v-list(density="compact" rounded="lg")
        v-list-item(density="compact" @click="showAddProject")
          template(v-slot:prepend)
            v-icon mdi-plus
          v-list-item-title New Project
        v-divider(class="border-opacity-75" style="color: primaryTextPale")
        v-list-item(density="compact" @click="showAddCustomer")
          template(v-slot:prepend)
            v-icon mdi-plus
          v-list-item-title New Client
  NuxtPage
  ProjectsCustomerForm(:persistent="true" min-height="500" width="500"   :isDialogVisible="dialogAddCustomer" @update:isDialogVisible="closeCustomerDialog" )
  ProjectsProjectForm(:persistent="true" min-height="500" width="500"   :isDialogVisible="dialogAddProject" @update:isDialogVisible="closeAddProject" )
</template>

<script setup>
// page
definePageMeta({
  activeRoute: 'project',
});
// data state
const localePath = useLocalePath();

const dialogAddCustomer = ref(false)
const dialogAddProject = ref(false)

const tabRoutes = ref(
  [
    {
      label: 'projects.projects',
      link: '/project/projects'
    },
    {
      label: 'projects.clients',
      link: '/project/orgs'
    }
  ]
);

const showAddCustomer = ()=>{
  dialogAddCustomer.value = true
}

const closeCustomerDialog = ()=>{
  dialogAddCustomer.value  =false
}

const showAddProject = ()=>{
  dialogAddProject.value = true
}

const closeAddProject = ()=>{
  dialogAddProject.value  =false
}

</script>
