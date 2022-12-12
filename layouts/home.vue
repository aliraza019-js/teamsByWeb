<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">

  <Head>
  </Head>
  <v-app>

    <v-main>
      <slot></slot>
    </v-main>


  <v-footer class="footer">
    <v-container>
      <v-row>
        <v-col cols="12" md="9" class="align-start">
          <p class="footer-text order-0">© TeamStage GmbH 2022</p>
        </v-col>
        <v-col cols="12" md="3" class="align-end">
          <v-row>
            <v-col cols="12" md="3">
              <div class="d-flex flex-column">
                <a href="#" class="footer-text order-1">FAQ</a>
              </div>
            </v-col>
            <v-col cols="12" md="3">
              <div class="d-flex flex-column">
              <a href="#" class="footer-text order-2">Support</a>
              </div>
            </v-col>
            <v-col cols="12" md="3">
              <div class="d-flex flex-column">
              <a href="#" class="footer-text order-3">Contact</a>
              </div>
            </v-col>
            <v-col cols="12" md="3">
              <div class="d-flex flex-column">
              <a href="#" class="footer-text order-4">Imprint</a>
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
  useLocalePath, useI18n, useLocaleHead
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


</script>

<style scoped>

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
</style>

