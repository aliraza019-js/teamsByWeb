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

  return { langs, loadingLangs, getLangs };
})