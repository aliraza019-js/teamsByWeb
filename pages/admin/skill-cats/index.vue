<template lang="pug">
v-card(width="100%" flat :loading="loadingSkills")
  v-toolbar(title="Skill categories" flat color="transparent")
    .underline
    template(v-slot:prepend)
      v-btn(icon :to="localePath('/admin')")
        v-icon mdi-arrow-left
    template(v-slot:append)
      lazy-admin-edit-skill-group(isNew="true")

  v-select(
    v-model="indSelect" 
    :items="localizedIndustries" 
    :label="$t('admin.industries')" 
    multiple clearable 
    item-value="code" 
    title="localizedTitle")
    template(v-slot:selection="{item, index}")
      v-chip(v-if="index < 2")
        span {{ item.title }}
      span.text-grey.text-caption.align-self-center(v-if="index === 2") (+{{ indSelect.length - 2 }} others)

  //- text search
  //- v-card-text
    v-text-field(
      clearable @click:clear="clearFilter()"
      v-model="skillsFilter"
      :placeholder="$t('admin.filterSkills')")

  v-card-text
    v-card.ma-5(v-for="(cat, index) in filteredSkillCats" :key="cat._id" variant="tonal")
      v-toolbar
        v-toolbar-title {{ getCatIntTitle(cat, $i18n.locale) }}
        v-spacer 
        lazy-admin-edit-skill-group(:data-obj="cat" icon-size="small")
        v-btn(icon)
          v-icon mdi-plus
      v-card-text
        v-list
          // title in different languages
          v-list-item(v-for="(title, indexTitle) in cat.intTitle")
            v-list-item-subtitle {{ $t('forms.title') }} {{ getIntLangTitle(title.key, $i18n.locale) }}
            v-list-item-title {{ title.value }}

          // industries
          v-list-item
            v-list-item-subtitle {{ $t('admin.industries') }}
            v-list-item-title(v-for="(ind, indexInd) in cat.industries" :key="indexInd") {{ getIndustryIntTitle(ind, $i18n.locale) }}



          v-expansion-panels.mt-5(color="transparent")
            v-expansion-panel(color="transparent" elevation="0")
              v-expansion-panel-title {{ $t('admin.skills') }}
              v-expansion-panel-text
                v-list
                  v-list-item(v-for="(skill, indexS) in getSkillsByCategoryId(cat._id)") {{ getIntTitleSkill(skill, $i18n.locale) }}          


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
const { getIntTitle: getIntLangTitle } = useMasterLangsStore();
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
    return cat.industries.some(industry => indSelect.value.includes(industry));
  });
});


//methods
const clearFilter = () => {
  skillsFilter.value = ''
}

const delCat = async () => { }
const delSkill = async () => { }

// hooks
onMounted(async () => {
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