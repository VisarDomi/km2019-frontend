<template>
  <div>
    <div class="blog-page">
      <div class="row justify-content-between artist-row align-items-center h-15">
        <div class="col-lg-2 col-md-3 offset-sm-0 offset-1 col-sm-3 col-6 text-center">
          <img src="@/assets/img/logoblog.svg" @click="goToHome()" class="logo-img img-logo" alt />
        </div>
        <div class="col-lg-1 col-sm-2 col-3 vertical-center back-hover" @click="goToBlogs()">
          <img
            src="@/assets/img/artistet_arrow_left.svg"
            alt
            class="back-icon center-block respond-width"
          />
        </div>
      </div>

      <div class="row blog-row">
        <div class="col-md-5 col-12 image-col">
          <img class="blog-image" src="@/assets/img/blog/Blog-16.jpg" alt />
        </div>
        <div class="col-md-7 col-xs-12 blog-col">
          <div class="container">
            <h1
              class="single-blog-title"
              v-if="this.lang == 'en'"
            >Week 2 / 3 New Artists pass the stage</h1>
            <h1
              class="single-blog-title"
              v-else
            >Java e dytë/ Kaluan fazën e parë 3 New Artist</h1>
            <hr />
            <p class="blog-content" v-if="this.lang == 'en'">
              In the second week of the festival, the New Artist category had the day of the 5 buttons.
              <br><br>
              All four competitors of the week went to jury trial. Three of them received 5 green votes, only MIN3 was voted 5 reds by all jury members.
              <br><br>
              Alex Alexander, the Swedish singer, came to Albania specifically for Kënga Magjike, in addition to performing for the audience with a super performance, he also passed the first stage of the New Artist Category. 
              <br><br>
              Kristi, who competed for the first time at the festival with a song he created himself, also qualified for this stage of the festival.
              <br><br>

              The two sisters competing in the New Artist category, finalists in the "Gjeniu I Vogël” competition, Laura and Elisa Gjipi, also passed the first stage, voted by the 5 members of the jury.
            </p>
            <p class="blog-content" v-else>
Në javën e dytë të festivalit Kënga Magjike, për kategorinë New Artist, ishte dita e 5 butonave.
<br><br>
Të katër konkurrentët e javës kaluan nën gjykimin e jurisë. Tre prej tyre morën 5 vota jeshile, vetëm MIN3 u votua më 5 të kuqe, nga të gjithë anëtarët e jurisë.
<br><br>
Alex Alexandër, këngëtari suedez, ardhur në Shqipëri posaçërisht për festivalin Kënga Magjike, përveçse bëri për vete publikun me një superperformancë, kaloi edhe fazën e parë të Kënga Magjike.
<br><br>
Kristi, i cili konkurroi për herë të parë në festival, me një këngë të krijuar nga vetë ai, gjithashtu u kualifikua për këtë fazë të festivalit.
<br><br>
Dy motrat konkurrente në kategorinë New Artist, finaliste të kompeticionit “Gjeniu i vogël”, Laura dhe Elisa Gjipi, kaluan gjithashtu fazën e parë, të votuara me 5 jeshile nga juria.


            </p>
            <div class="row">
              <p class="single-date">29.09.2019</p>
              <div class="carousel-right" @mouseover="hoverR = true" @mouseleave="hoverR = false">
                <img
                  v-if="hoverR"
                  @click="goToBlog('Blog5')"
                  src="@/assets/img/buttons_export/button_tereja_right_h.svg"
                  style="width:6rem;"
                  alt
                />
                <img
                  v-else
                  @click="goToBlog('Blog5')"
                  src="@/assets/img/buttons_export/button_tereja_right.svg"
                  style="width:6rem;"
                  alt
                />
              </div>

              <div class="carousel-left" @mouseover="hoverL = true" @mouseleave="hoverL = false">
                <img
                  v-if="hoverL"
                  @click="goToBlog('Blog3')"
                  src="@/assets/img/buttons_export/button_tereja_left_h.svg"
                  style="width:6rem;"
                  alt
                />
                <img
                  v-else
                  @click="goToBlog('Blog3')"
                  src="@/assets/img/buttons_export/button_tereja_left.svg"
                  style="width:6rem;"
                  alt
                />
              </div>
            </div>

            <h3 class="bio-text" v-if="this.lang == 'en'">similar</h3>
            <h3 class="bio-text" v-else>të ngjashme</h3>
            <br />
            <div class="row">
              <div class="col-lg-6">
                <div class="blog-card" @click="goToBlog('Blog1')">
                  <img class="blog-card-image img-fluid" src="@/assets/img/blog/Blog-1.jpg" alt />
                  <h2
                    class="blog-card-title"
                    v-if="this.lang == 'en'"
                  >These are the first 3 BIG artists!</h2>
                  <h2 class="blog-card-title" v-else>Ja kush jane 3 artistët e parë BIG!</h2>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="blog-card" @click="goToBlog('Blog2')">
                  <img class="blog-card-image img-fluid" src="@/assets/img/blog/Blog-2.jpg" alt />
                  <h2
                    class="blog-card-title"
                    v-if="this.lang == 'en'"
                  >Flori Mumajesi winner of "Kënga Magjike 2018!"</h2>
                  <h2 class="blog-card-title" v-else>Flori Mumajesi fitues i Kënga Magjike 2018!</h2>
                </div>
              </div>
            </div>

            <br />
            <br />
          </div>
        </div>

        <FooterSingleBlog v-if="windowWidth > 770" />
      </div>
      <FooterSingleBlogMobile v-if="windowWidth < 770" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import { Carousel, Slide } from "vue-carousel";

import FooterSingleBlog from "@/components/Footer/FooterSingleBlog.vue";
import FooterSingleBlogMobile from "@/components/Footer/FooterSingleBlogMobile.vue";
import { getLanguage, saveLanguage } from "@/store/services/storage";
export default {
  name: "SingleBlog",
  components: {
    Carousel,
    Slide,
    FooterSingleBlog,
    FooterSingleBlogMobile
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      hoverR: false,
      hoverL: false,
      lang: ""
    };
  },
  head: {
    // To use "this" in the component, it is necessary to return the object through a function
    meta: [
      {
        p: "og:image",
        c:
          "https://previews.dropbox.com/p/thumb/AAnPNy56z1OyLE4-BfFhM-6Xi-gML0c4vQQXUv9EEhrxBy7NfjGgn70DzXL4skEyLfzfM2SH6HkCT8Mkq4F9ZsdzW83jbuBMG43xOAWdUI25u-p-utREYPKe88QeqgVFwJmKWATi_QZ3KonrctDicMDD_tsCYlbOl-_x54kyqJGs7zQu2lmFb3seJZvZYCYe7aQQJPfbrGQql81SKCLSQG1x5ln6-NFIVx6OBpJkm2ktPqPOqBELbwMncYniv5OXT-fzNApS5BcA62-FIUIT2yP87y-WoINJYv9dw0h_9kyymUf_p-ig2s_RQhhuFQISunl2zMNv__armm1Bp-MnTv-a8WJlGKOLJAgfONNWKn2WlA/p.jpeg?size=2048x1536&size_mode=3"
      },
      {
        p: "og:url",
        c: "https://kengamagjike.com/blog16"
      },
      {
        p: "og:title",
        c: "Java e dytë/ Kaluan fazën e parë 3 New Artist"
      },
      {
        p: "og:description",
        c:
          "Në javën e dytë të festivalit Kënga Magjike, për kategorinë New Artist, ishte dita e 5 butonave."
      }
    ]
  },
  methods: {
    nextSlide() {
      this.$refs.carousel.goToPage(this.$refs.carousel.getNextPage());
    },
    prevSlide() {
      this.$refs.carousel.goToPage(this.$refs.carousel.getPreviousPage());
    },
    goToBlogs() {
      this.$router.push({ name: "Blogs" });
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
    this.lang = getLanguage();
  }
};
</script>




<style lang="scss" scoped>
@import "@/assets/sass/abstracts/_mixins.scss";

@font-face {
  font-family: Panton;
  src: url("../assets/Fonts/panton-semibold.OTF");
  font-weight: bold;
}

.carousel-right {
  position: absolute;
  right: 8rem;
  margin-top: 19px;
  @include respond(phone) {
    margin-top: 13px;
  }
  border-radius: 50%;
  // background-color: white;
}
.carousel-right:hover {
  cursor: pointer;
  border-radius: 50%;
}

.img-left-arrow {
  width: 5rem;
}

.carousel-left {
  position: absolute;
  right: 15rem;
  margin-top: 19px;
  @include respond(phone) {
    margin-top: 13px;
  }
  border-radius: 50%;
  // background-color: white;
}

.carousel-left:hover {
  cursor: pointer;
  border-radius: 50%;
}

.img-logo:hover {
  cursor: pointer;
}

.img-next-arrow {
  width: 5rem;
}

.blog-card:hover {
  cursor: pointer;
}

.blog-card-title {
  font-family: Vollkorn;
  color: white;
  font-size: 2.3rem;
  width: 90%;
  margin-top: 2rem;
}

.blog-card-image {
  filter: grayscale(100%);
  width: 90%;
  @include respond(phone) {
    width: 100%;
  }
  height: 20rem;
  object-fit: cover;
}

.bio-text {
  overflow: hidden;
  color: white;
  font-family: Vollkorn;
  font-weight: 400;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px white;
  font-size: 3rem;
  margin-top: 20px;
}

.bio-text:after {
  background-color: white;
  content: "";
  display: inline-block;
  height: 1px;
  position: relative;
  vertical-align: middle;
  width: 100%;

  @include respond(phone) {
    width: 80%;
  }
}

.bio-text:after {
  left: 0.5em;
  margin-right: -50%;
}

.single-date {
  position: initial;
  width: fit-content;
  margin-top: 3rem;
  font-family: Panton;
  color: #47b8b0;
  // position: absolute;
  // top: 50rem;
  z-index: 30;
  // font-family: Panton;
  background: white;
  width: 10.2rem;
  // margin-left: 10%;
  font-weight: 900;
  font-size: 1.6rem;
  padding: 0.5rem;
  padding-left: 1.2rem;
}

.blog-content {
  font-size: 1.7rem;
  font-family: Ubuntu;
  color: white;
  font-weight: 400;
}

.single-blog-title {
  color: white;
  font-size: 4rem;
  margin-top: 20%;
  position: initial;
  // margin-left:5rem;
}
hr {
  border-top: 2px solid white;
  // margin-left:5rem;
  margin-top: 2rem;
  // margin-right: 5rem;
}
.blog-image {
  object-fit: cover;
  position: fixed;
  transform: scale(0.7);
  margin-left: -21rem;

  @include respond(phone) {
    transform: scale(0.3);
    margin-left: -54rem;

    margin-top: -41rem;
  }
}

.blog-row {
  height: 100%;
}
.image-col {
  background: #47b8b0;
  padding: 0;
  @include respond(small-screen) {
    height: 45%;
  }
  margin: 0;
}
.blog-col {
  background: #47b8b0;
  font-size: 3rem;
  padding-left: 5rem;
  padding-right: 5rem;
  @include respond(phone) {
    margin-bottom: 80px;
  }
}
.blog-page {
  height: 100vh;
  background: #47b8b0;
  background-size: cover;
  background-attachment: fixed;
}

.vertical-center {
  min-height: 100%; /* Fallback for browsers do NOT support vh unit */
  display: flex;
  align-items: center;
}

.back-hover:hover {
  background: #47b8b0;
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
  background: #47b8b0;
  position: fixed;
  top: 0;
  z-index: 9999;
  width: 100%;
}
</style>
