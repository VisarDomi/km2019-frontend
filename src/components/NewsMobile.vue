<template>
  <div class="mobile-news">
    <div class="row h-20 align-items-center">
      <h1 class="title">&nbsp;të reja</h1>
    </div>

    <a @click.prevent="nextSlide">
      <div class="carousel-right">
        <img class="img-fluid img-next-arrow" src="@/assets/img/button next_posts.svg" alt />
      </div>
    </a>
    <a @click.prevent="prevSlide">
      <div class="carousel-left">
        <img class="img-fluid img-left-arrow" src="@/assets/img/button previous_posts.svg" alt />
      </div>
    </a>

    <div class="row h-60 justify-content-center mt-6">
      <carousel
        ref="carouselNewsMobile"
        :perPage="1"
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
      </carousel>
    </div>

    <div class="row">
      <div class="w-108 text-center btn-container">
        <a @click="goToBlogs()" class="btn more-btn" style="color:#c360b5;">Me shumë lajme</a>
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

.more-btn:hover{cursor:pointer;}


.img-blog{
  height:100%;
  object-fit: cover;
  position:absolute;
  z-index:-10;
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
  z-index: 99;
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
  background-color: #0e1032;
}

.blog-date-section {
  color: #c360b5;
  // position: absolute;
  // top: 38rem;
  z-index: 30;
  font-family: Panton;
  background: white;
  font-weight: 700;
  font-size: 2.3rem;
  padding: 11px 11px 11px 11px;
  // left: 4rem;
  margin-left: 30%;
  width: 28%;
}

.blog-title-section {
  padding-top: 38%;
  padding-left: 20%;
  color: white;
  z-index: 30;
  // position: relative;
  font-family: Vollkorn;
  // top: 23rem;
  width: 100%;
  text-align: left;
  // left: 4rem;
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
  font-size: 15rem;
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
  color: #c360b5;
  border: 2px solid #c360b5;
  border-radius: 10rem;
  font-family: Ubuntu;
  font-weight: 700;
  font-size: 3rem;
  margin-top: 8rem;
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
