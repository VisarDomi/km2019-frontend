<template>
  <div class="footer">
    <div class="row h-50 vertical-center footer-container">
      <div class="col-md-2">
        <div class="abs-center">
          <img class="logo-footer" src="@/assets/img/logowhite.svg" alt @click="changeSection(0)" />
        </div>
      </div>
      <div class="col-md-1 pl-7 temporary-spread border-left-white">
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
        <p class="footer-item" @click="changeRoute('Rregullore')">rregullore</p>
      </div>
      <!-- <div class="col-md-1 pl-6">
        <p class="footer-item">voto</p>
      </div>-->

      <div class="col-md-2 border-left-white icons-center">
        <div class="icons horizontal-center">
          <img src="@/assets/img/icon facebook white.svg" class="social-1" alt />
          <img src="@/assets/img/icon instagram white.svg" class="social-2" alt />
          <img src="@/assets/img/icon youtube white.svg" class="social-3" alt />
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
export default {
  name: "FooterBlack",
  data() {
    return {};
  },
  methods: {
    changeRoute(name) {
      this.$router.push({ name: name });
    },
    changeSection(index) {
      this.$router.push({ name: "Home" });
      console.log("after push");
      eventBus.$emit("changeSectionFromFooter", index);
      // console.log("from footer");
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
  }
  &-2 {
    position: absolute;
    left: 42%;
  }
  &-3 {
    // position: absolute;
    // left: 2%;
    padding-left: 64%;
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
