<template lang="pug">
v-dialog(max-width="600" v-model="dialog")
  template(v-slot:activator="{ props }")
    v-btn(icon flat v-bind="props")
      v-icon(:size="iconSize") {{ dataObj !== undefined ? 'mdi-pencil' : 'mdi-plus' }}
  template(v-slot:default="{ isActive }")
    v-card(:title="dataObj ? $t('admin.editHelp') : $t('admin.addHelp')")
      v-card-text
        v-form(ref="form" v-model="valid" lazy-validation)
          v-expansion-panels(variant="default")
            v-expansion-panel(v-for="(lang, langIndex) in formData.intBody")
              v-expansion-panel-title {{ $t('admin.content') }} {{ getLangTitle(lang.key, $i18n.locale) }}
              v-expansion-panel-text some {}

      // actions
      v-card-actions
        v-btn(variant="text" @click="closeDialog()" :disabled="disabled") {{ $t('forms.cancel') }}
        v-btn(variant="elevated" color="primary" @click="validateForm()" :disabled="disabled") {{ $t('forms.save') }}

</template>

<script setup>
// imports
import { useMasterLangsStore } from '~/stores/master-langs';

// data
const { langs, langsLoaded, getLangs, getIntTitle: getLangTitle } = useMasterLangsStore();
const props = defineProps(['iconSize', 'dataObj']);

// dialog
const dialog = ref(null);

// form
const form = ref(null)
const valid = ref(false)
const loading = ref(false)
const disabled = ref(false)
const formData = ref({})

// methods
const closeDialog = () => {
  dialog.value = false;
}

const validateForm = async () => {
  console.log('validate form');
  pushForm();
}

const pushForm = async () => {
  console.log('pushed form');
  dialog.value = false;
}

// hooks
onMounted(async () => {
  if (langsLoaded != true) {
    await getLangs();
  }
  formData.value = {};
  disabled.value = false;
  loading.value = false;
  formData.value.intBody = [];
  for (let i = 0; i < langs.value.length; i++) {
    formData.value.intBody.push({ key: langs.value[i].code, value: '' });
  }
})

</script>