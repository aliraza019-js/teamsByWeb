import { defineStore } from "pinia";

export const useMasterIndustriesStore = defineStore('industries', () => {
  // defining the states
  const industriesState: any = ref([]);
  const loadingIndustriesState = ref(false);
  const industriesLoadedState = ref(false);
  
  // provider
  const industries = computed(() => {
    // const filterText = indFilter.value.toLowerCase();
    // return industriesState.value.filter(industry => {
    //   return industry.title.toLowerCase().includes(filterText);
    // });
    return industriesState;
  });
  const loadingIndustries = computed(() => loadingIndustriesState);

  // methods
  const getIndustries = async (refresh: boolean) => {
    // Check if industries are already loaded
    if (industriesLoadedState.value && !refresh) return;

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

  const createInd = async (ind: any) => {
    await myFetch('/v2/master/industries', { method: 'POST', body: ind });
    return await getIndustries(true);
  }
  
  const updateInd = async (ind: any, id: string) => {
    if (!id) throw 'no id provided';
    await myFetch(`/v2/master/industries/${id}`, { method: 'PUT', body: ind });
    return await getIndustries(true);
  }
  
  const deleteInd = async (indId: string) => {
    await myFetch(`/v2/master/industries/${indId}` , { method: 'DELETE' });
    await getIndustries(true);
    return;
  } 

  const locIndustries = (locale: string) => {
    return computed(() => {
      return industriesState.value.map((industry: any) => {
        const intTitleObj = industry.intTitle.find((item: any) => item[locale]);
        return {
          ...industry,
          localizedTitle: intTitleObj ? intTitleObj[locale] : industry.title,
        };
      });
    });
  };

  // Method to get international title based on locale
  const getIntTitle = (industryCode: string, locale: string) => {
    if (industriesLoadedState.value != true && loadingIndustriesState.value != true) {
      getIndustries(false);
    }
    // Find the industry by code
    const industry = industriesState.value.find((ind: any) => ind.code === industryCode);
    if (!industry) return null; // or a default value
    const intTitle = industry.intTitle.find((e: any) => e.key == locale);
    return intTitle ? intTitle.value : industry.title;
  };

  const getIndIntTitle = (indId: string, locale: string) => {
    if (industriesLoadedState.value != true && loadingIndustriesState.value != true) {
      getIndustries(false);
    }
    // Find the industry by code
    const industry = industriesState.value.find((ind: any) => ind._id === indId);
    if (!industry) return null; // or a default value
    const intTitle = industry.intTitle.find((e: any) => e.key == locale);
    return intTitle ? intTitle.value : industry.title;
  };

  // get single industry
  const getInd = (id: string) => {
    if (industriesLoadedState.value != true && loadingIndustriesState.value != true) {
      getIndustries(false);
    }
    const industry = industriesState.value.find((ind: any) => ind._id == id);
    if (!industry) return null;
    return industry;
  }

  return {
    industries,
    locIndustries,
    loadingIndustries,
    getIndustries,
    getIntTitle,
    getIndIntTitle,
    createInd,
    updateInd,
    deleteInd,
    getInd
  };
})