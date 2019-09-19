<template>
  <div class="section-acrossyears pt-5 pb-5">
    <!-- <div class="carousel-container ">
      <carousel ref="carousel" :perPageCustom="[[0,1]]" :paginationEnabled="false">
        <slide>
                  </slide>

      </carousel> -->
          <div class="row ml-0 pt-5">
            <div class="slider-img-container  w-80 mx-auto">
                        <div class="embed-responsive embed-responsive-4by3 ">
                          <iframe
                            class="embed-responsive-item"
                            src="https://www.youtube.com/embed/N6zn-y-G2dA"
                            allowfullscreen
                          ></iframe>
                        </div>
            </div>
          </div>

          <div class="row go-up ml-0" style="margin-top:-5rem;">
            <h1 class="header-text">ndër vite</h1>
          </div>
          <div class="row ml-0">
            
            <p class="description">
              Festivali Kënga Magjike lindi në vitin 1999, si një alternativë ndryshe, një koncept i ri, një kontribut tjetër në muzikën e lehtë, duke u bërë kështu një prej eventeve më të rëndësishëm në historinë e muzikës shqiptare. Pothuaj të gjithë artistët shqiptarë, e kanë prekur magjinë e kësaj skene. Prej vitit 2016, struktura e festivalit ka ndryshuar, duke shtuar edhe kategorinë New Artist. Pas 20 vitesh eksperiencë, ky edicion sjell të rejat që janë diksutuar dhe kërkuar nga vetë artistët dhe publiku; mënyra e votimit dhe të kënduarit live.  
            </p>
          </div>
          <!-- <div class="row navigation-container">
            <div class="col-6 h-100">
              <div class="carousel-left text-center" @click.prevent="prevSlide">
                <img class src="@/assets/img/ndervite_arrow_l.svg" alt />
              </div>
            </div>

            <div class="col-6 h-100">
              <div class="carousel-right text-center" @click.prevent="nextSlide">
                <img class src="@/assets/img/ndervite_arrow_r.svg" alt />
              </div>
            </div>
          </div> -->

    </div>
  </div>
</template>

<script>
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

.w-80{
  width:80%;
}
.mt-9{
  margin-top:9rem;
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
  margin-top:3rem;
  margin-bottom:2rem;
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
