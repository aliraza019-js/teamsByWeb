import { defineStore } from "pinia";

export const useMasterSkillsStore = defineStore('skills', () => {
  // defining the states
  const skillsState: any = ref([]);
  const skillCatsState: any = ref([]);
  const loadingSkillsState = ref(false);
  const skillsLoadedState = ref(false);
  const skillCatsLoadedState = ref(false);

  // provider
  const skills = computed(() => skillsState);
  const skillCats = computed(() => skillCatsState);
  const loadingSkills = computed(() => loadingSkillsState);

  // methods
  const getSkills = async (refresh: boolean) => {
    // Check if already loaded
    if (skillsLoadedState.value && !refresh) return;

    loadingSkillsState.value = true;
    try {
      skillsState.value = await myFetch('/v2/master/skills', {method: 'GET'});
      skillsLoadedState.value = true;
    } catch (error) {
      console.error('Error fetching industries:', error);
    } finally {
      loadingSkillsState.value = false;
    }
  }

  const createSkill = async (skill: any) => {
    await myFetch('/v2/master/skills', { method: 'POST', body: skill });
    return await getSkills(true);
  }
  
  const updateSkill = async (skill: any, id: string) => {
    console.log('update skill called', skill, id);
    if (!id) throw 'no id provided';
    await myFetch(`/v2/master/skills/${id}`, { method: 'PUT', body: skill });
    return await getSkills(true);
  }
  
  const deleteSkill = async (skillId: string) => {
    await myFetch(`/v2/master/industries/${skillId}` , { method: 'DELETE' });
    await getSkills(true);
    return;
  } 

  const getSkillCats = async () => {
    // Check if already loaded
    if (skillCatsLoadedState.value) return;

    loadingSkillsState.value = true;
    try {
      const res = await myFetch('/v2/master/skill-cats', {method: 'GET'});
      console.log('res', res);
      skillCatsState.value = res;
      skillCatsLoadedState.value = true;
    } catch (error) {
      console.error('Error fetching industries:', error);
    } finally {
      loadingSkillsState.value = false;
    }
  }

  const getCatIntTitle = (skillCat: any, locale: string) => {
    const intTitleObj = skillCat.intTitle.find((item: any) => item.key == locale);
    return intTitleObj ? intTitleObj.value : skillCat.title;
  };

  const getSkillsByCategoryId = (categoryId: string) => {
    return skillsState.value.filter((skill: any) => skill.categories.includes(categoryId));
  };

  const getIntTitleSkill = (skill: any, locale: string) => {
    const intTitleObj = skill.intTitle.find((item: any) => item.key == locale);
    return intTitleObj ? intTitleObj.value : skill.title;
  };
  
  // grouping the skills
  const skillGroups = computed(() => {
    const grouped: any = {};
    for (const item of skillsState.value) {
      for (const category of item.categories) {
        if (!grouped[category]) {
          grouped[category] = [];
        }
        grouped[category].push(item);
      }
    }
    return grouped;
  })

  return {
    skills,
    createSkill,
    updateSkill,
    deleteSkill,
    skillGroups,
    skillCats,
    loadingSkills,
    getSkills,
    getSkillCats,
    getCatIntTitle,
    getSkillsByCategoryId,
    getIntTitleSkill
  };
})