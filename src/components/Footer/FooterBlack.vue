<template>
  <div class="footer">
    <div class="row h-50 vertical-center">
      <div class="col-md-2">
        <div class="abs-center">
          <img src="@/assets/img/logowhite.svg" alt />
        </div>
      </div>
      <div class="col-md-1 pl-6 border-left-white">
        <p class="footer-item align-centered" @click="changeRoute('Artists')">artistët</p>
      </div>
      <div class="col-md-1 pl-6">
        <p class="footer-item">#fotome</p>
      </div>
      <div class="col-md-1 pl-6">
        <p class="footer-item">ndër vite</p>
      </div>
      <div class="col-md-1 pl-6">
        <p class="footer-item">të reja</p>
      </div>
      <div class="col-md-1 pl-6">
        <p class="footer-item">rregullore</p>
      </div>
      <div class="col-md-1 pl-6">
        <p class="footer-item">voto</p>
      </div>

      <div class="col-md-2 border-left-white icons-center">
        <div class="icons horizontal-center">
          <img src="@/assets/img/icon facebook white.svg" class="mr-3" alt />
          <img src="@/assets/img/icon instagram white.svg" class="mr-3" alt />
          <img src="@/assets/img/icon youtube white.svg" class="mr-3" alt />
        </div>
      </div>
      <div class="col-md-2 border-left-white">
        <p class="footer-item">
          &copy;Forged by
          <span>BoldCrest</span>
        </p>
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
.icons-center {
  padding-left: 4%;
}
.pl-6 {
  padding-left: 2%;
}

.border-left-white {
  border-left: 2px solid white;
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
  height: 13%;
  background-color: #0e1032;
  &-item {
    color: white;
    font-size: 2rem;
    span {
      font-weight: 700;
    }
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
