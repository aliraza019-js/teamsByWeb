<template lang="pug">
ClientOnly
  v-dialog(:model-value="props.isDialogVisible" max-width="450px" @update:modelValue="$emit('update:isDialogVisible', false)")
    CommonCard(color="lightBlue" :loading="loading")
      template(#title)
        span(class="text-secondary d-flex align-center") {{isEdit? $t('trainings.edit'): $t('trainings.add')}}
        v-btn(icon size="small" variant="plain" color="primaryTextPale" @click="$emit('update:isDialogVisible', false)")
            v-icon mdi-close
      template(#body)
        v-form(class="d-flex flex-column" ref="form")
          v-text-field(density="comfortable" :label="$t('account.title')" variant="solo" v-model="formData.title" :rules="rules.required")
          v-textarea(density="comfortable" :label="$t('account.desc')" variant="solo" :rules="rules.required" v-model="formData.desc")
          v-text-field(density="comfortable" :label="$t('trainings.dateFrom')" variant="solo" v-model="formData.dateFrom" type="date" :rules="rules.required")
          v-text-field(density="comfortable" :label="$t('trainings.dateTo')" variant="solo" v-model="formData.dateTo" type="date" :rules="rules.required")
          v-text-field(density="comfortable" :label="$t('trainings.provider')" variant="solo" v-model="formData.provider" :rules="rules.required")
          v-text-field(density="comfortable" :label="$t('trainings.place')" variant="solo" v-model="formData.place" :rules="rules.required")
          div(class="d-flex justify-center mt-5")
                v-btn(rounded="pill" size="large" color="secondary" width="65%" @click="validate" :disabled="disabled") Save
</template>

<script setup>
import {useTrainingStore} from '~/stores/trainings'

const props = defineProps({
    isDialogVisible: false,
    editItem: {},
})

const emit = defineEmits(
    ['update:isDialogVisible', 'update:certifications']
)

const {addTraining, updateTraining}  = useTrainingStore()
// data
const {t} = useI18n()
const form = ref(null)
const modalDialog = ref(props.isDialogVisible)
const formData = reactive({
    title: '',
    desc: '',
    provider: '',
    dateFrom: '',
    dateTo: '',
    place: '',
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
        updateTraining(formData, props.editItem._id).then(response=>{
           emit('update:trainings', response)
           emit('update:isDialogVisible')
        }).finally(()=>{
          loading.value = false
          disabled.value = false
        })
    }else{
         addTraining(formData).then(response=>{
           emit('update:trainings', response)
           emit('update:isDialogVisible')
        }).finally(()=>{
          loading.value = false
          disabled.value = false
        })
    }


};
watch(() => props.isDialogVisible, (newValue, oldValue) => {
    formData.title= ''
    formData.desc= ''
    formData.provider= ''
    formData.dateFrom= ''
    formData.dateTo= ''
    formData.place= ''
})

watch(() => props.editItem, (newValue, oldValue) => {
    if(newValue){
      formData.title= newValue.title
      formData.desc= newValue.desc
      formData.provider= newValue.provider
      formData.dateFrom= newValue.dateFrom?newValue.dateFrom.split('T')[0]: ''
      formData.dateTo= newValue.dateTo?newValue.dateTo.split('T')[0]: ''
      formData.place= newValue.place
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