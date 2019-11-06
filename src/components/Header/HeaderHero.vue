<template>
  <div class="header-hero row align-items-center menu__items row-no-margin" v-bind:class="menutype">
    <div class="col-10 offset-1">
      <div class="row">


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
      class="col-lg-1 col-sm-1 offset-xl-2 cmi"
      v-scroll-to="'#juria'"
    >the jury</div>
    <div v-else class="col-lg-1 col-sm-1 offset-xl-2 cmi" v-scroll-to="'#juria'">juria</div>

    <div
      v-if="this.lang == 'en'"
      class="col-lg-1 col-sm-1 cmi"
      v-scroll-to="'#nder-vite'"
    >through years</div>
    <div v-else class="col-lg-1 col-sm-1 cmi" v-scroll-to="'#nder-vite'">ndër vite</div>

    <div v-if="this.lang == 'en'" class="col-lg-1 col-sm-1 cmi" v-scroll-to="'#te-reja'">news</div>
    <div v-else class="col-lg-1 col-sm-1 cmi" v-scroll-to="'#te-reja'">të reja</div>

    <div
      v-if="this.lang == 'en'"
      class="col-lg-1 col-sm-1 cmi"
      v-scroll-to="'#section-artists'"
    >artists</div>
    <div v-else class="col-lg-1 col-sm-1 cmi" v-scroll-to="'#section-artists'">artistët</div>

    <div v-if="this.lang == 'en'" class="col-lg-1 col-sm-1 cmi" @click="goToRregullore()">rules</div>
    <div v-else class="col-lg-1 col-sm-1 cmi" @click="goToRregullore()">rregullore</div>

    <div v-if="this.lang == 'en'" class="col-lg-1 col-sm-1 cmi" @click="goToVoto()">vote</div>
    <div v-else class="col-lg-1 col-sm-1 cmi" @click="goToVoto()">voto</div>

    <div class="col-lg-1 col-sm-1 cmi" @click="changeLang()" v-if="this.lang == 'en'">
      <span class="font-weight-normal">AL/</span>
      EN
    </div>
    <div class="col-lg-1 col-sm-1 cmi" @click="changeLang()" v-else>
      AL
      <span class="font-weight-normal">/EN</span>
    </div>
          </div>
    
    </div>
  </div>
</template>

<script>
import { getLanguage, saveLanguage } from "@/store/services/storage";

export default {
  name: "HeaderHero",
  data() {
    return {
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
    goToRregullore() {
      this.$router.push({
        name: "Rregullore",
        params: { lang: "al" }
      });
    },
    goToVoto() {
      this.$router.push({
        name: "Voto"
      });
    },
    changeLang() {
      if (this.lang == "en") {
        saveLanguage("al");
        this.lang = "al";
        this.$router.go(0);
      } else {
        saveLanguage("en");
        this.lang = "en";
        this.$router.go(0);
      }
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
.header-hero {
  position: fixed;
  z-index: 9999;
  top: 0%;
  // right: 4%;
  height: 10rem;
  width: 100%;
  background-color: rgba(#0e1032, 1);
}
.row-no-margin {
  margin-left: 0 !important;
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
  text-transform: capitalize;
  font-weight: bold;
}
.background--green {
  background-color: #47b8b0;
}
.logo {
  float: left;
}

.background--white {
  background-color: white;
}
.menu__items {
  text-align: center;
  font-family: Ubuntu;
  height: 7rem;
  font-size: 1.7rem;
  @include respond(4k-desktop) {
    font-size: 4rem;
  }
  @include respond(tab-port) {
    height: 14rem;
  }

  &--white {
    color: white;
  }
  &--black {
    color: black;
  }
  &--green {
    color: #47b8b0;
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
