<template lang="pug">
ClientOnly
  v-btn(icon variant="text" :size="size || 'small'" @click="editTerm()")
    v-icon {{ props.mode && props.mode == 'edit' ? 'mdi-pencil' : 'mdi-plus'}}
  v-dialog(v-model="dialog" max-width="650px" height="100%")
    v-card(height="100%")

      v-card-title.text-center 
        span new term

      v-card-text
        v-form(ref="form" v-model="valid" lazy-validation)
          v-text-field.streched(
            label="first form field"
            v-model="formData.version"
            :rules="rules.required"
            variant="solo")

          .d-flex.align-center.justify-space-between
            span valid from:
            Datepicker.elevation-3.py-3.my-2.text-center.pointer(
              v-model="formData.validFrom"
              :locale="$i18n.locale == 'de' ? de : enUS"
              :inputFormat="$i18n.locale == 'de' ? 'dd.MM.yyyy' : 'yyyy-MM-dd'"
              typeable)

          .d-flex.align-center.justify-space-between
            span valid to:
            Datepicker.elevation-3.py-3.my-2.text-center.pointer(
              v-model="formData.validTo" 
              :locale="$i18n.locale == 'de' ? de : enUS"
              :inputFormat="$i18n.locale == 'de' ? 'dd.MM.yyyy' : 'yyyy-MM-dd'"
              typeable)

          .d-flex
            p some wysiwyg editor

          .pa-2.elevation-3.rounded
            ts-editor(v-model="firstContent")


      v-card-actions.d-flex.align-center.justify-center
        v-btn(variant="text" @click="dialog = false") {{ $t('forms.cancel') }}
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

// tiptap
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

const editor = useEditor({
  content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
  extensions: [StarterKit]
})

// data
const props = defineProps(['mode', 'size'])
const { t } = useI18n()

const firstContent = ref('some first string')

const quillOptions = ref({
  debug: 'info',
  contentType: 'html',
  modules: {
    toolbar: ['bold', 'italic', 'underline']
  },
  theme: 'snow',
  placeholder: 'edit text here'
})

const picked = ref(new Date())

// data
const dialog = ref(null)
// form
const form = ref(null)
const valid = ref(false)
const loading = ref(false)
const disabled = ref(false)
const formData = ref({
  version: '',
  validFrom: new Date(),
  validTo: new Date()
})
const rules = reactive({
  required: [v => !!v || t('forms.required')]
})
const editorModel = ref('sdsd')

// methods
const rteUpdated = (content) => {
  console.log('content from rte', content)
}
const editTerm = () => {
  // check if mode is edit and term is provided
  dialog.value = true
  if (props.mode == 'edit') {
    console.log('mode is edit')
  } else {
    console.log('mode is add')
  }
}
const validateForm = async () => {
  const { valid } = await form.value.validate()
  if (valid) return uploadForm()
}
const uploadForm = async () => {
  console.log('uploading')
}
// hooks
onMounted(() => {
  // check if mode == 'edit' => copy provided obj to formData
  console.log('getting mode', t)
})
</script>