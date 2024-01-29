<template lang="pug">
v-card(:loading="false" width="100%" flat color="transparent")
  v-toolbar(flat color="transparent" :title="$t('admin.skillCat')" v-if="cat")
    template(v-slot:prepend)
      v-btn(icon @click="goBack()")
        v-icon mdi-arrow-left

  .underline

  CommonCard.mt-5(v-if="cat")
    template(#title)
      h1.text-h6.overflow-hidden {{ getCatIntTitle(cat, $i18n.locale) }}
      div
        LazyAdminEditSkillGroup(:data-obj="cat" icon-size="small")
        FormsConfirmDelete(icon-size="small" @on-confirmed="delCat(cat)")
    template(#body)
      v-list
        v-list-item
          v-list-item-subtitle {{ $t('forms.title') }}
          v-list-item-title {{ cat.title }}
        v-list-item(v-for="(lang, index2) in cat.intTitle" :key="index2")
          v-list-item-subtitle {{ $t('forms.title') }} {{ getIntLangTitle(lang.key, $i18n.locale) }}
          v-list-item-title {{ lang.value }}

  v-toolbar.mt-10.mb-5(:title="$t('admin.skills')" flat color="secondary" rounded)
    template(v-slot:append)
      v-btn(icon flat @click="showDetails =  !showDetails")
        v-icon {{showDetails ? 'mdi-eye-off-outline' : 'mdi-eye-outline'}}
      LazyAdminEditSkill(isNew="true")

  CommonCard(v-if="skills" v-for="(skill, index) in skills" :key="skill._id")
    template(#title)
      h2.text-h6.overflow-hidden {{ getIntTitleSkill(skill, $i18n.locale) }}
      LazyAdminEditSkill(:data-obj="skill" icon-size="small")
    template(#body v-if="showDetails")
      v-list
        v-list-item
          v-list-item-subtitle {{ $t('forms.title') }}
          v-list-item-title {{ skill.title }}
        v-list-item
          v-list-item-subtitle {{ $t('admin.skillCat') }}
          v-list-item-title {{ skillCatIntTitle(skill.catId, $i18n.locale) }}
        v-list-item
          v-list-item-subtitle {{ $t('admin.industry') }}
          v-list-item-title {{ getIndIntTitle(skill.indId, $i18n.locale) }}
        v-list-item(v-for="(lang, index2) in skill.intTitle" :key="index2")
          v-list-item-subtitle {{ $t('forms.title') }} {{ getIntLangTitle(lang.key, $i18n.locale) }}
          v-list-item-title {{ lang.value }}


    //- list skills
    v-divider.my-5
    v-toolbar(title="skills" color="primary")
      template(v-slot:append)
        LazyAdminEditSkill
    v-card.ma-3(
      variant="tonal"
      v-for="(skill, index) in skills" :key="skill._id"
      :title="getIntTitleSkill(skill, $i18n.locale)")
      v-divider
      v-card-text
        v-list
          v-list-item
            v-list-item-subtitle {{ $t('forms.title') }}
            v-list-item-title {{ skill.title }}
          v-list-item
            v-list-item-subtitle {{ $t('admin.skillCat') }}
            v-list-item-title {{ skillCatIntTitle(skill.catId, $i18n.locale) }}
          v-list-item
            v-list-item-subtitle {{ $t('admin.industry') }}
            v-list-item-title {{ getIndIntTitle(skill.indId, $i18n.locale) }}
          v-list-item(v-for="(lang, index2) in skill.intTitle" :key="index2")
            v-list-item-subtitle {{ $t('forms.title') }} {{ getIntLangTitle(lang.key, $i18n.locale) }}
            v-list-item-title {{ lang.value }}
</template>

<script setup>
// imports
import { useMasterLangsStore } from '@/stores/master-langs';
import { useMasterSkillsStore } from '@/stores/master-skills';
import { useMasterIndustriesStore } from '~/stores/master-industries';

// page definition
definePageMeta({
  activeRoute: 'admin'
})

// data
const route = useRoute();
const router = useRouter();
const { getIntTitle: getIntLangTitle, getLangs } = useMasterLangsStore();
const { getSkills, getSkillCats, getCat, getCatIntTitle, skillsByCat, getIntTitleSkill, skillCatIntTitle } = useMasterSkillsStore();
const { getIndIntTitle } = useMasterIndustriesStore();
const cat = computed(() => {
  return getCat(route.params.id);
})
const skills = computed(() => {
  return skillsByCat(route.params.id);
})
const showDetails = ref(true);

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