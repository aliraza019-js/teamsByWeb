<template lang="pug">
v-container
  v-row
    v-col(cols="12" sm=4 v-for="(team, index) in teamsData" :key="index")
      CommonTeamList(:team="team")
  v-row(class="my-3 d-flex justify-center align-center")
    v-col(cols="12" sm="4" v-if="showLoadMoreButton")
      v-btn(:loading="loading" @click="load") {{ getButtonText }}
  //- v-row.my-5
  //-   v-divider
  //-   v-btn.mt-5(nuxt :to="localePath('/d/team/123')") detail page
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount, computed } from 'vue';
import { useTeamsStore } from "~/stores/teams";

const loading = ref(false);
const showLoadMoreButton = ref(false);
const initialLimit = ref(20);
const subsequentLimit = ref(10);
const skip = ref(0);
const teamsData = ref([]);


// page
definePageMeta({
  activeRoute: 'team'
})

// data
const localePath = useLocalePath()


const { getTeams, teams } = useTeamsStore()

function load() {
  loading.value = true;
  setTimeout(async () => {
    // Fetch next 10 records, skipping the last 20 records
    await getTeams(subsequentLimit.value, skip.value + initialLimit.value);
    const newTeams = teams.value.data.slice(-subsequentLimit.value);
    teamsData.value = teamsData.value.concat(newTeams);
    loading.value = false;
    skip.value += subsequentLimit.value;
  }, 1000);
}

watch(
  () => teams.value.data ?? [],
  (newData, oldData) => {
    if (newData && newData.length !== oldData.length) {
      if (newData.length >= 10 && teams.value.count >= teams.value.limit) {
        showLoadMoreButton.value = true;
      } else {
        showLoadMoreButton.value = false;
      }
    }
  }
);

const getButtonText = computed(() => {
  return skip.value === 0 ? 'Load More' : 'THE NEXT 10';
});

function handleScroll() {
  // console.log('Handling scroll...');
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  const triggerHeight = 100;

  if (scrollPosition >= triggerHeight && !loading.value && showLoadMoreButton.value) {
    load();
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

onMounted(async () => {
  await getTeams(initialLimit.value, skip.value)
  teamsData.value = teams.value.data;
  showLoadMoreButton.value = teams.value.data && teams.value.data.length >= 10 ? true : false;
})



// const teams = [
//   { name: 'Amy Lee', title: 'Sales', imgUrl: '../img/team_pic_default.png' },
//   { name: 'Frank Werner', title: 'Design', imgUrl: '../img/team_pic_default.png' },
//   { name: 'Flo Eutert', title: 'Quality Management', imgUrl: '../img/team_pic_default.png' },
//   { name: 'Anne Winkler', title: 'Development', imgUrl: '../img/team_pic_default.png' },
//   { name: 'Danny Crane', title: 'Testing', imgUrl: '../img/team_pic_default.png' }
// ]
</script>

<style lang="scss" scoped></style>