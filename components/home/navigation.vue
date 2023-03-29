<template>
  <v-container class="mr-auto ml-auto my-15" :class="{'w-75': $vuetify.display.mdAndUp}">
    <v-row>
      <v-col col="12" sm="3">
        <v-card class="homeCard" elevation="8">
          <v-card-text>
              <v-btn block class="button-style button-gradient card-text elevation-0">
                <v-icon class="icons">
                  mdi-home-outline
                </v-icon>
                {{ $t('home.home')}}
              </v-btn>

              <v-btn block class="button-style button-gradient card-text mt-2 elevation-0">
                <v-icon class="icons">
                  mdi-account-multiple-outline
                </v-icon>
                {{ $t('home.team')}}
              </v-btn>

              <v-btn block class="button-style button-gradient card-text mt-2 elevation-0">
                <v-icon class="icons">
                  mdi-file-document
                </v-icon>
                {{ $t('home.projects')}}
              </v-btn>

              <v-btn block class="button-style button-gradient card-text mt-2 elevation-0">
                <v-icon class="icons">
                  mdi-magnify
                </v-icon>
                {{ $t('home.search')}}
              </v-btn>

              <v-btn block class="button-style button-gradient card-text mt-2 elevation-0">
                <v-icon class="icons">
                  mdi-account-outline
                </v-icon>
                {{ $t('home.account')}}
              </v-btn>

              <v-btn block class="button-style button-gradient card-text mt-2 elevation-0">
                <v-icon class="icons">
                  mdi-settings-outline
                </v-icon>
                {{ $t('home.setting')}}
              </v-btn>


              <v-btn block class="button-style logout btn7 elevation-0">
                <v-icon class="icons">
                  mdi-logout-variant
                </v-icon>
                {{ $t('home.logOut')}}
              </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col col="12" sm="9">
        <div v-for="index in 10" :key="index">
          <HomeDynamicCard/>
        </div>
      </v-col>
    </v-row>
  </v-container>

</template>


<style scoped>

.button-gradient:focus {
  background: transparent linear-gradient(180deg, #04C785 0%, #0966CB 100%) 0% 0% no-repeat padding-box;
  border-radius: 8px;
  color: white;
}

.button-style {
  min-height: 60px;
}

.card-text {
  text-align: left;
  font: normal normal normal 16px/32px Nunito;
  letter-spacing: 0px;
  color: #1C1C1C;
  opacity: 1;
}

.homeCard{
  max-width: 320px ;
  height: 845px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 20px #00000017;
  border: 1px solid #E2E2E273;
  border-radius: 8px;
  opacity: 1;
}

.logout:active{
  color: #4D6FF8;
}

.btn7 {
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #0966CB;
  border-radius: 30px;
  opacity: 1;
  bottom: -350px;
}

.icons {
  opacity: 1;
}
</style>
<script setup lang="ts">
import Home from "~/layouts/home.vue";
</script>