<template lang="pug">
v-row(class="overflow-auto comment-container")
    v-col(cols="12" class="d-flex justify-end py-2")
        v-btn(variant="text" prepend-icon="mdi-plus" density="compact" @click="dialogAddComment = true") {{ $t('projects.addComment')}}
    v-col(cols="12" v-for="(data, index) in comments" :key="index")
        v-card(class="elevation-4 rounded-lg")
            v-card-text(class="d-flex flex-column")
                div(class="d-flex align-center justify-space-between")
                    span(class="text-caption") {{data && data.createdAt ? data.createdAt.substring(0, 10) : 'No Date Found'}}
                    v-avatar(size="30" :image="data.profileImage ? data.profileImage.url : img")
                p(class="mt-3 text-justify") {{data ? data.text : 'No Comment Found'}}
                div(class="d-flex mt-3 justify-end")
                    div(class="d-flex gap-10")
                        v-icon(style="color: primaryTextPale") mdi-thumb-up-outline
                        span(class="font-weight-bold") {{ data ? data.likesCount : '0'}} likes
    ProjectsCommentForm(:persistent="true" min-height="500" width="500" :relId="relationId"  :isCommentDialog="dialogAddComment" @update:comments="fetchprojectComments" @update:isCommentDialog="closeDialog")
</template>
    
<script setup>
import { userHomeStore } from '~/stores/home'
import { inject } from 'vue';
definePageMeta({
    activeRoute: 'commentModule'
});
const route = useRoute();
const { getCommentsById } = userHomeStore()
const localePath = useLocalePath();
const comments = ref(null)
const dialogAddComment = ref(false)

const relationId = inject('relationalId');


/**
 * Closes the dialog by setting dialogAddComment value to false.
 *
 */
const closeDialog = () => {
    dialogAddComment.value = false
}

const fetchprojectComments = async () => {
    console.log('relationId in comments',)
    let id = relationId.value
    comments.value = await getCommentsById(id)
    // console.log('comments', comments.value)
}

onMounted(async () => {
    await fetchprojectComments()
});

const img = ref('https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80');

</script>
    
<style lang="scss" scoped>
.comment-container {
    scrollbar-color: #94a3b8 transparent;
}
</style>