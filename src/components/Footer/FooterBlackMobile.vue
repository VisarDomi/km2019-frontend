<template>
  <div>
    <div class="footer-container">
      <div class="row">
        <div class="col-5">
          <img src="@/assets/img/logowhite.svg" class="logo" alt v-scroll-to="'#kengamagjike'" />
        </div>

        <div class="col-7">
          <div class="row links-row ml-0">
            <div class="col-4">
              <div
                class="row"
                style="margin-bottom:5px;"
                @click="changeRoute('Artists')"
                v-if="this.lang == 'en'"
              >artists</div>
              <div
                class="row"
                style="margin-bottom:5px;"
                @click="changeRoute('Artists')"
                v-else
              >artistët</div>

              <div
                class="row"
                v-scroll-to="'#nder-vite-mobile'"
                v-if="this.lang == 'en'"
              >through years</div>
              <div
                class="row"
                style="margin-bottom:5px;"
                @click="changeRoute('Home')"
                v-else
              >ndër vite</div>
            </div>

            <div class="col-4">
              <div
                class="row"
                style="margin-bottom:5px;"
                v-scroll-to="'#te-reja-mobile'"
                v-if="this.lang == 'en'"
              >news</div>
              <div
                class="row"
                style="margin-bottom:5px;"
                @click="changeRoute('Home')"
                v-else
              >të reja</div>

              <div class="row" v-scroll-to="'#juria-mobile'" v-if="this.lang == 'en'">jury</div>
              <div class="row" style="margin-bottom:5px;" @click="changeRoute('Home')" v-else>juria</div>
            </div>

            <div class="col-4">
              <div
                class="row"
                style="margin-bottom:5px;"
                @click="changeRoute('Rregullore')"
                v-if="this.lang == 'en'"
              >rules</div>
              <div
                class="row"
                style="margin-bottom:5px;"
                @click="changeRoute('Rregullore')"
                v-else
              >rregullore</div>

              <div class="row" @click="changeRoute('Voto')" v-if="this.lang == 'en'">vote</div>
              <div class="row" @click="changeRoute('Voto')" v-else>voto</div>
            </div>
          </div>
        </div>
      </div>

      <hr class="footer-separator" />

      <div class="row" style="margin-bottom:10px;">
        <div class="col-1">
          <a target="_blank" href="https://www.facebook.com/kengamagjikeofficial/">
            <img src="@/assets/img/icon facebook white.svg" class="social-1" alt />
          </a>
        </div>

        <div class="col-1">
          <a
            href="https://www.youtube.com/user/officialkengamagjike"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="@/assets/img/icon youtube white.svg" class="social-1" alt />
          </a>
        </div>

        <div class="col-1">
          <a
            href="https://www.instagram.com/kengamagjikeofficial/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="@/assets/img/icon instagram white.svg" class="social-1" alt />
          </a>
        </div>

        <div class="col-4 offset-3" style="padding-left:35px; padding-top:5px;">
          <a href="https://boldcrest.com/">
            <img src="@/assets/img/logocrestfooterblack.svg" alt />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getLanguage, saveLanguage } from "@/store/services/storage";

import { eventBus } from "@/main";

export default {
  methods: {
    changeRoute(name) {
      this.$router.push({ name: name });
    },
    goToVoto() {
      this.$router.push({ name: "Voto" });
    },
  },
  data() {
    return {
      lang: ""
    };
  },
  mounted() {
    eventBus.$on("changeLanguage", payload => {
      this.lang = payload;
    });
    this.lang = getLanguage();
  }
};
</script>

<style lang="scss" scoped>
.social-1 {
  width: 25px;
}

.footer-separator {
  color: white;
}

hr {
  border-top: 2px solid white;
  // margin-left:5rem;
  margin-top: 2rem;
  // margin-right: 5rem;
}

.logo {
  width: 110px;
}

.links-row {
  color: white;
  font-size: 1.2rem;
}

.footer-container {
  background: #0e1032;
  height: 16rem;
  // position:absolute;
  // bottom:0%;
  width: 100%;
  padding: 2rem;
}
</style>