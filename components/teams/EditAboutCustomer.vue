<template lang="pug">
ClientOnly
  v-dialog(:model-value="isDialogVisible" @update:modelValue="$emit('update:isDialogVisible', false)" max-width="450px")
    CommonCard(color="lightBlue" :loading="loading")
      template(#title)
        span(class="text-secondary d-flex align-center") {{$t('layout.editAbout')}}
        v-btn(icon size="small" variant="plain" color="primaryTextPale" @click="$emit('update:isDialogVisible', false)")
          v-icon mdi-close
      template(#body)
        v-form(class="d-flex flex-column" ref="form")
          v-textarea(density="comfortable" placeholder="Description" variant="solo" :rules="rules.required" v-model="formData.desc")
          div(class="d-flex justify-center mt-5")
            v-btn(rounded="pill" size="large" color="secondary" width="65%" @click="validate" :disabled="disabled") Save
</template>

<script setup>
import { useTeamsStore } from '~/stores/teams'
const props = defineProps({
  isDialogVisible: false,
  team: {}
})

const emit = defineEmits(
  ['update:isDialogVisible', 'refresh']
)

const { updateTeam } = useTeamsStore()

// data
const { t } = useI18n()
const form = ref(null)
const formData = reactive({
  desc: ''
})
const loading = ref(false)
const disabled = ref(false)


watchEffect(() => {
  if (props.isDialogVisible) {
    formData.desc = props.team?.desc
  }
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
  loading.value = true;
  disabled.value = true;
  updateTeam(props.team._id, formData)
    .then((res) => {
      // console.log('API call successful. Response:', res);
      if (res.status == 400) {
        emit('show-snack-bar', res)
      }
      emit('refresh');
    })
    .catch((error) => {
      console.error('Error updating team:', error);
    })
    .finally(() => {
      loading.value = false;
      disabled.value = false;
    });
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