<template>

  <section>
    <v-container class="my-15 text-left">
      <v-row>
        <v-col>
          <v-card class="homeCard" elevation="8">
            <v-card-subtitle>

              <v-row class="rows" style="margin-top: 10px">
                <v-col col="12" sm="2">
                  <v-icon>
                    mdi-home-outline
                  </v-icon>
                </v-col>
                <v-col col="12" sm="10">
                  <button id="home" @click="foo()">Home</button>
                </v-col>
              </v-row>

              <hr>

              <v-row class="rows">
                <v-col col="12" sm="2">
                  <v-icon>
                    mdi-account-multiple-outline
                  </v-icon>
                </v-col>
                <v-col col="12" sm="10">
                  <button id="team">Team</button>
                </v-col>
              </v-row>

              <hr>

              <v-row class="rows">
                <v-col col="12" sm="2">
                  <v-icon>
                    mdi-file-document
                  </v-icon>
                </v-col>
                <v-col col="12" sm="10">
                  <button id="projects">Projects</button>
                </v-col>
              </v-row>

              <hr>

              <v-row class="rows">
                <v-col col="12" sm="2">
                  <v-icon>
                    mdi-magnify
                  </v-icon>
                </v-col>
                <v-col col="12" sm="10">
                  <button id="search">Search</button>
                </v-col>
              </v-row>

              <hr>

              <v-row class="rows">
                <v-col col="12" sm="2">
                  <v-icon>
                    mdi-account-outline
                  </v-icon>
                </v-col>
                <v-col col="12" sm="10">
                  <button id="account">Account</button>
                </v-col>
              </v-row>

              <hr>

              <v-row class="rows" style="margin-bottom: 10px">
                <v-col col="12" sm="2">
                  <v-icon>
                    mdi-settings-outline
                  </v-icon>
                </v-col>
                <v-col col="12" sm="10">
                  <button id="admin">Admin</button>
                </v-col>
              </v-row>

            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">

function foo() {
  alert("Hello Worold");

}

import {definePageMeta} from "#imports";
definePageMeta({
  layout: "home",
});
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Nunito');


.homeCard{
  max-width: 200px ;
}

hr {
  margin-top: 10px;
  margin-bottom: 10px;
}

.rows:active {
  color: #4D6FF8;
}
</style>