<template lang="pug">
v-container
  CommonCard 
    template(#title)
      span(class="text-secondary d-flex align-center") {{$t('personAbout.about')}}
      v-btn(icon size="small" variant="plain" color="#06A69D" @click="editAbout = !editAbout")
        v-icon mdi-pencil
    template(#body)
      p(class="px-0 pt-5 font-weight-medium text-subtitle-1") {{$t('personAbout.title')}}
      p(class="text-h6 font-weight-bold") {{title}}
      p(class="description py-3 text-body-1 font-weight-medium") {{$t('personAbout.description')}}
      p(class="pt-2 text-justify") {{description}}

  CommonCard 
    template(#title)
      span(class="text-secondary d-flex align-center") {{$t('personContact.title')}}
      div(class="d-flex align-center")
        v-btn(icon size="small" variant="plain" color="secondary")
          v-icon(color="") mdi-plus-circle-outline
        v-btn(icon size="small" variant="plain" color="#06A69D")
          v-icon mdi-pencil 
    template(#body)
      v-container
        v-row
          v-col(cols="12" sm="6" v-for="item , index in contactPerson" :key="index" class="d-flex gap-10 align-items justify-start")
            v-icon(color="#707070") {{item.icon}}
            p(class="mb-0 font-weight-bold") {{item.text}}

  v-dialog(:persistent="true" v-model="editAbout" min-height="500" width="500")
    CommonCard(color="#e4edf8")
      template(#title)
        span(class="text-secondary d-flex align-center") {{$t('layout.editAbout')}}
        v-btn(icon size="small" variant="plain" color="#06A69D" @click="editAbout = !editAbout")
          v-icon mdi-close
      template(#body)
        div(class="d-flex flex-column")
          input(v-model="title" class="input elevation-6 w-100")
          span(class="v-messages__message mt-3 pl-2 text-red-accent-4") Required
          textarea(class="input elevation-6 w-100 mt-4" rows="9" v-model="description")
          span(class="v-messages__message mt-3 pl-2 text-red-accent-4") Required
          div(class="d-flex justify-center mt-5")
            v-btn(rounded="pill" size="large" color="secondary" width="65%" @click="updateUser") Save
</template>

<script setup>
definePageMeta({
  activeRoute: 'account'
});

const {data}  = useLazyAsyncData(() => myFetch('/api/users'))

console.log(data.value)

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

const editAbout = ref(true)
const title = ref('Senior Product manager')
const description = ref('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, ');

// Function 
const updateUser = () => {
  myFetch('/api/users', {
    method: "PATCH",
    body: {
      title: title.value,
      desc: description.value
    }
  })
};
</script>

<style lang="scss" scoped>
.v-card-title {
  border-bottom: 1px solid #E2E2E2;
}

.description {
  color: $secondary;
}


.input {
  background: #f7f7f7;
  border-radius: 10px;
  padding: 10px 10px;
  width: 30%;
  filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));

  &:focus {
    outline: none;
  }
}


</style>