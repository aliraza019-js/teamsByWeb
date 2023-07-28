<template lang="pug">
v-row(style="height: 500px" class="overflow-auto comment-container")
  v-col(cols="12" v-for="data in 3" :key="data")
    v-card(class="elevation-4 rounded-lg")
      v-card-text(class="d-flex flex-column")
        div(class="d-flex align-center justify-space-between")
          span(class="text-caption") 20.06.2021
          v-avatar(size="30" :image="img")
        p(class="mt-3 text-justify") Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper tincidunt massa. Suspendisse sapien turpis, hendrerit nec eros vel, luctus tincidunt orci. Cras ac nisi aliquam, sollicitudin turpis et, interdum ante. Aliquam erat volutpat. Proin eget commodo purus, nec pharetra libero. Etiam id ultrices libero, a porta massa. Curabitur vulputate urna ut neque vulputate, eu aliquam turpis sollicitudin. Praesent sollicitudin euismod hendrerit. Phasellus semper tincidunt ligula sit amet lacinia. Morbi consectetur enim vel tortor blandit euismod. Ut sed vestibulum ex.
        div(class="d-flex mt-3 justify-end")
          div(class="d-flex gap-10")
            v-icon(style="color: primaryTextPale") mdi-thumb-up-outline
            span(class="font-weight-bold") 1.2K likes
</template>

<script setup>
definePageMeta({
  activeRoute: 'project'
});

const img = ref('https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80');

</script>

<style lang="scss" scoped>
.comment-container {
  scrollbar-color: #94a3b8 transparent;
}
</style>