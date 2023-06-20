import { defineStore } from 'pinia';

export const useTeamsStore = defineStore('Teams', () => {
  const TeamsState = ref([]);
  const loadingTeamsState = ref(false);

  const teams = computed(() => TeamsState);
  const loadingTeams = computed(() => loadingTeamsState);

  const getTeams = () => {
    return new Promise(async (resolve, reject) => {
        loadingTeamsState.value = true;
      myFetch('/v2/teams/', { method: 'GET' })
        .then(res => {
            TeamsState.value = res.data;
          resolve(res.data);
        })
        .catch(() => {
          reject();
        })
        .finally(() => {
            loadingTeamsState.value = false;
        });
    });
  };


  return {

    getTeams,
    teams,
    loadingTeams
  };
});
