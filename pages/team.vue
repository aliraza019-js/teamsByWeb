<template lang="pug">
v-card(width="100%" flat)
  v-toolbar(:title="$t('team.teams')" color="transparent")
    .underline
    v-menu(theme="light" location="bottom" )
      template(v-slot:activator="{props}")
        v-btn(size="regular" v-bind="props"  icon="mdi-menu" plain)
      v-list(density="compact" rounded="lg")
        v-list-item(density="compact" @click="showAddTeamMember")
          template(v-slot:prepend)
            v-icon mdi-plus
          v-list-item-title Add Team Member
        v-divider(class="border-opacity-75" style="color: primaryTextPale")
        v-list-item(density="compact" @click="showAddTeam")
          template(v-slot:prepend)
            v-icon mdi-plus
          v-list-item-title Add Team
    template(v-slot:extension)
      v-tabs.my-5
        v-btn.tab-btn.ma-2(nuxt :to="localePath('/team/persons')") {{ $t('team.colleagues') }}
        v-btn.tab-btn.ma-2(nuxt :to="localePath('/team/teams')") {{ $t('team.teams') }}
  NuxtPage
  TeamsAddTeamForm(:persistent="true" min-height="500" width="500"   :isDialogVisible="dialogAddTeam" @update:isDialogVisible="closeTeamDialog" )
  TeamsAddMemberForm(:persistent="true" min-height="500" width="500"   :isDialogVisible="dialogAddTeamMember" @update:isDialogVisible="closeAddTeamMemberDialog" )
</template>

<script setup>
// page
definePageMeta({
  activeRoute: 'team'
})
// data
const localePath = useLocalePath();

const dialogAddTeam = ref(false)
const dialogAddTeamMember = ref(false)


const showAddTeam = () => {
  dialogAddTeam.value = true
}

const closeTeamDialog = () => {
  dialogAddTeam.value = false
}

const showAddTeamMember = () => {
  dialogAddTeamMember.value = true
}

const closeAddTeamMemberDialog = () => {
  dialogAddTeamMember.value = false
}
</script>

<style lang="scss" scoped>
.v-btn.tab-btn {
  border-radius: 24px;
  background-color: rgba(28, 28, 28, 0.03);
}

.v-btn--active.tab-btn {
  background-image: linear-gradient($secondary, $primary);
  color: #fff;
}

.underline {
  position: absolute;
  width: 100%;
  left: 0px;
  top: 56px;
  right: 0px;
  height: 1px;
  background-color: rgb(204, 204, 204);
}
</style>