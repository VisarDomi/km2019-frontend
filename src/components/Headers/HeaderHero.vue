<template>
  <!-- <div> -->
  <div class="header-hero row align-items-center menu__items" v-bind:class="menutype">
    <div class="col-xl-3 col-lg-4 col-sm-4 high-index">
      <span class="d-lg-inline-block" href="#" v-if="logoBlack">
        <img
          src="@/assets/img/logoblack.svg"
          alt="Logo"
          class="img-logo logo respond-width--logo"
          v-scroll-to="'#kengamagjike'"
        />
      </span>
      <span class="d-lg-inline-block" href="#" v-if="logoWhite">
        <img
          src="@/assets/img/logowhite.svg"
          alt="Logo"
          class="img-logo logo respond-width--logo"
          v-scroll-to="'#kengamagjike'"
        />
      </span>
      <span class="d-lg-inline-block" href="#" v-if="logoGreen">
        <img
          src="@/assets/img/logoblog.svg"
          alt="Logo"
          class="img-logo logo respond-width--logo"
          v-scroll-to="'#kengamagjike'"
        />
      </span>
    </div>
    <div
      v-if="this.lang == 'en'"
      class="col-lg-1 col-sm-1 offset-xl-3 offset-lg-2 offset-sm-2 cmi"
      v-scroll-to="'#juria'"
    >jury</div>
    <div
      v-else
      class="col-lg-1 col-sm-1 offset-xl-3 offset-lg-2 offset-sm-2 cmi"
      v-scroll-to="'#juria'"
    >juria</div>

    <div
      v-if="this.lang == 'en'"
      class="col-lg-1 col-sm-1 cmi"
      v-scroll-to="'#nder-vite'"
    >through years</div>
    <div v-else class="col-lg-1 col-sm-1 cmi" v-scroll-to="'#nder-vite'">ndër vite</div>

    <div v-if="this.lang == 'en'" class="col-lg-1 col-sm-1 cmi" v-scroll-to="'#te-reja'">news</div>
    <div v-else class="col-lg-1 col-sm-1 cmi" v-scroll-to="'#te-reja'">të reja</div>

    <div v-if="this.lang == 'en'" class="col-lg-1 col-sm-1 cmi" @click="goToRregullore()">rules</div>
    <div v-else class="col-lg-1 col-sm-1 cmi" @click="goToRregullore()">rregullore</div>

    <div class="col-lg-1 col-sm-1 cmi" @click="changeLang()" v-if="this.lang == 'en'">Shqip</div>
    <div class="col-lg-1 col-sm-1 cmi" @click="changeLang()" v-else>English</div>
    <div class="col-lg-1 col-sm-1 high-index">
      <span class="navigation__icon" @click="collapseMenu" v-if="iconWhite">
        <img
          v-if="shouldHide"
          src="@/assets/img/icon_menu_close_white.svg"
          class="respond-width"
          alt
        />
        <img v-if="!shouldHide" src="@/assets/img/icon_menu.svg" class="respond-width" alt />
      </span>
      <span class="navigation__icon" @click="collapseMenu" v-else>
        <img
          v-if="shouldHide"
          src="@/assets/img/icon_menu_close_black.svg"
          class="respond-width"
          alt
        />
        <img v-if="!shouldHide" src="@/assets/img/icon_menu_black.svg" class="respond-width" alt />
      </span>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import { getLanguage, saveLanguage } from "@/store/services/storage";

import { eventBus } from "@/main";

export default {
  name: "HeaderHero",
  data() {
    return {
      shouldHide: true,
      listMenu: [],
      lang: ""
    };
  },
  props: {
    menutype: "",
    iconWhite: "",
    logoBlack: "",
    logoGreen: "",
    logoWhite: ""
  },
  methods: {
    moveTo(index) {
      console.log("clicked");
      eventBus.$emit("changeSection", index);
    },
    goToRregullore() {
      this.$router.push({
        name: "Rregullore",
        params: { lang: "al" }
      });
    },
    changeLang() {
      if (this.lang == "en") {
        saveLanguage("al");
        this.lang = "al";
      } else {
        saveLanguage("en");
        this.lang = "en";
      }
      eventBus.$emit("changeLanguage", this.lang);
    },
    collapseMenu() {
      var Items = document.getElementsByClassName("cmi");
      if (this.shouldHide) {
        for (var i = 0; i < Items.length; i++) {
          // console.log(i, Items[i]);
          Items[i].style.opacity = 0;
          Items[i].style.transition = "all 1s";
          // Items[i].sytle.display = "none";
          Items[i].style.pointerEvents = "none";

          if (i % 4 == 0) {
            Items[i].style.transform = "translate(5vw, 0)";
          } else if (i % 4 == 1) {
            Items[i].style.transform = "translate(5vw, 0)";
          } else if (i % 4 == 2) {
            Items[i].style.transform = "translate(5vw, 0)";
          } else if (i % 4 == 3) {
            Items[i].style.transform = "translate(5vw, 0)";
          }
        }

        this.shouldHide = false;
      } else {
        for (var i = 0; i < Items.length; i++) {
          Items[i].style.opacity = 1;
          Items[i].style.transition = "all 1s";
          Items[i].style.transform = "translate(0, 0)";
          Items[i].style.pointerEvents = "auto";

          // Items[i].style.display = "inline-block";
        }
        this.shouldHide = true;
      }
      eventBus.$emit("menuState", this.shouldHide);
    }
  },
  mounted() {
    eventBus.$on("menuState", payload => {
      this.shouldHide = payload;
    });
    this.collapseMenu();
    this.lang = getLanguage();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/sass/abstracts/_mixins.scss";
.header-hero {
  position: fixed;
  z-index: 9999;
  top: 0%;
  right: 4%;
  width: 100%;
}

.respond-width {
  @include respond(4k-desktop) {
    width: 25%;
  }
  &--logo {
    @include respond(4k-desktop) {
      width: 200%;
    }
  }
}

.high-index {
  z-index: 9999;
}

.cmi {
  &:hover {
    cursor: pointer;
  }
  z-index: 1000;
}

.logo {
  float: left;
}
.menu__items {
  text-align: center;
  font-family: Ubuntu;
  height: 15rem;
  font-size: 1.7rem;
  @include respond(4k-desktop) {
    font-size: 4rem;
  }

  &--white {
    color: white;
  }
  &--black {
    color: black;
  }
}

.col-lg-1 {
  padding-left: 0;
  padding-right: 0;
}

.navigation {
  &__icon {
    cursor: pointer;
  }
}
</style>
