<template>
  <div>
    <div class="footer-container">
      <div class="row">
        <div class="col-5">
          <img src="@/assets/img/logoblack.svg" class="logo" alt @click="changeRoute('Home')" />
        </div>

        <div class="col-7">
          <div class="row links-row ml-0">
            <a class="col-4">
              <a
                class="row"
                style="margin-bottom:5px;"
                href="/#artists-mobile"
                v-if="this.lang == 'en'"
              >artists</a>
              <a class="row" style="margin-bottom:5px;" href="/#artists-mobile" v-else>artistët</a>

              <a class="row" href="/#nder-vite-mobile" v-if="this.lang == 'en'">throgh the years</a>
              <a class="row" href="/#nder-vite-mobile" v-else>ndër vite</a>
            </a>

            <div class="col-4">
              <div
                class="row"
                style="margin-bottom:5px;"
                @click="changeRoute('Home')"
                v-if="this.lang == 'en'"
              >#magjike</div>
              <div
                class="row"
                style="margin-bottom:5px;"
                @click="changeRoute('Home')"
                v-else
              >#magjike</div>

              <div class="row" href="/#te-reja-mobile" v-if="this.lang == 'en'">të reja</div>
              <div class="row" href="/#te-reja-mobile" v-else>të reja</div>
            </div>

            <div class="col-4">
              <div
                class="row"
                style="margin-bottom:5px;"
                @click="changeRoute('Rules')"
                v-if="this.lang == 'en'"
              >rules</div>
              <div
                class="row"
                style="margin-bottom:5px;"
                @click="changeRoute('Rules')"
                v-else
              >rregullore</div>

              <div class="row" @click="changeRoute('Home')">voto</div>
            </div>
          </div>
        </div>
      </div>

      <hr class="footer-separator" />

      <div class="row" style="margin-bottom:10px;">
        <div class="col-1">
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/kengamagjikeofficial/">
            <img src="@/assets/img/icon facebook black.svg" class="social-1" alt />
          </a>
        </div>

        <div class="col-1">
          <a
            href="https://www.youtube.com/user/officialkengamagjike"
            target="_blank" rel="noopener noreferrer"
          >
            <img src="@/assets/img/icon youtube black.svg" class="social-1" alt />
          </a>
        </div>

        <div class="col-1">
          <a
            href="https://www.instagram.com/kengamagjikeofficial/"
            target="_blank" rel="noopener noreferrer"
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
import { getLanguage } from "@/store/services/storage";
export default {
  name: "FooterSingleBlogMobile",

  methods: {
    changeRoute(name) {
      this.$router.push({ name: name });
    }
  },
  data() {
    return {
      lang: ""
    };
  },
  mounted() {
    this.lang = getLanguage();
  }
};
</script>

<style lang="scss" scoped>
a {
  color: black !important;
  text-decoration: none !important;
  &:visited {
    color: black !important;
  }
}

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
  height: 16rem;
  position: relative;

  z-index: 99999999;
  bottom: 0%;
  width: 100%;
  padding: 2rem;
}
</style>