<template>
  <div>
    <div class="footer-container">
      <div class="row">
        <div class="col-5">
          <img src="@/assets/img/logoblack.svg" class="logo" alt @click="changeRoute('Home')" />
        </div>

        <div class="col-7">
          <div class="row links-row">
            <div class="col-4">
              <div class="row" style="margin-bottom:5px;" @click="changeRoute('Home')">artistët</div>

              <div class="row" @click="changeRoute('Home')">ndër vite</div>
            </div>

            <div class="col-4">
              <div class="row" style="margin-bottom:5px;" @click="changeRoute('Home')">#magjike</div>

              <div class="row" @click="changeRoute('Home')">të reja</div>
            </div>

            <div class="col-4">
              <div class="row" style="margin-bottom:5px;" @click="changeRoute('Home')">rregullore</div>

              <div class="row" @click="changeRoute('Home')">voto</div>
            </div>
          </div>
        </div>
      </div>

      <hr class="footer-separator" />

      <div class="row" style="margin-bottom:10px;">
        <div class="col-1">
          <a target="_blank" href="https://www.facebook.com/kengamagjikeofficial/">
            <img src="@/assets/img/icon facebook black.svg" class="social-1" alt />
          </a>
        </div>

        <div class="col-1">
          <a
            href="https://www.youtube.com/user/officialkengamagjike"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="@/assets/img/icon youtube black.svg" class="social-1" alt />
          </a>
        </div>

        <div class="col-1">
          <a
            href="https://www.instagram.com/kengamagjikeofficial/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="@/assets/img/icon instagram black.svg" class="social-1" alt />
          </a>
        </div>

        <div class="col-4 offset-4" style="padding-left:35px; padding-top:5px;">
          <a href="https://boldcrest.com/">
            <img src="@/assets/img/logocrestfooterwhite.svg" alt />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeRoute(name) {
      this.$router.push({ name: name });
    }
  }
};
</script>

<style lang="scss" scoped>
.social-1 {
  width: 25px;
}

.footer-separator {
  color: #0e1032;
}

hr {
  border-top: 2px solid #0e1032;
  // margin-left:5rem;
  margin-top: 2rem;
  // margin-right: 5rem;
}

.logo {
  width: 110px;
}

.links-row {
  color: #0e1032;
  font-size: 1.2rem;
}

.footer-container {
  background: white;
  height: 14rem;
  position: fixed;

  z-index: 99999999;
  bottom: 0%;
  width: 100%;
  padding: 2rem;
}
</style>