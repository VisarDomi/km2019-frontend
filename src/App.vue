<template>
<vue-page-transition>
  <router-view/>
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
.overlay-right{
  background:#0e1032 !important;
}

.overlay-left{
  background:#0e1032 !important;
}
</style>
