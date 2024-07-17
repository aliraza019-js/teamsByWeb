<template lang="pug">
v-row(style="height: 500px" class="overflow-auto comment-container")
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
  ProjectsCommentForm(:persistent="true" minHeight="500" width="500" :projectId="route.params.id"  :isCommentDialog="dialogAddComment" @update:comments="fetchprojectComments" @update:isCommentDialog="closeDialog")
</template>

<script setup>
import { useProjectStore } from '~/stores/projects'
definePageMeta({
  activeRoute: 'project'
});
const route = useRoute();
const { getCommentsByProjectId } = useProjectStore()
const localePath = useLocalePath();
const comments = ref(null)
const dialogAddComment = ref(false)
const closeDialog = () => {
  dialogAddComment.value = false
}

/**
 * Fetches project comments asynchronously.
 *
 * @return {Promise<void>} A promise that resolves with no value.
 */
const fetchprojectComments = async () => {
  comments.value = await getCommentsByProjectId(route.params.id)
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