<template>

<a :href="appUrl" v-if="userSet">
    <v-img class="pointer" src="img/profile_pic_default.png" height="55px" width="55px" contain="contain" />
</a>
 <!--  no-ssr Tag, da sonst ein Vue3 Bug auftritt der das Rendern der Seite verhindert-->
 <v-no-ssr>
    <div v-if="!userSet">
        <v-img class="pointer" src="img/profile_pic_default.png" height="55px" width="55px" contain="contain" />
    </div>
 </v-no-ssr>


</template>


<script setup>

// import {useFirebase} from '~/composables/useFirebase';
import {onMounted, ref} from '#imports';
import {useRuntimeConfig} from '#app';
import {onAuthStateChanged} from '@firebase/auth';


const runtimeConfig = useRuntimeConfig()
const appUrl = runtimeConfig.public.appURL;
let userSet = ref(false);

// onMounted(() => {

//   const {app, auth} = useFirebase()

//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       userSet.value = true;
//     }
//   })
// })

</script>

<style lang="scss" scoped>
.my-divider {
  border: 0.5px solid $text-primary;
  width: 70%;
}

.or-box {
  width: 90px;
  height: 20px;
  position: relative;
  padding: 10px, 5px;
  top: -10px;
  background-color: #fff;
  z-index: 50;
  border-radius: 5px;
}

.shadow {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.09), 0 4px 8px 0 rgba(0, 0, 0, 0.09);
  background-color: white;
}
</style>