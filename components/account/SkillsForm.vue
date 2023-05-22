<template lang="pug">
ClientOnly
    v-dialog(:model-value="isDialogVisible" max-width="650px" @update:modelValue="$emit('update:isDialogVisible', false)")
        CommonCard(color="lightBlue" :loading="loading")
            template(#title)
                span(class="text-secondary d-flex align-center") {{ isEdit ? $t('skills.edit') :  $t('skills.add') }}
                v-btn(icon size="small" variant="plain" color="primaryTextPale" @click="$emit('update:isDialogVisible', false)")
                    v-icon mdi-close
            template(#body)
                v-form(class="d-flex flex-column" ref="form")
                    v-row
                        v-col(cols="12" class="pb-0")
                            v-select(:label="$t('skills.categoryTitle')" variant="solo"  v-model="formData.title" :items="skillsCategories" :rules="rules.required")
                    v-row(v-for="(item, index) in formData.items" :key="index")
                        v-col(cols="12" sm="1" class="pb-0")
                            v-btn(icon size="small" variant="plain" class="mt-2" @click="removeRow(index)")
                                v-icon mdi-close
                        v-col(cols="12" sm="6" class="pb-0")
                            v-select(:label="$t('skills.skillTitle')" variant="solo" :items="skills" v-model="item.title" :rules="rules.required")
                        v-col(cols="12" sm="5" class="pb-0")
                            div(class="d-flex flex-column")
                                div(class="subtitle-1 ") Rating
                                v-input(:model-value="item.rating" :rules="rules.required")
                                    v-rating(bg-color="orange-lighten-1" size="large" density="compact" v-model="item.rating" color="blue" )
                    v-row(justify="end" class="mt-0" )
                        v-col(cols="2" class="d-flex justify-end")
                            v-btn(color="secondary" @click="addRow")
                                v-icon mdi-plus
                    div(class="d-flex justify-center mt-5")
                        v-btn(rounded="pill" size="large" color="secondary" width="65%" @click="validate" :disabled="disabled") Save
</template>
    
<script setup>
import { useUserStore } from "~/stores/user";
import {useClientStore} from '~/stores/clients'
const props = defineProps({
    isDialogVisible: false,
    editIndex: null
})

const emit = defineEmits(
    ['update:isDialogVisible', 'update:certifications']
)
const { user, updateUserInfo, updateUser } = useUserStore()
const {getClientsList} = useClientStore()
// data
const { t } = useI18n()
const form = ref(null)

const formData = reactive({
    title: null,
    items: [
        { title: null, rating: '' }
    ],
})
const loading = ref(false)
const disabled = ref(false)
const skillsCategories = ref([])
const skills = ref([])

// Form Rules
const rules = reactive({
    required: [
        v => !!v || t('required')
    ]
})

// methods
const validate = async () => {
    const { valid } = await form.value.validate()
    if (valid) return submitData()
}

const addRow = (type) => {
    formData.items.push({ title: null, rating: null })
}

const removeRow = (index) => {
    formData.items.splice(index, 1)
}

const submitData = () => {
    formData.items.forEach(item => item.rating += '') //converting number rating to string
    const skills = user.skills
    if (props.editIndex !== null) {
        skills[props.editIndex] = formData
    } else {
        skills.push(formData)
    }
    updateUserInfo({ skills }).then(response => {
        updateUser()
        emit('update:isDialogVisible')
    }).finally(() => {
        loading.value = false
        disabled.value = false
    })
};

watch(() => props.isDialogVisible, (val) => {
    if (val) {
        if (props.editIndex !== null && props.editIndex >= 0 && user && user.skills){
            const skills = [...user.skills] 
            const skill =  JSON.parse(JSON.stringify(skills[props.editIndex]));
            formData.title = skill.title
            formData.items = [...skill.items]
        }
    } else {
        formData.title = null
        formData.items = [
        { title: null, rating: '' }

        ]
      
    }
})

const isEdit = computed(() => {
    return props.editIndex >= 0
})

onMounted(async () => {
  const clients =  await getClientsList()
  clients.data.forEach(client=>{
    client.skills.forEach(category=>{
        if(skillsCategories.value.indexOf(category.title)===-1)
            skillsCategories.value.push(category.title)
        category.items.forEach(item=>{
            if(skills.value.indexOf(item.title)===-1)
                skills.value.push(item.title)
        })
    })
  })
  console.log(clients)
})
</script>
    
<style lang="scss" scoped>
.description {
    color: $secondary;
}

.v-input__control {
    border-radius: 25px;
}

:deep(.v-text-field) {

    .v-input__control {
        box-shadow: none;
        border: none;
        background: transparent;
        border-radius: 10px;
    }

    .v-field {
        background-color: #fff !important;
        border-radius: 10px;
    }
}
</style>