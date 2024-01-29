<template lang="pug">
v-card(:loading="loadingIndustries" width="100%" flat color="transparent")
  v-toolbar(flat color="transparent" :title="$t('admin.industry')" v-if="ind")
    template(v-slot:prepend)
      v-btn(icon @click="goBack()")
        v-icon mdi-arrow-left

  .underline
  //- industry details
  CommonCard.mt-5(v-if="ind")
    template(#title)
      h1.text-h6.overflow-hidden {{ getIntTitle(ind.code, $i18n.locale) }}
      div
        AdminEditIndustries(:data-obj="ind", icon-size="small")
        FormsConfirmDelete(icon-size="small" @on-confirmed="delInd(ind)")
    template(#body)
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

  v-toolbar.mt-10(:title="$t('admin.skillCats')" flat color="secondary" rounded)
    template(v-slot:append)
      LazyAdminEditSkillGroup(isNew="true")
      v-btn(icon flat @click="showDetails =  !showDetails")
        v-icon {{showDetails ? 'mdi-eye-off-outline' : 'mdi-eye-outline'}}

  CommonCard(v-if="ind" v-for="(cat, index) in skillCats" :key="index")
    template(#title)
      h2.text-h6.overflow-hidden {{ getCatIntTitle(cat, $i18n.locale) }}
      div
        LazyAdminEditSkillGroup(:data-obj="cat" icon-size="small")
        v-btn(flat icon :to="`/admin/skill-cats/${cat._id}`")
          v-icon mdi-arrow-right
    template(#body v-if="showDetails")
      v-list-item.mt-2
        v-list-item-subtitle {{ $t('forms.title') }}
        v-list-item-title {{ cat.title }}
      v-list-item(v-for="(lang, index2) in cat.intTitle" :key="index2")
        v-list-item-subtitle {{ $t('forms.title') }} {{ getIntLangTitle(lang.key, $i18n.locale) }}
        v-list-item-title {{ lang.value }}
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
const showDetails = ref(true)

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