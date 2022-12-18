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
const currentUserPicture = ref();
const runtimeConfig = useRuntimeConfig()
const apiUrl = runtimeConfig.public.apiURL;



onMounted(() => {

  const {app, auth} = useFirebase()


  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("user is logged in")
      console.log("Angemeldeter Benutzer: ", auth.currentUser)
      currentUser.value = auth.currentUser?.email
      currentUserPicture.value = auth.currentUser?.photoURL
    } else {
      console.log("user is not logged in")
      console.log("Angemeldeter Benutzer: ", auth.currentUser)
      currentUser.value = "N/A"
      currentUserPicture.value = "img/profile_pic_default.png"
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

    fetch(`http://127.0.0.1:3001/api/users-pdfs`, {
      method: 'GET',
      headers: {
        'Accept': 'application/pdf',
        'Authorization': `Bearer ${token}`,
      }
    }) .then((response) => response.blob()).then((myBlob) => {
        const url = window.URL.createObjectURL(myBlob)
        const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', "Teamstage.pdf")
      document.body.appendChild(link)
      link.click()

    })
    //open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security
    
  })
}


</script>

<style scoped>

</style>
