<template lang="pug">
v-dialog(max-width="600" v-model="dialog")
  template(v-slot:activator="{ props }")
    v-btn(icon flat v-bind="props")
      v-icon(:size="iconSize") {{ dataObj !== undefined ? 'mdi-pencil' : 'mdi-plus' }}
  template(v-slot:default="{ isActive }")
    v-card(:title="dataObj ?  $t('admin.editLang') : $t('admin.addLang')" :loading="loading")
      v-card-text
        v-form(ref="form" v-model="valid" lazy-validation)

          // code
          v-text-field.streched(
            :label="$t('admin.code')"
            v-model="formData.code"
            :rules="rules.required"
            :disabled="disabled"
            variant="solo")

          // title
          v-text-field.streched(
            :label="$t('forms.title')"
            v-model="formData.title"
            :rules="rules.required"
            :disabled="disabled"
            variant="solo")

          // intTitle
          v-text-field.streched(
            v-for="(intTitle, intTitleIndex) in formData.intTitle" :key="intTitleIndex"
            :label="`${$t('forms.title')} ${getIntTitle(intTitle.key, $i18n.locale)}`"
            v-model="formData.intTitle[intTitleIndex].value"
            :disabled="disabled"
            :rules="rules.required"
          )
          v-text-field.streched(
            v-if="props.isNew"
            :label="`${$t('forms.title')} ${formData.title || '...'}`"
            v-model="newIntTitle"
            :disabled="disabled"
            :rules="rules.required"
          )

      // actions
      v-card-actions
        v-btn(variant="text" @click="closeDialog()" :disabled="disabled") {{ $t('forms.cancel') }}
        v-btn(variant="elevated" color="primary" @click="validateForm()" :disabled="disabled") {{ $t('forms.save') }}
</template>

<script setup>
// imports
import { useMasterLangsStore } from '~/stores/master-langs';

// data
const { langs, loadingLangs, langsLoaded, getLangs, getIntTitle, createLang, updateLang } = useMasterLangsStore();
const props = defineProps(['dataObj', 'iconSize', 'isNew']);
const { t } = useI18n();

// dialog
const dialog = ref(null);
const msgType = ref('error');
const msgIsVisable = ref(false)
const msgText = ref('');

// form
const form = ref(null)
const valid = ref(false)
const loading = ref(false)
const disabled = ref(false)
const formData = ref({ intTitle: {} })
const newIntTitle = ref(null);
const rules = reactive({
  required: [v => !!v || t('forms.required')],
  reqList: [(v) => v.length > 0 || t('forms.required')],
})


// methods
const closeDialog = () => {
  msgIsVisable.value = false
  msgText.value = ''
  dialog.value = false
}

const validateForm = async () => {
  const { valid } = await form.value.validate();
  if (valid) return pushForm();
}

const pushForm = async () => {
  loading.value = true;
  disabled.value = true;
  try {
    props.dataObj ? await updateLang(formData.value, props.dataObj._id) : await createLang(formData.value);
  } catch (e) {
    console.log('error updating lang', e);
  } finally {
    loading.value = false;
    disabled.value = false;
    closeDialog();
  }
}

// hooks
onMounted(async () => {
  disabled.value = false;
  loading.value = false;
  msgIsVisable.value = false;
  await getLangs();
  formData.value.title = props.dataObj?.title || '';
  formData.value.code = props.dataObj?.code || '';
  newIntTitle.value = null;
  // setting intTitle
  formData.value.intTitle = [];
  for (let i = 0; i < langs.value.length; i++) {
    formData.value.intTitle.push({ key: langs.value[i].code, value: '' })
  }
  // if props.dataObj is provided
  if (props.dataObj?.intTitle) {
    for (let j = 0; j < formData.value.intTitle.length; j++) {
      const propsLang = props.dataObj.intTitle.find((e) => e.key == formData.value.intTitle[j].key);
      if (propsLang) formData.value.intTitle[j].value = propsLang.value;
    }
  }

})
</script>

<style lang="scss" scoped></style>