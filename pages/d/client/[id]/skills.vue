<template lang="pug">
v-row(class="overflow-auto h-100")
  //- v-col(cols="12" class="d-flex justify-end pb-0")
    //- v-btn(variant="text" prepend-icon="mdi-plus" density="compact" @click="dialogSkills = true") {{$t('skills.add')}}
  v-col(cols="12")
    v-row
      v-col(cols="12") {{ loadingUserState }}
    v-row(class="overflow-auto scroll-container")
      v-col(v-if="canShowskills" class="text-center" cols="12")
        v-img(width="75%" class="mx-auto my-10" style="opacity: 0.5; border-radius: 10px;" src="https://img.team-stage.com/placeholder/new/training1_dNsMAcdoo.png")
      v-col(v-else cols="12" v-for="(item, index) in clients?.skills" :key="index")
        CommonCard
          template(#title)
            span.text-secondary.d-flex.align-center {{item.title}}
            //- div(class="d-flex")
            //-   v-btn(icon size="small" variant="plain" color="primaryTextPale" @click="editSkill(index)" )
            //-     v-icon(icon="mdi-pencil" color="primaryTextPale" )
            //-   v-btn(icon size="small" variant="plain" @click="deleteAction(index)" )
            //-     v-icon(icon="mdi-delete" color="red" )
          template(#body)
            v-container
              v-row
                v-col(cols="12" sm="6" class="d-flex justify-space-between align-center" v-for="(skill, skillIndex) in item.items" :key="skillIndex")
                  div(class="d-flex flex-column")
                    span {{item.title}}
                    p(class="font-weight-bold ") {{skill.title}}
                  v-rating(bg-color="orange-lighten-1" size="medium" density="compact" readonly v-model="skill.rating" color="blue")

  //- AccountSkillsForm(:persistent="true" min-height="500" width="500" :editIndex="selectedEditItem"  :isDialogVisible="dialogSkills" @update:isDialogVisible="closeDialog" )
  //- CommonConfirmModal(:persistent="true" min-height="500" width="500" :isDialogVisible="dialogConfirmDelete" @update:isDialogVisible="dialogConfirmDelete = false" @update:confirm="deleteAction(selectedDeleteItem)")
</template>
  
<script setup>

definePageMeta({
  activeRoute: 'team'
});

const props = defineProps(['clients']);

const canShowskills = ref(false)
const dialogSkills = ref(false)
const dialogConfirmDelete = ref(false)
const selectedEditItem = ref(null)
const selectedDeleteItem = ref(null)

onMounted(() => {
  console.log('props.clients?', props.clients)
  if (props.clients?.skills?.length) {
    canShowskills.value = false
  } else {
    canShowskills.value = true
  }
})



const editSkill = (index) => {
  selectedEditItem.value = index
  dialogSkills.value = true
}

const closeDialog = () => {
  dialogSkills.value = false
  selectedEditItem.value = null
}

const deleteAction = (index) => {
  if (!dialogConfirmDelete.value) {
    dialogConfirmDelete.value = true
    selectedDeleteItem.value = index
    return
  }
  let skills = [props.clients?.skills]
  skills.splice(index, 1)
  updateUserInfo({ skills }).then(() => {
    updateUser()
  }).finally(() => {
    dialogConfirmDelete.value = false
    selectedDeleteItem.value = null
  })
}
</script>