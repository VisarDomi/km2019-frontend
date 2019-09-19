<template>
  <div class="mobile-news" style="position:relative;">
    <div class="row align-items-center ml-0">
      <h1 class="title">të reja</h1>
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
          <slide>
            <img
              src="@/assets/img/blog/Blog-0-gray.jpg"
              alt
              class="img-fluid"
              style="height:100%;width:100%;object-fit:cover;"
              @click="goToBlog('Blog0')"
            />
            <div class="title-date-div">
              <h1
                class="blog-title-section"
                @click="goToBlog('Blog0')"
              >Kënga Magjike, këtë vit 6 anëtarë jurie</h1>

              <h3 class="home-mobile-date">05.09.2019</h3>
            </div>
          </slide>
          <slide>
            <img
              src="@/assets/img/blog/Blog-1.jpg"
              alt
              class="img-fluid"
              style="height:100%;width:100%;object-fit:cover;"
              @click="goToBlog('Blog1')"
            />
            <div class="title-date-div">
              <h1
                class="blog-title-section"
                @click="goToBlog('Blog1')"
              >Ja kush jane 3 artistët e parë BIG!</h1>

              <h3 class="home-mobile-date">14.09.2019</h3>
            </div>
          </slide>
          <slide>
            <img
              src="@/assets/img/blog/Blog-01-gray.jpg"
              alt
              class="img-fluid"
              style="height:100%;width:100%;object-fit:cover;"
              @click="goToBlog('Blog01')"
            />
            <div class="title-date-div">
              <h1
                class="blog-title-section"
                @click="goToBlog('Blog01')"
              >Kënga Magjike 2019 - Më shumë se 10 këngëtarë të huaj</h1>

              <h3 class="home-mobile-date">15.09.2019</h3>
            </div>
          </slide>
        </carousel>
      </div>
    </div>

    <!-- <a @click.prevent="nextSlide">
      <div class="carousel-right" >
        <img class="img-fluid img-next-arrow" src="@/assets/img/button next_posts.svg" alt />
      </div>
    </a>
    <a @click.prevent="prevSlide">
      <div class="carousel-left">
        <img class="img-fluid img-left-arrow" src="@/assets/img/button previous_posts.svg" alt />
      </div>
    </a>-->
    <!-- 

    <div class="row  justify-content-center h-80" style="width:100%;">
      <carousel
        ref="carouselNewsMobile"
        :perPage="1"
        :paginationEnabled="false"
        :navigationEnabled="false"
      >
        <slide>
          <div class=" slide-column">
            <img src="@/assets/img/blog/Blog-0-gray.jpg" class="img-blog img-fluid" alt="">
            <h1 class="blog-title" @click="goToBlog('Blog0')">Kënga Magjike, këtë vit 6 anëtarë jurie</h1>

            <h3 class="date">05.09.2019</h3>
          </div>
        </slide>
        <slide>
          <div class=" slide-column" >
            <img src="@/assets/img/blog/Blog-1.jpg" class="img-blog img-fluid" alt="">
            <h1 class="blog-title" @click="goToBlog('Blog1')">Ja kush jane 3 artistët e parë BIG! </h1>

            <h3 class="date">14.09.2019</h3>
          </div>
        </slide>
        <slide>
          <div class=" slide-column" >
            <img src="@/assets/img/blog/Blog-01-gray.jpg" class="img-blog img-fluid" alt="">
            <h1 class="blog-title" @click="goToBlog('Blog01')">Kënga Magjike 2019 - Më shumë se 10 këngëtarë të huaj</h1>

            <h3 class="date">15.09.2019</h3>
          </div>
        </slide>
      </carousel>
    </div>

    -->
    <div class="row ml-0" style="">
      <div class="text-center ml-auto mr-auto">
        <a @click="goToBlogs()" class="btn more-btn" style="color:white;">Më shumë lajme</a>
      </div>
    </div>
  </div>
</template>

<script>
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
      ]
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
    goToBlog(blogname) {
      this.$router.push({ name: blogname });
    },
    prevSlide() {
      this.$refs.carouselNewsMobile.goToPage(
        this.$refs.carouselNewsMobile.getPreviousPage()
      );
    }
  },
  mounted() {
    setTimeout(() => {
      this.$forceUpdate();
    }, 800);
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

.title-date-div {
  position: absolute;
  top: 20%;
}

.home-mobile-date {
  color: #47b8b0;
  // position: absolute;
  // top: 40%;
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

.blog-title-section {
  color: white;
  z-index: 30;
  // position: absolute;
  font-family: Vollkorn;
  // top: 38%;
  width: 84%;
  text-align: left;
  font-size: 4.5rem;
  // padding-top: 38%;
  padding-left: 10%;
  font-size: 4.5rem;
  line-height: 1;
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
  color: white;
  border: 2px solid white;
  border-radius: 10rem;
  font-family: Ubuntu;
  font-weight: 700;
  font-size: 3rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
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
