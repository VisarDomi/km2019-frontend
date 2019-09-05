<template>
  <div class="footer">
    <div class="row h-100">
      <div class="col-sm-5 border-right-white w-logo">
        <img src="@/assets/img/logoblack.svg" class="logo-container" alt />
      </div>
      <div class="pl-5 col-sm-2">
        <p class="footer-item footer-item--top" @click="changeRoute('Artists')">artistet</p>
        <p class="footer-item footer-item--middle">#magjike</p>
        <p class="footer-item footer-item--bottom nder-vite">nder vite</p>
      </div>
      <div class="pl-5 col-sm-2">
        <p class="footer-item footer-item--top">rregullore</p>
        <p class="footer-item footer-item--middle">te reja</p>
        <p class="footer-item footer-item--bottom">voto</p>
      </div>
      <div class="col-sm-3">
        <div class="icons abs-right">
          <img src="@/assets/img/icon twitter black.svg" class="mr-3" alt />
          <img src="@/assets/img/icon facebook black.svg" class="mr-3" alt />
          <img src="@/assets/img/icon instagram black.svg" class="mr-3" alt />
          <img src="@/assets/img/icon snapchat black.svg" class="mr-3" alt />
          <img src="@/assets/img/icon youtube black.svg" class="mr-3" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterWhiteSmall",
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
.w-logo {
  width: 10%;
}

.logo-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  img {
    max-width: 100%;
    height: auto;
  }
}

.border-right-white {
  border-right: 2px solid black;
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
  height: 6%;
  background-color: white;
  text-align: center;
  &-item {
    color: black;
    font-size: 2rem;
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);

    &--top {
      top: 20%;
    }
    &--middle {
      top: 40%;
    }
    &--bottom {
      bottom: 20%;
    }
  }
}
.nder-vite {
  @include respond(tab-port) {
    font-size: 1.5rem;
  }
}
</style>
