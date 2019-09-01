<template>
  <div class="blog-page">
    <div class="row justify-content-between artist-row align-items-center">
      <div class="col-lg-3 col-sm-2 col-xs-1 text-center">
        <img class="img-logo" src="@/assets/img/logowhite.svg" @click="goToHome()" alt />
      </div>
      <div class="col-lg-1 col-sm-2 col-xs-1 vertical-center back-hover" @click="goToBlogs()">
        <img src="@/assets/img/artistet_arrow_left.svg" alt class="back-icon center-block" />
      </div>
    </div>

    <div class="row blog-row">
      <div class="col-md-5  col-xs-12 image-col">
        <img class="blog-image" src="@/assets/img/single_blog_1.jpg" alt />
      </div>
      <div class="col-md-7 col-xs-12 blog-col">
        <div class="container">
          <h1 class="blog-title">Flori Mumajesi fitues i Kënga Magjike 2018!</h1>
          <hr />
          <p
            class="blog-content"
          >Flori Mumajesi me këngën “Plas” ka triumfuar në edicionin e 20-të të festivalit “Kënga Magjike”. Vendi i dytë shkoi për Aurela Gacen dhe Eli Farën, i treti për duetin e Fifit me McKreshën. Nata finale dhuroi muzikë dhe një sërë çmimesh që vlerësonin projektet e artistëve. Përveç fitores, kënga e Flori Mumajesit u vlerësua edhe si “Balada më e mirë” e këtij festivali.</p>

          <div class="row">
            <p class="date">22.10.2019</p>
            <a @click.prevent="nextSlide">
              <div class="carousel-right">
                <img class="img-fluid img-next-arrow" src="@/assets/img/ndervite_right.svg" alt />
              </div>
            </a>
            <a @click.prevent="prevSlide">              
              <div class="carousel-left">
                <img class="img-fluid img-left-arrow" src="@/assets/img/ndervite_left.svg" alt />
              </div></a>
          </div>

          <h3 class="bio-text">te ngjashme</h3>

          <carousel
            ref="carousel"
            :perPageCustom="[[480, 1], [768, 1], [992,2]]"
            :paginationEnabled="false"
          >
            <slide>
              <div class="blog-card">
                <img class="blog-card-image img-fluid" src="@/assets/img/artistback.jpg" alt />
                <h2 class="blog-card-title">Fifi dhe Mc Kresha betejë në skenë!</h2>
              </div>
            </slide>
            <slide>
              <div class="blog-card">
                <img class="blog-card-image img-fluid" src="@/assets/img/sonimalaj.png" alt />
                <h2 class="blog-card-title">Fifi dhe Mc Kresha betejë në skenë!</h2>
              </div>
            </slide>

            <slide>
              <div class="blog-card">
                <img class="blog-card-image img-fluid" src="@/assets/img/sonimalaj.png" alt />
                <h2 class="blog-card-title">Fifi dhe Mc Kresha betejë në skenë!</h2>
              </div>
            </slide>
          </carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import { Carousel, Slide } from "vue-carousel";
export default {
  name: "SingleBlog",
  components: {
    Carousel,
    Slide
  },
  data() {
    return {};
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
    }
  }
};
</script>




<style lang="scss" scoped>

.img-logo:hover{
  cursor:pointer;
}

.img-next-arrow {
  width: 6rem;
}

.carousel-right {
  position: absolute;
  right: 8rem;
      padding-top: 19px;
}
.carousel-right:hover {
  cursor: pointer;
}

.img-left-arrow {
  width: 6rem;
}

.carousel-left {
  position: absolute;
  right: 15rem;
  padding-top:15px;
}

.carousel-left:hover {
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
}

.bio-text:after {
  left: 0.5em;
  margin-right: -50%;
}

.date {
  position: initial;
  width: fit-content;
  margin-top: 3rem;
}

.blog-content {
  font-size: 1.7rem;
  font-family: Ubuntu;
  color: white;
  font-weight: 400;
}

.blog-title {
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
  height: 100%;
  height: calc(100vh);
  position: fixed;
}

.blog-row {
  height: 100%;
}
.image-col {
  background: salmon;
  padding: 0;
  margin: 0;
}
.blog-col {
  background: #c360b5;
  font-size: 3rem;
  padding-left: 5rem;
  padding-right: 5rem;
}
.blog-page {
  height: 100vh;
  background: #c360b5;
  background-size: cover;
  background-attachment: fixed;
}

.vertical-center {
  min-height: 100%; /* Fallback for browsers do NOT support vh unit */
  display: flex;
  align-items: center;
}

.back-hover:hover {
  background: #d17ac4;
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
  background: #ce73c1;
  position: fixed;
  top: 0;
  z-index: 9999;
  width: 100%;
}
</style>
