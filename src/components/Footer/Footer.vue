<template>
  <div class="footer">
    <div class="row h-100">
      <div class="col-lg-2 border-right-white">
        <div class="abs-center">
          <img src="@/assets/img/logowhite.svg" alt />
        </div>
      </div>
      <div class="col-lg-1 pl-5">
        <p class="footer-item mt-5" @click="changeRoute('Artists')">artistet</p>
        <p class="footer-item">nder vite</p>
      </div>
      <div class="col-lg-1 pl-5">
        <p class="footer-item mt-5">#magjike</p>
        <p class="footer-item">te reja</p>
      </div>
      <div class="col-lg-1 pl-5">
        <p class="footer-item mt-5">rregullore</p>
        <p class="footer-item">voto</p>
      </div>
      <div class="col-lg-4 bg-danger"></div>
      <div class="col-lg-3 bg-primary"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  props: {
    menutype: "",
    iconWhite: "",
    logoBlack: "",
    logoWhite: ""
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
.border-right-white {
  border-right: 2px solid white;
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
  }
}
</style>
