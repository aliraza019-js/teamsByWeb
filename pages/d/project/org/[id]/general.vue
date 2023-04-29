<template lang="pug">
v-container(class="pa-0")
  v-row(style="height: 500px" class="overflow-auto scroll-container")
    v-col(cols="12")
      CommonCard
        template(#title)
          span(class="text-secondary d-flex align-center") Über den Kunden
        template(#body)
          p(class="pt-3") Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend erat et auctor elementum. Quisque quis condimentum eros. Etiam sit amet laoreet purus. Aenean nec mi eu justo sollicitudin mattis at id dui. Vestibulum tincidunt dui at orci finibus rutrum. Praesent dapibus pellentesque est et fermentum. Aenean nisl erat, consectetur id libero eget, viverra posuere purus. Nunc faucibus elit est, sit amet maximus neque sollicitudin vitae. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus pretium pulvinar volutpat.
    v-col(cols="12")
      CommonCard
        template(#title)
          span(class="text-secondary d-flex align-center") Kontakt Informationen
          div(class="d-flex align-center")
            v-btn(icon size="small" variant="plain" color="secondary")
              v-icon(color="") mdi-pencil
        template(#body)
          v-container
            v-row
              v-col(cols="12" sm="6" v-for="item , index in contactPerson" :key="index" class="d-flex gap-10 align-items justify-start")
                v-icon(color="#707070") {{item.icon}}
                p(class="mb-0 font-weight-bold") {{item.text}}
</template>

<script setup>
// page
definePageMeta({
  activeRoute: 'project',
});

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
