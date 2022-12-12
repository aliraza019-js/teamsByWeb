<template>
  <div class="text-center text-h3 mt-15">
    Web App Läuft
  </div>

  <div class="text-center">
    <div class="mt-5">
      Aktuell eingeloggter Benutzer: {{ currentUser }}
    </div>

    <div>
      <v-btn class="rounded-xl primary-btn mt-5" @click="logout()">
        <v-icon>mdi-logout-variant</v-icon>
        <span class="d-none d-md-flex ml-1">Ausloggen</span>
      </v-btn>
    </div>

    <div>
      <v-btn class="rounded-xl primary-btn mt-5" @click="getPdf()">
        <span class="d-none d-md-flex ml-1">PDF Generieren</span>
      </v-btn>
    </div>
  </div>

</template>

<script setup lang="ts">

import {onMounted, ref} from "#imports";
import {useFirebase} from "~/composables/useFirebase";
import {onAuthStateChanged} from "@firebase/auth";

const currentUser = ref();
const currentUser_pic = ref();
const runtimeConfig = useRuntimeConfig()
const apiUrl = runtimeConfig.public.apiURL;

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

const getPdf = () => {

  const {app, auth} = useFirebase()

  auth.currentUser?.getIdToken(false).then(token => {

    useFetch(`${apiUrl}/users-pdfs`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      params: {uuid: "jlABvMy0FuW3klYTbEzyzaes8cJ2"},
    }).then(value => {

      if (value?.error?.value) {
        console.log("Fehler bei der Abfrage: ", JSON.stringify(value.error.value))
      } else {
        console.log("Erfolgreich: " + JSON.stringify(value.data.value))
      }
    })

  })
}
</script>

<style scoped>

</style>