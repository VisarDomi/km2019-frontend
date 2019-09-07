<template>
  <div class="section-acrossyears">
    <div class="carousel-container h-100">
      <carousel ref="carousel" :perPageCustom="[[0,1]]" :paginationEnabled="false">
        <slide>
          <div class="row h-50 mt-9">
            <div class="slider-img-container h-100 w-80 mx-auto">
                        <div class="embed-responsive embed-responsive-4by3 h-100">
                          <iframe
                            class="embed-responsive-item"
                            src="https://www.youtube.com/embed/GnxAhRj38Qk"
                            allowfullscreen
                          ></iframe>
                        </div>
            </div>
          </div>

          <div class="row go-up">
            <h1 class="header-text">ndër vite</h1>
          </div>
          <div class="row">
            <!-- <p class="year">2015</p> -->
          </div>
          <div class="row">
            <p class="description">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
              exerci tation.
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
        </slide>

      </carousel>
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
  background-color: #1a1c3c;

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
  margin-top: -4rem;
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
}

.section-acrossyears {
  background-color: #0e1032;
}
.header-text {
  z-index: 20;
  position: relative;
  color: #c360b5;
  // margin-top: -10%;
  margin-left: 5rem;
  font-size: 8rem;
  font-family: Vollkorn;
}
</style>
