<template>
  <HomeNavigation/>
</template>

<script setup lang="ts">

function foo() {
  alert("Hello Worold");

}

import {definePageMeta} from "#imports";
definePageMeta({
  layout: "home",
});
</script>

<style>

</style>