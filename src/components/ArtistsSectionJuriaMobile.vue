<template>
  <div class="mobile-artists pb-5 pt-5" id="juria-mobile">
    <div class="row h-15 align-items-center ml-0" style="width:100%;">
      <h1 class="title" v-if="this.lang == 'en'">jury</h1>
      <h1 class="title" v-else>juria</h1>
    </div>

    <!-- <div class="row h-50 justify-content-center mt-6"> -->
    <div class="row ml-0" style="width:100%;">
      <!-- <carousel
        ref="carouselArtistsMobile"
        :perPage="1"
        :paginationEnabled="false"
        :navigationEnabled="false"
      >


        <slide>
        </slide>
      </carousel>-->

      <div class="row ml-0" style="margin-bottom:50px; margin:10px; margin-top:20px;width:100%;">
        <div class="col-6">
          <div class="artist-card" @click="goToRoute('JuriaArmend')">
            <div class="img-container">
              <img src="@/assets/juria/j1_normal.png" alt />
            </div>
            <p class="artist-card__name inside-card">ARMEND REXHEPAGIQI</p>
          </div>
        </div>
        <div class="col-6">
          <div class="artist-card" @click="goToRoute('JuriaJonida')">
            <div class="img-container">
              <img src="@/assets/juria/j2_normal.png" alt />
            </div>
            <p class="artist-card__name inside-card">JONIDA MALIQI</p>
          </div>
        </div>
      </div>

      <div class="row ml-0" style="margin-bottom:50px; margin:10px;width:100%;">
        <div class="col-6">
          <div class="artist-card" @click="goToRoute('JuriaArben')">
            <div class="img-container">
              <img src="@/assets/juria/j3_normal.png" alt />
            </div>
            <p class="artist-card__name inside-card">ARBEN SKËNDERI</p>
          </div>
        </div>
        <div class="col-6" style="margin-top:10px;">
          <div class="artist-card" @click="goToRoute('JuriaEnkel')">
            <div class="img-container">
              <img src="@/assets/juria/j4_normal.png" alt />
            </div>
            <p class="artist-card__name inside-card">ENKEL DEMI</p>
          </div>
        </div>
      </div>

      <div class="row mb-5 ml-0" style=" margin:10px;width:100%;">
        <div class="col-6">
          <div class="artist-card" @click="goToRoute('JuriaDj')">
            <div class="img-container">
              <img src="@/assets/juria/j5_normal.png" alt />
            </div>
            <p class="artist-card__name inside-card">DJ MISS ROSE & DJ STONE</p>
          </div>
        </div>
      </div>
      <div class="row" style="margin-bottom: 30px;"></div>
    </div>
  </div>
</template>

<script>
import { getLanguage, saveLanguage } from "@/store/services/storage";

import { eventBus } from "@/main";
import { API_URL } from "@/store/services/api";
export default {
  name: "NewsMobile",
  data() {
    return {
      artists: [
        {
          name: "name",
          songtitle: "songtitle songtitle songtitle",
          img: "https://www.teksteshqip.com/img_upz/allart_full/4838.jpg"
        },
        {
          name: "name",
          songtitle: "songtitle songtitle songtitle",
          img: "https://www.teksteshqip.com/img_upz/allart_full/4838.jpg"
        }
      ],
      artists1: [],
      artists2: [],
      artists3: [],
      artists4: [],
      lang: ""
    };
  },
  methods: {
    goToRoute(name) {
      this.$router.push({ name: name });
    },
    hasCol4() {
      return this.artists4.length > 0;
    },
    nextSlide() {
      this.$refs.carouselArtistsMobile.goToPage(
        this.$refs.carouselArtistsMobile.getNextPage()
      );
    },
    prevSlide() {
      this.$refs.carouselArtistsMobile.goToPage(
        this.$refs.carouselArtistsMobile.getPreviousPage()
      );
    },
    async getArtists() {
      const axios = require("axios");
      axios.defaults.headers.common = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      };
      let artists = axios
        .get(API_URL, {
          params: {
            TableName: "KM2019-Artist",
            Limit: "100"
          }
        })
        .then(res => {
          let resItems = res.data["Items"];
          this.artists1 = [...resItems.splice(0, 2)];
          this.artists2 = [...resItems.splice(0, 2)];
          this.artists3 = [...resItems.splice(0, 2)];
          if (resItems.length > 0) {
            this.artists4 = [...resItems.splice(0, 2)];
          }
        });
    }
  },
  mounted() {
    this.getArtists();
    setTimeout(() => {
      this.$forceUpdate();
    }, 500);
    eventBus.$on("changeLanguage", payload => {
      this.lang = payload;
    });
    this.lang = getLanguage();
  }
};
</script>


<style>
.row {
  width: 100%;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/sass/abstracts/_mixins.scss";

.mobile-artists {
  position: relative;
  background: #0e1032;
}

.col-left {
  padding-right: 0;
  padding-left: 39px;
}

.col-right {
  padding-right: 19px;
  padding-left: 20px;
}

.graphic-right {
  width: 2px;
  height: 70%;
  background-color: black;
  position: absolute;
  bottom: 15%;
  right: 0%;
  box-shadow: -3px 0 3px 0 black;
}
.pt-10 {
  padding-top: 10%;
}
.inside-card {
  position: absolute;
  bottom: -16%;
}

.go-up {
  margin-top: -5%;
  &--small {
    margin-top: -2%;
  }
}

.card-2 {
  max-width: 75%;
}
.mt-30 {
  margin-top: 35%;
  margin-left: 17%;
}

.slide {
  flex-basis: initial !important;
  flex-shrink: 1 !important;
}

.img-next-arrow {
  width: 7rem;
}

.carousel-right {
  position: absolute;
  bottom: 10%;
  right: 3rem;
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
  bottom: 10%;
  left: 3rem;
  padding-top: 15px;
}

.carousel-left:hover {
  cursor: pointer;
}

.title {
  text-align: center;
  font-family: Vollkorn;
  // color: black;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 2px white;
  font-size: 10rem;
  margin-top: 2rem;
}

.btn-container {
  position: absolute;
  bottom: 3%;
}

.btn {
  padding: 0.5rem 7rem;
  border: 2px solid black;
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
  position: relative;
  width: 100%;
  z-index: 4;
  margin-top: 1rem;
  img {
    height: 100%;
    width: 100%;
    // z-index: 5;
  }
  &__name {
    color: white;
    font-size: 2rem;
    padding: 4px 1rem;
    background-color: #0e1032;
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
    font-size: 1.5rem;
    line-height: 2rem;
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
.h-15 {
  height: 15%;
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
}
</style>
