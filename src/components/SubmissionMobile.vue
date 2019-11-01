<template>
  <div class="section-submissions">
    <div class="carousel-container">
      <carousel ref="carousel2" :perPageCustom="[[0,1]]" :paginationEnabled="false">
        <slide>
          <div class="row h-45">
            <div class="slider-img-container h-100 w-100">
              <img src="@/assets/img/submissions-hero.png" class="h-100 w-100" alt />
            </div>
          </div>

          <div class="row h-8 go-up">
            <div class="name mt-3">Emer Mbiemer</div>
            <div class="instagram">@insta_account</div>
          </div>
          <div class="row h-10">
            <p class="magjike">#magjike</p>
          </div>
          <div class="row h-10 mt-3">
            <p class="description">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
              exerci tation.
            </p>
          </div>
          <div class="row h-10">
            <div class="w-100 text-center">
              <a href="#" class="btn">dorëzo artin tend</a>
            </div>
          </div>
        </slide>

        <slide>
          <div class="row h-45">
            <div class="slider-img-container h-100 w-100">
              <img src="@/assets/img/Group 116.png" class="h-100 w-100" alt />
            </div>
          </div>

          <div class="row h-8 go-up">
            <div class="name mt-3">Emer Mbiemer</div>
            <div class="instagram">@insta_account</div>
          </div>
          <div class="row h-10">
            <p class="magjike">#magjike</p>
          </div>
          <div class="row h-10 mt-3">
            <p class="description">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
              exerci tation.
            </p>
          </div>
          <div class="row h-10">
            <div class="w-100 text-center">
              <a href="#" class="btn">dorëzo artin tend</a>
            </div>
          </div>
        </slide>
      </carousel>

      <div class="row h-10 navigation-container">
        <div class="col-6 h-100">
          <div class="carousel-left text-center" @click.prevent="prevSlide">
            <img class src="@/assets/img/artistet_arrow_l.svg" alt />
          </div>
        </div>

        <div class="col-6 h-100">
          <div class="carousel-right text-center" @click.prevent="nextSlide">
            <img class src="@/assets/img/artistet_arrow_r.svg" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderHero from "@/components/Headers/HeaderHero.vue";
export default {
  name: "SubmissionSection",
  methods: {
    nextSlide() {
      this.$refs.carousel2.goToPage(this.$refs.carousel2.getNextPage());
    },
    prevSlide() {
      this.$refs.carousel2.goToPage(this.$refs.carousel2.getPreviousPage());
    }
  },
  components: {
    HeaderHero
  },
  data() {
    return {
      windowWidth: window.innerWidth
    };
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
    setTimeout(() => {
      this.$forceUpdate();
    }, 500);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.carousel-container {
  height: 100%;
}

.btn {
  padding: 0.5rem 3rem;
  border: 2px solid black;
  border-radius: 10rem;
  font-family: Ubuntu;
  font-weight: 700;
  font-size: 2rem;
  margin-top: 12rem;
}

.name {
  color: white;
  border: 1px solid white;
  background-color: black;
  font-family: Ubuntu;
  display: inline-block;
  font-size: 2.4rem;
  font-weight: 700;
  padding: 0 1rem;

  position: absolute;
  left: 20%;
}
.instagram {
  font-family: Ubuntu;
  border: 2px solid black;
  background-color: white;
  padding: 0 1rem;
  font-size: 2rem;
  font-weight: 700;

  position: absolute;
  left: 20%;
  margin-top: 5rem;
}

.h-5 {
  height: 5%;
}
.h-8 {
  height: 8%;
}
.h-10 {
  height: 10%;
}
.h-30 {
  height: 30%;
}
.h-45 {
  height: 45%;
}

.navigation-container {
  width: 100%;

  position: absolute;
  bottom: 0;
  right: 0;
  height: 8%;
}

.carousel-left {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(2);
}
.carousel-right {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(2);
}

.go-up {
  margin-top: -4rem;
}

.magjike {
  font-size: 7rem;
  margin-left: 18%;
  padding: 0 1rem;

  font-family: Vollkorn;

  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1.5px black;
}

.description {
  color: black;
  font-size: 2rem;
  margin-left: 5rem;
  width: 85%;
  font-family: Ubuntu;
  // font-weight: 400;
}

.section-submissions {
  background-color: #47b8b0;
}
.header-text {
  z-index: 20;
  position: relative;
  color: black;
  // margin-top: -10%;
  margin-left: 5rem;
  font-size: 8rem;
  font-family: Vollkorn;
}
</style>
