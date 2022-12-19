<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">

  <Head>
  </Head>
  <v-app>
    <v-navigation-drawer app="app" bottom="bottom" location="right" v-model="drawer"
                         disable-resize-watcher="disable-resize-watcher">
      <v-card flat="flat">
        <v-card-text>
          <v-btn class="rounded-xl stretch" text="text" flat="flat" @click.stop="goToDe()" v-if="$i18n.locale != 'de'">
            <v-icon class="mr-2">mdi-web</v-icon>
            <span>de</span>
          </v-btn>
          <v-btn class="rounded-xl stretch" text="text" flat="flat" @click.stop="goToEn()" v-if="$i18n.locale != 'en'">
            <v-icon class="mr-2">mdi-web</v-icon>
            <span>en</span>
          </v-btn>
        </v-card-text>
      </v-card>
      <v-divider></v-divider>
    </v-navigation-drawer>
    <v-app-bar app="app" flat="flat" elevate-on-scroll="elevate-on-scroll" class="background-header">
      <v-container>
        <v-row class="align-center justify-center">
          <v-col sm="8" md="3">
            <div class="d-flex justify-left">
              <v-img class="pointer" src="../img/logoWhite.png" max-width="240px" contain="contain"
                     @click="goHome()"></v-img>
            </div>
          </v-col>
          <v-col class="align-center justify-center d-none d-md-flex" sm="0" md="4">
          </v-col>
          <v-col sm="4" md="3">
            <div class="d-flex align-center justify-end">
              <v-btn class="rounded-xl mr-2 d-none d-md-flex" text="text" @click="goToDe()" v-if="$i18n.locale != 'de'">
                <v-icon class="mr-1" small="small" color="white">mdi-web</v-icon>
                <span class="header-text">de</span>
              </v-btn>
              <v-btn class="rounded-xl mr-2 d-none d-md-flex" text="text" @click="goToEn()" v-if="$i18n.locale != 'en'">
                <v-icon class="mr-1" small="small" color="white">mdi-web</v-icon>
                <span class="header-text">en</span>
              </v-btn>
              <LayoutMainNavImg/>
            </div>
          </v-col>

        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <slot></slot>
    </v-main>


  <v-footer class="footer">
    <v-container class="w-75 mr-auto ml-auto">
      <v-row>
        <v-col cols="12" md="6">
          <div class="footer-text order-0">
            © TeamStage GmbH 2022
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <v-row>
            <v-col class="d-flex">
              <div class="order-1 mr-5 text-right">
                <a href="###" class="footer-text">FAQ</a>
              </div>
              <div class="order-2 mr-5">
                <a href="###" class="footer-text">Support</a>
              </div>
              <div class="order-3 mr-5">
                <a href="###" class="footer-text">Contact</a>
              </div>
              <div class="order-4">
              <a href="#" class="footer-text">Imprint</a>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
  </v-app>

  </Html>

</template>

<script setup lang="ts">
import {
  ref,
  useRoute,
  useSwitchLocalePath,
  useLocalePath, useI18n, useLocaleHead, navigateTo
} from '#imports';

const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath();
const t = useI18n({ useScope: 'global' })
/**
 * head configuration
 */
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})

/**
 * data
 */
const drawer = ref(false)
const route = useRoute()

// toggle menu
const toggleMenu = () => {
  drawer.value = !drawer.value
}


// lang switcher

const goToDe = () => {
  navigateTo(switchLocalePath('de'))
}
const goToEn = () => {
  navigateTo(switchLocalePath('en'))
}
const goHome = () => {
  navigateTo(localePath('/home'))
}

</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Nunito');
@import url('https://fonts.googleapis.com/css?family=Poppins');

.footer {
  background-color: #f2f2f2;
  min-height: 48px;
}

.footer-text {
  font: normal normal normal 12px/16px Nunito;
  letter-spacing: 0px;
  color: #12022F;
  opacity: 1;
}

.background-header::before {
  content: "";
  background-image: url("../img/TestImg.png");
  background-size: cover;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 0.08;
}

.background-header {
  position: relative;
  background: transparent linear-gradient(180deg, #04C785 0%, #0966CB 100%) 0% 0% no-repeat padding-box;
  border-radius: 0px 0px 50px 50px;
  opacity: 1;
  min-height: 115px;
}

.header-text {
  font: normal normal normal 22px/33px Poppins;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
}

</style>

