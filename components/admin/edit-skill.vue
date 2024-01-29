<template lang="pug">
v-dialog(max-width="600" v-model="dialog")
  template(v-slot:activator="{ props }")
    v-btn(icon v-bind="props" flat)
      v-icon(:size="iconSize") {{ dataObj !== undefined ? 'mdi-pencil' : 'mdi-plus' }}
  template(v-slot:default="{ isActive }")
    v-card(:title="dataObj ? $t('admin.editSkill') : $t('admin.addSkill')" :loading="loading")
      v-card-text
        v-form(ref="form" v-model="valid" lazy-validation)

          // title
          v-text-field.streched(
            :label="$t('forms.title')"
            v-model="formData.title"
            :rules="rules.required"
            :disabled="disabled"
            variant="solo")

          //- industry select
          v-select(
            v-model="formData.catId"
            :items="localizedCats"
            :item-props="itemProps"
            :label="$t('admin.skillCats')" 
            item-value="_id"
            :disabled="disabled"
            title="localizedTitle"
            @update:modelValue="catSelected()"
            :rules="rules.required")


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
import { useMasterIndustriesStore } from '~/stores/master-industries';
import { useMasterSkillsStore } from '~/stores/master-skills';
import { isProxy, toRaw } from 'vue';

// data
const props = defineProps(['isNew', 'iconSize', 'dataObj']);
const { locale, t } = useI18n();
const { langs, getIntTitle, langsLoaded, getLangs } = useMasterLangsStore();
const { locIndustries, getIndustries, getIndIntTitle } = useMasterIndustriesStore();
const { createSkill, updateSkill, getSkillCats, locCats, catById } = useMasterSkillsStore();
const localizedCats = locCats(locale.value);

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
const formData = ref({})
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

const itemProps = (item) => {
  return {
    title: item.localizedTitle,
    subtitle: getIndIntTitle(item.indId, locale.value)
  }
}

const catSelected = () => {
  const selectedCat = catById(formData.value.catId);
  formData.value.indId = selectedCat.indId;
}

const validateForm = async () => {
  const { valid } = await form.value.validate();
  if (valid) return pushForm();
}

const pushForm = async () => {
  console.log('push skill', formData.value);
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
  disabled.value = false;
  loading.value = false;
  msgIsVisable.value = false;
  await getLangs();
  await getIndustries();
  await getSkillCats();
  formData.value.title = props.dataObj?.title || '';
  formData.value.indId = props.dataObj?.indId || null;
  formData.value.catId = props.dataObj?.catId || null;
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