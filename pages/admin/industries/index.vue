<template lang="pug">
v-card(width="100%" flat :loading="loadingIndustries")
  v-toolbar(:title="$t('admin.industries')" flat color="transparent")
    .underline
    template(v-slot:prepend)
      v-btn(icon :to="localePath('/admin')")
        v-icon mdi-arrow-left
    template(v-slot:append)
      AdminEditIndustries

  v-card-text
    v-text-field(
      clearable @click:clear="clearFilter()"
      v-model="indFilter"
      :placeholder="$t('admin.filterIndustries')")

  v-card-text
    v-card.ma-5(v-for="(item, index) in filteredIndustries" :key="item.code" variant="tonal")
      v-toolbar(:title="getIntTitle(item.code, $i18n.locale)")
        AdminEditIndustries(:data-obj="item", icon-size="small")
        v-btn(flat icon :to="`/admin/industries/${item._id}`")
          v-icon mdi-arrow-right

      v-card-text
        v-list
          v-list-item
            v-list-item-subtitle Code
            v-list-item-title {{ item.code }}
          v-list-item(v-for="(lang, index2) in item.intTitle" :key="index2")
            v-list-item-subtitle {{ $t('forms.title') }} {{ getIntLangTitle(lang.key, $i18n.locale) }}
            v-list-item-title {{ lang.value }}

</template>

<script setup>
// imports
import { useMasterIndustriesStore } from '@/stores/master-industries';
import { useMasterLangsStore } from '@/stores/master-langs';

// page definition
definePageMeta({
  activeRoute: 'admin'
})

// data
const { industries, loadingIndustries, getIndustries, getIntTitle, deleteInd } = useMasterIndustriesStore();
const { getIntTitle: getIntLangTitle } = useMasterLangsStore();
const localePath = useLocalePath();
const { locale } = useI18n();
const indFilter = ref('');
const filteredIndustries = computed(() => {
  const filterText = indFilter.value.toLowerCase();

  return industries.value.filter(industry => {
    // Check if the title or code includes the filter text
    const matchesTitleOrCode = industry.title.toLowerCase().includes(filterText) ||
      industry.code.toLowerCase().includes(filterText);

    // Find the international title for the current locale
    const intTitleObj = industry.intTitle.find(t => t.key === locale.value);
    const intTitle = intTitleObj ? intTitleObj.value.toLowerCase() : '';

    // Check if the international title includes the filter text
    const matchesIntTitle = intTitle.includes(filterText);

    return matchesTitleOrCode || matchesIntTitle;
  });
});

// methods
const clearFilter = () => {
  indFilter.value = ''
}

const delInd = async (ind) => {
  await deleteInd(ind._id)
}

// hooks
onMounted(async () => {
  await getIndustries();
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