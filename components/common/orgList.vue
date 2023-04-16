<template lang="pug">
v-card(height="65px" rounded="lg")
  div(class="d-flex w-100 justify-space-between align-center px-4 h-100")
    div(class="d-flex align-start flex-column") 
      div(class="d-flex")
        p(class="place") {{org.city}} | {{org.country}}
      p(class="orgName") {{org.name}}
    div(class="border rounded-lg pa-2")
      v-img(:src="org.imgUrl" width="30")
</template>

<script setup>
const props = defineProps(['org']);
</script>

<style lang="scss" scoped>

.place {
  font: normal normal normal 12px/16px Nunito;
  color: #1C1C1C;
  opacity: 1;
}

.orgName {
  font: normal normal bold 16px/22px Nunito;
  letter-spacing: 0px;
  color: #0966CB;
  opacity: 1;
}

.card {
  min-height: 72px;
}

.img {
  max-width:52px;
  border: 1px solid #E1E1E1;
}
</style>