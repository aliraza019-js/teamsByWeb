<template lang="pug">
v-card(width="100%" flat :loading="loadingSkills")
  v-toolbar(title="Skills" flat color="transparent")
    .underline
    template(v-slot:prepend)
      v-btn(icon :to="localePath('/admin')")
        v-icon mdi-arrow-left
    //- template(v-slot:append)
      lazy-admin-edit-skill-group(isNew="true")

  v-text-field(
    clearable @click:clear="clearFilter()"
    v-model="skillsFilter"
    :placeholder="$t('admin.filterSkills')")

  v-card-text.px-0
    v-card.my-5(v-for="(skill, index) in filteredSkills" :key="skill._id" variant="tonal")
      v-toolbar
        v-toolbar-title {{ getIntTitleSkill(skill, $i18n.locale) }}
        v-spacer
        LazyAdminEditSkill(:data-obj="skill" icon-size="small")
      v-card-text
        v-list
          v-list-item
            v-list-item-subtitle title
            v-list-item-title {{ skill.title }}
          v-list-item
            v-list-item-subtitle categories
            v-list-item-title(v-for="(cat, catIndex) in skill.categories" :key="cat") {{ cat }}
          v-list-item(v-for="(lang, index2) in skill.intTitle" :key="index2")
            v-list-item-subtitle {{ $t('forms.title') }} {{ getIntLangTitle(lang.key, $i18n.locale) }}
            v-list-item-title {{ lang.value }}

</template>

<script setup>
// imports
import { useMasterSkillsStore } from '~/stores/master-skills';
import { useMasterLangsStore } from '@/stores/master-langs';

// page definition
definePageMeta({
  activeRoute: 'admin'
})

// data
const localePath = useLocalePath()
const { locale } = useI18n()
const { skills, getSkills, loadingSkills, getCatIntTitle, getIntTitleSkill } = useMasterSkillsStore();
const { getIntTitle: getIntLangTitle } = useMasterLangsStore();
const skillsFilter = ref('');
const filteredSkills = computed(() => {
  const filterText = skillsFilter.value.toLowerCase();

  return skills.value.filter(skill => {
    // Check if the skill title or code includes the filter text
    const matchesSkillTitle = skill.title.toLowerCase().includes(filterText) ||
      (skill.intTitle.some(title => title.value.toLowerCase().includes(filterText)));

    return matchesSkillTitle;
  });
});


//methods
const clearFilter = () => {
  skillsFilter.value = ''
}

const delSkill = async () => { }

// hooks
onMounted(async () => {
  getSkills();
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