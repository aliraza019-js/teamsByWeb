<template>
  <v-container class="my-15 text-left">
    <v-row>
      <v-col col="12" sm="3">
        <v-card class="homeCard" elevation="8">
          <v-card-text>

            <div style="margin-bottom: 10px; margin-top:10px" tabindex="1">
              <button class="block">
                <v-icon>
                  mdi-home-outline
                </v-icon>
                Home
              </button>
            </div>


            <div style="margin-bottom: 10px" tabindex="2">
              <button class="block">
                <v-icon>
                  mdi-account-multiple-outline
                </v-icon>
                Team
              </button>
            </div>

            <div style="margin-bottom: 10px" tabindex="3">
              <button class="block">
                <v-icon>
                  mdi-file-document
                </v-icon>
                Projects
              </button>
            </div>

            <div style="margin-bottom: 10px" tabindex="4">
              <button class="block">
                <v-icon>
                  mdi-magnify
                </v-icon>
                Search
              </button>
            </div>

            <div style="margin-bottom: 10px" tabindex="5">
              <button class="block">
                <v-icon>
                  mdi-account-outline
                </v-icon>
                Account
              </button>
            </div>

            <div style="margin-bottom: 10px" tabindex="6">
              <button class="block">
                <v-icon>
                  mdi-settings-outline
                </v-icon>
                Admin
              </button>
            </div>

            <div style="margin-top: 100px">
              <button class="logout btn7" >
                <v-icon>
                  mdi-logout-variant
                </v-icon>
                Log Out
              </button>
            </div>


          </v-card-text>
        </v-card>
      </v-col>
      <v-col col="12" sm="9">
        <HomeDynamicCard/>
      </v-col>
    </v-row>
  </v-container>

</template>


<style scoped>

div:focus {
  background: transparent linear-gradient(180deg, #04C785 0%, #0966CB 100%) 0% 0% no-repeat padding-box;
  border-radius: 8px;
  color: white;
  top: 185px;
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


.block {
  text-align: left;
  top: 255px;
  left: 290px;
  width: 260px;
  height: 60px;
  border-radius: 30px;
  opacity: 1;
}

.logout:active{
  color: #4D6FF8;
}

.btn7 {
  top: 909px;
  left: 290px;
  width: 260px;
  height: 60px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #0966CB;
  border-radius: 30px;
  opacity: 1;
}

</style>
<script setup lang="ts">
import Home from "~/layouts/home.vue";
</script>