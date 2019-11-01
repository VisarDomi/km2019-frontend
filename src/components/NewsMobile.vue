<template>
  <div class="mobile-news" style="position:relative;" id="te-reja-mobile">
    <div class="row align-items-center ml-0">
      <h1
        class="title"
        v-if="this.lang == 'en'"
        data-aos="zoom-out"
        data-aos-anchor-placement="center-bottom"
      >news</h1>
      <h1 class="title" v-else data-aos="zoom-out" data-aos-anchor-placement="center-bottom">të reja</h1>
    </div>

    <div class="row ml-0">
      <div class="col-12" style="padding-left:0px;padding-right:0px;height:70vh;">
        <carousel
          ref="carouselNewsMobile"
          :perPage="1"
          :autoplay="true"
          :autoplayTimeout="3000"
          :loop="true"
          :autoplayHoverPause="false"
          :paginationEnabled="false"
          :navigationEnabled="false"
        >
          <slide v-for="blog in this.blogs" :key="blog.id">
            <img
              :src="blog.img"
              alt
              class="img-fluid"
              style="height:100%;width:100%;object-fit:cover;"
              @click="goToBlog(blog)"
            />
            <div class="blog__footer">
              <h3 class="blog__footer--date">{{blog.date}}</h3>
              <h1
                class="blog__footer--title"
                @click="goToBlog(blog)"
                v-if="lang == 'en'"
              >{{blog.titleEn}}</h1>
              <h1 class="blog__footer--title" @click="goToBlog(blog)" v-else>{{blog.title}}</h1>
            </div>
          </slide>
        </carousel>
      </div>
    </div>
    <div class="row ml-0" style>
      <div class="text-center ml-auto mr-auto">
        <a
          @click="goToBlogs()"
          class="btn more-btn"
          style="color:white;"
          v-if="this.lang == 'en'"
          data-aos="zoom-out"
          data-aos-anchor-placement="center-bottom"
        >read more</a>
        <a
          @click="goToBlogs()"
          class="btn more-btn"
          style="color:white;"
          v-else
          data-aos="zoom-out"
          data-aos-anchor-placement="center-bottom"
        >Më shumë lajme</a>
      </div>
    </div>
  </div>
</template>

<script>
import { getLanguage, saveLanguage } from "@/store/services/storage";
import { LIST_BLOGS } from "@/store/actions.type";
import { mapGetters } from "vuex";
import { eventBus } from "@/main";
export default {
  name: "NewsMobile",
  data() {
    return {
      artists: [
        {
          name: "10.10.2018",
          songtilte: "Flori Mumajesi fitues i Kënga Magjike 2018!",
          img: "https://www.teksteshqip.com/img_upz/allart_full/4838.jpg"
        },
        {
          name: "10.10.2018",
          songtilte: "Flori Mumajesi fitues i Kënga Magjike 2018!",
          img: "https://www.teksteshqip.com/img_upz/allart_full/4838.jpg"
        }
      ],
      blogs: [],
      lang: ""
    };
  },
  methods: {
    nextSlide() {
      this.$refs.carouselNewsMobile.goToPage(
        this.$refs.carouselNewsMobile.getNextPage()
      );
    },
    goToBlogs() {
      this.$router.push({ name: "Blogs" });
    },
    goToBlog(blog) {
      // this.$router.push({ name: blog.title });
      this.$router.push({
        name: "SingleBlog",
        params: { title: blog.title, id: blog.id }
      });
    },
    prevSlide() {
      this.$refs.carouselNewsMobile.goToPage(
        this.$refs.carouselNewsMobile.getPreviousPage()
      );
    },
    async fetchBlogs() {
      const TableName = "KM2019-Blog";
      const Limit = "100";
      const params = {
        TableName,
        Limit
      };
      await this.$store.dispatch(LIST_BLOGS, params);

      for (let blog of this.getBlogs) {
        if (blog.isMainHome == true) {
          this.blogs.push(blog);
        }
      }
      this.blogs.sort((a, b) => a.ordering - b.ordering);
    }
  },
  async mounted() {
    setTimeout(() => {
      this.$forceUpdate();
    }, 800);
    eventBus.$on("changeLanguage", payload => {
      this.lang = payload;
    });
    this.lang = getLanguage();
    await this.fetchBlogs();
  },
  computed: {
    ...mapGetters(["getBlogs"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/sass/abstracts/_mixins.scss";

.more-btn:hover {
  cursor: pointer;
}

.img-fluid {
  width: 88%;
  filter: saturate(20%) brightness(70%);
}
.img-blog {
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: -10;
  // width:100%;
}

.img-next-arrow {
  width: 7rem;
}

.carousel-right {
  position: absolute;
  bottom: 13%;
  right: 5rem;
  padding-top: 19px;
  z-index: 4;
}
.carousel-right:hover {
  cursor: pointer;
}

.img-left-arrow {
  width: 7rem;
}

.carousel-left {
  z-index: 99;
  position: absolute;
  bottom: 13%;
  left: 5rem;
  padding-top: 15px;
}

.carousel-left:hover {
  cursor: pointer;
}

.mobile-news {
  background-color: #47b8b0;
  position: relative !important;
}

.blog__footer {
  z-index: 20;
  position: absolute;
  bottom: 0%;
  margin-left: 10%;
  font-family: Ubuntu;
  &--date {
    color: #47b8b0 !important;
    background: white;
    display: inline-block;
    color: white;
    font-family: Panton;
    font-weight: 700;
    font-size: 1.8rem;
    padding: 0.6rem;
    @include respond(tab-port) {
      font-size: 2.8rem;
    }
  }
  &--title {
    color: white;
    font-weight: bold;
    font-size: 4.5rem;
    font-family: Vollkorn;
    width: 84%;
    line-height: 1;
    @include respond(tab-port) {
      font-size: 6rem;
    }
  }
  &--other {
    color: white;
  }
}

.w-108 {
  width: 108% !important;
}

.title {
  text-align: center;
  font-family: Vollkorn;
  // color: black;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 2px white;
  font-size: 12rem;
  margin-top: 8rem;
}

.h-70 {
  height: 70%;
}

.h-60 {
  height: 62%;
}

.btn-container {
  position: absolute;
  bottom: 3%;
}

.btn {
  padding: 0.5rem 7rem;
  color: white !important;
  border: 2px solid white;
  border-radius: 10rem;
  font-family: Ubuntu;
  font-weight: 700;
  font-size: 3rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
}

a:not([href]):not([tabindex]) {
  color: white !important;
}

.mt-6 {
  margin-top: 5rem;
}
.artist-card {
  width: 100%;
  z-index: 4;
  img {
    height: 100%;
    width: 100%;
    // z-index: 5;
  }
  &__name {
    color: white;
    font-size: 2.5rem;
    padding: 4px 1rem;
    background-color: black;
    font-family: Vollkorn;
    display: inline-block;
    border: solid 2px white;

    margin-bottom: 2px;
  }
  &__song {
    border: 1px solid black;
    background-color: white;
    text-transform: uppercase;
    font-family: Ubuntu;

    display: inline-block;
    padding: 6px 1rem;
    font-size: 2.5rem;
  }
}

.title {
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
  margin-bottom: 4rem;
}

.h-5 {
  height: 5%;
}
.h-10 {
  height: 10%;
}
.h-20 {
  height: 20%;
}

.blog {
  // margin-left: -20%;
}
</style>
