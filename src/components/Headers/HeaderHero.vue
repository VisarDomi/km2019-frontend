<template>
  <!-- <div> -->
  <div class="row align-items-center menu__items" v-bind:class="menutype">
    <div class="col-lg-2">
      <span class="d-lg-inline-block" href="#" v-if="logoBlack">
        <img src="@/assets/img/logoblack.svg" alt="Logo" class="logo" />
      </span>
      <span class="navbar-brand d-none d-lg-inline-block" href="#" v-if="logoWhite">
        <img src="@/assets/img/logowhite.svg" alt="Logo" class="logo" />
      </span>
    </div>
    <div class="col-lg-1 offset-lg-4 cmi" @click="goToArtists()">artistet</div>
    <div class="col-lg-1 cmi">nder vite</div>
    <div class="col-lg-1 cmi">#magjike</div>
    <div class="col-lg-1 cmi">te reja</div>
    <div class="col-lg-1 cmi" @click="goToRregullore()">rregullore</div>
    <div class="col-lg-1">
      <span class="navigation__icon" @click="collapseMenu" v-if="iconWhite">
        <img v-if="shouldHide" src="@/assets/img/icon_menu_close_white.svg" alt />
        <img v-if="!shouldHide" src="@/assets/img/icon_menu_white.svg" alt />
      </span>
      <span class="navigation__icon" @click="collapseMenu" v-else>
        <img v-if="shouldHide" src="@/assets/img/icon_menu_close_black.svg" alt />
        <img v-if="!shouldHide" src="@/assets/img/icon_menu_black.svg" alt />
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
    goToRregullore() {
      this.$router.push({ name: "Rregullore" });
    },
    goToArtists() {
      this.$router.push({ name: "Artists" });
    },
    collapseMenu() {
      var Items = document.getElementsByClassName("cmi");
      if (this.shouldHide) {
        for (var i = 0; i < Items.length; i++) {
          console.log(i, Items[i]);
          Items[i].style.opacity = 0;
          Items[i].style.transition = "all 1s";

          if (i % 5 == 0) {
            Items[i].style.transform = "translate(43vw, 0)";
          } else if (i % 5 == 1) {
            Items[i].style.transform = "translate(36vw, 0)";
          } else if (i % 5 == 2) {
            Items[i].style.transform = "translate(27vw, 0)";
          } else if (i % 5 == 3) {
            Items[i].style.transform = "translate(18vw, 0)";
          } else if (i % 5 == 4) {
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cmi {
  &:hover {
    cursor: pointer;
  }
}

.logo {
  float: left;
}
.menu__items {
  text-align: center;
  font-family: Ubuntu;
  height: 15rem;
  font-size: 1.7rem;
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
