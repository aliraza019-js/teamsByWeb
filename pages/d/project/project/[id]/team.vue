<template lang="pug">
v-row
  v-col(cols="12" sm="4" v-for="item , index in items" :key="index")
    v-card(rounded="lg" class="elevation-4")
      v-card-text(class="d-flex")
        v-avatar(size="40" :image="img")
        div(class="d-flex flex-column justify-center w-100 pl-3")
          span(style="width: 139px" class="truncate") {{item.title}}
          p(class="font-weight-bold text-body-1") {{item.name}}
</template>

<script setup>
definePageMeta({
  activeRoute: 'project'
});


const img = ref('https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80');
const items = ref(
  [
    {
      title: 'Senior Projekt Manager',
      name: 'Amy Lee'
    },
    {
      title: 'Dynamic Optimization Administrator',
      name: 'Amy Lee'
    },
    {
      title: 'Dynamic Optimization Administrator',
      name: 'Adaline Bins'
    },
    {
      title: 'Teamlead | CPM',
      name: 'Florian Eutert'
    }
  ]
);

</script>

<style scoped>
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>