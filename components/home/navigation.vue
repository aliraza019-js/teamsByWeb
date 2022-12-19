<template>
  <v-container class="my-15 text-left">
    <v-row>
      <v-col col="12" sm="3">
        <v-card class="homeCard" elevation="8">
          <v-card-subtitle>

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
              <button class="block logout btn7" >
                <v-icon>
                  mdi-logout-variant
                </v-icon>
                Log Out
              </button>
            </div>


          </v-card-subtitle>
        </v-card>
      </v-col>
      <v-col col="12" sm="9">
        <v-card>
          <v-row>
            <v-col >

            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<style scoped>

div:focus {
  background-color:#06A69D;
  border-radius: 10px;
  color: white;
  opacity: 1;
}

.homeCard{
  max-width: 320px ;
}

hr {
  margin-top: 10px;
  margin-bottom: 10px;
}

.block {
  display: block;
  width: 70%;
  border: none;
  padding: 14px 28px;
  font-size: 16px;
  text-align: left;
}

.logout:active{
  color: #4D6FF8;
}

.btn7 {
  color: #1C1C1C;
  border-style: solid;
  border-radius: 100px;
  width: 100%;
}

</style>