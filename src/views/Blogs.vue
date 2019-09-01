<template>
  <div class="blogs">
    <div class="row justify-content-between artist-row align-items-center">
      <div class="col-lg-3 col-sm-2 col-xs-1 text-center">
        <img class="img-logo" @click="goToHome()" src="@/assets/img/logowhite.svg" alt />
      </div>
      <div class="col-lg-1 col-sm-2 col-xs-1 vertical-center back-hover" @click="goToHome()">
        <img src="@/assets/img/artistet_arrow_left.svg" alt class="back-icon center-block" />
      </div>
    </div>
    <!-- <div class="row">
      <div class="col-lg-3 no-pad h-100">
        <h1 class="blog-title">
          blog title
        </h1>
      </div>
      <div class="col-lg-3 no-pad">2</div>
      <div class="col-lg-3 no-pad">3</div>
      <div class="col-lg-3 no-pad">4</div>
    </div>-->
<div class="carousel-container">

              <a @click.prevent="nextSlide">
              <div class="carousel-right">
                <img class="img-fluid img-next-arrow" src="@/assets/img/ndervite_right.svg" alt />
              </div>
            </a>
            <a @click.prevent="prevSlide">              
              <div class="carousel-left">
                <img class="img-fluid img-left-arrow" src="@/assets/img/ndervite_left.svg" alt />
              </div></a>

<carousel ref="carousel" :perPageCustom="[[0, 1], [768, 3], [992,4]]" :paginationEnabled="false" :navigationEnabled="false">
  <slide >
    <div class="imageback" >
      
    <h1 class="blog-title" @click="goToBlog()">Flori Mumajesi fitues i Kënga Magjike 2018!</h1>
    </div>
    <h3 class="date">22.10.2019</h3>
    
  </slide>
  <slide>
    <div class="imageback" :style="{'background-image': 'url(' + require('@/assets/img/blog2.jpg') + ')'}">
    
    <h1 class="blog-title">Atmosferë serenatash në skenën e Këngës Magjike</h1>
    </div>
    <h3 class="date">22.10.2019</h3>
  </slide>
    <slide>
    <div class="imageback" :style="{'background-image': 'url(' + require('@/assets/img/blog3.jpg') + ')'}">
    <h1 class="blog-title">Fifi dhe Mc Kresha betejë në skenë!</h1>
    </div>
    <h3 class="date">22.10.2019</h3>
  </slide>
  <slide>
    <div class="imageback" :style="{'background-image': 'url(' + require('@/assets/img/blog4.jpg') + ')'}">
        <h1 class="blog-title">Fifi dhe Mc Kresha betejë në skenë!</h1>
    </div>
    <h3 class="date">22.10.2019</h3>
  </slide>
    <slide>
    <div class="imageback" :style="{'background-image': 'url(' + require('@/assets/img/sonimalaj.png') + ')'}"></div>
  </slide>
  <slide>
    Slide 2 Content
  </slide>
</carousel>
</div>

  </div>
</template>



<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  name: "Blogs",
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
    };
  },
  methods: {
        nextSlide() {
      this.$refs.carousel.goToPage(this.$refs.carousel.getNextPage());
    },
    prevSlide() {
      this.$refs.carousel.goToPage(this.$refs.carousel.getPreviousPage());
    },
    goToHome() {
      this.$router.push({ name: "Home" });
    },
        goToBlog() {
      this.$router.push({ name: "SingleBlog" });
    },
  },
  mounted(){
  }
};
</script>

<style scoped lang="css">
.img-logo:hover{
  cursor:pointer;
}
.img-next-arrow {
  width: 6rem;
}

.carousel-right {
  position: absolute;
      bottom: 5rem;
    right: 5rem;
      padding-top: 19px;
      z-index:99;
}
.carousel-right:hover {
  cursor: pointer;
}

.img-left-arrow {
  width: 6rem;
}

.carousel-left {
  z-index:99;
  position: absolute;
  bottom: 5rem;
  left: 5rem;
  padding-top:15px;
}

.carousel-left:hover {
  cursor: pointer;
}

</style>



<style lang="scss">
// import "assets/sass/main.scss";

.imageback{
background:url("../../src/assets/img/blog1.jpg") no-repeat  center;
height:100%;
background-size: cover;
filter: grayscale(100%);
}

.imageback:hover{
  opacity:0.7;
}

.blog-title:hover{
  cursor:pointer;
  // color: #C360B5;
}

.blog-title {
color: white;
    z-index: 30;
    position: absolute;
    font-family: Vollkorn;
    top: 20rem;
    width: 75%;
    text-align: left;
    left: 2rem;
    font-size: 4.5rem;
    line-height: 1;
}

.date{
      color: #C360B5;
    position: absolute;
    top:50rem;
    z-index: 30;
    font-family: Montserrat;
    background: white;
    font-weight:700;
    font-size:1.4rem;
        padding: 11px 11px 0px 11px;
        left: 2rem;
}

.no-pad {
  padding: 0;
}
//on mobile breakpoint change to 100%;
.blogs {
  height: 100vh;
  background: #C360B5;
  background-size: cover;
  background-attachment: fixed;
}



.vertical-center {
  min-height: 100%; /* Fallback for browsers do NOT support vh unit */
  display: flex;
  align-items: center;
}

.back-hover:hover {
  background: #d17ac4;
  cursor: pointer;
}

.center-block {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.row {
  margin-right: 0px !important;
  margin-left: 0px;
}

.artist-row {
  margin-right: 0px;
  margin-left: 0px;
  height: 10rem;
  background: #ce73c1;
}

.carousel-container{
  height: calc(100% - (10rem)); 
}

.text-center {
  text-align: center;
}


.VueCarousel{
  height:100%;
}

.VueCarousel-wrapper{
  height:100%;
}

.VueCarousel-inner{
  height:100% !important;
}

.VueCarousel-slide-active{
  height:100%;
  position:relative;
}


///---------------------


</style>
