<template lang="pug">
ClientOnly
  v-dialog(:model-value="props.isDialogVisible" max-width="450px")
    CommonCard(color="lightBlue" :loading="loading")
      template(#title)
        span(class="text-secondary d-flex align-center") {{isEdit? $t('certifications.edit'): $t('certifications.addCertification')}}
        v-btn(icon size="small" variant="plain" color="primaryTextPale" @click="$emit('update:isDialogVisible', false)")
            v-icon mdi-close
      template(#body)
        v-form(class="d-flex flex-column" ref="form")
          v-text-field(density="comfortable" :label="$t('account.title')" variant="solo" v-model="formData.title" :rules="rules.required")
          v-textarea(density="comfortable" :label="$t('account.desc')" variant="solo" :rules="rules.required" v-model="formData.desc")
          v-text-field(density="comfortable" :label="$t('certifications.date')" variant="solo" v-model="formData.date" type="date" :rules="rules.required")
          v-text-field(density="comfortable" :label="$t('certifications.certificationAssociation')" variant="solo" v-model="formData.certAuthority" :rules="rules.required")
          v-text-field(density="comfortable" :label="$t('admin.validUntil')" variant="solo" v-model="formData.validUntil" type="date" :rules="rules.required")
          div(class="d-flex justify-center mt-5")
                v-btn(rounded="pill" size="large" color="secondary" width="65%" @click="validate" :disabled="disabled") Save
</template>

<script setup>
import {useCertificationStore} from '~/stores/certifications'

const props = defineProps({
    isDialogVisible: false,
    editItem: {},
})

const emit = defineEmits(
    ['update:isDialogVisible', 'update:certifications']
)

const {addCertification, updateCertification}  = useCertificationStore()
// data
const {t} = useI18n()
const form = ref(null)
const modalDialog = ref(props.isDialogVisible)
const formData = reactive({
    title: '',
    desc: '',
    certAuthority: '',
    date: '',
    validUntil: '',
})
const loading = ref(false)
const disabled = ref(false)


// Form Rules
const rules = reactive({
    required: [
        v => !!v || t('required')
    ]
})

// methods
const validate = async () => {
    const {valid} = await form.value.validate()
    if (valid) return submitData()
}
const submitData = () => {
    loading.value = true
    disabled.value = true
    if(isEdit.value){
        //update
        updateCertification(formData, props.editItem._id).then(response=>{
           emit('update:certifications', response.data)
           emit('update:isDialogVisible')
        }).finally(()=>{
          loading.value = false
          disabled.value = false
        })
    }else {
        addCertification(formData).then(response => {
            emit('update:certifications', response)
            emit('update:isDialogVisible')
        }).finally(() => {
            loading.value = false
            disabled.value = false
        })
    }

};
watch(() => props.isDialogVisible, (newValue) => {
    if(!newValue) {
        formData.title = ''
        formData.desc = ''
        formData.certAuthority = ''
        formData.date = ''
        formData.validUntil = ''
    }
})

watch(() => props.editItem, (newValue) => {
    if(newValue){
      formData.title= newValue.title
      formData.desc= newValue.desc
      formData.certAuthority= newValue.certAuthority
      formData.date= newValue.date?newValue.date.split('T')[0]: ''
      formData.validUntil= newValue.validUntil?newValue.validUntil.split('T')[0]: ''
    }

})

const isEdit = computed(() => {
    return  !!props.editItem
})
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