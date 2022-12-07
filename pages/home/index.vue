<template>
  <section>
    <v-container class="my-15 text-left">
      <v-row>
        <v-col>
          <v-card class="homeCard" elevation="8">
            <v-card-subtitle>

              <v-row class="elemts" style="margin-top: 10px">
                <v-col col="12" sm="2">
                  <v-icon>
                    mdi-home-outline
                  </v-icon>
                </v-col>
                <v-col col="12" sm="10">
                  <p>Home</p>
                </v-col>
              </v-row>

              <hr>

              <v-row class="elemts">
                <v-col col="12" sm="2">
                  <v-icon>
                    mdi-account-multiple-outline
                  </v-icon>
                </v-col>
                <v-col col="12" sm="10">
                  <p>Team</p>
                </v-col>
              </v-row>

              <hr>

              <v-row class="elemts">
                <v-col col="12" sm="2">
                  <v-icon>
                    mdi-file-document
                  </v-icon>
                </v-col>
                <v-col col="12" sm="10">
                  <p>Projects</p>
                </v-col>
              </v-row>

              <hr>

              <v-row class="elemts">
                <v-col col="12" sm="2">
                  <v-icon>
                    mdi-magnify
                  </v-icon>
                </v-col>
                <v-col col="12" sm="10">
                  <p>Search</p>
                </v-col>
              </v-row>

              <hr>

              <v-row class="elemts">
                <v-col col="12" sm="2">
                  <v-icon>
                    mdi-account-outline
                  </v-icon>
                </v-col>
                <v-col col="12" sm="10">
                  <p>Account</p>
                </v-col>
              </v-row>

              <hr>

              <v-row class="elemts" style="margin-bottom: 10px">
                <v-col col="12" sm="2">
                  <v-icon>
                    mdi-settings-outline
                  </v-icon>
                </v-col>
                <v-col col="12" sm="10">
                  <p>Admin</p>
                </v-col>
              </v-row>

            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
  <v-footer class="footer">
    <v-container>
      <v-row>
        <v-col cols="12" md="10">
          <p class="footer-text">© TeamStage GmbH 2022</p>
        </v-col>
        <v-col cols="12" md="2">
          <v-row>
            <v-col cols="12" md="3" class="align-center">
              <a href="#" class="footer-text">FAQ</a>
            </v-col>
            <v-col cols="12" md="3">
              <a href="#" class="footer-text">Support</a>
            </v-col>
            <v-col cols="12" md="3">
              <a href="#" class="footer-text">Contact</a>
            </v-col>
            <v-col cols="12" md="3">
              <a href="#" class="footer-text">Imprint</a>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">




</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Nunito');

.footer {
  background-color: #f2f2f2;
  min-height: 48px;
}

.footer-header {
  color: #1C1C1C;
}

.footer-text {
  text-align: left;
  font: normal normal normal 12px/16px Nunito;
  letter-spacing: 0px;
  color: #12022F;
  opacity: 1;
}

.homeCard{
  max-width: 200px ;
}

hr {
  margin-top: 10px;
  margin-bottom: 10px;
}

.elemts:hover {
  color: #4D6FF8;
}
</style>