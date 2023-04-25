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
    v-row
      v-col(cols="12")
        CommonCard
          template(#title)
            span(class="text-secondary d-flex align-center") Über das Projekt
          template(#body)
            v-container(class="px-0")
              p lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu,Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
      v-col(cols="12")
        CommonCard
          template(#title)
            span(class="text-secondary d-flex align-center") Kunde
            div(class="d-flex align-center") 
              img(:src="imgIcon" height="35")
          template(#body)
            v-container(class="px-0 pb-0")
              div(class="d-flex align-start flex-column")
                div(class="d-flex")
                  p(class="place") Herisau | Switzerland
                p(class="orgName") Metrohm Schweiz AG
      v-col(cols="12")
        CommonCard
          template(#title)
            span(class="text-secondary d-flex align-center") Überblick
            div(class="d-flex rounded-lg align-center project-status")
              v-icon(icon="mdi-check-circle" style="color: #06A69D" size="small")
              p(class="pl-1 text-capitalize text-center") Project Done
          template(#body)
            v-row(class="mt-4")
              v-col(cols="12" sm="4") 
                v-select(variant="solo" v-model="item" density="comfortable" single-line :items="items")
              v-col(cols="12" sm="4")
                v-select(variant="solo" v-model="item" density="comfortable" single-line :items="items")
              v-col(cols="12" sm="4")
                v-select(variant="solo" v-model="item" density="comfortable" single-line :items="items")

</template>

<script setup>
import Datepicker from 'vue3-datepicker'

definePageMeta({
  activeRoute: 'project'
})
const route = useRoute();
const item = ref('Executed')

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


const items= ref(
  ['Executed']
)


const imgIcon = ref('https://ik.imagekit.io/teamstage/image_picker_3125430F-511F-43C9-B086-AB64D48351B8-2200-000002773AA5F329_PAgGU5JhU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669902515925');
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

.project-status {
  height: 36px;
  p {
    width: 51px;
    font-size: 9px;
  }
}
</style>