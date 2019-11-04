<template>
  <div class="blogs">
    <div class="row justify-content-between artist-row align-items-center h-15 ml-0">
      <div class="col-lg-2 col-md-3 offset-sm-1 offset-lg-0 col-sm-3 col-6 text-center logo-col-sm">
        <img src="@/assets/img/logoblog.svg" @click="goToHome()" class="logo-img img-logo" alt />
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
        <img
          v-if="hoverR"
          @click.prevent="nextSlide"
          src="@/assets/img/buttons_export/button_tereja_right_h.svg"
          style="width:6rem;"
          alt
        />
        <img
          v-else
          @click.prevent="nextSlide"
          src="@/assets/img/buttons_export/button_tereja_right.svg"
          style="width:6rem;"
          alt
        />
      </div>

      <div class="carousel-left" @mouseover="hoverL = true" @mouseleave="hoverL = false">
        <img
          v-if="hoverL"
          @click.prevent="prevSlide"
          src="@/assets/img/buttons_export/button_tereja_left_h.svg"
          style="width:6rem;"
          alt
        />
        <img
          v-else
          @click.prevent="prevSlide"
          src="@/assets/img/buttons_export/button_tereja_left.svg"
          style="width:6rem;"
          alt
        />
      </div>

      <carousel
        ref="carousel"
        :perPageCustom="[[0, 1], [768, 3], [992,4]]"
        :paginationEnabled="false"
        :navigationEnabled="false"
      >
        <slide v-for="blog in this.blogs" :key="blog.id">
          <div class="h-100 slide-column">
            <img :src="blog.img" class="img-blog img-fluid grey-scale" alt />
            <div class="blog-title-container">
              <h3 class="date">{{blog.date}}</h3>
              <h1 class="blog-title" v-if="lang == 'en'" @click="goToBlog(blog)">{{blog.titleEn}}</h1>
              <h1 class="blog-title" v-else @click="goToBlog(blog)">{{blog.title}}</h1>
            </div>
          </div>
        </slide>
      </carousel>
    </div>
    <!-- <FooterBlack v-if="windowWidth > 770" /> -->
    <FooterWhite v-if="windowWidth > 770" height="height-10" />
    <FooterSingleBlogMobile v-else />
    <!-- <FooterBlackSmall v-if="windowWidth < 770 && windowWidth > 600" /> -->
  </div>
</template>



<script>
import { getLanguage } from "@/store/services/storage";
import { Carousel, Slide } from "vue-carousel";
const FooterBlack = () => import("@/components/Footer/FooterBlack");
const FooterSingleBlogMobile = () =>
  import("@/components/Footer/FooterSingleBlogMobile");
const FooterWhite = () => import("@/components/Footer/FooterWhite");
const FooterBlackSmall = () => import("@/components/Footer/FooterBlackSmall");
import { serveBlogFromCloudFront } from "@/common/cloudFront";

import { LIST_BLOG } from "@/store/actions.type";
import { mapGetters } from "vuex";
export default {
  name: "Blogs",
  components: {
    FooterSingleBlogMobile,
    Carousel,
    FooterBlack,
    FooterWhite,
    FooterBlackSmall,
    Slide
  },
  data() {
    return {
      blogs: [],
      lang: "",
      windowWidth: window.innerWidth,
      artists: [],
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
      this.$router.push({ path: `/#te-reja` });
    },
    goToBlog(blog) {
      // this.$router.push({ name: blog.title });
      this.$router.push({
        name: "SingleBlog",
        params: { title: blog.title, id: blog.id }
      });
    },

    async fetchBlogs() {
      const TableName = "KM2019-Blog";
      const Limit = "100";
      const params = {
        TableName,
        Limit
      };
      await this.$store.dispatch(LIST_BLOG, params);

      for (let blog of this.getBlogs) {
        let blog2 = serveBlogFromCloudFront(blog);

        this.blogs.push(blog2);
      }
      this.blogs.sort((a, b) => b.ordering - a.ordering);
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        this.windowWidth = window.innerWidth;
      });
    });
    this.lang = getLanguage();
    this.fetchBlogs();
  },
  computed: {
    ...mapGetters(["getBlogs"])
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
.grey-scale {
  filter: saturate(20%) brightness(70%);
}

.img-blog {
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: -10;
  // width:100%;
}
.carousel-right {
  position: absolute;
  /* bottom: 5rem; */
  bottom: 21%;
  right: 5rem;
  /* padding-top: 19px; */
  z-index: 99;
  border-radius: 50%;
}
.carousel-right:hover {
  cursor: pointer;
  border-radius: 50%;
  // background-color: white;
}

.img-left-arrow {
  width: 6rem;
}

.carousel-left {
  z-index: 99;
  position: absolute;
  /* bottom: 5rem; */
  bottom: 21%;
  left: 5rem;
  border-radius: 50%;
  /* padding-top: 15px; */
}

.carousel-left:hover {
  cursor: pointer;
  border-radius: 50%;
  // background-color: white;
}

.slide-column {
  background-repeat: no-repeat;
  position: relative;
  background-size: cover;
  background-position: center;
}

.slide-column:hover {
  background: -webkit-linear-gradient(rgba(#47b8b0, 0.7), rgba(#47b8b0, 0.7));

  background: -moz-linear-gradient(rgba(#47b8b0, 0.7), rgba(#47b8b0, 0.7));
  background: -o-linear-gradient(rgba(#47b8b0, 0.7), rgba(#47b8b0, 0.7));
  background: linear-gradient(rgba(#47b8b0, 0.7), rgba(#47b8b0, 0.7));
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.img-logo:hover {
  cursor: pointer;
}

.img-logo {
  @include respond(small-screen) {
    margin-left: 15%;
  }
}
.img-next-arrow {
  width: 6rem;
}

@media only screen and (max-width: 320px) {
  .carousel-right {
    bottom: 24%;
  }

  .carousel-left {
    bottom: 24%;
  }
}
</style>



<style lang="scss">
// import "assets/sass/main.scss";

@import "@/assets/sass/abstracts/_mixins.scss";

.imageback {
  // background: url("../../src/assets/img/blog1.jpg") no-repeat center;
  height: 100%;
  background-size: cover;
  filter: grayscale(100%);
}

.imageback:hover {
  opacity: 0.7;
}

.blog-title:hover {
  cursor: pointer;
}

.blog-title-container {
  position: absolute;
  bottom: 23%;
}

.blog-title {
  color: white;
  z-index: 30;
  // position: absolute;
  font-family: Vollkorn;
  // top: 30rem;
  width: 84%;
  text-align: left;
  font-size: 4rem;
  // padding-top: 18rem;
  padding-left: 10%;
  font-size: 4.5rem;
  line-height: 1;

  @include respond(small-screen) {
    padding-top: 5%;
  }

  @include respond(phone) {
    // padding-top: 18rem;
  }
}
@media only screen and (max-width: 320px) {
  .blog-title {
    padding-top: 10rem;
  }
}
@font-face {
  font-family: Panton;
  src: url("../assets/Fonts/panton-semibold.OTF");
  font-weight: bold;
}
.date {
  color: #47b8b0;
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
