<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
  <v-app>

  <Head>
      <Link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"></Link>
      <Link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"></Link>
      <Link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"></Link>
      <Link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"></Link>
      <Link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"></Link>
      <Link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"></Link>
      <Link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"></Link>
      <Link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"></Link>
      <Link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"></Link>
      <Link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png"></Link>
      <Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></Link>
      <Link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"></Link>
      <Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></Link>
      <Link rel="manifest" href="/manifest.json"></Link>
      <Meta name="msapplication-TileColor" content="#ffffff"></Meta>
      <Meta name="msapplication-TileImage" content="/ms-icon-144x144.png"></Meta>
      <Meta name="theme-color" content="#ffffff"></Meta>
  </Head>
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
    <v-app-bar app="app" flat="flat" color="#f2f2f2" elevate-on-scroll="elevate-on-scroll">
      <v-container>
        <v-row class="align-center justify-center">
          <v-col sm="8" md="3">
            <div class="d-flex align-center justify-left">
              <v-img class="pointer" src="img/logo_sm.png" max-width="190px" contain="contain"
                     @click="goHome()"></v-img>
            </div>
          </v-col>
          <v-col class="align-center justify-center d-none d-md-flex" sm="0" md="4">
          </v-col>
          <v-col sm="4" md="3">
            <div class="d-flex align-center justify-end">
              <v-btn class="rounded-xl mr-2 d-none d-md-flex" text="text" @click="goToDe()" v-if="$i18n.locale != 'de'">
                <v-icon class="mr-1" small="small">mdi-web</v-icon>
                <span>de</span>
              </v-btn>
              <v-btn class="rounded-xl mr-2 d-none d-md-flex" text="text" @click="goToEn()" v-if="$i18n.locale != 'en'">
                <v-icon class="mr-1" small="small">mdi-web</v-icon>
                <span>en</span>
              </v-btn>
              <LayoutMainNavImg></LayoutMainNavImg>
            </div>
          </v-col>

        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <slot></slot>
    </v-main>

    <v-footer class="footer">
      <v-container>
        <v-row>
          <v-col cols="12" md="5" lg="4">
            <div class="d-flex justify-space-between align-center">
              <v-img src="../img/logo_sm.png" width="200px"></v-img>
              <v-spacer></v-spacer>
              <v-btn class="rounded-xl primary-btn" text="text" flat="flat" @click.stop="goToDe()"
                v-if="$i18n.locale != 'de'">
                <v-icon class="mr-2">mdi-web</v-icon>
                <span>Deutsch</span>
              </v-btn>
              <v-btn class="rounded-xl primary-btn" text="text" flat="flat" @click.stop="goToEn()"
                v-if="$i18n.locale != 'en'">
                <v-icon class="mr-2">mdi-web</v-icon>
                <span>English</span>
              </v-btn>
            </div>
            <div class="d-flex align-center">
              <CompsStoreBtn title="App-Store" icon="mdi-apple" href="https://www.apple.com/de/app-store/">
              </CompsStoreBtn>
              <v-spacer></v-spacer>
              <CompsStoreBtn title="Play-Store" icon="mdi-google-play" href="https://play.google.com/store">
              </CompsStoreBtn>
            </div>
            <div class="d-flex">
              <p class="text-caption">copyright &copy; 2022</p>
            </div>
          </v-col>
          <v-col class="d-none d-md-flex" md="1" lg="2"></v-col>
          <v-col cols="12" md="6">
            <v-row>
              <v-col cols="12" sm="4">
                <h6 class="text-subtitle-1 font-weight-bold">Quick-Links</h6>
                <hr class="footer-header mb-5" />
                <div class="d-flex flex-column"><a class="footer-link text-caption py-1" href="#">lorem ipsum</a><a
                    class="footer-link text-caption py-1" href="#">lorem ipsum</a><a
                    class="footer-link text-caption py-1" href="#">lorem ipsum</a><a
                    class="footer-link text-caption py-1" href="#">lorem ipsum</a></div>
              </v-col>
              <v-col cols="12" sm="4">
                <h6 class="text-subtitle-1 font-weight-bold">Support</h6>
                <hr class="footer-header mb-5" />
                <div class="d-flex flex-column"><a class="footer-link text-caption py-1" href="#">FAQ</a><a
                    class="footer-link text-caption py-1" href="#">Technische Hotline</a><a
                    class="footer-link text-caption py-1" href="#">Vetrieb</a><a class="footer-link text-caption py-1"
                    href="#">Ticketsystem</a></div>
              </v-col>
              <v-col cols="12" sm="4">
                <h6 class="text-subtitle-1 font-weight-bold">Corporate</h6>
                <hr class="footer-header mb-5" />
                <div class="d-flex flex-column"><a class="footer-link text-caption py-1" href="#">Impressum</a>
                  <a class="footer-link text-caption py-1" href="#">Datenschutz</a>
                  <NuxtLink class="footer-link text-caption py-1" :to="localePath('contact')">Kontakt</NuxtLink>
                  <a class="footer-link text-caption py-1" href="#">Datenschutzeinstellungen</a>
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
  onMounted,
  ref,
  resolveComponent,
  useHead,
  useRoute,
  navigateTo,
  useSwitchLocalePath,
  useLocalePath, useI18n, useLocaleHead, computed, useRouteBaseName, useFirebase
} from '#imports';
import { onAuthStateChanged } from '@firebase/auth';

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
  navigateTo(localePath('/'))
}


</script>

<style scoped>
.footer {
  background-color: #f2f2f2;
}

.footer-header {
  color: #1C1C1C;
}

.footer-link {
  text-decoration: none;
  color: #1C1C1C;
}
</style>