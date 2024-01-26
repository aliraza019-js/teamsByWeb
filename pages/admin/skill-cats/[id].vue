<template lang="pug">
v-card(:loading="false" width="100%" flat)
  v-toolbar(flat color="transparent" :title="getCatIntTitle(cat, $i18n.locale)" v-if="cat")
    template(v-slot:prepend)
      v-btn(icon @click="goBack()")
        v-icon mdi-arrow-left
    template(v-slot:append)
      LazyAdminEditSkillGroup(:data-obj="cat" icon-size="small")
      FormsConfirmDelete(icon-size="small" @on-confirmed="delCat(cat)")
  .underline

  //- cat details
  v-card-text
    v-expansion-panels()
      v-expansion-panel
        v-expansion-panel-title Details
        v-expansion-panel-text
          v-list
            v-list-item
              v-list-item-subtitle {{ $t('forms.title') }}
              v-list-item-title {{ cat.title }}
            v-list-item(v-for="(lang, index2) in cat.intTitle" :key="index2")
              v-list-item-subtitle {{ $t('forms.title') }} {{ getIntLangTitle(lang.key, $i18n.locale) }}
              v-list-item-title {{ lang.value }}

  //- list skills
  v-card(flat)
    v-card-text
      v-toolbar(title="skills" flat color="transparent")
        template(v-slot:append)
          LazyAdminEditSkill(isNew="true")
      v-divider
      v-list
        v-list-item(v-for="(skill, index) in skills" :key="skill._id")
          v-list-item-title {{ getIntTitleSkill(skill, $i18n.locale) }}


</template>

<script setup>
// imports
import { useMasterLangsStore } from '@/stores/master-langs';
import { useMasterSkillsStore } from '@/stores/master-skills';

// page definition
definePageMeta({
  activeRoute: 'admin'
})

// data
const route = useRoute();
const router = useRouter();
const { getIntTitle: getIntLangTitle, getLangs } = useMasterLangsStore();
const { getSkills, getSkillCats, getCat, getCatIntTitle, skillsByCat, getIntTitleSkill } = useMasterSkillsStore();
const cat = computed(() => {
  return getCat(route.params.id);
})
const skills = computed(() => {
  return skillsByCat(route.params.id);
})

// methods
const goBack = () => {
  router.back();
};
const delCat = async (catObj) => {
  console.log('del cat clicked');
}

// hooks
onMounted(async () => {
  await getLangs();
  await getSkills();
  await getSkillCats();

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