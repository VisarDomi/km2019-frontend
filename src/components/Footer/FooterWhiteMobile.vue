<template>
  <div>
    <div class="footer-container" v-bind:class="gClass">
      <div class="row">
        <div class="col-5">
          <img src="@/assets/img/logoblack.svg" class="logo" alt @click="changeRoute('Home')" />
        </div>

        <div class="col-7">
          <div class="row links-row ml-0">
            <div class="col-4">
              <div class="row" style="margin-bottom:5px;" @click="changeRoute('Artists')">artistët</div>

              <a class="row" href="/#nder-vite-mobile">ndër vite</a>
            </div>

            <div class="col-4">
              <div class="row" style="margin-bottom:5px;" @click="changeRoute('Home')">#magjike</div>

              <a class="row" href="/#te-reja-mobile">të reja</a>
            </div>

            <div class="col-4">
              <div
                class="row"
                style="margin-bottom:5px;"
                @click="changeRoute('Rregullore')"
              >rregullore</div>

              <div class="row" @click="changeRoute('Voto')">voto</div>
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

        <div class="col-4 offset-3" style="padding-left:35px; padding-top:5px;">
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
    },
    goToVoto() {
      // console.log("h");
      this.$router.push({ name: "Voto" });
    },
  },
  props: {
    gClass: ""
  }
};
</script>


<style lang="scss" scoped>
.rel {
  position: relative !important;
}

.height-5 {
  height: 5% !important;
}

.social-1 {
  width: 25px;
}
a {
  color: black;
  text-decoration: none;
  :focus {
    color: black;
    text-decoration: none;
  }
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
  height: 16rem;
  position: absolute;
  bottom: 0%;
  width: 100%;
  padding: 2rem;
}
</style>