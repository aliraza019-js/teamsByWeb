<template lang="pug">
v-row(class="overflow-auto h-100")
  v-col(cols="12" class="d-flex justify-end pb-0")
    v-btn(variant="text" prepend-icon="mdi-plus" density="compact") Projekt hinzufügen
  v-col(cols="12")
    v-row(class="overflow-auto scroll-container" )
      v-col(cols="12" v-for="item , index in projects" :key="index")
        CommonCard
          template(#title)
            div(class="d-flex flex-column")
              span(class="text-body-2") {{item.company}}
              p(class="text-secondary") {{item.projectTitle}}
            div(class="d-flex px-2 rounded-lg align-center justify-space-around project-status")
              v-icon(:icon="item.icon" class="mr-2" color="primaryTextPale")
              div(class="d-flex text-body-2") {{item.projectStatus}}
          template(#body)
            v-container(class="px-0")
              v-row
                v-col(cols="12" sm="3")
                  v-img(class="rounded-lg" cover height="200" src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80")
                v-col(cols="12" sm="9" class="d-flex justify-space-evenly flex-column")
                  div(class="d-flex mb-3 justify-space-between")
                    p {{item.timeFrame}}
                    p(class="text-capitalize") {{item.category}}
                  p(class="text-justify") Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,.
                v-col(cols="12" class="d-flex justify-space-between")
                  div(class="d-flex align-center")
                    v-icon(color="primaryTextPale" size="large" icon="mdi-message-reply-text")
                    p(class="font-weight-bold ml-2") 24 comments
                  div(class="d-flex align-center")
                    v-icon(color="primaryTextPale" size="large" icon="mdi-thumb-up-outline")
                    p(class="font-weight-bold ml-2") 1.2K likes
</template>

<script setup>
definePageMeta({
  activeRoute: 'account'
});

const projects = ref(
  [
    {
      company: '27apps',
      projectTitle: 'TeamStage',
      category: 'tech',
      timeFrame: '01.01.2020 - Ongoing',
      icon: 'mdi-timer-sand',
      projectStatus: "Project Started"
    },
    {
      company: 'DFB',
      projectTitle: 'FUSSBALL.DE',
      category: 'Sports / Association',
      timeFrame: '01.01.2020 - 28.02.2022',
      icon: 'mdi-check-circle',
      projectStatus: "Project Finished"
    }
  ]
);
</script>


<style scoped lang="scss">

</style>