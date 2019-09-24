<template>
  <div class="section-juria" id="juria">
    <!-- <HeaderHero menutype="menu__items--white" logoWhite="true" iconWhite="true" /> -->
    <div class="spacer"></div>
    <div class="row">
      <div class="col-lg-12 text-center">
        <h1 class="header-text" v-if="this.lang == 'en'">the jury</h1>
        <h1 class="header-text" v-else>juria</h1>
      </div>
    </div>
    <div class="row respond-height">
      <div class="col-lg-2 col-sm-2 col-7 ml-6">
        <div class="artist-card abs-bottom" @click="goToJuria('JuriaArmend')">
          <div class="img-container"></div>
          <img src="@/assets/juria/j1_hover.png" alt />
          <p class="artist-card__name go-up--small">ARMEND REXHEPAGIQI</p>
          <!-- <br />
          <p class="artist-card__song">{{artist.songtilte}}</p>-->
        </div>
      </div>
      <div class="col-lg-2 col-sm-2 col-7 ml-6">
        <div class="artist-card abs-bottom" @click="goToJuria('JuriaJonida')">
          <div class="img-container">
            <img src="@/assets/juria/j2_hover.png" alt />
          </div>
          <p class="artist-card__name go-up--small">JONIDA MALIQI</p>
          <!-- <br />
          <p class="artist-card__song">{{artist.songtilte}}</p>-->
        </div>
      </div>
      <div class="col-lg-2 col-sm-2 col-7 ml-6">
        <div class="artist-card abs-bottom" @click="goToJuria('JuriaArben')">
          <div class="img-container">
            <img src="@/assets/juria/j3_hover.png" alt />
          </div>
          <p class="artist-card__name go-up--small">ARBEN SKËNDERI</p>
          <!-- <br />
          <p class="artist-card__song">{{artist.songtilte}}</p>-->
        </div>
      </div>

      <div class="col-lg-2 col-sm-2 col-7 ml-6">
        <div class="artist-card abs-bottom" @click="goToJuria('JuriaEnkel')">
          <div class="img-container">
            <img src="@/assets/juria/j4_hover.png" alt />
          </div>
          <p class="artist-card__name go-up--small">ENKEL DEMI</p>
          <!-- <br />
          <p class="artist-card__song">{{artist.songtilte}}</p>-->
        </div>
      </div>
      <div class="col-lg-2 col-sm-2 col-7 ml-6">
        <div class="artist-card abs-bottom" @click="goToJuria('JuriaDj')">
          <div class="img-container">
            <img src="@/assets/juria/j5_hover.png" alt />
          </div>
          <p class="artist-card__name go-up--small">DJ MISS ROSE & DJ STONE</p>
          <!-- <br />
          <p class="artist-card__song">{{artist.songtilte}}</p>-->
        </div>
      </div>
    </div>

    <div class="row mt-6">
      <div class="col-lg-6 offset-lg-3 col-12 text-center">
        <!-- <a href="#" class="btn more-artist-button" @click="goToArtists()">më shumë artistë</a> -->
      </div>
    </div>
    <div class="graphic-left w-50" v-if="windowWidth > 950">
      <img src="@/assets/img/Group 171.svg" alt />
    </div>
    <div class="graphic-right w-50">
      <img src="@/assets/img/Group 331.svg" alt />
    </div>
  </div>
</template>

<script>
import { getLanguage, saveLanguage } from "@/store/services/storage";
import HeaderHero from "@/components/Headers/HeaderHero.vue";
export default {
  name: "ArtistsSection",
  methods: {
    goToJuria(routename) {
      this.$router.push({ name: routename });
    }
  },
  components: { HeaderHero },
  data() {
    return {
      artists: [
        {
          name: "ARBEN SKËNDERI",
          songtilte: "",
          img: "@/assets/img/juria/Arben.jpg"
        },
        {
          name: "ARMEND REXHEPAGIQ",
          songtilte: "Loose yourself to dance",
          img: "https://www.teksteshqip.com/img_upz/allart_full/4838.jpg"
        },
        {
          name: "JONIDA MALIQI",
          songtilte: "Loose yourself to dance",
          img: "https://www.teksteshqip.com/img_upz/allart_full/4838.jpg"
        },
        {
          name: "DJ MISS ROSE & DJ STONE",
          songtilte: "Loose yourself to dance",
          img: "https://www.teksteshqip.com/img_upz/allart_full/4838.jpg"
        },
        {
          name: "ENKEL DEMI",
          songtilte: "Loose yourself to dance",
          img: "https://www.teksteshqip.com/img_upz/allart_full/4838.jpg"
        }
      ],
      windowWidth: window.innerWidth,
      lang: ""
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        this.windowWidth = window.innerWidth;
      });
    });
    this.lang = getLanguage();
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/abstracts/_mixins.scss";

.img-container {
}

.spacer {
  height: 15rem;
}

.ml-6 {
  margin-left: 3%;
}

.graphic-left {
  position: absolute;
  bottom: -21%;
  left: -25%;
  transform: scale(1.2);

  img {
    max-width: 100%;
    height: auto;
  }
}
.graphic-right {
  position: absolute;
  bottom: 0%;
  right: -25%;
  transform: scale(0.9);
  img {
    max-width: 100%;
    height: auto;
  }
}

.respond-height {
  height: 35%;
  @include respond(4k-desktop) {
    height: 50%;
  }
}

.abs-bottom {
  position: absolute;
  bottom: 0;
  &--up {
    bottom: -20%;
  }
}

.high-index {
  position: relative;
  z-index: 4;
}

.artist-card {
  width: 90%;
  z-index: 4;
  img {
    height: 100%;
    width: 100%;
    // z-index: 5;
  }
  &__name {
    color: white;
    font-size: 2rem;
    padding: 4px 1rem;
    background-color: #0e1023;
    font-family: Vollkorn;
    display: inline-block;
    border: solid 2px white;
    line-height: 3rem;
    margin-bottom: 2px;
    @include respond(tab-land) {
      font-size: 1.5rem;
    }
    @include respond(4k-desktop) {
      font-size: 4rem;
    }
  }
  &__song {
    border: 2px solid black;
    background-color: white;
    text-transform: uppercase;
    font-family: Ubuntu;

    display: inline-block;
    padding: 6px 1rem;
    font-size: 1.5rem;
    line-height: 2.5rem;
    @include respond(tab-land) {
      font-size: 1.25rem;
    }
    @include respond(4k-desktop) {
      font-size: 3.5rem;
    }
  }
}

.h-35 {
  height: 35%;
}
.mt-6 {
  margin-top: 8rem;
}

.btn {
  padding: 1rem 12rem;
  border: 2px solid black;
  border-radius: 10rem;

  font-family: Ubuntu;
  font-weight: 700;
  font-size: 2.5rem;
  @include respond(4k-desktop) {
    font-size: 5rem;
    margin-top: 20rem;
  }
}

.go-up {
  margin-top: -7rem;
  &--small {
    margin-top: -4rem;
  }
  @include respond(4k-desktop) {
    margin-top: -25rem;
  }
  @include respond(small-screen) {
    margin-top: -4%;
  }
  @include respond(tab-port) {
    margin-top: 0rem;
  }
}

.section-juria {
  background-color: #0e1032;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.header-text {
  margin-top: -9rem;
  text-align: center;
  font-family: Vollkorn;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 2px #47b8b0;
  font-size: 25rem;
  @include respond(4k-desktop) {
    font-size: 30rem;
    margin-top: 2%;
    margin-bottom: -5%;
  }
  @include respond(small-screen) {
    margin-top: -10%;
    font-size: 22rem;
  }
  @include respond(tab-land) {
    font-size: 20rem;
  }
  @include respond(tab-port) {
    font-size: 15rem;
  }
}
</style>
