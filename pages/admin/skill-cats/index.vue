<template lang="pug">
v-card(width="100%" flat :loading="loadingSkills" color="transparent")
  v-toolbar(:title="$t('admin.skillCats')" flat color="transparent")
    template(v-slot:prepend)
      v-btn(icon :to="localePath('/admin')")
        v-icon mdi-arrow-left
    template(v-slot:append)
      v-btn(icon flat @click="showDetails =  !showDetails")
        v-icon {{showDetails ? 'mdi-eye-off-outline' : 'mdi-eye-outline'}}
      lazy-admin-edit-skill-group(isNew="true")
  .underline

  ClientOnly
    v-select(
      v-model="indSelect" 
      :items="localizedIndustries" 
      :label="$t('admin.industries')" 
      multiple clearable 
      item-value="_id" 
      title="localizedTitle")
      template(v-slot:selection="{item, index}")
        v-chip(v-if="index < 2")
          span {{ item.title }}
        span.text-grey.text-caption.align-self-center(v-if="index === 2") (+{{ indSelect.length - 2 }} others)

  CommonCard(v-for="(cat, index) in filteredSkillCats" :key="cat._id")
    template(#title)
      h1.text-h6.overflow-hidden {{ getCatIntTitle(cat, $i18n.locale) }}
      div
        LazyAdminEditSkillGroup(:data-obj="cat" icon-size="small")
        v-btn(flat icon :to="localePath(`/admin/skill-cats/${cat._id}`)")
          v-icon mdi-arrow-right

    template(#body)
      v-expand-transition
        v-list(v-show="showDetails")
          v-list-item.mt-2
            v-list-item-subtitle {{ $t('forms.title') }}
            v-list-item-title {{ cat.title }}
          v-list-item(v-for="(lang, index2) in cat.intTitle" :key="index2")
            v-list-item-subtitle {{ $t('forms.title') }} {{ getIntLangTitle(lang.key, $i18n.locale) }}
            v-list-item-title {{ lang.value }}
</template>

<script setup>
// imports
import { useMasterIndustriesStore } from '~/stores/master-industries';
import { useMasterSkillsStore } from '~/stores/master-skills';
import { useMasterLangsStore } from '@/stores/master-langs';

// page definition
definePageMeta({
  activeRoute: 'admin'
})

// data
const localePath = useLocalePath()
const { locale } = useI18n()
const { skills, skillGroups, skillCats, loadingSkills, getSkills, getSkillCats, getCatIntTitle, getSkillsByCategoryId, getIntTitleSkill } = useMasterSkillsStore();
const { industries, getIndustries, locIndustries, getIntTitle: getIndustryIntTitle } = useMasterIndustriesStore();
const { getIntTitle: getIntLangTitle, getLangs } = useMasterLangsStore();
const localizedIndustries = locIndustries(locale.value);
const indSelect = ref()
const showEditSkillGroup = ref(false);
const skillsFilter = ref('');
const filteredSkillCats = computed(() => {
  if (!indSelect.value || indSelect.value.length === 0) {
    return skillCats.value; // Return all skill categories if no industry is selected
  }
  return skillCats.value.filter(cat => {
    // Check if any of the selected industries is included in the category's industries
    return indSelect.value.includes(cat.indId);
  });
});
const showDetails = ref(true);


//methods
const clearFilter = () => {
  skillsFilter.value = ''
}

const delCat = async () => { }
const delSkill = async () => { }

// hooks
onMounted(async () => {
  await getLangs();
  await getSkills();
  await getSkillCats();
  await getIndustries();
})
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