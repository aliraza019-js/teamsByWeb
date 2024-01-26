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

  const createCountry = async (country: any) => { }
  const updateCountry = async (country: any) => { }
  const deleteCountry = async (countryId: any) => {}

  return {
    countries,
    getCountries
  };
})