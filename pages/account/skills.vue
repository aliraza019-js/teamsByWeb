<template lang="pug">
v-row(class="overflow-auto h-100")
  v-col(cols="12" class="d-flex justify-end pb-0")
    v-btn(variant="text" prepend-icon="mdi-plus" density="compact") Skill hinzufügen
  v-col(cols="12")
    v-row(class="overflow-auto scroll-container" style="height: 450px")
      v-col(cols="12" v-for="item, index in skills" :key="index")
        CommonCard
          template(#title)
            span.text-secondary.d-flex.align-center {{item.title}}
            v-btn(icon size="small" variant="plain" color="primaryTextPale" )
              v-icon mdi-pencil
          template(#body)
            v-container
              v-row
                v-col(cols="12" sm="6" class="d-flex justify-space-between align-center" v-for="dataSkill , index in item.items" :key="index")
                  div(class="d-flex flex-column")
                    span {{dataSkill.subtitle}}
                    p(class="font-weight-bold ") {{dataSkill.title}}
                  v-rating(bg-color="orange-lighten-1" size="x-small" density="compact" v-model="dataSkill.rate" color="blue")
</template>

<script setup>
definePageMeta({
  activeRoute: 'account'
});

const rating = ref(3);

const skills = ref([
  {
    title : "Projekt / Agile",
    items: [
      {
        subtitle: "agile",
        title: "Agile Coach",
        rate: 5
      },
      {
        subtitle: "agile",
        title: "Scrum Master (cert.)",
        rate: 5
      },
      {
        subtitle: "agile",
        title: "Scrum Product Owner (cert.)",
        rate: 5
      },
      {
        subtitle: "agile",
        title: "Scaled Scrum (LeSS)",
        rate: 5
      }
    ]
  },
  {
    title : "Entwicklung",
    items: [
      {
        subtitle: "development",
        title: "React",
        rate: 5
      },
      {
        subtitle: "development",
        title: "Vue / Nuxt",
        rate: 5
      },
      {
        subtitle: "UX / Design",
        title: "UX / Prototyping",
        rate: 5
      },
      {
        subtitle: "development",
        title: "nestJS",
        rate: 5
      },
      {
        subtitle: "databases",
        title: "mongoDB",
        rate: 5
      }
    ]
  },
]);
</script>