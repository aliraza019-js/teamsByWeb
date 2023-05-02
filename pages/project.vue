<template lang="pug">
CommonCardContainer(:title="$t('projects.projects')" :tabRoutes="tabRoutes")
  template(#titleAtributes)
    v-btn(icon)
      v-icon mdi-menu
  template(#tabsAtributes)
    div(class="d-flex gap-10 justify-space-between")
      v-menu(theme="light" :close-on-content-click="false" eager location="start" offset="-22")
        template(v-slot:activator="{props}")
          v-btn(size="regular" v-bind="props" color="secondary" icon="mdi-magnify" plain)
        v-card(min-width="300")
          v-list
            v-list-item
              v-text-field(variant="underlined" density="compact" single-line hide-details append-inner-icon="mdi-magnify" label="Search")
      v-menu(theme="light" location="start" offset="-22")
        template(v-slot:activator="{props}")
          v-btn(size="regular" v-bind="props" color="blue-grey-lighten-2" icon="mdi-filter-variant" plain)
        v-list(density="compact" rounded="lg")
          v-list-item(density="compact" value="a")
            template(v-slot:prepend)
              v-icon mdi-plus
            v-list-item-title Neues Projekt
          v-divider(class="border-opacity-75" style="color: primaryTextPale")
          v-list-item(density="compact" value="b")
            template(v-slot:prepend)
              v-icon mdi-plus
            v-list-item-title Neues Kunde
  NuxtPage
</template>

<script setup>
// page
definePageMeta({
  activeRoute: 'project',
});
// data state
const localePath = useLocalePath();
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
</script>
