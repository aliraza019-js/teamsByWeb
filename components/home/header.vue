<template>
  <section class="background-header">
    <v-container>
      <v-row class="align-center">
        <v-col cols="12" md="8">
          <v-row>
            <v-img src="../img/logoWhite.png" max-height="43.35px" max-width="227.29px"/>
          </v-row>
        </v-col>
        <v-col cols="12" md="4">
          <v-row>
            <v-col cols="12" md="6"/>
            <v-col cols="12" md="1" class="align-self-center">
              <v-icon color="white">
                mdi-web
              </v-icon>
            </v-col>
            <v-col cols="12" md="2" class="align-self-center">
              <p>DE</p>
            </v-col>
            <v-col cols="12" md="3">
              <v-img src="../img/testImgHeader.png" max-height="72px"/>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<!--
background: transparent linear-gradient(180deg, #04C785 0%, #0966CB 100%)
0% 0% no-repeat padding-box, url('../img/TestImg.png');

-->

<style scoped lang="scss">

@import url('https://fonts.googleapis.com/css?family=Poppins');

.background-header {
  background: url('../img/TestImg.png'), linear-gradient(180deg, #04C785 0%, #0966CB 100%);
  background-blend-mode: overlay;
  border-radius: 0px 0px 50px 50px;
  opacity: 0.92;
  min-height: 85px;
}

p {
  font: normal normal normal 22px/33px Poppins;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
}

</style>