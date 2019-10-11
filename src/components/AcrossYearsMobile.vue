<template>
  <div class="section-acrossyears pt-5 pb-5" id="nder-vite-mobile">
    <div class="row ml-0 pt-5">
      <div class="slider-img-container w-80 mx-auto">
        <div class="embed-responsive embed-responsive-4by3" data-aos="fade-in">
          <iframe
            class="embed-responsive-item"
            src="https://www.youtube.com/embed/EvktbPe1gV0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>

    <div class="row go-up ml-0" style="margin-top:-5rem;">
      <h1 class="header-text" v-if="this.lang == 'en'" data-aos="fade-in">Through the years</h1>
      <h1 class="header-text" v-else data-aos="fade-in">ndër vite</h1>
    </div>
    <div class="row ml-0" data-aos="fade-in">
      <p
        class="description"
        v-if="this.lang == 'en'"
      >The festival ‘Kënga Magjike’ was created in 1999, as a new concept with a different approach to add more values to the Albanian music industry. Throughout the years, this festival turned into one of the most important events on the history of Albanian music. Almost every potential artist of Albania, felt the magic of this scene. Since 2016, the structure of the festival changed, by adding the category ‘New Artist’. After 20 years of experience, this edition will bring new initiatives created by artists and the public themselves like: singing live and voting.</p>
      <p
        class="description"
        v-else
      >Festivali Kënga Magjike lindi në vitin 1999, si një alternativë ndryshe, një koncept i ri, një kontribut tjetër në muzikën e lehtë, duke u bërë kështu një prej eventeve më të rëndësishëm në historinë e muzikës shqiptare. Pothuaj të gjithë artistët shqiptarë, e kanë prekur magjinë e kësaj skene. Prej vitit 2016, struktura e festivalit ka ndryshuar, duke shtuar edhe kategorinë New Artist. Pas 20 vitesh eksperiencë, ky edicion sjell të rejat që janë diksutuar dhe kërkuar nga vetë artistët dhe publiku; mënyra e votimit dhe të kënduarit live.</p>
    </div>
  </div>
</template>

<script>
import HeaderHero from "@/components/Headers/HeaderHero.vue";
import { getLanguage, saveLanguage } from "@/store/services/storage";

import { eventBus } from "@/main";

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
.w-80 {
  width: 80%;
}
.mt-9 {
  margin-top: 9rem;
}
.navigation-container {
  width: 100%;
  background-color: #0e1032;

  position: absolute;
  bottom: 0;
  right: 0;
  height: 8%;
}

.carousel-left {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(2);
}
.carousel-right {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(2);
}

.go-up {
  padding-top: 2rem;
}

.year {
  background-color: #c360b5;
  color: black;
  font-size: 3rem;
  // padding-left: 3rem;
  margin-left: 5rem;
  padding: 0 1rem;
}

.description {
  color: #c360b5;
  font-size: 2rem;
  margin-left: 5rem;
  width: 80%;
  margin-top: 3rem;
  margin-bottom: 2rem;
}

.section-acrossyears {
  background-color: #0e1032;
}
.header-text {
  z-index: 4;
  position: relative;
  color: #c360b5;
  // margin-top: -10%;
  margin-left: 5rem;
  font-size: 8rem;
  font-family: Vollkorn;
}
</style>
