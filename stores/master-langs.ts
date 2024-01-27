import { defineStore } from "pinia";

export const useMasterLangsStore = defineStore('langs', () => {
  // defining the states
  const langsState: any = ref([]);
  const loadingLangsState = ref(false);
  const langsLoadedState = ref(false);

  // provider
  const langs = computed(() => {
    if (langsLoadedState.value != true) {
      getLangs(false);
    }
    return langsState;
  });
  const loadingLangs = computed(() => loadingLangsState);
  const langsLoaded = computed(() => langsLoadedState);

  // methods
  const getLangs = async (refresh: boolean) => {
    // Check if already loaded
    if (langsLoadedState.value && !refresh) return;

    loadingLangsState.value = true;
    try {
      langsState.value = await myFetch('/v2/master/langs', { method: 'GET' });
      langsLoadedState.value = true;
    } catch (error) {
      console.error('Error fetching industries:', error);
    } finally {
      loadingLangsState.value = false;
    }
  }

  const createLang = async (lang: any) => {
    await myFetch('/v2/master/langs', { method: 'POST', body: lang });
    return await getLangs(true);
  }
  
  const updateLang = async (lang: any, id: string) => {
    if (!id) throw 'no id provided';
    await myFetch(`/v2/master/langs/${id}`, { method: 'PUT', body: lang });
    return await getLangs(true);
  }
  
  const deleteLang = async (langId: string) => {
    await myFetch(`/v2/master/langs/${langId}`, { method: 'DELETE' });
    await getLangs(true);
    return;
  } 

  // Method to get international title based on locale
  // should be obsolet by now - hopefully
  const getIntTitle = (langCode: string, locale: string) => {
    if (langsLoadedState.value != true && loadingLangsState.value != true) getLangs(false);
    // Find the lang by code
    const lang = langsState.value.find((lang: any) => lang.code === langCode);
    if (!lang) return null; // or a default value
    const intTitle = lang.intTitle.find((e: any) => e.key === locale);
    return intTitle ? intTitle.value : lang.title;
  };
  // end of obsolet

  return {
    langs,
    loadingLangs,
    getLangs,
    getIntTitle,
    langsLoaded,
    createLang,
    updateLang,
    deleteLang
  };
})