<template>
  <div class="mobile-news">
    <div class="row h-20 align-items-center">
      <h1 class="title">artistet</h1>
    </div>
    <div class="row h-50 justify-content-center mt-6">
      <div class="col-5" v-for="(artist, index) in artists" :key="artist.name">
        <div class="artist-card" :class="{'mt-1': index > 1}">
          <!-- <div class="artist-card"> -->
          <div class="img-container">
            <img :src="artist.img" alt />
          </div>
          <p class="artist-card__name go-up--small">{{artist.name}}</p>
          <p class="artist-card__song">{{artist.songtilte}}</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="w-100 text-center btn-container">
        <a href="#" @click="goToRoute('Artists')" class="btn">lexo me shumë</a>
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
          name: "Klajdi Haruni",
          songtilte: "Lose Yourself to Dance",
          img: "https://www.teksteshqip.com/img_upz/allart_full/4838.jpg"
        },
        {
          name: "Klajdi Haruni",
          songtilte: "Lose Yourself to Dance",
          img: "https://www.teksteshqip.com/img_upz/allart_full/4838.jpg"
        },
        {
          name: "Klajdi Haruni",
          songtilte: "Lose Yourself to Dance",
          img: "https://www.teksteshqip.com/img_upz/allart_full/4838.jpg"
        },
        {
          name: "Klajdi Haruni",
          songtilte: "Lose Yourself to Dance",
          img: "https://www.teksteshqip.com/img_upz/allart_full/4838.jpg"
        }
      ]
    };
  },
  methods: {
    goToRoute(name) {
      this.$router.push({ name: name });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/sass/abstracts/_mixins.scss";
.up {
  // margin-top: -20px !important;
}

.title {
  text-align: center;
  font-family: Vollkorn;
  // color: black;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 2px black;
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
  width: 100%;
  z-index: 4;
  margin-top: -9rem;
  img {
    height: 100%;
    width: 100%;
    // z-index: 5;
  }
  &__name {
    color: white;
    font-size: 2rem;
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
}
</style>
