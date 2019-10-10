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
          <img class="blog-image" :src="this.getBlog.img" alt />
        </div>
        <div class="col-md-7 col-xs-12 blog-col">
          <div class="container">
            <h1 class="single-blog-title" v-if="lang == 'en'">{{this.getBlog.titleEn}}</h1>
            <h1 class="single-blog-title" v-else>{{this.getBlog.title}}</h1>
            <hr />
            <p class="blog-content" v-if="lang == 'en'">{{this.getBlog.bodyEn}}</p>
            <p class="blog-content" v-else>{{this.getBlog.body}}</p>
            <div class="row">
              <p class="single-date">{{this.getBlog.date}}</p>
              <div class="carousel-right" @mouseover="hoverR = true" @mouseleave="hoverR = false">
                <img
                  v-if="hoverR"
                  @click="goToBlog(recBlogs[1])"
                  src="@/assets/img/buttons_export/button_tereja_right_h.svg"
                  style="width:6rem;"
                  alt
                />
                <img
                  v-else
                  src="@/assets/img/buttons_export/button_tereja_right.svg"
                  style="width:6rem;"
                  alt
                />
              </div>

              <div class="carousel-left" @mouseover="hoverL = true" @mouseleave="hoverL = false">
                <img
                  v-if="hoverL"
                  @click="goToBlog(recBlogs[0])"
                  src="@/assets/img/buttons_export/button_tereja_left_h.svg"
                  style="width:6rem;"
                  alt
                />
                <img
                  v-else
                  src="@/assets/img/buttons_export/button_tereja_left.svg"
                  style="width:6rem;"
                  alt
                />
              </div>
            </div>

            <h3 class="bio-text" v-if="lang == 'en'">similar</h3>
            <h3 class="bio-text" v-else>të ngjashme</h3>
            <br />
            <div class="row">
              <div class="col-lg-6" v-for="blog of this.recBlogs" :key="blog.id">
                <div class="blog-card" @click="goToBlog(blog)">
                  <img class="blog-card-image img-fluid" :src="blog.img" alt />
                  <h2 class="blog-card-title" v-if="lang == 'en'">{{blog.titleEn}}</h2>
                  <h2 class="blog-card-title" v-else>{{blog.title}}</h2>
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

import FooterWhite from "@/components/Footer/FooterWhite.vue";
import FooterSingleBlogMobile from "@/components/Footer/FooterSingleBlogMobile.vue";

import { GET_BLOG, LIST_BLOGS } from "@/store/actions.type";
import { mapGetters } from "vuex";
import { getLanguage, saveLanguage } from "@/store/services/storage";
import { START_LOADING, STOP_LOADING } from "@/store/mutations.type";
export default {
  name: "SingleBlog",
  components: {
    Carousel,
    Slide,
    FooterWhite,
    FooterSingleBlogMobile
  },
  head: {
    // To use "this" in the component, it is necessary to return the object through a function
    meta: [
      {
        p: "og:image",
        c: () => {
          return this.getBlog.img;
        }
      },
      {
        p: "og:title",
        c: () => {
          this.getBlog.title;
        }
      },
      {
        p: "og:description",
        c: () => {
          this.getBlog.body;
        }
      }
    ]
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      hoverR: false,
      hoverL: false,
      recBlogs: [],
      lang: ""
    };
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
    goToBlog(blog) {
      // this.$router.push({ name: blog.title });
      console.log("id", blog.id);
      this.$router.push({
        name: "SingleBlog",
        params: { title: blog.title, id: blog.id }
      });
      this.$router.go(0);
    },
    goToHome() {
      this.$router.push({ name: "Home" });
    },
    shuffle(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    },
    async fetchBlog(blogId) {
      const TableName = "KM2019-Blog";
      const id = blogId;
      const params = {
        TableName,
        id
      };
      this.$store.commit(START_LOADING);
      await this.$store.dispatch(GET_BLOG, params);
      this.$store.commit(STOP_LOADING);
    },
    async fetchBlogs() {
      const TableName = "KM2019-Blog";
      const Limit = "100";
      const params = {
        TableName,
        Limit
      };
      await this.$store.dispatch(LIST_BLOGS, params);
      let coppy = this.getBlogs.slice();
      let shuffledArr = this.shuffle(coppy);
      for (let blog of shuffledArr) {
        if (blog.title !== this.getBlog.title) {
          this.recBlogs.push(blog);
        }
        if (this.recBlogs.length == 2) {
          break;
        }
      }
    }
  },
  computed: {
    ...mapGetters(["getBlog", "getBlogs"])
  },
  async mounted() {
    this.lang = getLanguage();
    await this.fetchBlog(this.$route.params.id);
    await this.fetchBlogs();
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        this.windowWidth = window.innerWidth;
      });
    });
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
  width: 100%;
  margin-left: 2rem;
  margin-top: 17rem;

  @include respond(phone) {
    margin-left: 0rem;
    height: 100%;
    object-fit: cover;
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
