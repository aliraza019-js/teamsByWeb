<template lang="pug">
.d-flex.flex-column.align-center.justify-center.mb-0.pb-0
  hr.my-divider
  .or-box.d-flex.align-center.justify-center
    span {{ $t('layout.or') }}
</template>

<style lang="scss" scoped>
.my-divider {
  border: 0.5px solid $text-primary;
  width: 70%;
}

.or-box {
  width: 90px;
  height: 20px;
  position: relative;
  padding: 10px, 5px;
  top: -10px;
  background-color: #fff;
  z-index: 50;
  border-radius: 5px;
}
</style>