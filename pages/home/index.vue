<template>
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


<style scoped>

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
</style>