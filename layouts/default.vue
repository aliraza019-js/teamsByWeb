<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <v-app>
      
      <v-main>
        <slot></slot>
      </v-main>
      
    <v-footer class="footer">
      <v-container>
        <v-row>
          <v-col cols="12" md="5" lg="4">
            <div class="d-flex justify-space-between align-center">
              <v-img src="/img/logo_sm.png" width="200px"></v-img>
              <v-spacer></v-spacer>
              <v-btn class="rounded-xl primary-btn" text="text" flat="flat" 
                     v-if="$i18n.locale != 'de'">
                <v-icon class="mr-2">mdi-web</v-icon>
                <span>Deutsch</span>
              </v-btn>
              <v-btn class="rounded-xl primary-btn" text="text" flat="flat" 
                     v-if="$i18n.locale != 'en'">
                <v-icon class="mr-2">mdi-web</v-icon>
                <span>English</span>
              </v-btn>
            </div>
            <div class="d-flex align-center">
              <CompsStoreBtn title="App-Store" icon="mdi-apple"></CompsStoreBtn>
              <v-spacer></v-spacer>
              <CompsStoreBtn title="Play-Store" icon="mdi-google-play"></CompsStoreBtn>
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
                <hr class="footer-header mb-5"/>
                <div class="d-flex flex-column"><a class="footer-link text-caption py-1" href="#">lorem ipsum</a><a
                    class="footer-link text-caption py-1" href="#">lorem ipsum</a><a
                    class="footer-link text-caption py-1" href="#">lorem ipsum</a><a
                    class="footer-link text-caption py-1" href="#">lorem ipsum</a></div>
              </v-col>
              <v-col cols="12" sm="4">
                <h6 class="text-subtitle-1 font-weight-bold">Support</h6>
                <hr class="footer-header mb-5"/>
                <div class="d-flex flex-column"><a class="footer-link text-caption py-1" href="#">FAQ</a><a
                    class="footer-link text-caption py-1" href="#">Technische Hotline</a><a
                    class="footer-link text-caption py-1" href="#">Vetrieb</a><a class="footer-link text-caption py-1"
                                                                                 href="#">Ticketsystem</a></div>
              </v-col>
              <v-col cols="12" sm="4">
                <h6 class="text-subtitle-1 font-weight-bold">Corporate</h6>
                <hr class="footer-header mb-5"/>
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
import {onAuthStateChanged} from '@firebase/auth';

const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath();
const t = useI18n({useScope: 'global'})
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