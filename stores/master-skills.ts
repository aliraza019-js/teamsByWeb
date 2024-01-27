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
    if (!id) throw 'no id provided';
    await myFetch(`/v2/master/skills/${id}`, { method: 'PUT', body: skill });
    return await getSkills(true);
  }
  
  const deleteSkill = async (skillId: string) => {
    await myFetch(`/v2/master/skills/${skillId}` , { method: 'DELETE' });
    await getSkills(true);
    return;
  }

  const getSkillCats = async (refresh: boolean) => {
    // Check if already loaded
    if (skillCatsLoadedState.value && !refresh) return;

    loadingSkillsState.value = true;
    try {
      const res = await myFetch('/v2/master/skill-cats', {method: 'GET'});
      skillCatsState.value = res;
      skillCatsLoadedState.value = true;
    } catch (error) {
      console.error('Error fetching industries:', error);
    } finally {
      loadingSkillsState.value = false;
    }
  }

  const createSkillCat = async (cat: any) => {
    await myFetch('/v2/master/skill-cats', { method: 'POST', body: cat });
    return await getSkillCats(true);
  }
  
  const updateSkillCat = async (cat: any, id: string) => {
    if (!id) throw 'no id provided';
    await myFetch(`/v2/master/skill-cats/${id}`, { method: 'PUT', body: cat });
    return await getSkillCats(true);
  }
  
  const deleteSkillCat = async (catId: string) => {
    await myFetch(`/v2/master/skill-cats/${catId}` , { method: 'DELETE' });
    await getSkillCats(true);
    return;
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

  const skillCatIntTitle = (skillCatId: string, locale: string) => {
    const cat = skillCatsState.value.find((cat: any) => cat._id == skillCatId);
    if (!cat) return null;
    const catIntTitle = cat.intTitle.find((e: any) => e.key == locale);
    return catIntTitle ? catIntTitle.value : cat.title;
  } 
  
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

  const skillGroupsByInd = (indId: string) => {
    return skillCatsState.value.filter((cat: any) => cat.indId == indId);
  }

  const skillsByCat = (catId: string) => {
    return skillsState.value.filter((skill: any) => skill.catId == catId);
  }

  const catById = (catId: string) => {
    return skillCatsState.value.find((e: any) => e._id == catId);
  }

  // get single category
  const getCat = (id: string) => {
    if (skillCatsLoadedState.value != true && loadingSkillsState.value != true) {
      getSkillCats(false);
    }
    const cat = skillCatsState.value.find((cat: any) => cat._id == id);
    if (!cat) return null;
    return cat;
  }

  const locCats = (locale: string) => {
    return computed(() => {
      return skillCatsState.value.map((cat: any) => {
        const intTitleObj = cat.intTitle.find((item: any) => item[locale]);
        return {
          ...cat,
          localizedTitle: intTitleObj ? intTitleObj[locale] : cat.title,
        };
      });
    });
  };

  return {
    skills,
    createSkill,
    updateSkill,
    deleteSkill,
    skillGroups,
    skillCats,
    skillCatIntTitle,
    loadingSkills,
    getSkills,
    getSkillCats,
    createSkillCat,
    updateSkillCat,
    deleteSkillCat,
    getCatIntTitle,
    getSkillsByCategoryId,
    getIntTitleSkill,
    skillGroupsByInd,
    getCat,
    skillsByCat,
    locCats,
    catById
  };
})