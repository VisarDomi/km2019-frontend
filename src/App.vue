<template>
  <vue-page-transition>
    <router-view />
  </vue-page-transition>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import "assets/sass/main.scss";
.overlay-right {
  background: #0e1032 !important;
  z-index: 9999999;
}
.overlay-left-green {
  background: #47b8b0 !important;
  z-index: 9999999;
}
.overlay-right-green {
  background: #47b8b0 !important;
  z-index: 9999999;
}

.overlay-left {
  background: #0e1032 !important;
  z-index: 9999999; 
}
</style>
