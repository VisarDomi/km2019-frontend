<template>
  <div class="section-news pt-5 pb-5" id="te-reja">
    <!-- <HeaderHero menutype="menu__items--white" logoGreen="true" iconWhite="true" /> -->
    <div class="spacer"></div>
    <div class="row h-25">
      <div class="header-container">
        <h1
          v-if="this.lang == 'en'"
          data-aos="fade-right"
          data-aos-duration="700"
        >&nbsp;&nbsp;&nbsp;News</h1>
        <h1 v-else data-aos="fade-right" data-aos-duration="700">&nbsp;&nbsp;&nbsp;të reja</h1>
      </div>
    </div>
    <div class="middle h-50 go-up">
      <div class="row h-100">
        <div class="graphic-left h-75 w-25">
          <div class="h-100 w-100">
            <img src="@/assets/img/Group 178.svg" alt />
          </div>
        </div>
        <div class="graphic-right h-75 w-25">
          <div class="h-100 w-100">
            <img src="@/assets/img/Group 159.svg" alt />
          </div>
        </div>
        <div class="col-lg-3" v-for="blog in this.blogs" :key="blog.id" style="height:100%;">
          <div
            class="blog__image"
            @click="goToBlog(blog)"
            :style="{
          backgroundImage: 'url('+blog.img+')'
          }"
            data-aos="zoom-out"
            data-aos-duration="700"
          ></div>
          <div class="blog__footer">
            <p class="blog__footer--date">{{blog.date}}</p>
            <p class="blog__footer--title" v-if="lang == 'en'">{{blog.titleEn}}</p>
            <p class="blog__footer--title" v-else>{{blog.title}}</p>
            <div class="blog__footer--other mb-4">
              <img src="@/assets/img/Group 180.svg" alt />
            </div>
          </div>
        </div>

        <div class="more text-center w-100 mt-5">
          <a
            href="#"
            class="btn"
            @click="goToBlogs()"
            v-if="this.lang == 'en'"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-anchor-placement="top-bottom"
          >read more</a>
          <a
            href="#"
            class="btn"
            @click="goToBlogs()"
            v-else
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-anchor-placement="top-bottom"
          >lexo më shumë</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getLanguage, saveLanguage } from "@/store/services/storage";
import { eventBus } from "@/main";
import HeaderHero from "@/components/Headers/HeaderHero.vue";

import { LIST_BLOG } from "@/store/actions.type";
import { mapGetters } from "vuex";
export default {
  name: "BlogsSection",

  components: { HeaderHero },
  data() {
    return {
      blogs: [],
      windowWidth: window.innerWidth,
      lang: ""
    };
  },
  methods: {
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

    async fetchBlogs() {
      const TableName = "KM2019-Blog";
      const Limit = "100";
      const params = {
        TableName,
        Limit
      };
      await this.$store.dispatch(LIST_BLOG, params);

      for (let blog of this.getBlogs) {
        if (blog.isMainHome == true) {
          this.blogs.push(blog);
        }
      }
      this.blogs.sort((a, b) => a.ordering - b.ordering);
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        this.windowWidth = window.innerWidth;
      });
    });
    eventBus.$on("changeLanguage", payload => {
      this.lang = payload;
    });
    this.lang = getLanguage();
    this.fetchBlogs();
  },
  computed: {
    ...mapGetters(["getBlogs"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/sass/abstracts/_mixins.scss";
.spacer {
  height: 15rem;
}
.blog__image:hover {
  cursor: pointer;
}
.graphic-right {
  position: absolute;
  opacity: 0.2;
  top: 5%;
  right: 7%;
}
.graphic-left {
  position: absolute;
  bottom: -16%;
  left: -2%;
}

.btn {
  padding: 0.5rem 5rem;
  border: 2px solid white;
  border-radius: 10rem;

  font-family: Ubuntu;
  font-weight: 700;
  font-size: 2rem;
  color: white;
  &:hover {
    border: 0px;
    color: #47b8b0;
    background-color: white;
  }
  &:focus {
    transform: translateY(4px);
  }
}

.middle {
  margin: 0 auto;
  width: 70%;
}

.col-lg-3 {
  padding-right: 0;
  padding-left: 0;
}

.blog {
  &__image {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: saturate(20%) brightness(70%);
    width: 100%;
    height: 100%;
    &:hover {
      opacity: 0.7;
      transition: all 0.3s;
    }
  }

  &__footer {
    // filter: saturate(0%) brightness(100%) !important;
    opacity: 1 !important;
    z-index: 20;
    position: absolute;
    bottom: 0%;
    left: 10%;
    font-family: Ubuntu;
    &--date {
      background-color: #47b8b0;
      display: inline-block;
      color: white;
      font-family: Panton;
      // font-family: PANTON-REGULAR;
      // font-family: PantonSemiBoldTf;
      font-weight: 700;
      font-size: 1.5rem;
      padding: 1px 1rem;
      @include respond(tab-port) {
        font-size: 2.8rem;
      }
    }
    &--title {
      color: white;
      font-weight: bold;
      font-size: 2rem;
    }
    &--other {
      color: white;
    }
  }
}

.section-news {
  background-color: #47b8b0;
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.go-up {
  margin-top: -15rem;
}

.header-container {
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 2px white;
  position: absolute;
  top: 6%;
  left: 5%;
  @include respond(small-screen) {
    left: 10%;
  }
  z-index: 5;
  h1 {
    font-size: 23vh;
    font-family: Vollkorn;
    font-weight: 700;
    // @include respond(small-screen) {
    //   font-size: 15rem;
    // }
  }
}
</style>
