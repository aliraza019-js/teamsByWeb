<template lang="pug">
v-card(class="d-flex flex-row rounded-l" width="100%" height="100%" elevation="3" style="align-items:center;" :to="localePath(`${user._id == person._id ? `/account/general`: `/d/team/person/${person._id}/general` }`)")  
  v-col(class="imgCol")
    v-avatar(size=56)
      img(:src="person && person.profileImage ? person.profileImage.url : personImage" class="profilePic") 
  v-col()
    v-row()
      div(class="text-caption") {{ person.title ? person.title : 'No title given yet' }}
    v-row()
      h4 {{ person.givenName }}
</template>
  
<script setup>
import { useUserStore } from "~/stores/user";
const props = defineProps(['person'])

const localePath = useLocalePath();
const { user } = useUserStore()
const router = useRouter();

const personImage = ref('https://ik.imagekit.io/teamstage/image_picker7844532559891803069_gd9EOekZJx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1671194068429')

</script>
  
<style lang="scss" scoped>
.profilePic {
  max-width: 60px;
  max-height: 60px;
}

.imgCol {
  max-width: 65px;
  margin-top: 1px;
  margin-bottom: 1px;
  margin-left: 2px;
  padding: 0;
}
</style>