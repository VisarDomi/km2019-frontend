<template>
  <div class="section-acrossyears">
    <HeaderHero
      menutype="menu__items--white"
      logoWhite="true"
      iconWhite="true"
      v-if="windowWidth > 950"
    />
    <div class="row go-up--small">
      <div class="col-lg-11 offset-lg-1">
        <h1 class="header-text">nder vite</h1>
      </div>
    </div>
    <div class="row">
      <div class="container">
        
          <carousel
            ref="carousel"
            :perPageCustom="[[0,1]]"
            :paginationEnabled="false"
          >
            <slide>
              <div class="image-container">
                <img src="@/assets/img/blog3.jpg" alt />
                <p class="year">2018</p>
              </div>
            </slide>
            <slide>
              <div class="image-container">
                <img src="@/assets/img/ndervite.svg" alt />
                <p class="year">2018</p>
              </div>
            </slide>

            <slide>
              <div class="image-container">
                <img src="@/assets/img/ndervite.svg" alt />
                <p class="year">2018</p>
              </div>
            </slide>
          </carousel>

      </div>



    </div>
    <div class="row">
      <div class="col-lg-9 offset-lg-2">
        <p class="description">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
          sed diam nonummy nibh euismod tincidunt ut laoreet dolore
          magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
          quis nostrud exerci tation
        </p>
      </div>
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
    },
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
.graphic-left {
  position: absolute;
  top: 15%;
  left: -120%;
}
.graphic-right {
  position: absolute;
  top: -20%;
  left: -80%;
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
  bottom: 25%;
  right: 1%;
}

.image-container {
  text-align: center;
  img {
    // width: 80%;
    height: 40rem;
  }
}
.section-acrossyears {
  background-color: #0e1032;
}

.header-text {
  font-size: 20rem;
  font-family: Vollkorn;
  color: #c360b5;
  line-height: 15rem;
}

.go-up {
  margin-top: -10rem;
  &--small {
    margin-top: -5rem;
  }
}

.description {
  color: #c360b5;
  font-size: 2.5rem;
  line-height: 3rem;
}
</style>
