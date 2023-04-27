<template lang="pug">
v-row
  v-col(cols="12")
    v-card
      v-card-text(class="d-flex flex-column")
        div(class="d-flex")
          span(class="text-caption") 20.06.2021
        p(class="mt-3 text-justify") Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper tincidunt massa. Suspendisse sapien turpis, hendrerit nec eros vel, luctus tincidunt orci. Cras ac nisi aliquam, sollicitudin turpis et, interdum ante. Aliquam erat volutpat. Proin eget commodo purus, nec pharetra libero. Etiam id ultrices libero, a porta massa. Curabitur vulputate urna ut neque vulputate, eu aliquam turpis sollicitudin. Praesent sollicitudin euismod hendrerit. Phasellus semper tincidunt ligula sit amet lacinia. Morbi consectetur enim vel tortor blandit euismod. Ut sed vestibulum ex.
        div(class="d-flex mt-3 justify-end")
          div(class="d-flex gap-10")
            v-icon(style="color: #06A69D") mdi-thumb-up-outline
            span(class="font-weight-bold") 1.2K likes

</template>

<script setup>
definePageMeta({
  activeRoute: 'project'
});



</script>