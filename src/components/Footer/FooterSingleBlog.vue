<template>
  <div class="footer">
    <div class="row h-50 vertical-center footer-container">
      <div class="col-md-2">
        <div class="abs-center">
          <img class="logo-footer" src="@/assets/img/logoblack.svg" alt @click="changeSection(0)" />
        </div>
      </div>
      <div class="col-md-1 pl-7 temporary-spread border-left-black">
        <p class="footer-item align-centered" @click="changeSection(1)">juria</p>
      </div>
      <!-- <div class="col-md-1 pl-6">
        <p class="footer-item">#fotome</p>
      </div>-->
      <div class="col-md-1 pl-6 temporary-spread">
        <p class="footer-item" @click="changeSection(2)">ndër vite</p>
      </div>
      <div class="col-md-1 pl-6 temporary-spread">
        <p class="footer-item" @click="changeSection(3)">të reja</p>
      </div>
      <div class="col-md-1 temporary-spread">
        <p class="footer-item" @click="changeSection(4)">rregullore</p>
      </div>
      <!-- <div class="col-md-1 pl-6">
        <p class="footer-item">voto</p>
      </div>-->

      <div class="col-md-2 border-left-black">
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
                    src="@/assets/img/footer_export/social_blue_fb_h.svg"
                    style="width:4rem;"
                    alt
                  />
                </a>
                <a v-else target="_blank" href="https://www.facebook.com/kengamagjikeofficial/">
                  <img src="@/assets/img/footer_export/social_blue_fb.svg" style="width:4rem;" alt />
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
                    src="@/assets/img/footer_export/social_blue_ig_h.svg"
                    style="width:4rem;"
                    alt
                  />
                </a>
                <a v-else target="_blank" href="https://www.instagram.com/kengamagjikeofficial/">
                  <img src="@/assets/img/footer_export/social_blue_ig.svg" style="width:4rem;" alt />
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
                    src="@/assets/img/footer_export/social_blue_yt_h.svg"
                    style="width:4rem;"
                    alt
                  />
                </a>
                <a v-else target="_blank" href="https://www.youtube.com/user/officialkengamagjike">
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
import { eventBus } from "@/main";
export default {
  name: "FooterSingleBlog",
  data() {
    return {
      hoverFB: false,
      hoverYT: false,
      hoverIG: false
    };
  },
  methods: {
    changeRoute(name) {
      this.$router.push({ name: name });
    },
    changeSection(index) {
      this.$router.push({ name: "Home" });
      // console.log("after push");
      eventBus.$emit("changeSectionFromFooter", index);
      // // console.log("from footer");
    }
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
  position: relative;
  bottom: 0%;
  width: 100%;
  height: 13%;
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
