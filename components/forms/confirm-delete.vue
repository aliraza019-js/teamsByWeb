<template lang="pug">
v-dialog(max-width="600" v-model="dialog")
  template(v-slot:activator="{ props }")
    v-btn(icon flat v-bind="props")
      v-icon(:size="iconSize") mdi-delete
  template(v-slot:default="{ isActive }")
    v-card(:title="$t('forms.warning')")
      v-card-text
        p {{ $t('forms.reallyDelete') }}
      v-card-actions
        v-btn(variant="text" @click="closeDialog()") {{ $t('forms.cancel') }}
        v-btn(variant="elevated" color="primary" @click="confirmed()") {{ $t('forms.ok') }}
</template>

<script setup>
// imports

// data
const props = defineProps(['iconSize']);
const emit = defineEmits(['onConfirmed']);

// dialog
const dialog = ref(null);

// methods
const confirmed = () => {
  emit('onConfirmed');
  closeDialog();
}
const closeDialog = () => {
  dialog.value = false;
}

</script>