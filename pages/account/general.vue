<template lang="pug">
v-container
  CommonCard 
    template(#title)
      span(class="text-secondary d-flex align-center") {{$t('personAbout.about')}}
      v-btn(icon size="small" variant="plain" color="#06A69D" @click="editAbout = !editAbout")
        v-icon(v-if="editAbout") mdi-pencil
        v-icon(v-else) mdi-check
    template(#body)
      p(class="px-0 pt-5 font-weight-medium text-subtitle-1") {{$t('personAbout.title')}}
      p(v-if="editAbout" class="text-h6 font-weight-bold") {{title}}
      input(v-else v-focus v-model="title" class="input")
      p(class="description py-3 text-body-1 font-weight-medium") {{$t('personAbout.description')}}
      p(v-if="editAbout" class="pt-2 text-justify") {{description}}
      textarea(v-else class="input" rows="4" v-focus class="w-100" v-model="description")

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
            p(class="mb-0 font-weight-bold")  {{item.text}}
</template>

<script setup>
definePageMeta({
  activeRoute: 'account'
});

// vFocus Directive
const vFocus = {
  mounted: (el) => el.focus()
}
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

const editAbout = ref(false)
const title = ref('Senior Product manager')
const description = ref('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, ')

try {
  const res = await myFetch('/api/users')
  console.log(res)
} catch (err) {
  console.log(err)
}
</script>

<style lang="scss" scoped>
.v-card-title {
  border-bottom: 1px solid #E2E2E2;
}

.description {
  color: $secondary;
}

.left-rounded {
  background: #06A69D;
  width: 30px;
  height: 48px;
  left: -17px;
}

.input {
  background: #f7f7f7;
  border-radius: 5px;
  padding: 5px 10px;
  width: 30%;
  filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));

  &:focus {
    outline: none;
  }
}


</style>