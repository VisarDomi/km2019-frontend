
<template>
  <div class="section-hero">
    <HeaderHero menutype="menu__items--white" iconWhite="true" v-if="windowWidth > 950" />

    <img src="@/assets/img/logo.svg" alt="Kenga Magjike logo" class="logo" />
    <div class="row h-100">
      <div class="col-lg-2 text-center" v-if="windowWidth > 950">
        <div class="logo-hako-container">
          <p class="description">partnere zyrtare</p>
          <div class="img-container">
            <img src="@/assets/img/Hako_logo.svg" alt />
          </div>
        </div>
      </div>
      <div class="col-lg-2 col-xl-2">
        <div class="left-container">
          <img src="@/assets/img/Group Home Left.svg" alt />
        </div>
      </div>
      <div class="col-lg-6 text-right go-left high-index">
        <h1 class="header--1">3 nete</h1>
        <h1 class="header--2">55 artiste</h1>
        <h1 class="header--3">magji</h1>
      </div>
      <div class="col-lg-2">
        <div class="right-center-container">
          <img src="@/assets/img/Group Home Right-Center.svg" alt />
        </div>
      </div>
      <div class="col-lg-2">
        <div class="right-container">
          <img src="@/assets/img/Group Home Right.svg" alt />
        </div>
      </div>
      <div class="logo-hako-container" v-if="windowWidth < 950">
        <p class="description">partnere zyrtare</p>
        <div class="img-container">
          <img src="@/assets/img/Hako_logo.svg" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderHero from "@/components/Headers/HeaderHero.vue";
import HeaderMobile from "@/components/Headers/MobileHeader.vue";
export default {
  name: "HeroSection",

  components: {
    HeaderHero,
    HeaderMobile
  },
  data() {
    return {
      windowWidth: window.innerWidth
    };
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/sass/abstracts/_mixins.scss";

.high-index {
  z-index: 2;
}

.go-left {
  margin-left: -17% !important;
  @include respond(phone) {
    margin-left: -8% !important;
  }
}

.header {
  &--1 {
    color: white;
    font-family: Vollkorn;
    font-weight: 700;
    line-height: 12rem;
    font-size: 15rem;
    @include respond(tab-port) {
      font-size: 10rem;
    }
    @include respond(4k-desktop) {
      font-size: 20rem;
    }

    @include respond(phone) {
      font-size: 8rem;
      line-height: 8rem;
    }
  }
  &--2 {
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 2px white;
    font-family: Vollkorn;
    font-size: 15rem;
    line-height: 14rem;
    @include respond(tab-land) {
      font-size: 10rem;
    }
    @include respond(4k-desktop) {
      font-size: 20rem;
      margin-top: 5%;
    }
    @include respond(phone) {
      font-size: 8rem;
      line-height: 8rem;
    }
  }
  &--3 {
    color: white;
    font-weight: 700;
    font-family: Vollkorn;
    border: 1px solid white;
    font-size: 15rem;
    display: inline-block;
    padding: 0 1rem;

    @include respond(4k-desktop) {
      font-size: 20rem;
      margin-top: 5%;
    }
    @include respond(phone) {
      font-size: 8rem;
      line-height: 8rem;
    }
  }
}
.right-center-container {
  position: absolute;
  left: -18%;
  top: -6%;
  height: 70%;
  z-index: 1;
  img {
    height: 100%;
  }
}
.right-container {
  position: absolute;
  opacity: 0.2;
  top: -23%;
  left: -22%;
  transform: scale(0.95);
  img {
    height: 100%;
  }
}
// LEFT CONTAINER IS BADLY HANDLED
.left-container {
  position: absolute;
  left: -58%;
  top: -2%;

  img {
    // width: 100%;
    // height: 100%;
    transform: scale(0.75);
  }
}
.section-hero {
  background-color: #0e1032;
}
.description {
  color: white;
  font-size: 2.5rem;
  font-family: Ubuntu;
  font-weight: 700;
  border: 2px solid white;

  @include respond(phone) {
    text-align: center;
    margin-bottom: 0;
  }
}
.logo {
  margin-top: -8rem;
  margin-left: 4rem;
  height: 16rem;
  @include respond(phone) {
    margin-top: 5rem;
  }
}

.logo-hako-container {
  position: absolute;
  bottom: 45%;
  left: 45%;
  width: 90%;
  z-index: 5;
  height: 14%;

  @include respond(phone) {
    bottom: 0%;
    left: 0%;

    width: 100%;
    height: 20%;
  }

  img {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
  }
}

.img-container {
  background-color: white;
  align-content: center;
  width: 100%;
  height: 100%;
}
</style>
