<template>
  <div class="footer" v-bind:class="height">
    <div class="row h-50 vertical-center footer-container">
      <div class="col-md-2">
        <div class="abs-center">
          <img class="logo-footer" src="@/assets/img/logoblack.svg" alt @click="changeSection(0)" />
        </div>
      </div>
      <div class="col-md-1" border-left-black>
        <a class="footer-item" href="/#section-artists" v-if="this.lang == 'en'">artists</a>
        <a class="footer-item" href="/#section-artists" v-else>artistet</a>
      </div>
      <div class="col-md-1">
        <a class="footer-item" href="/#nder-vite" v-if="this.lang == 'en'">Through the years</a>
        <a class="footer-item" href="/#nder-vite" v-else>ndër vite</a>
      </div>
      <div class="col-md-1">
        <a class="footer-item" href="/#te-reja" v-if="this.lang == 'en'">news</a>
        <a class="footer-item" href="/#te-reja" v-else>të reja</a>
      </div>
      <div class="col-md-1">
        <a class="footer-item align-centered" href="/#juria" v-if="this.lang == 'en'">the jury</a>
        <a class="footer-item align-centered" href="/#juria" v-else>juria</a>
      </div>
      <div class="col-md-1">
        <a class="footer-item" @click="gotoVoto()" v-if="this.lang == 'en'">vote</a>
        <a class="footer-item" @click="gotoVoto()" v-else>voto</a>
      </div>
      <div class="col-md-1">
        <div class="footer-item" @click="gotoRregullore()" v-if="this.lang == 'en'">rules</div>
        <div class="footer-item" @click="gotoRregullore()" v-else>rregullore</div>
      </div>

      <div class="col-md-2 border-left-black">
        <div class="icons horizontal-center">
          <div class="row ml-0">
            <div class="col-4">
              <div @mouseover="hoverFB = true" @mouseleave="hoverFB = false">
                <a
                  v-if="hoverFB"
                  target="_blank" rel="noopener noreferrer"
                  href="https://www.facebook.com/kengamagjikeofficial/"
                >
                  <img
                    src="@/assets/img/footer_export/social_blue_fb_h.svg"
                    style="width:4rem;"
                    alt
                  />
                </a>
                <a v-else target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/kengamagjikeofficial/">
                  <img src="@/assets/img/footer_export/social_blue_fb.svg" style="width:4rem;" alt />
                </a>
              </div>
            </div>

            <div class="col-4">
              <div @mouseover="hoverIG = true" @mouseleave="hoverIG = false">
                <a
                  v-if="hoverIG"
                  target="_blank" rel="noopener noreferrer"
                  href="https://www.instagram.com/kengamagjikeofficial/"
                >
                  <img
                    src="@/assets/img/footer_export/social_blue_ig_h.svg"
                    style="width:4rem;"
                    alt
                  />
                </a>
                <a v-else target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/kengamagjikeofficial/">
                  <img src="@/assets/img/footer_export/social_blue_ig.svg" style="width:4rem;" alt />
                </a>
              </div>
            </div>

            <div class="col-4">
              <div @mouseover="hoverYT = true" @mouseleave="hoverYT = false">
                <a
                  v-if="hoverYT"
                  target="_blank" rel="noopener noreferrer"
                  href="https://www.youtube.com/user/officialkengamagjike"
                >
                  <img
                    src="@/assets/img/footer_export/social_blue_yt_h.svg"
                    style="width:4rem;"
                    alt
                  />
                </a>
                <a v-else target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/user/officialkengamagjike">
                  <img src="@/assets/img/footer_export/social_blue_yt.svg" style="width:4rem;" alt />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-2 border-left-black">
        <p class="footer-item">
          <a href="https://boldcrest.com/">
            <img src="@/assets/img/logocrestfooterwhite.svg" alt class="crest-logo" />
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { getLanguage } from "@/store/services/storage";
export default {
  name: "FooterWhite",
  data() {
    return {
      hoverFB: false,
      hoverYT: false,
      hoverIG: false,
      lang: ""
    };
  },
  props: {
    height: ""
  },
  methods: {
    changeSection(index) {
      this.$router.push({ name: "Home", hash: "#nder-vite" });
    },
    gotoRregullore() {
      this.$router.push({ name: "Rregullore" });
    },
    gotoVoto() {
      this.$router.push({ name: "Voto" });
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
a,
a:focus,
a:visited {
  // color: black !important;
}
.height-5 {
  height: 5% !important;
}

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

.border-left-black {
  border-left: 2px solid black;
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
  // height: 13%;
  height: 9rem;
  overflow: hidden;
  background-color: white;
  &-item {
    color: black;
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
