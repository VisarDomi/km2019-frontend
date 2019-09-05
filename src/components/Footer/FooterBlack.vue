<template>
  <div class="footer">
    <div class="row h-100">
      <div class="col-xl-3 col-lg-3 col-md-4 border-right-white">
        <div class="abs-center">
          <img src="@/assets/img/logowhite.svg" alt />
        </div>
      </div>
      <div class="col-xl-1 col-md-2 pl-5">
        <p class="footer-item footer-item--top" @click="changeRoute('Artists')">artistet</p>
        <p class="footer-item footer-item--bottom mt-5">nder vite</p>
      </div>
      <div class="col-xl-1 col-md-2 pl-5">
        <p class="footer-item footer-item--top">#magjike</p>
        <p class="footer-item footer-item--bottom mt-5">te reja</p>
      </div>
      <div class="col-xl-1 col-md-2 pl-5">
        <p class="footer-item footer-item--top">rregullore</p>
        <p class="footer-item footer-item--bottom mt-5">voto</p>
      </div>
      <div class="col-xl-5 col-md-2 offset-lg-1">
        <div class="icons abs-right">
          <img src="@/assets/img/icon twitter white.svg" class="mr-3" alt />
          <img src="@/assets/img/icon facebook white.svg" class="mr-3" alt />
          <img src="@/assets/img/icon instagram white.svg" class="mr-3" alt />
          <img src="@/assets/img/icon snapchat white.svg" class="mr-3" alt />
          <img src="@/assets/img/icon youtube white.svg" class="mr-3" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterBlack",
  data() {
    return {};
  },
  methods: {
    changeRoute(name) {
      this.$router.push({ name: name });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/sass/abstracts/_mixins.scss";

.border-right-white {
  border-right: 2px solid white;
}
.abs-right {
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translate(0%, -50%);
}
.abs-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.footer {
  position: absolute;
  bottom: 0%;
  width: 100%;
  height: 20%;
  background-color: #0e1032;
  &-item {
    color: white;
    font-size: 2rem;

    &--top {
      position: absolute;
      top: 25%;
    }
    &--bottom {
      position: absolute;
      bottom: 25%;
    }
  }
}
</style>
