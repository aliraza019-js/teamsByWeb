import { defineStore } from "pinia";

export const useMasterLangsStore = defineStore('langs', () => {
  // defining the states
  const langsState: any = ref([]);
  const loadingLangsState = ref(false);
  const langsLoadedState = ref(false);

  // provider
  const langs = computed(() => {
    if (langsLoadedState.value != true) {
      getLangs();
    }
    return langsState;
  });
  const loadingLangs = computed(() => loadingLangsState);
  const langsLoaded = computed(() => langsLoadedState);

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
  // should be obsolet by now - hopefully
  const getIntTitle = (langCode: string, locale: string) => {
    if (langsLoadedState.value != true && loadingLangsState.value != true) getLangs();
    // Find the lang by code
    const lang = langsState.value.find((lang: any) => lang.code === langCode);
    if (!lang) return null; // or a default value
    const intTitle = lang.intTitle.find((e: any) => e.key === locale);
    return intTitle ? intTitle.value : lang.title;
  };
  // end of obsolet

  return { langs, loadingLangs, getLangs, getIntTitle, langsLoaded };
})