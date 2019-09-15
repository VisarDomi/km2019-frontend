<template>
  <div class="blogs">
    <div class="row justify-content-between artist-row align-items-center h-15">
      <div class="col-lg-2 col-md-3 offset-sm-1 offset-lg-0 offset-1 col-sm-3 col-6 text-center logo-col-sm">
        <img src="@/assets/img/logowhite.svg" @click="goToHome()" class="logo-img img-logo" alt />
      </div>
      <div class="col-lg-1 col-sm-2 col-3 vertical-center back-hover" @click="goToHome()">
        <img
          src="@/assets/img/artistet_arrow_left.svg"
          alt
          class="back-icon center-block respond-width"
        />
      </div>
    </div>
    <div class="carousel-container">
      <!-- <div class="carousel-right">
        <a @click.prevent="nextSlide">
          <img class="img-fluid img-next-arrow" src="@/assets/img/button next_posts.svg" alt />
        </a>
      </div>-->

      <div class="carousel-right" @mouseover="hoverR = true" @mouseleave="hoverR = false">
        <img v-if="hoverR" @click.prevent="nextSlide" src="@/assets/img/blogs_right_hover.svg" alt />
        <img v-else @click.prevent="nextSlide" src="@/assets/img/blogs_right_normal.svg" alt />
      </div>

      <div class="carousel-left" @mouseover="hoverL = true" @mouseleave="hoverL = false">
        <img v-if="hoverL" @click.prevent="prevSlide" src="@/assets/img/blogs_left_hover.svg" alt />
        <img v-else @click.prevent="prevSlide" src="@/assets/img/blogs_left_normal.svg" alt />
      </div>

      <carousel
        ref="carousel"
        :perPageCustom="[[0, 1], [768, 3], [992,4]]"
        :paginationEnabled="false"
        :navigationEnabled="false"
      >
        <slide>
          <div class="h-100 slide-column" >
            <img src="@/assets/img/blog/Blog-1.jpg" class="img-blog img-fluid" alt="">
            <h1 class="blog-title" @click="goToBlog('Blog1')">Ja kush jane 3 artistët e parë BIG! </h1>

            <h3 class="date">14.09.2019</h3>
          </div>
        </slide>
        <slide>
          <div class="h-100 slide-column">
            <img src="@/assets/img/blog/Blog-2-gray.jpg" class="img-blog img-fluid" alt="">
            <h1 class="blog-title" @click="goToBlog('Blog2')">Flori Mumajesi fitues i Kënga Magjike 2018!</h1>

            <h3 class="date">22.1.2019</h3>
          </div>
        </slide>
        <slide>
          <div class="h-100 slide-column" >
            <img src="@/assets/img/blog/Blog-3-gray.jpg" class="img-blog img-fluid" alt="">
            <h1 class="blog-title" @click="goToBlog('Blog3')">Fifi dhe Mc Kresha betejë në skenë!</h1>

            <h3 class="date">22.10.2019</h3>
          </div>
        </slide>
        <slide>
          <div class="h-100 slide-column" >
            <img src="@/assets/img/blog/Blog-4-gray.jpg" class="img-blog img-fluid" alt="">
            <h1 class="blog-title" @click="goToBlog('Blog4')">Atmosferë serenatash në skenën e Këngës Magjike</h1>

            <h3 class="date">22.10.2019</h3>
          </div>
        </slide>
        <slide>
          <div class="h-100 slide-column" >
            <img src="@/assets/img/blog/Blog-5-gray.jpg" class="img-blog img-fluid" alt="">
            <h1 class="blog-title" @click="goToBlog('Blog5')">Mishela Rrapo: Presidenti turk u përlot prej meje</h1>

            <h3 class="date">22.10.2019</h3>
          </div>
        </slide>
        <slide>
          <div class="h-100 slide-column" >
            <img src="@/assets/img/blog/Blog-7-gray.jpg" class="img-blog img-fluid" alt="">
            <h1 class="blog-title" @click="goToBlog('Blog6')">Evi Reçi nuk dua binjake!!</h1>

            <h3 class="date">22.10.2019</h3>
          </div>
        </slide>
        <slide>
          <div class="h-100 slide-column" >
            <img src="@/assets/img/blog/Blog-fifi-gray.jpg" class="img-blog img-fluid" alt="">
            <h1 class="blog-title" @click="goToBlog('Blog7')">Fifi, nje imituese perfekte!</h1>

            <h3 class="date">22.10.2019</h3>
          </div>
        </slide>
        <slide>
          <div class="h-100 slide-column" >
            <img src="@/assets/img/blog/Blog-mentor-gray.jpg" class="img-blog img-fluid" alt="">
            <h1 class="blog-title" @click="goToBlog('Blog8')">Hera e pare e Mentor Haziri-t...Ja doli?!</h1>

            <h3 class="date">22.10.2019</h3>
          </div>
        </slide>
      </carousel>
    </div>
    <!-- <FooterBlack v-if="windowWidth > 770" /> -->
    <FooterWhite v-if="windowWidth > 770" />
      <FooterWhiteMobile v-else />
    <!-- <FooterBlackSmall v-if="windowWidth < 770 && windowWidth > 600" /> -->
  </div>
</template>



<script>
import { Carousel, Slide } from "vue-carousel";
import FooterBlack from "@/components/Footer/FooterBlack.vue";
import FooterWhiteMobile from "@/components/Footer/FooterWhiteMobile.vue";
import FooterWhite from "@/components/Footer/FooterWhite.vue";
import FooterBlackSmall from "@/components/Footer/FooterBlackSmall.vue";
export default {
  name: "Blogs",
  components: {
    FooterWhiteMobile,
    Carousel,
    FooterBlack,
    FooterWhite,
    FooterBlackSmall,
    Slide
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      artists: [
        {
          name: "10.10.2018",
          songtilte: "Flori Mumajesi fitues i Kënga Magjike 2018!",
          img: "https://www.teksteshqip.com/img_upz/allart_full/4838.jpg"
        },
        {
          name: "10.10.2018",
          songtilte:
            "Ardit Gjebrea zbulon prezantusen per “Kënga Magjike” 2019!",
          img:
            "https://i2.wp.com/bordo.al/wp-content/uploads/2019/08/3F5B2EF4-32D6-4A38-AA0C-B7265F170CAE.jpeg?w=750"
        },
        {
          name: "10.10.2018",
          songtilte: "Flori Mumajesi fitues i Kënga Magjike 2018!",
          img:
            "https://www.kohajone.com/wp-content/uploads/2018/11/kenga-magjike.jpg"
        },
        {
          name: "10.10.2018",
          songtilte: "Kenga Magjike 2019, Vjen ndryshimi i dyte...",
          img: "https://rapshqip.com/wp-content/uploads/2018/11/6FIHMs0WLL4.jpg"
        },
        {
          name: "10.10.2018",
          songtilte: "Flori Mumajesi fitues i Kënga Magjike 2018!",
          img: "https://www.teksteshqip.com/img_upz/allart_full/4838.jpg"
        }
      ],
      hoverR: false,
      hoverL: false
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
    goToBlog(blogname) {
      this.$router.push({ name: blogname });
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        this.windowWidth = window.innerWidth;
      });
    });
  }
};
</script>

<style >
.img-logo:hover {
  cursor: pointer;
}
</style>

<style scoped lang="scss">
  @import "@/assets/sass/abstracts/_mixins.scss";

.logo-col-sm{

}

.img-blog{
  height:100%;
  object-fit: cover;
  position:absolute;
  z-index:-10;
  // width:100%;
}
.carousel-right {
  position: absolute;
  /* bottom: 5rem; */
  bottom: 19%;
  right: 5rem;
  /* padding-top: 19px; */
  z-index: 99;
  border-radius: 50%;
  background-color: #c360b5;
}
.carousel-right:hover {
  cursor: pointer;
  border-radius: 50%;
  background-color: white;
}

.img-left-arrow {
  width: 6rem;
}

.carousel-left {
  z-index: 99;
  position: absolute;
  /* bottom: 5rem; */
  bottom: 19%;
  left: 5rem;
  border-radius: 50%;
  background-color: #c360b5;
  /* padding-top: 15px; */
}

.carousel-left:hover {
  cursor: pointer;
  border-radius: 50%;
  background-color: white;
}

.slide-column {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.slide-column:hover {
  background: -webkit-linear-gradient(rgba(#c76cba, 0.7), rgba(#c76cba, 0.7));

  
  background: -moz-linear-gradient(rgba(#c76cba, 0.7), rgba(#c76cba, 0.7));
  background: -o-linear-gradient(rgba(#c76cba, 0.7), rgba(#c76cba, 0.7));
  background: linear-gradient(rgba(#c76cba, 0.7), rgba(#c76cba, 0.7));
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.img-logo:hover {
  cursor: pointer;
}

.img-logo{
      @include respond(small-screen) {
    margin-left:15%;
  }
}
.img-next-arrow {
  width: 6rem;
}
</style>



<style lang="scss">
// import "assets/sass/main.scss";

@import "@/assets/sass/abstracts/_mixins.scss";

.imageback {
  background: url("../../src/assets/img/blog1.jpg") no-repeat center;
  height: 100%;
  background-size: cover;
  filter: grayscale(100%);
}

.imageback:hover {
  opacity: 0.7;
}

.blog-title:hover {
  cursor: pointer;
  // color: #C360B5;
}

.blog-title {
  color: white;
  z-index: 30;
  // position: absolute;
  font-family: Vollkorn;
  // top: 30rem;
  width: 84%;
  text-align: left;
  font-size: 4.5rem;
  padding-top: 38%;
  padding-left: 10%;
  font-size: 4.5rem;
  line-height: 1;

    @include respond(small-screen) {
    padding-top:5%;
  }

  @include respond(phone){
    padding-top:50%;
  }
}
@font-face {
  font-family: Panton;
  src: url('../assets/Fonts/panton-semibold.OTF');
  font-weight: bold;
}
.date {
  color: #c360b5;
  // position: absolute;
  // top: 50rem;
  z-index: 30;
  font-family: Panton;
  background: white;
      width: 10rem;
    margin-left: 10%;
    font-weight: 700;
    font-size: 1.8rem;
    padding: 0.6rem;
  // left: 2rem;
}

.no-pad {
  padding: 0;
}
//on mobile breakpoint change to 100%;
.blogs {
  height: 100vh;
  background: #c360b5;
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

.carousel-container {
  height: calc(90% - (10rem));
}

.text-center {
  text-align: center;
}

.VueCarousel {
  height: 100%;
}

.VueCarousel-wrapper {
  height: 100%;
}

.VueCarousel-inner {
  height: 100% !important;
}

.VueCarousel-slide-active {
  height: 100%;
  position: relative;
}

///---------------------
</style>
