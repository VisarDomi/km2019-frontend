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
      <div class="graphic-right">
         <img src="@/assets/img/Group 158.svg" alt />
       </div>
       <div class="graphic-left">
         <img src="@/assets/img/Group 147.svg" alt />
       </div>
      <div class="container">
                    <a @click.prevent="nextSlide">
              <div class="carousel-right">
                <img  class="img-fluid img-next-arrow" src="@/assets/img/ndervite_right.svg" alt />
              </div>
            </a>
            <a @click.prevent="prevSlide">              
              <div class="carousel-left">
                <img  class="img-fluid img-left-arrow" src="@/assets/img/ndervite_left.svg" alt />
              </div></a>
          <carousel
            ref="carousel"
            :perPageCustom="[[0,1]]"
            :paginationEnabled="false"
          >

            <slide>
              <!-- <div class="image-container"> -->
                <div class="slider-img-container">

                <img class="slider-image" src="@/assets/img/km2018.jpg" alt />
                <p class="year">2017</p>
                </div>
              <!-- </div> -->
            </slide>
            <slide>
              <div class="slider-img-container">

                <img class="slider-image" src="@/assets/img/km2018.jpg" alt />
                <p class="year">2018</p>
                </div>
            </slide>

            <slide>
              <div class="slider-img-container">

                <img class="slider-image" src="@/assets/img/km2018.jpg" alt />
                <p class="year">2019</p>
                </div>
            </slide>
                                  <slide>
              <!-- <div class="image-container"> -->
                <div class="slider-img-container">

                <img class="slider-image" src="@/assets/img/km2018.jpg" alt />
                <p class="year">2017</p>
                </div>
              <!-- </div> -->
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

.container{
  height:30rem;
  margin-top:2rem;
  margin-bottom:2rem;
  position:relative;
}

.slider-image{
  // height:30rem;
}

.slider-img-container{
  text-align:center;
}

.graphic-left {
  position: absolute;
  // top: 15%;
  left: -12%;
}
.graphic-right {
  position: absolute;
  right: 9%;
    top: 19%;
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
}

.header-text {
  font-size: 20rem;
  font-family: Vollkorn;
  color: #c360b5;
  line-height: 15rem;
      margin-bottom: 2%; //lg only 
}

.go-up {
  margin-top: -10rem;
  &--small {
    margin-top: -5rem;
        margin-bottom: -2rem;
  }
}

.description {
  color: #c360b5;
  font-size: 2.5rem;
  line-height: 3rem;
  margin-top: 3rem; //lg only
}


.img-next-arrow {
  width: 6rem;
  z-index:98393;
}

.img-next-arrow:hover{
  cursor:pointer;
}

.img-left-arrow:hover{
  cursor:pointer;
}

.carousel-right {
  position: absolute;
  right: -8%;
  top:50%;
      // padding-top: 19px;
}
.carousel-right:hover {
  cursor: pointer;
}

.img-left-arrow {
  width: 6rem;
  z-index:98393;
}

.carousel-left {
  position: absolute;
  left: -8%;
  top:50%;
  // padding-top:15px;
}

.carousel-left:hover {
  cursor: pointer;
}
</style>
