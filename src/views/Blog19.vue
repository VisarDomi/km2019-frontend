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
          <img class="blog-image" src="@/assets/img/blog/Blog-19.jpg" alt />
        </div>
        <div class="col-md-7 col-xs-12 blog-col">
          <div class="container">
            <h1 class="single-blog-title" v-if="this.lang == 'en'"></h1>
            <h1 class="single-blog-title" v-else>Inis Neziri, kemi humbur një futbolliste...</h1>
            <hr />
            <p class="blog-content" v-if="this.lang == 'en'"></p>
            <p
              class="blog-content"
              v-else
            >E kush tha se futbolli është sport vetëm për meshkujt? Nëse nuk do të ishte një këngëtare, me siguri Inis Nezirin do ta shihnim si futbolliste. Inisi tregoi në studion e “E Diela Shqiptare” se futbolli është pasioni i saj dhe kjo video e tregon më së miri. Pas suksesit në New Wave në Rusi ku zuri vendin e parë, Inis Neziri konkurron në festivalin “Kënga Magjike” me këngën “Ishe ti”.</p>
            <div class="row">
              <p class="single-date">10.6.2019</p>
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
          "https://s3.eu-west-1.amazonaws.com/kengamagjike2019/blogIimages%2F%2F6tetorlajmi3.jpeg"
      },
      {
        p: "og:url",
        c: "https://kengamagjike.com/blog19"
      },
      {
        p: "og:title",
        c: "Inis Neziri, kemi humbur një futbolliste..."
      },
      {
        p: "og:description",
        c:
          "E kush tha se futbolli është sport vetëm për meshkujt? Nëse nuk do të ishte një këngëtare..."
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
  transform: scale(0.6);
  margin-left: -10rem;
    margin-top: -11rem;

  @include respond(phone) {
    transform: scale(0.3);
    margin-left: -46rem;
    margin-top: -53rem;
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
