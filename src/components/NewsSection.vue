<template>
  <div class="section-news pt-5 pb-5" id="te-reja">
    <!-- <HeaderHero menutype="menu__items--white" logoGreen="true" iconWhite="true" /> -->
    <div class="spacer"></div>
    <div class="row h-25">
      <div class="header-container">
        <h1 v-if="this.lang == 'en'">&nbsp;&nbsp;&nbsp;News</h1>
        <h1 v-else>&nbsp;&nbsp;&nbsp;të reja</h1>
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
        <div class="col-lg-3">
          <div class="blog__image blog__image--1" @click="goToBlog('Blog13')">
            <div class="blog__footer">
              <p class="blog__footer--date">29.09.2019</p>
              <p
                class="blog__footer--title"
                v-if="this.lang == 'en'"
              >Erik Lloshi: The difficult moment of my life</p>
              <p
                class="blog__footer--title"
                v-else
              >Erik Lloshi: Momenti i vështirë i jetës sime</p>
              <div class="blog__footer--other mb-4">
                <img src="@/assets/img/Group 180.svg" alt />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="blog__image blog__image--2" @click="goToBlog('Blog14')">
            <div class="blog__footer">
              <p class="blog__footer--date">29.09.2019</p>
              <p
                class="blog__footer--title"
                v-if="this.lang == 'en'"
              >Elia imitates them. Will Samanta Karavella and Albërie Hadërgjonaj hold grudges?</p>
              <p class="blog__footer--title" v-else>Elia i imiton. A do ti mbajnë mëri Samanta Karavella dhe Albërie
Hadërgjonaj?</p>
              <div class="blog__footer--other mb-4">
                <img src="@/assets/img/Group 180.svg" alt />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="blog__image blog__image--3" @click="goToBlog('Blog15')">
            <div class="blog__footer">
              <p class="blog__footer--date">29.09.2019</p>
              <p
                class="blog__footer--title"
                v-if="this.lang == 'en'"
              >Korab Shaqiri's son "A Phenomenon"</p>
              <p
                class="blog__footer--title"
                v-else
              >Djali i Korab Shaqirit &quot;Fenomen&quot;</p>
              <div class="blog__footer--other mb-4">
                <img src="@/assets/img/Group 180.svg" alt />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="blog__image blog__image--4" @click="goToBlog('Blog16')">
            <div class="blog__footer">
              <p class="blog__footer--date">29.09.2018</p>
              <p
                class="blog__footer--title"
                v-if="this.lang == 'en'"
              >Korab Shaqiri's son "A Phenomenon"</p>
              <p
                class="blog__footer--title"
                v-else
              >Java e dytë/ Kaluan fazën e parë 3 New Artist</p>
              <div class="blog__footer--other mb-4">
                <img src="@/assets/img/Group 180.svg" alt />
              </div>
            </div>
          </div>
          <div class="more text-center w-100 mt-5">
            <a href="#" class="btn" @click="goToBlogs()" v-if="this.lang == 'en'">read more</a>
            <a href="#" class="btn" @click="goToBlogs()" v-else>lexo më shumë</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getLanguage, saveLanguage } from "@/store/services/storage";
import { eventBus } from "@/main";
import HeaderHero from "@/components/Headers/HeaderHero.vue";
export default {
  name: "NewsSection",

  components: { HeaderHero },
  data() {
    return {
      windowWidth: window.innerWidth,
      lang: ""
    };
  },
  methods: {
    goToBlogs() {
      this.$router.push({ name: "Blogs" });
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
    eventBus.$on("changeLanguage", payload => {
      this.lang = payload;
    });
    this.lang = getLanguage();
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
    &--1 {
      background: linear-gradient(rgba(#060e26, 0.7), rgba(#060e26, 0.7)),
        url("../assets/img/blog/Blog-13.jpg");

      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      &:hover {
        background: linear-gradient(rgba(#47b8b0, 0.7), rgba(#47b8b0, 0.7)),
          url("../assets/img/blog/Blog-13.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }
    }
    &--2 {
      background: linear-gradient(rgba(#060e26, 0.7), rgba(#060e26, 0.7)),
        url("../assets/img/blog/Blog-14.jpg");

      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      &:hover {
        background: linear-gradient(rgba(#47b8b0, 0.7), rgba(#47b8b0, 0.7)),
          url("../assets/img/blog/Blog-14.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }
    }
    &--3 {
      background: linear-gradient(rgba(#060e26, 0.7), rgba(#060e26, 0.7)),
        url("../assets/img/blog/Blog-15.jpg");

      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      &:hover {
        background: linear-gradient(rgba(#47b8b0, 0.7), rgba(#47b8b0, 0.7)),
          url("../assets/img/blog/Blog-15.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }
    }
    &--4 {
      background: linear-gradient(rgba(#060e26, 0.7), rgba(#060e26, 0.7)),
        url("../assets/img/blog/Blog-16.jpg");

      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      &:hover {
        background: linear-gradient(rgba(#47b8b0, 0.7), rgba(#47b8b0, 0.7)),
          url("../assets/img/blog/Blog-16.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }
    }
    width: 100%;
    height: 100%;
  }

  &__footer {
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
