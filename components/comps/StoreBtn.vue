<template>
  <v-card class="my-8 pa-0 rounded" color="#1C1C1C" theme="dark" width="140px">
    <v-card-text class="ma-0 pa-0">
      <div class="d-flex align-center rounded-xl">
        <div class="d-flex align-center justify-center mx-4 my-2">
          <v-icon class="ma-0" size="x-large">{{ icon }}</v-icon>
        </div>
        <div class="d-flex flex-column"><span class="text-caption" style="line-height:1rem">get it on</span><span
            class="text-subtitle-2 font-weight-bold" style="line-height:1rem">{{ title }}</span></div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps(['title', 'icon'])
</script>