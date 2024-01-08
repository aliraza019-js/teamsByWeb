import { defineStore } from "pinia";

export const useMasterIndustriesStore = defineStore('industries', () => {
  // defining the states
  const industriesState: any = ref([]);
  const loadingIndustriesState = ref(false);
  const industriesLoadedState = ref(false);

  // provider
  const industries = computed(() => industriesState);
  const loadingIndustries = computed(() => loadingIndustriesState);

  // methods
  const getIndustries = async () => {
    // Check if industries are already loaded
    if (industriesLoadedState.value) return;

    loadingIndustriesState.value = true;
    try {
      const res = await myFetch('/v2/master/industries', {method: 'GET'});
      industriesState.value = await res;
      industriesLoadedState.value = true;
    } catch (error) {
      console.error('Error fetching industries:', error);
    } finally {
      loadingIndustriesState.value = false;
    }
  }

  // Method to get international title based on locale
  const getIntTitle = (industryCode: string, locale: string) => {
    if (industriesLoadedState.value != true && loadingIndustriesState.value != true) getIndustries();
    // Find the industry by code
    const industry = industriesState.value.find((ind: any) => ind.code === industryCode);
    if (!industry) return null; // or a default value

    // Find the internationalized title
    const intTitleObj = industry.intTitle.find((item: any) => item[locale]);
    return intTitleObj ? intTitleObj[locale] : industry.title;
  };

  return { industries, loadingIndustries, getIndustries, getIntTitle };
})