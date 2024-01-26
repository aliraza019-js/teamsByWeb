<template lang="pug">
v-card(:loading="loadingIndustries" width="100%" flat)
  v-toolbar(flat color="transparent" :title="getIntTitle(ind.code, $i18n.locale)" v-if="ind")
    template(v-slot:prepend)
      v-btn(icon @click="goBack()")
        v-icon mdi-arrow-left
    template(v-slot:append)
      AdminEditIndustries(:data-obj="ind", icon-size="small")
      FormsConfirmDelete(icon-size="small" @on-confirmed="delInd(ind)")
  .underline

  //- industry details
  v-card-text
    v-expansion-panels(color="primary")
      v-expansion-panel
        v-expansion-panel-title Details
        v-expansion-panel-text
          v-list
            v-list-item
              v-list-item-subtitle {{ $t('forms.title') }}
              v-list-item-title {{ ind.title }}
            v-list-item
              v-list-item-subtitle {{ $t('admin.code') }}
              v-list-item-title {{ ind.code }}
            v-list-item(v-for="(lang, index2) in ind.intTitle" :key="index2")
              v-list-item-subtitle {{ $t('forms.title') }} {{ getIntLangTitle(lang.key, $i18n.locale) }}
              v-list-item-title {{ lang.value }}

  //- list categories
  v-card(flat)
    v-card-text
      v-toolbar(:title="$t('admin.skillCats')" flat color="transparent")
        template(v-slot:append)
          LazyAdminEditSkillGroup(isNew="true")
      v-divider(color="primary")
      v-list
        v-list-item(
          v-for="(cat, index) in skillCats"
          :key="index"
          append-icon="mdi-arrow-right"
          :to="`/admin/skill-cats/${cat._id}`")
          v-list-item-title {{ getCatIntTitle(cat, $i18n.locale) }}
</template>

<script setup>
// imports
import { useMasterIndustriesStore } from '@/stores/master-industries';
import { useMasterLangsStore } from '@/stores/master-langs';
import { useMasterSkillsStore } from '@/stores/master-skills';

// page definition
definePageMeta({
  activeRoute: 'admin'
})

// data
const route = useRoute();
const router = useRouter();
const { getInd, getIndustries, loadingIndustries, getIntTitle, deleteInd } = useMasterIndustriesStore();
const { getIntTitle: getIntLangTitle, getLangs } = useMasterLangsStore();
const { getSkillCats, skillGroupsByInd, getCatIntTitle } = useMasterSkillsStore();
const ind = computed(() => {
  return getInd(route.params.id);
})
const skillCats = computed(() => {
  return skillGroupsByInd(route.params.id);
})

// methods
const delInd = async (ind) => {
  await deleteInd(ind._id);
  navigateTo('/admin/industries');
}
const goBack = () => {
  router.back();
};

// hooks
onMounted(async () => {
  await getSkillCats();
  await getLangs();
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