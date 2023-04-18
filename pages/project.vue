<template lang="pug">
v-card(width="100%" flat)
  v-toolbar(:title="$t('projects.projects')" color="transparent")
    .underline
    v-btn(icon)
      v-icon mdi-menu
    template(v-slot:extension)
      div(class="d-flex justify-space-between w-100 align-center")
        v-tabs.my-5
          v-btn.tab-btn.ma-2(nuxt :to="localePath('/project/projects')") {{ $t('projects.projects') }}
          v-btn.tab-btn.ma-2(nuxt :to="localePath('/project/orgs')") {{ $t('projects.clients') }}
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
                v-divider(class="border-opacity-75" style="color: #06A69D")
                v-list-item(density="compact" value="b")
                  template(v-slot:prepend)
                    v-icon mdi-plus
                  v-list-item-title Neues Kunde
  NuxtPage
</template>

<script setup>
definePageMeta({
  activeRoute: 'project',
  middleware: 'redirect-router'
});
</script>

<style lang="scss" scoped>
.v-btn.tab-btn {
  border-radius: 24px;
  background-color: rgba(28, 28, 28, 0.03);
}

.v-btn--active.tab-btn {
  background-image: linear-gradient($secondary, $primary);
  color: #fff;
}

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