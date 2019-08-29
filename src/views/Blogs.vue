<template>
  <div class="blogs">
    <div class="row justify-content-between artist-row align-items-center">
      <div class="col-lg-3 col-sm-2 col-xs-1 text-center">
        <img src="@/assets/img/logowhite.svg" alt />
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

<carousel :perPageCustom="[[480, 2], [768, 3], [992,4]]" :paginationEnabled="false" style="color:white;">
  <slide >
    <div class="imageback" ></div>
    <h1 class="blog-title">Flori Mumajesi fitues i Kënga Magjike 2018!</h1>
    
  </slide>
  <slide>
    <div class="imageback" :style="{'background-image': 'url(' + require('@/assets/img/blog2.jpg') + ')'}"></div>
  </slide>
    <slide>
    <div class="imageback" :style="{'background-image': 'url(' + require('@/assets/img/blog3.jpg') + ')'}"></div>
  </slide>
  <slide>
    <div class="imageback" :style="{'background-image': 'url(' + require('@/assets/img/blog1.jpg') + ')'}"></div>
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
    goToHome() {
      this.$router.push({ name: "Home" });
    },
  },
  mounted(){
  }
};
</script>


<style lang="scss">
// import "assets/sass/main.scss";

.imageback{
background:url("../../src/assets/img/blog1.jpg") no-repeat  center;
height:100%;
background-size: cover;
}


.blog-title {
  color: white;
  font-family: Vollkorn;
}

.no-pad {
  padding: 0;
}
//on mobile breakpoint change to 100%;
.blogs {
  height: 100vh;
  background: #0e1032;
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
}


///---------------------


</style>
