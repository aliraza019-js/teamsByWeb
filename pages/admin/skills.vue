<template lang="pug">
v-card(width="100%" flat :loading="loadingSkills")
  v-toolbar(title="Skills" flat color="transparent")
    .underline
    template(v-slot:prepend)
      v-btn(icon :to="localePath('/admin')")
        v-icon mdi-arrow-left

  v-card-text
    v-card.ma-5(v-for="(cat, index) in skillCats" :key="index" variant="tonal")
      v-toolbar
        v-toolbar-title {{ getIntTitle(cat, $i18n.locale) }}
        v-spacer
        v-btn(icon)
          v-icon mdi-pencil
        v-btn(icon)
          v-icon mdi-plus
      v-card-text
        v-list
          v-list-item
            v-list-item-subtitle industries
            v-list-item-title 
              span(v-for="(ind, indexInd) in cat.industries" :key="indexInd")  {{ getIndustryIntTitle(ind, $i18n.locale) }}

          v-expansion-panels(color="transparent")
            v-expansion-panel(color="transparent" elevation="0")
              v-expansion-panel-title skills
              v-expansion-panel-text {{ getIntTitle(cat, $i18n.locale) }}


</template>

<script setup>
// imports
import { useMasterIndustriesStore } from '~/stores/master-industries';
import { useMasterSkillsStore } from '~/stores/master-skills';

// page definition
definePageMeta({
  activeRoute: 'admin'
})

// data
const localePath = useLocalePath()
const { skills, skillGroups, skillCats, loadingSkills, getSkills, getSkillCats, getIntTitle } = useMasterSkillsStore();
const { getIntTitle: getIndustryIntTitle } = useMasterIndustriesStore();

// grouping the skills


// methods

// hooks
onMounted(async () => {
  getSkills();
  getSkillCats();
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