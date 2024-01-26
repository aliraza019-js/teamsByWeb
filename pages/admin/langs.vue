<template lang="pug">
v-card(width="100%" flat :loading="loadingLangs")
  v-toolbar(:title="$t('admin.supportedLangs')" flat color="transparent")
    .underline
    template(v-slot:prepend)
      v-btn(icon :to="localePath('/admin')")
        v-icon mdi-arrow-left
    template(v-slot:append)
      LazyAdminEditLangs(is-new="true")

  v-card-text
    v-card.ma-5(v-for="(lang, index) in langs" :key="index" variant="tonal")
      v-toolbar(:title="getIntTitle(lang.code, $i18n.locale )")
        template(v-slot:append)
          FormsConfirmDelete(icon-size="small" @on-confirmed="deleteLang(item)")
          LazyAdminEditLangs(:dataObj="lang" iconSize="small")
      v-card-text
        v-list
          v-list-item
            v-list-item-subtitle Code
            v-list-item-title {{ lang.code }}
          v-list-item(v-for="(intTitle, index) in lang.intTitle" :key="index")
            v-list-item-subtitle {{ $t('forms.title') }} {{ getIntTitle(intTitle.key, $i18n.locale) }}
            v-list-item-title {{ intTitle.value }}

</template>

<script setup>
// imports
import { useMasterLangsStore } from '~/stores/master-langs';

// page definition
definePageMeta({
  activeRoute: 'admin'
})

// data
const { langs, loadingLangs, getLangs, getIntTitle, deleteLang: delLang } = useMasterLangsStore();
const localePath = useLocalePath();

// methods
const deleteLang = async (lang) => {
  await delLang(lang._id);
}

// hooks
onMounted(async () => {
  getLangs();
});
</script>

<style lang="scss" scoped>
.underline {
  position: absolute;
  width: 100%;
  left: 0px;
  top: 56px;
  right: 0px;
  height: 1px;
  background-color: rgb(204, 204, 204);
}
</style>