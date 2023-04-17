<template lang="pug">
v-card(width="100%" flat)
  v-toolbar(flat color="transparent")
    v-btn(icon class="ml-0" :to="localePath('project/projects')")
        v-icon mdi-arrow-left
    v-toolbar-title Metrohm.com
    .underline
    v-btn(icon)
      v-icon mdi-menu
    template(v-slot:extension)
      v-tabs(v-for="tab, index in tabs" :key="index" class="my-5")
        v-btn(class="tab-btn ma-2" nuxt) {{ $t(tab.label) }}


  v-card-text
    p.text-body-1 some content
</template>

<script setup>
definePageMeta({
  activeRoute: 'project'
})
const route = useRoute();

const tabs = ref(
  [
    {
      label: "projectdetails.general"
    },
    {
      label: "projectdetails.teams"
    },
    {
      label: "projectdetails.comment"
    }
  ]
);

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

.v-btn.tab-btn {
  border-radius: 24px;
  background-color: rgba(28, 28, 28, 0.03);
}

.v-btn--active.tab-btn {
  background-image: linear-gradient($secondary, $primary);
  color: #fff;
}
</style>