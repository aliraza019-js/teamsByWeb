<template lang="pug">
v-card(width="100%" flat :loading="loadingSkills")
  v-toolbar(title="Skills" flat color="transparent")
    .underline
    template(v-slot:prepend)
      v-btn(icon :to="localePath('/admin')")
        v-icon mdi-arrow-left
    template(v-slot:append)
      lazy-admin-edit-skill-group(isNew="true")

  v-select(v-model="indSelect" :items="localizedIndustries" :label="$t('admin.industries')" multiple clearable item-value="code" title="localizedTitle")
    template(v-slot:selection="{item, index}")
      v-chip(v-if="index < 2")
        span {{ item.title }}
      span.text-grey.text-caption.align-self-center(v-if="index === 2") (+{{ indSelect.length - 2 }} others)

  v-card-text
    v-card.ma-5(v-for="(cat, index) in skillCats" :key="index" variant="tonal")
      v-toolbar
        v-toolbar-title {{ getIntTitle(cat, $i18n.locale) }}
        v-spacer 
        lazy-admin-edit-skill-group(:data-obj="cat" icon-size="small")
        v-btn(icon)
          v-icon mdi-plus
      v-card-text
        v-list
          v-list-item
            v-list-item-subtitle {{ $t('admin.industries') }}
            v-list-item-title(v-for="(ind, indexInd) in cat.industries" :key="indexInd") {{ getIndustryIntTitle(ind, $i18n.locale) }}

          v-expansion-panels(color="transparent")
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

// page definition
definePageMeta({
  activeRoute: 'admin'
})

// data
const localePath = useLocalePath()
const { locale } = useI18n()
const { skills, skillGroups, skillCats, loadingSkills, getSkills, getSkillCats, getIntTitle, getSkillsByCategoryId, getIntTitleSkill } = useMasterSkillsStore();
const { industries, locIndustries, getIntTitle: getIndustryIntTitle } = useMasterIndustriesStore();
const localizedIndustries = locIndustries(locale.value);
const indSelect = ref()
const showEditSkillGroup = ref(false);

//methods

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