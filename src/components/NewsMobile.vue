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

      <slide v-for="artist in artists" :key="artist.name">
          <div
            class="h-100"
            :style="{'background-image': 'url(' + artist.img + ')'}"
          >
            <h1 class="blog-title-section">{{artist.songtilte}}</h1>
          <h3 class="blog-date-section">{{artist.name}}</h3>
          </div>
        </slide>

      </carousel>






    </div>



    <div class="row">
      <div class="w-108 text-center btn-container">
        <a href="#" class="btn">lexo me shumë</a>
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
        },
      ]
    };
  },
  methods: {
        nextSlide() {
      this.$refs.carouselNewsMobile.goToPage(this.$refs.carouselNewsMobile.getNextPage());
    },
    prevSlide() {
      this.$refs.carouselNewsMobile.goToPage(this.$refs.carouselNewsMobile.getPreviousPage());
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/sass/abstracts/_mixins.scss";


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




.mobile-news{
  background-color: #0e1032;
}

.blog-date-section{
    color: #c360b5;
    position: absolute;
    top: 38rem;
    z-index: 30;
    font-family: Montserrat;
    background: white;
    font-weight: 700;
    font-size: 2rem;
    padding: 11px 11px 0px 11px;
    left: 4rem;
}

.blog-title-section{
    color: white;
    z-index: 30;
    position: relative;
    font-family: Vollkorn;
    top: 23rem;
    width: 75%;
    text-align: left;
    left: 4rem;
    font-size: 4.5rem;
    line-height: 1;
}

.w-108{
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

.h-70{
  height:70%;
}

.h-60{
  height:62%;
}

.btn-container {
  position: absolute;
  bottom: 3%;
}

.btn {
  padding: 0.5rem 7rem;
  color:white;
  border: 2px solid white;
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
  &__image {
    &--1 {
      background: linear-gradient(rgba(#060e26, 0.7), rgba(#060e26, 0.7)),
        url("../assets/img/blog 1.svg");

      background-repeat: no-repeat;
      background-size: cover;
    }
    &--2 {
      background: linear-gradient(rgba(#060e26, 0.7), rgba(#060e26, 0.7)),
        url("../assets/img/blog 2.svg");

      background-repeat: no-repeat;
      background-size: cover;
    }

    width: 100%;
    height: 100%;
  }

  // &__footer {
  //   z-index: 20;
  //   position: absolute;
  //   bottom: 0%;
  //   left: 10%;
  //   font-family: Ubuntu;
  //   &--date {
  //     background-color: #c360b5;
  //     display: inline-block;
  //     color: white;
  //     font-weight: 700;
  //     font-size: 1.5rem;
  //     padding-top: 5px;
  //   }
  //   &--title {
  //     color: white;
  //     font-weight: bold;
  //     font-size: 2rem;
  //   }
  //   &--other {
  //     color: white;
  //   }
  // }
}
</style>
