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

          //- industry
          v-select(
            v-model="formData.industries" 
            :items="localizedIndustries" 
            :label="$t('admin.industries')" 
            multiple clearable 
            item-value="code" 
            :disabled="disabled"
            title="localizedTitle" 
            :rules="rules.reqList")
            template(v-slot:selection="{item, index}")
              v-chip(v-if="index < 2")
                span {{ item.title }}
              span.text-grey.text-caption.align-self-center(v-if="index === 2") (+{{ indSelect.length - 2 }} others)



          v-text-field.streched(
            v-for="(intTitle, intTitleIndex) in formData.intTitle" :key="intTitleIndex"
            :label="`${$t('forms.title')} ${getIntTitle(intTitleIndex, $i18n.locale)}`"
            v-model="formData.intTitle[intTitleIndex]"
            :disabled="disabled"
            :rules="rules.required"
          )

      v-card-actions
        v-btn(variant="text" @click="closeDialog()" :disabled="disabled") {{ $t('forms.cancel') }}
        v-btn(variant="elevated" color="primary" @click="validateForm()" :disabled="disabled") {{ $t('forms.save') }}
</template>

<script setup>
// imports
import { useMasterIndustriesStore } from '~/stores/master-industries';
import { useMasterLangsStore } from '~/stores/master-langs';

// data
const props = defineProps(['isNew', 'iconSize', 'dataObj']);
const { locale } = useI18n()
const emit = defineEmits(['onUpdate']);
const { locIndustries } = useMasterIndustriesStore();
const localizedIndustries = locIndustries(locale.value);
const { langs, getIntTitle, langsLoaded, getLangs } = useMasterLangsStore();

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
  // convert intTitle object into array
  let newObj = {
    ...formData.value
  }
  let newIntTitle = []
  Object.keys(formData.value.intTitle).forEach(key => {
    newIntTitle.push({ [key]: formData.value.intTitle[key] });
  });
  newObj.intTitle = newIntTitle
  console.log('form', newObj);
  // push to db (via store)
}

// hooks
onMounted(async () => {
  disabled.value = false;
  loading.value = false;
  msgIsVisable.value = false;
  formData.value.title = props.dataObj?.title || '';
  formData.value.industries = props.dataObj?.industries || [];
  if (langsLoaded.value != true) {
    await getLangs();
  }
  // // setting intTitle
  if (props.dataObj) {
    for (let i = 0; i < props.dataObj.intTitle.length; i++) {
      const thisKey = Object.keys(props.dataObj.intTitle[i])[0];
      formData.value.intTitle[thisKey] = props.dataObj.intTitle[i][thisKey];
    }
  } else {
    for (let i = 0; i < langs.value.length; i++) {
      formData.value.intTitle[langs.value[i].code] = ''
    }
  }
})
</script>

<style lang="scss" scoped></style>