import { defineStore } from "pinia";

export const useMasterLangsStore = defineStore('langs', () => {
  // defining the states
  const langsState: any = ref([]);
  const loadingLangsState = ref(false);
  const langsLoadedState = ref(false);

  // provider
  const langs = computed(() => langsState);
  const loadingLangs = computed(() => loadingLangsState);

  // methods
  const getLangs = async () => {
    // Check if already loaded
    if (langsLoadedState.value) return;

    loadingLangsState.value = true;
    try {
      langsState.value = await myFetch('/v2/master/langs', {method: 'GET'});
      langsLoadedState.value = true;
    } catch (error) {
      console.error('Error fetching industries:', error);
    } finally {
      loadingLangsState.value = false;
    }
  }

  // Method to get international title based on locale
  const getIntTitle = (langCode: string, locale: string) => {
    console.log('get intTitel', langCode, locale);
    if (langsLoadedState.value != true && loadingLangsState.value != true) getLangs();
    // Find the lang by code
    const lang = langsState.value.find((lang: any) => lang.code === langCode);
    console.log('found lang', lang);
    if (!lang) return null; // or a default value

    // Find the internationalized title
    const intTitleObj = lang.intTitle.find((item: any) => item[locale]);
    return intTitleObj ? intTitleObj[locale] : lang.title;
  };

  return { langs, loadingLangs, getLangs, getIntTitle };
})