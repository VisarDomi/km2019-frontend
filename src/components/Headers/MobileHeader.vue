<template>
  <div class="mobile-header">
    <div class="open-menu high-index" v-if="iconWhite">
      <img src="@/assets/img/icon_menu.svg" @click="openNavR()" alt />
    </div>
    <div class="open-menu high-index" v-else>
      <img src="@/assets/img/icon_menu.svg" @click="openNavR()" alt />
    </div>
    <div id="mySidenavR" class="sidenavR">
      <a href="javascript:void(0)" class="closebtn" @click="closeNavR()">×</a>
      <a href="#">&nbsp;</a>
      <a href="#" v-if="this.lang == 'en'" v-scroll-to="'#artists-mobile'">artists</a>
      <a href="#" v-else v-scroll-to="'#artists-mobile'">artistët</a>

      <a href="#" v-if="this.lang == 'en'" v-scroll-to="'#juria-mobile'">the jury</a>
      <a href="#" v-else v-scroll-to="'#juria-mobile'">juria</a>

      <a href="#" v-if="this.lang == 'en'" v-scroll-to="'#nder-vite-mobile'">through the years</a>
      <a href="#" v-else v-scroll-to="'#nder-vite-mobile'">ndër vite</a>

      <a href="#" v-if="this.lang == 'en'" v-scroll-to="'#te-reja-mobile'">news</a>
      <a href="#" v-else v-scroll-to="'#te-reja-mobile'">të reja</a>

      <a href="#" @click="goToVoto()" v-if="this.lang == 'en'">vote</a>
      <a href="#" @click="goToVoto()" v-else>voto</a>

      <a href="#" @click="goToRregullore()" v-if="this.lang == 'en'" >rules</a>
      <a href="#" @click="goToRregullore()" v-else >rregullore</a>

      <a href="#" @click="changeLang()" v-if="this.lang == 'en'">Shqip</a>
      <a href="#" @click="changeLang()" v-else>English</a>

      <div class="bottom-graphic" @click="moveTo(0)">
        <img src="@/assets/img/Path 2649.svg" alt />
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "@/main";
import { getLanguage, saveLanguage } from "@/store/services/storage";

export default {
  name: "HeaderMobile",
  data() {
    return {
      shouldHide: true,
      listMenu: [],
      lang: ""
    };
  },
  props: {
    iconWhite: ""
  },
  methods: {
    moveTo(index) {
      eventBus.$emit("changeSection", index);
    },
    goToRregullore() {
      // console.log("h");
      this.$router.push({ name: "Rregullore" });
    },
    goToVoto() {
      // console.log("h");
      this.$router.push({ name: "Voto" });
    },
    openNavR() {
      document.getElementById("mySidenavR").style.width = "250px";
    },

    closeNavR() {
      document.getElementById("mySidenavR").style.width = "0";
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
    }
  },
  mounted() {
    eventBus.$on("menuState", payload => {
      this.shouldHide = payload;
    });
    this.lang = getLanguage();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/sass/abstracts/_mixins.scss";

.mobile-header {
  position: fixed;
  top: 30px;
  right: 30px;
  z-index: 5;
}

.bottom-graphic {
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, 0);
}
a:not([href]):not([tabindex]) {
  color: black !important;
}
.pos-relative {
  position: relative;
}

.high-index {
  z-index: 2000;
}

.open-menu {
  position: absolute;
  top: 4%;
  right: 9%;
}

.sidenavR {
  background-color: white;
  height: 100%;
  overflow-x: hidden;
  padding-top: 60px;
  position: fixed;
  right: 0;
  top: 0;
  transition: 0.5s;
  width: 0;
  z-index: 3000;

  .closebtn {
    font-size: 36px;
    margin-left: 50px;
    position: absolute;
    right: 25px;
    top: 0;
  }
  a {
    color: black;
    display: block;
    font-size: 25px;
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    transition: 0.3s;
    font-family: Ubuntu;
    font-weight: 700;
  }
}

@include respond(phone) {
  .sidenav,
  .sidenavR {
    padding-top: 15px;
  }
  .sidenav a,
  .sidenavR a {
    font-size: 18px;
  }
}
.navigation {
  &__icon {
    cursor: pointer;
  }
}
</style>
