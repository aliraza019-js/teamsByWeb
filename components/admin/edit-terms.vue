<template lang="pug">
ClientOnly
  v-btn(icon variant="text" :size="size || 'small'" @click="editTerm()")
    v-icon {{ props.mode && props.mode == 'edit' ? 'mdi-pencil' : 'mdi-plus'}}
  v-dialog(v-model="dialog" max-width="650px" height="100%")
    v-card(height="100%" :loading="loading")

      v-card-title.text-center 
        span {{ props.mode == 'edit' ? $t('admin.editTerm') : $t('admin.newTerm') }}

      v-card-text
        v-form(ref="form" v-model="valid" lazy-validation)
          v-text-field.streched(
            :label="t('admin.version')"
            v-model="formData.version"
            :rules="rules.required"
            variant="solo")

          .d-flex.align-center.justify-space-between
            span {{ $t('admin.validFrom') }}:
            Datepicker.elevation-3.py-3.my-2.text-center.pointer(
              v-model="formData.validFrom"
              :locale="$i18n.locale == 'de' ? de : enUS"
              :inputFormat="$i18n.locale == 'de' ? 'dd.MM.yyyy' : 'yyyy-MM-dd'"
              typeable)

          .d-flex.align-center.justify-space-between
            span {{ $t('admin.validUntil') }}:
            Datepicker.elevation-3.py-3.my-2.text-center.pointer(
              v-model="formData.validUntil" 
              :locale="$i18n.locale == 'de' ? de : enUS"
              :inputFormat="$i18n.locale == 'de' ? 'dd.MM.yyyy' : 'yyyy-MM-dd'"
              typeable)

          p {{ $t('admin.content') }}

          ts-editor.pa-2.elevation-3.rounded(v-model="formData.content")

          v-alert.mt-3(v-if="msgIsVisable" variant="tonal" :type="msgType" closable) {{ msgText }} some msg


      v-card-actions.d-flex.align-center.justify-center
        v-btn(variant="text" @click="closeDialog()") {{ $t('forms.cancel') }}
        v-btn(
          color="secondary" 
          variant="elevated" 
          :disabled="disabled"
          :loading="loading"
          @click="validateForm()") {{ $t('forms.save') }}
</template>

<script setup>
// imports
import Datepicker from 'vue3-datepicker';
import { de, enUS } from 'date-fns/locale';
import { DatetimeFormat } from 'vue-i18n';

// data
const props = defineProps(['mode', 'size', 'dataObj'])
const { t } = useI18n()
const emit = defineEmits(['updated'])

// dialog
const dialog = ref(null)
const msgType = ref('error')
const msgText = ref('')
const msgIsVisable = ref(false)

// form
const form = ref(null)
const valid = ref(false)
const loading = ref(false)
const disabled = ref(false)
const formData = ref({})
const rules = reactive({
  required: [v => !!v || t('forms.required')]
})

// methods
const editTerm = () => {
  // check if mode is edit and term is provided
  dialog.value = true
  msgIsVisable.value = false
  msgText.value = ''
}

const closeDialog = () => {
  msgIsVisable.value = false
  msgText.value = ''
  dialog.value = false
}

const validateForm = async () => {
  loading.value = true
  disabled.value = true
  const { valid } = await form.value.validate()
  if (valid) return pushTerm()
}

const pushTerm = async () => {
  try {
    if (props.mode == 'edit') {
      await myFetch(`/priv/terms/${props.dataObj._id}`, { method: 'PATCH', body: formData.value })
    } else {
      await myFetch('/priv/terms', { method: 'POST', body: formData.value })
    }
    msgText.value = t('forms.success')
    msgType.value = 'success'
  }
  catch (err) {
    msgText.value = err.message
    msgType.value = 'error'
  }
  msgIsVisable.value = true
  loading.value = false
  disabled.value = false
  emit('updated')
  setTimeout(() => {
    closeDialog()
  }, 2000)
}

// hooks
onMounted(() => {
  msgIsVisable.value = false
  formData.value.version = props.dataObj?.version || ''
  formData.value.validFrom = new Date(props.dataObj?.validFrom) || new Date()
  formData.value.content = props.dataObj?.content || ''

  if (props.dataObj?.validUntil) formData.value.validUntil = props.dataObj.validUntil

})
</script>