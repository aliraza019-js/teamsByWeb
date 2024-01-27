<template lang="pug">
v-card(width="100%" flat :loading="loadingCountries")
  v-toolbar(flat color="transparent" :title="$t('admin.supportedCountries')")
    .underline
    template(v-slot:prepend)
      v-btn(icon :to="localePath('/admin')")
        v-icon mdi-arrow-left
    template(v-slot:append)
      LazyAdminEditCountries

  v-card-text
    v-card.ma-5(v-for="(country, index) in countries" :key="country._id" variant="tonal")
      v-toolbar(:title="intTitle(country._id, $i18n.locale)")
        template(v-slot:append)
          FormsConfirmDelete(icon-size="small" @on-confirmed="delCountry(country)")
          LazyAdminEditCountries(:data-obj="country" icon-size="small")
      v-card-text
        v-list
          v-list-item
            v-list-item-subtitle {{ $t('forms.title') }}
            v-list-item-title {{ country.title }}
          v-list-item
            v-list-item-subtitle {{ $t('admin.code') }}
            v-list-item-title {{ country.code }}
          v-list-item(v-for="(intTitle, index) in country.intTitle" :key="index")
            v-list-item-subtitle {{ $t('forms.title') }} {{ getIntTitle(intTitle.key, $i18n.locale) }}
            v-list-item-title {{ intTitle.value }}
</template>

<script setup>
// imports
import { useMasterLangsStore } from '~/stores/master-langs';
import { useMasterCountriesStore } from '~/stores/master-countries';

// page definition
definePageMeta({
  activeRoute: 'admin'
})

// data
const { langs, loadingLangs, getLangs, getIntTitle, deleteLang: delLang } = useMasterLangsStore();
const { countries, loadingCountries, intTitle, deleteCountry } = useMasterCountriesStore();
const localePath = useLocalePath();
// const { } = useMasterCountriesStore();
// const localePath = useLocalePath();

// methods
const delCountry = async (country) => {
  console.log('del country', country);
  deleteCountry(country._id);
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
