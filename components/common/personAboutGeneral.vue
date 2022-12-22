<template lang="pug">
v-container
  v-card(class="elevation-8")
    v-row
      div(class="blueH") Über Amy
    v-row
      div(class="title") Title
    v-row
      div(class="title2") Teamlead | CPM



</template>

<script>

</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css?family=Nunito');

.blueH {
  text-align: left;
  font: normal normal bold 20px/27px Nunito;
  letter-spacing: 0.5px;
  color: #0965CB;
  opacity: 1;
}

.title {
  text-align: left;
  font: normal normal normal 16px/22px Nunito;
  letter-spacing: 0.4px;
  color: #1C1C1C;
  opacity: 1;
}

.title2 {
  text-align: left;
  font: normal normal bold 20px/27px Nunito;
  letter-spacing: 0.5px;
  color: #1C1C1C;
  opacity: 1;
}

</style>