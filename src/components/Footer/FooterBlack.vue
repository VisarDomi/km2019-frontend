<template>
  <div class="footer">
    <div class="row h-50 vertical-center footer-container">
      <div class="col-md-2">
        <div class="abs-center">
          <img class="logo-footer" src="@/assets/img/logowhite.svg" alt v-scroll-to="'#magjike'" />
        </div>
      </div>
      <div class="col-md-1 pl-6 border-left-white">
        <p class="footer-item" v-scroll-to="'#section-artists'" v-if="this.lang == 'en'">artists</p>
        <p class="footer-item" v-scroll-to="'#section-artists'" v-else>artistet</p>
      </div>
      <div class="col-md-1 pl-6">
        <p class="footer-item" v-scroll-to="'#nder-vite'" v-if="this.lang == 'en'">through the years</p>
        <p class="footer-item" v-scroll-to="'#nder-vite'" v-else>ndër vite</p>
      </div>
      <div class="col-md-1 pl-6">
        <p class="footer-item" v-scroll-to="'#te-reja'" v-if="this.lang == 'en'">news</p>
        <p class="footer-item" v-scroll-to="'#te-reja'" v-else>të reja</p>
      </div>
      <div class="col-md-1 pl-6">
        <p
          class="footer-item align-centered"
          v-scroll-to="'#juria'"
          v-if="this.lang == 'en'"
        >the jury</p>
        <p class="footer-item align-centered" v-scroll-to="'#juria'" v-else>juria</p>
      </div>
      <div class="col-md-1">
        <p class="footer-item" @click="changeRoute('Voto')" v-if="this.lang == 'en'">vote</p>
        <p class="footer-item" @click="changeRoute('Voto')" v-else>voto</p>
      </div>
      <div class="col-md-1">
        <p class="footer-item" @click="changeRoute('Rregullore')" v-if="this.lang == 'en'">rules</p>
        <p class="footer-item" @click="changeRoute('Rregullore')" v-else>rregullore</p>
      </div>
      <!-- <div class="col-md-1 pl-6">
        <p class="footer-item">voto</p>
      </div>-->

      <div class="col-md-2 border-left-white">
        <div class="icons horizontal-center">
          <div class="row ml-0">
            <div class="col-4">
              <div @mouseover="hoverFB = true" @mouseleave="hoverFB = false">
                <a
                  v-if="hoverFB"
                  target="_blank"
                  href="https://www.facebook.com/kengamagjikeofficial/"
                >
                  <img
                    src="@/assets/img/footer_export/social_white_fb_h.svg"
                    style="width:4rem;"
                    alt
                  />
                </a>
                <a v-else target="_blank" href="https://www.facebook.com/kengamagjikeofficial/">
                  <img src="@/assets/img/footer_export/social_white_fb.svg" style="width:4rem;" alt />
                </a>
              </div>
            </div>

            <div class="col-4">
              <div @mouseover="hoverIG = true" @mouseleave="hoverIG = false">
                <a
                  v-if="hoverIG"
                  target="_blank"
                  href="https://www.instagram.com/kengamagjikeofficial/"
                >
                  <img
                    src="@/assets/img/footer_export/social_white_ig_h.svg"
                    style="width:4rem;"
                    alt
                  />
                </a>
                <a v-else target="_blank" href="https://www.instagram.com/kengamagjikeofficial/">
                  <img src="@/assets/img/footer_export/social_white_ig.svg" style="width:4rem;" alt />
                </a>
              </div>
            </div>

            <div class="col-4">
              <div @mouseover="hoverYT = true" @mouseleave="hoverYT = false">
                <a
                  v-if="hoverYT"
                  target="_blank"
                  href="https://www.youtube.com/user/officialkengamagjike"
                >
                  <img
                    src="@/assets/img/footer_export/social_white_yt_h.svg"
                    style="width:4rem;"
                    alt
                  />
                </a>
                <a v-else target="_blank" href="https://www.youtube.com/user/officialkengamagjike">
                  <img src="@/assets/img/footer_export/social_white_yt.svg" style="width:4rem;" alt />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-2 border-left-white">
        <p class="footer-item">
          <a href="https://boldcrest.com/">
            <img src="@/assets/img/logocrestfooterblack.svg" alt class="crest-logo" />
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "@/main";
import { getLanguage, saveLanguage } from "@/store/services/storage";
export default {
  name: "FooterBlack",
  data() {
    return {
      hoverFB: false,
      hoverYT: false,
      hoverIG: false,
      lang: ""
    };
  },
  methods: {
    changeRoute(name) {
      this.$router.push({ name: name });
    },
    changeSection(index) {
      this.$router.push({ name: "Home" });
      eventBus.$emit("changeSectionFromFooter", index);
    }
  },
  mounted() {
    this.lang = getLanguage();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/sass/abstracts/_mixins.scss";

.crest-logo {
  width: 250px;
  padding-left: 30px;
  @include respond(small-screen) {
    padding-left: 0;
    transform: scale(0.8);
  }
}

.logo-footer {
  @include respond(small-screen) {
    transform: scale(0.8);
  }
}

.footer-container {
  padding-left: 35px;
}

.footer-item {
  cursor: pointer;
}
.social {
  &-1 {
    position: absolute;
    left: 14%;
    top: -100%;
  }
  &-1:hover {
    cursor: pointer;
  }
  &-2 {
    position: absolute;
    left: 42%;
    top: -100%;
  }
  &-2:hover {
    cursor: pointer;
  }
  &-3 {
    // position: absolute;
    // left: 2%;
    padding-left: 64%;
    top: -100%;
  }
  &-3 :hover {
    cursor: pointer;
  }
}

.temporary-spread {
  margin-right: 3%;
}

.icons-center {
  padding-left: 4%;
}
.pl-6 {
  padding-left: 1%;
}
.pl-7 {
  padding-left: 4%;
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
  overflow: hidden;
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
