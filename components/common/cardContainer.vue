<template lang="pug">
v-card(width="100%" flat)
  v-toolbar(:title="title" color="transparent")
    .underline
    slot(name="titleAtributes")

    template(v-slot:extension)
      div(class="d-flex justify-space-between w-100 align-center")
        v-tabs(class="my-5")
          v-btn(v-for="tab , index in tabRoutes" :key="index" :to="localePath(tab.route)"  class="tab-btn ma-2" nuxt) {{$t(tab.title)}}
        slot(name="tabsArtributes")
  slot
</template>

<script setup>
const props = defineProps({
  title: String,
  tabRoutes: Array,
});

const localePath = useLocalePath();
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