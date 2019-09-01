<template>
  <div class="section-news">
    <HeaderHero
      menutype="menu__items--white"
      iconWhite="true"
      logoWhite="true"
      v-if="windowWidth > 950"
    />
    <div class="row h-25">
      <div class="header-container">
        <h1>te reja</h1>
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
          <div class="blog__image blog__image--1">
            <div class="blog__footer">
              <p class="blog__footer--date">12.12.2011</p>
              <p class="blog__footer--title">Flori Mumajesi fitues i Kenga Magjike 2018!</p>
              <div class="blog__footer--other mb-4">
                <img src="@/assets/img/Group 180.svg" alt />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="blog__image blog__image--2">
            <div class="blog__footer">
              <p class="blog__footer--date">12.12.2011</p>
              <p class="blog__footer--title">Flori Mumajesi fitues i Kenga Magjike 2018!</p>
              <div class="blog__footer--other mb-4">
                <img src="@/assets/img/Group 180.svg" alt />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="blog__image blog__image--3">
            <div class="blog__footer">
              <p class="blog__footer--date">12.12.2011</p>
              <p class="blog__footer--title">Flori Mumajesi fitues i Kenga Magjike 2018!</p>
              <div class="blog__footer--other mb-4">
                <img src="@/assets/img/Group 180.svg" alt />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="blog__image blog__image--4">
            <div class="blog__footer">
              <p class="blog__footer--date">12.12.2011</p>
              <p class="blog__footer--title">Flori Mumajesi fitues i Kenga Magjike 2018!</p>
              <div class="blog__footer--other mb-4">
                <img src="@/assets/img/Group 180.svg" alt />
              </div>
            </div>
          </div>
          <div class="more text-center w-100 mt-5">
            <a href="#" class="btn">lexo me shume</a>
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
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
        url("../assets/img/blog 1.svg");

      background-repeat: no-repeat;
      background-size: cover;
      &:hover {
        background: linear-gradient(rgba(#c4aac0, 0.7), rgba(#c76cba, 0.7)),
          url("../assets/img/blog 1.svg");
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
    &--2 {
      background: linear-gradient(rgba(#060e26, 0.7), rgba(#060e26, 0.7)),
        url("../assets/img/blog 2.svg");

      background-repeat: no-repeat;
      background-size: cover;
      &:hover {
        background: linear-gradient(rgba(#c76cba, 0.7), rgba(#c76cba, 0.7)),
          url("../assets/img/blog 2.svg");
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
    &--3 {
      background: linear-gradient(rgba(#060e26, 0.7), rgba(#060e26, 0.7)),
        url("../assets/img/blog 3.svg");

      background-repeat: no-repeat;
      background-size: cover;
      &:hover {
        background: linear-gradient(rgba(#c76cba, 0.7), rgba(#c76cba, 0.7)),
          url("../assets/img/blog 3.svg");
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
    &--4 {
      background: linear-gradient(rgba(#060e26, 0.7), rgba(#060e26, 0.7)),
        url("../assets/img/blog 4.svg");

      background-repeat: no-repeat;
      background-size: cover;
      &:hover {
        background: linear-gradient(rgba(#c76cba, 0.7), rgba(#c76cba, 0.7)),
          url("../assets/img/blog 4.svg");
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
      font-weight: 700;
      font-size: 1.5rem;
      padding-top: 5px;
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
  z-index: 5;
  h1 {
    font-size: 20rem;
    font-family: Vollkorn;
    font-weight: 700;
  }
}
</style>
