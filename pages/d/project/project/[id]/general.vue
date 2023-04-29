<template lang="pug">
v-row(style="height: 500px" class="overflow-auto scroll-container")
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
        div(class="d-flex rounded-lg align-center project-status px-2")
          v-icon(icon="mdi-check-circle" style="color: #06A69D" size="small")
          p(class="px-2 text-capitalize text-center") Project Done
      template(#body)
        v-row(class="mt-4")
          v-col(cols="12" sm="4")
            v-select(variant="solo" v-model="item" density="comfortable" single-line :items="items")
          v-col(cols="12" sm="4")
            v-text-field(type="date" density="comfortable" single-line variant="solo")
          v-col(cols="12" sm="4")
            v-text-field(type="date" density="comfortable" single-line variant="solo")
</template>

<script setup>
definePageMeta({
  activeRoute: 'project'
})
const route = useRoute()
const item = ref('Executed')
const dateFrom = ref(new Date())

const items= ref(
  ['Executed']
)


const imgIcon = ref('https://ik.imagekit.io/teamstage/image_picker_3125430F-511F-43C9-B086-AB64D48351B8-2200-000002773AA5F329_PAgGU5JhU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669902515925');
</script>

<style lang="scss" scoped>
.scroll-container {
  scrollbar-color: #94a3b8 transparent;
}

.project-status {
  height: 36px;
  p {
    font-size: 10px;
  }
}
</style>