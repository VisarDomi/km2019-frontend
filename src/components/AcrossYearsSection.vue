<template>
  <div class="section-acrossyears" id="nder-vite">
    <!-- <HeaderHero menutype="menu__items--white" logoWhite="true" iconWhite="true" /> -->
    <div class="spacer"></div>
    <div class="row go-up--small h-20">
      <div class="col-lg-12 offset-1">
        <h1
          class="header-text header-text--small"
          v-if="this.lang == 'en'"
          data-aos="fade-right"
          data-aos-duration="500"
        >Through the years</h1>
        <h1 class="header-text" data-aos="fade-right" data-aos-duration="500" v-else>ndër vite</h1>
      </div>
    </div>
    <div class="row h-50">
      <div class="graphic-left w-25">
        <img src="@/assets/img/Group 147.svg" alt />
      </div>
      <div class="graphic-right w-50">
        <img src="@/assets/img/Group 158.svg" alt />
      </div>
      <div class="container h-100" data-aos="fade-left" data-aos-duration="500">
        <div class="slider-img-container h-100">
          <div class="embed-responsive embed-responsive-4by3 h-100">
            <iframe
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/EvktbPe1gV0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    <div class="row" data-aos="fade-right" data-aos-duration="500" data-aos-anchor-placement="top-bottom">
      <div class="col-lg-9 offset-lg-2">
        <p
          v-if="this.lang == 'en'"
          class="description"
        >The festival ‘Kënga Magjike’ was created in 1999, as a new concept with a different approach to add more values to the Albanian music industry. Throughout the years, this festival turned into one of the most important events on the history of Albanian music. Almost every potential artist of Albania, felt the magic of this scene. Since 2016, the structure of the festival changed, by adding the category ‘New Artist’. After 20 years of experience, this edition will bring new initiatives created by artists and the public themselves like: singing live and voting.</p>
        <p
          v-else
          class="description"
        >Festivali Kënga Magjike lindi në vitin 1999, si një alternativë ndryshe, një koncept i ri, një kontribut tjetër në muzikën e lehtë, duke u bërë kështu një prej eventeve më të rëndësishëm në historinë e muzikës shqiptare. Pothuaj të gjithë artistët shqiptarë, e kanë prekur magjinë e kësaj skene. Prej vitit 2016, struktura e festivalit ka ndryshuar, duke shtuar edhe kategorinë New Artist. Pas 20 vitesh eksperiencë, ky edicion sjell të rejat që janë diksutuar dhe kërkuar nga vetë artistët dhe publiku; mënyra e votimit dhe të kënduarit live.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getLanguage, saveLanguage } from "@/store/services/storage";
import { eventBus } from "@/main";
import HeaderHero from "@/components/Headers/HeaderHero.vue";

export default {
  name: "AcrossYearsSection",
  methods: {
    nextSlide() {
      this.$refs.carousel.goToPage(this.$refs.carousel.getNextPage());
    },
    prevSlide() {
      this.$refs.carousel.goToPage(this.$refs.carousel.getPreviousPage());
    }
  },
  components: {
    HeaderHero
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      lang: ""
    };
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
    eventBus.$on("changeLanguage", payload => {
      this.lang = payload;
    });
    this.lang = getLanguage();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/sass/abstracts/_mixins.scss";
.spacer {
  height: 15rem;
}

.h-20 {
  height: 20%;
}

.h-30 {
  height: 30%;
}

.h-40 {
  height: 40%;
}

.h-50 {
  height: 50%;
}
.container {
  height: 30rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  position: relative;
}

.slider-image {
  // height:30rem;
}

.slider-img-container {
  text-align: center;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
}

.embed-responsive {
  box-shadow: 0px 3px 36px -11px rgba(#fff, 0.9);
}

.graphic-left {
  position: absolute;
  left: -1%;
  top: 42%;
  transform: scale(2);
  img {
    max-width: 100%;
    height: auto;
  }
}
.graphic-right {
  position: absolute;
  right: -6%;
  top: 15%;
  transform: scale(1);
  @include respond(4k-desktop) {
    transform: scale(2);
    right: -15%;
  }
  img {
    max-width: 100%;
    height: auto;
  }
}

.carousel-right {
  position: absolute;
  right: 50%;
  bottom: 50%;
}
.carousel-left {
  position: absolute;
  left: 50%;
  bottom: 50%;
}

.year {
  font-size: 6rem;
  background-color: #c360b5;
  padding: 0 3rem;
  display: inline-block;
  position: absolute;
  bottom: -2%;
  right: 13%;
}

// .image-container {
//   text-align: center;
//   img {
//     // width: 100%;
//     height: 50rem;
//   }
// }
.section-acrossyears {
  background-color: #0e1032;
  position: relative;
  overflow: hidden;
  height: 100vh;
}

.header-text {
  font-size: 20rem;
  font-family: Vollkorn;
  color: #c360b5;
  line-height: 15rem;
  margin-bottom: 4%; //lg only
  margin-left: 5%;
  &--small {
    font-size: 14rem;
  }
  @include respond(4k-desktop) {
    margin-top: 5%;
    font-size: 25rem;
  }
  @include respond(small-screen) {
    font-size: 15rem;
  }
  @include respond(tab-land) {
    font-size: 8rem;
  }
}

.go-up {
  margin-top: -10rem;
  &--small {
    margin-top: -6rem;
    margin-bottom: -6rem;
  }
}

.description {
  padding-top: 2rem;
  color: #c360b5;
  font-size: 2vh;
  font-weight: 400;
  font-family: Ubuntu;
  // line-height: 2.5rem;
  margin-top: 3rem;
  @include respond(4k-desktop) {
    font-size: 4rem;
    line-height: 4.5rem;
  }
  @include respond(small-screen) {
    margin-top: 1rem;
    margin-left: 5rem;
  }
}

.img-next-arrow {
  width: 6rem;
  z-index: 98393;
}

.img-next-arrow:hover {
  cursor: pointer;
}

.img-left-arrow:hover {
  cursor: pointer;
}

.carousel-right {
  position: absolute;
  right: -4%;
  top: 50%;
  // padding-top: 19px;
}
.carousel-right:hover {
  cursor: pointer;
}

.img-left-arrow {
  width: 6rem;
  z-index: 98393;
}

.carousel-left {
  position: absolute;
  left: -4%;
  top: 50%;
  // padding-top:15px;
}

.carousel-left:hover {
  cursor: pointer;
}
</style>
