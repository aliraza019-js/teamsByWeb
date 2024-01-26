import { defineStore } from "pinia";

export const useMasterCountriesStore = defineStore('countries', () => {
  // defining the states
  const countriesState: any = ref([]);
  const loadingCountriesState = ref(false);
  const countriesLoadedState = ref(false);

  const countries = computed(() => {
    if (countriesLoadedState.value != true) {
      getCountries(false);
    }
    return countriesState;
  })
  const loadingCountries = computed(() => loadingCountriesState);
  const countriesLoaded = computed(() => countriesLoadedState);

  // methods
  const getCountries = async (refresh: boolean) => {
    // check if already loaded
    if (countriesLoadedState.value && !refresh) return;

    loadingCountriesState.value = true;
    try {
      countriesState.value = await myFetch('/v2/master/countries', { method: 'GET' });
      countriesLoadedState.value = true;
    } catch (e) {
      console.log('error loading countries', e);
    } finally {
      loadingCountriesState.value = false;
    }
  }

  const createCountry = async (country: any) => {
    await myFetch('/v2/master/countries', { method: 'POST', body: country });
    return await getCountries(true);
  }
  const updateCountry = async (country: any, id: string) => {
    if (!id) throw 'no id provided';
    await myFetch(`/v2/master/countries/${id}`, { method: 'PUT', body: country });
    return await getCountries(true);
  }
  const deleteCountry = async (countryId: any) => {
    await myFetch(`/v2/master/countries/${countryId}`, { method: 'DELETE' });
    await getCountries(true);
    return;
  }

  const intTitle = (cId: string, locale: string) => {
    if (countriesLoadedState.value != true && loadingCountriesState.value != true) geCountries(false);
    // Find the lang by code
    const country = countriesState.value.find((c: any) => c._id === cId);
    if (!country) return null;
    const intTitle = country.intTitle.find((e: any) => e.key === locale);
    return intTitle ? intTitle.value : country.title;
  };

  return {
    countries,
    getCountries,
    loadingCountries,
    countriesLoaded,
    createCountry,
    updateCountry,
    deleteCountry,
    intTitle
  };
})