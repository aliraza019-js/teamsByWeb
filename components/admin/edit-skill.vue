<template lang="pug">
v-dialog(max-width="600" v-model="dialog")
  template(v-slot:activator="{ props }")
    v-btn(icon v-bind="props")
      v-icon(:size="iconSize") {{ dataObj !== undefined ? 'mdi-pencil' : 'mdi-plus' }}
  template(v-slot:default="{ isActive }")
    v-card(title="dialog" :loading="loading")
      // here we put the form
      v-card-text
        v-form(ref="form" v-model="valid" lazy-validation)

          // title
          v-text-field.streched(
            :label="$t('forms.title')"
            v-model="formData.title"
            :rules="rules.required"
            :disabled="disabled"
            variant="solo")

          //- category select
          //- multi


          v-text-field.streched(
            v-for="(intTitle, intTitleIndex) in formData.intTitle" :key="intTitleIndex"
            :label="`${$t('forms.title')} ${getIntTitle(intTitle.key, $i18n.locale)}`"
            v-model="formData.intTitle[intTitleIndex].value"
            :disabled="disabled"
            :rules="rules.required")

      v-card-actions
        v-btn(variant="text" @click="closeDialog()" :disabled="disabled") {{ $t('forms.cancel') }}
        v-btn(variant="elevated" color="primary" @click="validateForm()" :disabled="disabled") {{ $t('forms.save') }}
</template>

<script setup>
// imports
import { useMasterLangsStore } from '~/stores/master-langs';
import { useMasterSkillsStore } from '~/stores/master-skills';

// data
const props = defineProps(['isNew', 'iconSize', 'dataObj']);
const { t } = useI18n();
const emit = defineEmits(['onUpdate']);
const { langs, getIntTitle, langsLoaded, getLangs } = useMasterLangsStore();
const { createSkill, updateSkill } = useMasterSkillsStore();

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
    props.dataObj ? await updateSkill(formData.value, props.dataObj._id) : await createSkill(formData.value);
  } catch (e) {
    console.log('error updating industry', e);
  } finally {
    loading.value = false;
    disabled.value = false;
    closeDialog();
  }
}

// hooks
onMounted(async () => {
  console.log('props.dataObj', props.dataObj);
  disabled.value = false;
  loading.value = false;
  msgIsVisable.value = false;
  formData.value.title = props.dataObj?.title || '';
  if (langsLoaded.value != true) {
    await getLangs();
  }
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