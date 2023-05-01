<template lang="pug">
ClientOnly
  v-dialog(v-model="props.isDialogVisible" max-width="450px")
    CommonCard(color="#e4edf8")
      template(#title)
        span(class="text-secondary d-flex align-center") {{$t('layout.editAbout')}}
        v-btn(icon size="small" variant="plain" color="#06A69D" @click="$emit('update:isDialogVisible', false)")
          v-icon mdi-close
      template(#body)
        v-form(class="d-flex flex-column" ref="form")
          v-text-field(density="comfortable" placeholder="Title" variant="solo" v-model="formData.title" :rules="rules.required")
          v-textarea(density="comfortable" placeholder="Description" variant="solo" :rules="rules.required" v-model="formData.desc")
          div(class="d-flex justify-center mt-5")
            v-btn(rounded="pill" size="large" color="secondary" width="65%" @click="validate") Save
</template>

<script setup>
const props = defineProps({
  isDialogVisible: false,
  title: '',
  desc: ''
})

const emit = defineEmits(
  ['update:isDialogVisible' , 'refresh']
)

// data
const { t } = useI18n()
const form = ref(null)
const formData = reactive({
  title: props.title || '',
  desc: props.desc || ''
})

// Form Rules 
const rules = reactive({
  required: [
    v => !!v || t('required')
  ]
})

// methods
const validate = async () => {
  const { valid } = await form.value.validate()
  if (valid) return updateUser()
}
const updateUser = () => {
  myFetch('/users', {
    method: "PATCH",
    body: formData
  }).then(res => {
    emit('refresh')
  })
};
</script>

<style lang="scss" scoped>
.description {
  color: $secondary;
}

.v-input__control {
  border-radius: 25px;
}

:deep(.v-text-field) {

  .v-input__control {
    box-shadow: none;
    border: none;
    background: transparent;
    border-radius: 10px;
  }

  .v-field {
    background-color: #fff !important;
    border-radius: 10px;
  }
}
</style>