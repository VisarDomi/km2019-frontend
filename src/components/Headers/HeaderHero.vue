<template>
  <!-- <div> -->
  <div class="row align-items-center menu__items" v-bind:class="menutype">
    <div class="col-xl-3 col-lg-4 col-sm-4 high-index">
      <span class="d-lg-inline-block" href="#" v-if="logoBlack">
        <img
          src="@/assets/img/logoblack.svg"
          alt="Logo"
          class="img-logo logo respond-width--logo"
          @click="moveTo(0)"
        />
      </span>
      <span class="d-lg-inline-block" href="#" v-if="logoWhite">
        <img
          src="@/assets/img/logowhite.svg"
          alt="Logo"
          class="img-logo logo respond-width--logo"
          @click="moveTo(0)"
        />
      </span>
    </div>
    <div
      class="col-lg-1 col-sm-1 offset-xl-4 offset-lg-3 offset-sm-3 cmi"
      @click="moveTo(1)"
    >{{$t('juria')}}</div>
    <div class="col-lg-1 col-sm-1 cmi" @click="moveTo(2)">ndër vite</div>
    <!-- <div class="col-lg-1 col-sm-1 cmi" @click="changeLange('al')">al</div>
    <div class="col-lg-1 col-sm-1 cmi" @click="changeLange('en')">en</div>-->
    <!-- <div class="col-lg-1 col-sm-1 cmi" @click="moveTo(3)">#fotome</div> -->
    <!-- <div class="col-lg-1 col-sm-1 cmi"></div> -->
    <div class="col-lg-1 col-sm-1 cmi" @click="moveTo(3)">të reja</div>
    <div class="col-lg-1 col-sm-1 cmi" @click="goToRregullore()">rregullore</div>
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
import { eventBus } from "@/main";

export default {
  name: "HeaderWhite",
  data() {
    return {
      shouldHide: true,
      listMenu: []
    };
  },
  props: {
    menutype: "",
    iconWhite: "",
    logoBlack: "",
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
    changeLange(lang) {
      this.$i18n.locale = lang;
    },
    collapseMenu() {
      var Items = document.getElementsByClassName("cmi");
      if (this.shouldHide) {
        for (var i = 0; i < Items.length; i++) {
          // console.log(i, Items[i]);
          Items[i].style.opacity = 0;
          Items[i].style.transition = "all 1s";

          // if (i % 5 == 0) {
          //   Items[i].style.transform = "translate(43vw, 0)";
          // } else if (i % 5 == 1) {
          //   Items[i].style.transform = "translate(36vw, 0)";
          // } else if (i % 5 == 2) {
          //   Items[i].style.transform = "translate(27vw, 0)";
          // } else if (i % 5 == 3) {
          //   Items[i].style.transform = "translate(18vw, 0)";
          // } else if (i % 5 == 4) {
          //   Items[i].style.transform = "translate(9vw, 0)";
          // }
          if (i % 4 == 0) {
            Items[i].style.transform = "translate(36vw, 0)";
          } else if (i % 4 == 1) {
            Items[i].style.transform = "translate(27vw, 0)";
          } else if (i % 4 == 2) {
            Items[i].style.transform = "translate(18vw, 0)";
          } else if (i % 4 == 3) {
            Items[i].style.transform = "translate(9vw, 0)";
          }
        }

        this.shouldHide = false;
      } else {
        for (var i = 0; i < Items.length; i++) {
          Items[i].style.opacity = 1;
          Items[i].style.transition = "all 1s";
          Items[i].style.transform = "translate(0, 0)";
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/sass/abstracts/_mixins.scss";
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
