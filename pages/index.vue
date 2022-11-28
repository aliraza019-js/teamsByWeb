<template>
  <div class="text-center text-h3 mt-15">
    Web App Läuft
  </div>
  <div>
    Aktuell eingeloggter Benutzer: {{ currentUser }}
  </div>

  <div>
    <v-btn class="rounded-xl primary-btn d-md-flex" @click="logout()">
      <v-icon>mdi-logout-variant</v-icon>
      <span class="d-none d-md-flex ml-1">Ausloggen</span>
    </v-btn>
  </div>

</template>

<script setup lang="ts">

import {onMounted, ref} from "#imports";
import {useFirebase} from "~/composables/useFirebase";
import {onAuthStateChanged} from "@firebase/auth";

const currentUser = ref();
const currentUser_pic = ref();
onMounted(() => {

  const {app, auth} = useFirebase()

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("user is logged in")
      console.log("Angemeldeter Benutzer: ", auth.currentUser)
      currentUser.value = auth.currentUser?.email
      currentUser_pic.value = auth.currentUser?.photoURL
    } else {
      console.log("user is not logged in")
      console.log("Angemeldeter Benutzer: ", auth.currentUser)
      currentUser.value = "N/A"
      currentUser_pic.value = "img/profile_pic_default.png"
    }


  })
})

const logout = () => {
  const {app, auth} = useFirebase()
  auth.signOut().then(() => {
    console.log("user signed out")
  }).catch((error) => {
    console.log("error signing out")
  })
}

</script>

<style scoped>

</style>