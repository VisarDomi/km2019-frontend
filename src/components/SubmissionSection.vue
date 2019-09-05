<template>
  <div class="section-submission">
    <HeaderHero
      menutype="menu__items--white"
      iconWhite="true"
      logoWhite="true"
      v-if="windowWidth > 750"
    />
    <div class="row go-up--small">
      <div class="col-lg-5 offset-lg-1">
        <p class="description">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
          sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          Ut wisi enim ad minim veniam, quis nostrud exerci tation
        </p>
      </div>
    </div>
    <div class="row h-100">
      <div class="col-lg-6">
        <div class="graphic-left">
          <img src="@/assets/img/Path 2580.svg" alt />
        </div>
        <div class="image-container mt-2">
          <img src="@/assets/img/Group 115.svg" alt />
        </div>
        <div class="image-footer">
          <div class="image--name mt-3">Emer Mbiemer</div>
          <div class="image--instagram">@insta_account</div>
          <div class="carousel-right">
            <img src="@/assets/img/magjike_right.svg" alt />
          </div>
          <div class="carousel-left">
            <img src="@/assets/img/magjike_left.svg" alt />
          </div>
        </div>
      </div>
      <div class="col-lg-6 go-up">
        <div class="graphic-right">
          <img src="@/assets/img/Path 2580.svg" alt />
        </div>
        <div class="main-header">
          <h1>#magjike</h1>
        </div>
        <div class="composition h-50">
          <div class="row h-50">
            <div class="col-lg-4">
              <div class="composition-image--1">
                <img src="@/assets/img/Composition 1.svg" class="img-fluid" alt />
              </div>
            </div>
            <div class="col-lg-4 high-index">
              <div class="composition-image--2">
                <img src="@/assets/img/Composition 2.svg" class="img-fluid" alt />
              </div>
            </div>
            <div class="col-lg-4">
              <div class="composition-image--3">
                <img src="@/assets/img/Composition 3.svg" class="img-fluid" alt />
              </div>
            </div>
          </div>

          <div class="row h-50 mt-6">
            <div class="col-lg-4 high-index">
              <div class="composition-image--4">
                <img src="@/assets/img/Composition 4.svg" class="img-fluid" alt />
              </div>
            </div>
            <div class="col-lg-4">
              <div class="composition-image--5">
                <img src="@/assets/img/Composition 5.svg" class="img-fluid" alt />
              </div>
            </div>
          </div>
        </div>
        <div class="abs-bottom w-100 text-center">
          <a href="#" class="btn">dorëzo artin tend</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderHero from "@/components/Headers/HeaderHero.vue";

export default {
  name: "SubmissionSection",

  components: {
    HeaderHero
  },
  data() {
    return {
      windowWidth: window.innerWidth
    };
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
.btn {
  padding: 0.5rem 12rem;
  border: 2px solid black;
  border-radius: 10rem;

  font-family: Ubuntu;
  font-weight: 700;
  font-size: 2.5rem;
}

.abs-bottom {
  position: absolute;
  bottom: 10%;
  right: 10%;
  height: 30%;
}

.high-index {
  z-index: 4;
}

.composition-image {
  &--2 {
    position: absolute;
    bottom: 0;
  }
  &--4 {
    text-align: right;
  }
  &--5 {
    text-align: right;
  }
}

.mt-6 {
  margin-top: 8rem;
}

.main-header {
  h1 {
    z-index: 2;
    position: absolute;

    left: -12%;
    top: 17%;

    font-family: Vollkorn;
    font-size: 18rem;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 2px black;

    @include respond(small-screen) {
      font-size: 15rem;
      top: 20%;
    }
  }
}

.graphic-right {
  position: absolute;
  transform: scale(1.5);
  top: -10%;
  right: -17%;
}
.graphic-left {
  position: absolute;
  top: -8%;
  right: 33%;
  img {
    transform: scale(0.85);
  }
}

.image {
  &--name {
    color: white;
    border: 1px solid white;
    background-color: black;
    font-family: Ubuntu;
    display: inline-block;
    font-size: 2.4rem;
    font-weight: 700;
    padding: 0 1rem;

    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
  }
  &--instagram {
    font-family: Ubuntu;
    border: 2px solid black;
    background-color: white;
    padding: 0 1rem;
    font-size: 2rem;
    font-weight: 700;

    position: absolute;
    left: 50%;
    margin-top: 5rem;
    transform: translate(-50%, 0);
  }
}

.carousel-right {
  position: absolute;
  right: 25%;
  @include respond(small-screen) {
    right: 20%;
  }
  margin-top: 2rem;
  // bottom: 40%;
}
.carousel-left {
  position: absolute;
  left: 25%;
  @include respond(small-screen) {
    left: 20%;
  }
  margin-top: 2rem;
  // bottom: 40%;
}
.image-container {
  height: 53%;
  img {
    height: 100%;
    width: 100%;
  }
}

.go-up {
  margin-top: -7rem;
  &--small {
    margin-top: -2rem;
  }
}
.description {
  font-size: 2rem;
  font-family: Ubuntu;
  line-height: 2rem;
  font-weight: 700;
}

.section-submission {
  background-color: lightseagreen;
}
</style>
