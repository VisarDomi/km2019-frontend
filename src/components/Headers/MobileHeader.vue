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
      <a href="#">artistet</a>
      <a href="#">nder vite</a>
      <a href="#">#magjike</a>
      <a href="#">te reja</a>
      <a href="#">rregullore</a>
      <div class="bottom-graphic">
        <img src="@/assets/img/Path 2649.svg" alt />
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "@/main";

export default {
  name: "HeaderMobile",
  data() {
    return {
      shouldHide: true,
      listMenu: []
    };
  },
  props: {
    iconWhite: ""
  },
  methods: {
    goToRregullore() {
      this.$router.push({ name: "Rregullore" });
    },
    goToArtists() {
      this.$router.push({ name: "Artists" });
    },
    openNavR() {
      document.getElementById("mySidenavR").style.width = "250px";
    },

    closeNavR() {
      document.getElementById("mySidenavR").style.width = "0";
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
@import "@/assets/sass/abstracts/_mixins.scss";
.bottom-graphic {
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, 0);
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
