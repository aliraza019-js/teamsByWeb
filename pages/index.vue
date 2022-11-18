<template>
  <div class="text-center text-h3 mt-15">
    Web App Läuft
  </div>
  <div>
    Aktuell eingeloggter Benutzer: {{ currentUser }}
  </div>
</template>

<script setup lang="ts">

import {onMounted, ref} from "#imports";
import {useFirebase} from "~/composables/useFirebase";
import {onAuthStateChanged} from "@firebase/auth";

const currentUser = ref();

onMounted(() => {

  const {app, auth} = useFirebase()

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("user is logged in")
      console.log("Angemeldeter Benutzer: ", auth.currentUser)
      currentUser.value = auth.currentUser?.email
    } else {
      console.log("user is not logged in")
      console.log("Angemeldeter Benutzer: ", auth.currentUser)
      currentUser.value = "N/A"
    }


  })
})

</script>

<style scoped>

</style>