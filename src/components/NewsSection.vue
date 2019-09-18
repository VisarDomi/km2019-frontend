<template>
  <div class="section-news">
    <HeaderHero
      menutype="menu__items--white"
      iconWhite="true"
      logoWhite="true"
      v-if="windowWidth > 750"
    />
    <div class="row h-25">
      <div class="header-container">
        <h1>&nbsp;&nbsp;&nbsp;të reja</h1>
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
          <div class="blog__image blog__image--1" @click="goToBlog('Blog1')">
            <div class="blog__footer">
              <p class="blog__footer--date">14.09.2019</p>
              <p class="blog__footer--title">Ja kush jane 3 artistët e parë BIG!</p>
              <div class="blog__footer--other mb-4">
                <img src="@/assets/img/Group 180.svg" alt />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="blog__image blog__image--2" @click="goToBlog('Blog0')">
            <div class="blog__footer">
              <p class="blog__footer--date">15.09.2019</p>
              <p class="blog__footer--title">Kënga Magjike, këtë vit 6 anëtarë jurie</p>
              <div class="blog__footer--other mb-4">
                <img src="@/assets/img/Group 180.svg" alt />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="blog__image blog__image--3" @click="goToBlog('Blog01')">
            <div class="blog__footer">
              <p class="blog__footer--date">15.09.2019</p>
              <p class="blog__footer--title">Kënga Magjike 2019 - Më shumë se 10 këngëtarë të huaj</p>
              <div class="blog__footer--other mb-4">
                <img src="@/assets/img/Group 180.svg" alt />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="blog__image blog__image--4" @click="goToBlog('Blog02')">
            <div class="blog__footer">
              <p class="blog__footer--date">15.09.2018</p>
              <p class="blog__footer--title">Ndryshon sistemi i votimit në Kënga Magjike</p>
              <div class="blog__footer--other mb-4">
                <img src="@/assets/img/Group 180.svg" alt />
              </div>
            </div>
          </div>
          <div class="more text-center w-100 mt-5">
            <a href="#" class="btn" @click="goToBlogs()">lexo më shumë</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderHero from "@/components/Headers/HeaderHero.vue";
export default {
  name: "NewsSection",

  components: {
    HeaderHero
  },
  data() {
    return {
      windowWidth: window.innerWidth
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/sass/abstracts/_mixins.scss";

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
  border: 2px solid #c76cba;
  border-radius: 10rem;

  font-family: Ubuntu;
  font-weight: 700;
  font-size: 2rem;
  color: #c76cba;
  &:hover {
    border: 0px;
    color: white;
    background-color: #c76cba;
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
        url("../assets/img/blog/Blog-1.jpg");

      background-repeat: no-repeat;
      background-size: cover;
      &:hover {
        background: linear-gradient(rgba(#c76cba, 0.7), rgba(#c76cba, 0.7)),
          url("../assets/img/blog/Blog-1.jpg");
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
    &--2 {
      background: linear-gradient(rgba(#060e26, 0.7), rgba(#060e26, 0.7)),
        url("../assets/img/blog/Blog-0-gray.jpg");

      background-repeat: no-repeat;
      background-size: cover;
      &:hover {
        background: linear-gradient(rgba(#c76cba, 0.7), rgba(#c76cba, 0.7)),
          url("../assets/img/blog/Blog-0-gray.jpg");
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
    &--3 {
      background: linear-gradient(rgba(#060e26, 0.7), rgba(#060e26, 0.7)),
        url("../assets/img/blog/Blog-01-gray-cropped.jpg");

      background-repeat: no-repeat;
      background-size: cover;
      &:hover {
        background: linear-gradient(rgba(#c76cba, 0.7), rgba(#c76cba, 0.7)),
          url("../assets/img/blog/Blog-01-gray-cropped.jpg");
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
    &--4 {
      background: linear-gradient(rgba(#060e26, 0.7), rgba(#060e26, 0.7)),
        url("../assets/img/blog/Blog-02-gray-cropped.jpg");

      background-repeat: no-repeat;
      background-size: cover;
      &:hover {
        background: linear-gradient(rgba(#c76cba, 0.7), rgba(#c76cba, 0.7)),
          url("../assets/img/blog/Blog-02-gray-cropped.jpg");
        background-repeat: no-repeat;
        background-size: cover;
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
      background-color: #c360b5;
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
  background-color: #0e1032;
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
