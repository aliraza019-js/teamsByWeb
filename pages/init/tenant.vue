<template lang="pug">
v-container
  v-layout.d-flex.align-center.justify-center
    v-card.shadow.ma-3(min-width="450" max-width="500" :loading="loading")
      v-window(v-model="step")
        v-window-item(:value="1")
          v-form(ref="formName" v-model="validName")
            v-card-text.d-flex.flex-column.align-center.justify-center.streched.text-center
              v-img.mb-5(src="https://ik.imagekit.io/teamstage/placeholder/tenant1_8xafBNAUF.png" width="190")
              h2.text-h5 {{ $t('init.tenantName') }}
              p.text-body-2 {{ $t('init.tenantDesc1') }}
              v-text-field.streched.mt-5(
                v-model="formData.name"
                :label="t('init.tenantName')"
                :rules="rules.required"
                variant ="solo"
                :disabled="disabled")

        v-window-item(:value="2")
          v-form(ref="formTeams" v-model="validTeams")
            v-card-text.d-flex.flex-column.align-center.justify-center.streched.text-center
              v-img.mb-5(src="https://ik.imagekit.io/teamstage/placeholder/tenant2_Pyezkd3-i.png" width="300")
              h2.text-h5 {{ $t('init.tenantTeams') }}
              p.text-body-2.mb-5 {{ $t('init.tenantDesc2') }}
              v-text-field.streched(
                v-for="(item, index) in teamNames"
                v-model="teamNames[index]"
                :label="t('init.teamName')"
                :rules="rules.required"
                append-inner-icon="mdi-delete"
                @click:append-inner="removeTeam(index)"
                variant ="solo"
                :disabled="disabled")
              v-btn.primary-btn.mt-2(icon @click="addTeam()")
                v-icon mdi-plus
              v-btn.mt-5(text variant="plain" @click="skipTeams()") 
                span.text-decoration-underline {{ $t('init.skipForNow') }}

        v-window-item(:value="3")
          v-card-text.d-flex.flex-column.align-center.justify-center.streched.text-center
            v-img.mb-5(src="https://ik.imagekit.io/teamstage/placeholder/tenant3_UaD9Qf9Gy.png" width="280")
            h2.text-h5 {{ $t('init.tenantSkills') }}
            p.text-body-2.mb-5 {{ $t('init.tenantDesc3') }}
            v-select.streched(
              chips 
              multiple
              clearable
              :label="t('init.tenantSkillsTemplate')"
              variant="solo" 
              :items="skillsTemplateItems"
              :disabled="disabled")

        v-window-item(:value="4")
          v-card-text.d-flex.flex-column.align-center.justify-center.streched.text-center
            v-img.mb-5(src="https://ik.imagekit.io/teamstage/placeholder/tenant4_dmzkjKonO.png" width="280")
            h2.text-h5 {{ $t('init.tenantDone') }}
            p.text-body-2 {{ $t('init.tenantDesc4') }}

        v-card-text(v-show="msgIsVisible")
          v-alert(:type="msgType" variant="tonal" closable) {{ msgText }}

        v-card-actions.d-flex.align-center
          v-btn.px-10(rounded variant="outlined" @click="step--" v-show="step > 1 && step < 4" color="secondary" :disabled="disabled") {{ $t('forms.back') }}
          v-spacer
          v-btn.bg-secondary.px-10(rounded v-show="step < 4" @click="nextStep()" :disabled="disabled" :loading="loading") {{ $t('forms.next') }}
          v-btn.bg-secondary.px-10(rounded v-show="step > 3" :disabled="disabled" :loading="loading" :to="localPath('/home')") {{ $t('forms.finish') }}
        
</template>

<script setup>
// imports
// page definition
definePageMeta({
  layout: 'init'
})

// data
const { t } = useI18n()
const localPath = useLocalePath()
const step = ref(1)
const skillsTemplateItems = reactive([
  { value: 'devLangs', title: 'Development languages', disabled: false },
  { value: 'devFrameworks', title: 'Development frameworks', disabled: false },
  { value: 'ecmFrameworks', title: 'ECM frameworks', disabled: true },
  { value: 'project', title: 'Project management', disabled: false },
  { value: 'agile', title: 'Agile methods and frameworks', disabled: false },
  { value: 'design', title: 'UX & design', disabled: false }
])

// form
const formName = ref(null)
const validName = ref(false)
const formTeams = ref(null)
const validTeams = ref(false)
const loading = ref(false)
const disabled = ref(false)
const formData = reactive({
  name: ''
})
const teamNames = ref([''])
const rules = reactive({
  required: [
    v => !!v || t('forms.required')
  ]
})

// form msg
const msgText = ref('')
const msgType = ref('error')
const msgIsVisible = ref(false)

// methods
const nextStep = async () => {
  if (step.value == 1) {
    const { valid } = await formName.value.validate()
    if (valid) { step.value++ }
  } else if (step.value == 2) {
    console.log('triggered second step')
    const { valid } = await formTeams.value.validate()
    if (valid) { step.value++ }
  } else if (step.value == 3) {
    // ToDo: handling skills template
    initTenant()
  } else {
    console.log('should not appear')
  }
}

const addTeam = () => {
  teamNames.value.push('')
}

const removeTeam = (index) => {
  teamNames.value.splice(index, 1)
}

const skipTeams = () => {
  teamNames.value = ['']
  step.value++
}

const initTenant = async () => {
  loading.value = true
  disabled.value = true
  // create request body
  let clientObj = {
    ...formData
  }
  // check for teams
  if (teamNames.value.length > 2 || teamNames.value[0] != '') {
    clientObj.teams = teamNames.value
  }
  try {
    // push to backend //
    await myFetch('/clients', {
      method: 'POST',
      body: clientObj
    })
    msgType.value = 'success'
    msgText.value = t('forms.success')
    msgIsVisible.value = true
    loading.value = false
    disabled.value = false
    step.value++
  }
  catch (err) {
    // handle error
    msgType.value = 'error'
    msgText.value = err.message
    msgIsVisible.value = true
    loading.value = false
    disabled.value = flase
  }



}

// hooks
</script>

<style lang="scss" scoped>
.primary-gradient {
  background-image: linear-gradient($secondary, $primary);
}

.replace {
  position: relative;
  top: 18px;
  right: 33px;
}
</style>