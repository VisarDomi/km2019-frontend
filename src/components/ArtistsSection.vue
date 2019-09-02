<template>
  <div class="section-artists" id="section-artists">
    <HeaderHero menutype="menu__items--black" logoBlack="true" v-if="windowWidth > 950" />
    <div class="row">
      <div class="col-lg-12 text-center">
        <h1 class="header-text">artistët</h1>
      </div>
    </div>
    <div class="row px-6 respond-height go-up">
      <div
        class="col-lg-2 col-sm-4 col-7 mobile-offset-2"
        v-for="(artist, index) in artists"
        :key="artist.name"
      >
        <div class="artist-card abs-bottom" :class="{'abs-bottom--up': index % 2 === 0}">
          <div class="img-container">
            <img :src="artist.img" alt />
          </div>
          <p class="artist-card__name go-up--small">{{artist.name}}</p>
          <p class="artist-card__song">{{artist.songtilte}}</p>
        </div>
      </div>
    </div>

    <div class="row mt-6">
      <div class="col-lg-6 offset-lg-3 col-12 text-center">
        <a href="#" class="btn more-artist-button" @click="goToArtists()">më shumë artistë</a>
      </div>
    </div>
    <div class="graphic-left w-50" v-if="windowWidth > 950">
      <img src="@/assets/img/Group 171.svg" alt />
    </div>
    <div class="graphic-right w-50">
      <img src="@/assets/img/Group 331.svg" alt />
    </div>
  </div>
</template>

<script>
import HeaderHero from "@/components/Headers/HeaderHero.vue";
export default {
  name: "ArtistsSection",
  methods: {
    goToArtists() {
      this.$router.push({ name: "Artists" });
    }
  },
  components: {
    HeaderHero
  },
  data() {
    return {
      artists: [
        {
          name: "Klajdi Haruni",
          songtilte: "Loose yourself to dance",
          img: "https://www.teksteshqip.com/img_upz/allart_full/4838.jpg"
        },
        {
          name: "Klajdi Haruni",
          songtilte: "Loose yourself to dance",
          img: "https://www.teksteshqip.com/img_upz/allart_full/4838.jpg"
        },
        {
          name: "Klajdi Haruni",
          songtilte: "Loose yourself to dance",
          img: "https://www.teksteshqip.com/img_upz/allart_full/4838.jpg"
        },
        {
          name: "Klajdi Haruni",
          songtilte: "Loose yourself to dance",
          img: "https://www.teksteshqip.com/img_upz/allart_full/4838.jpg"
        },
        {
          name: "Klajdi Haruni",
          songtilte: "Loose yourself to dance",
          img: "https://www.teksteshqip.com/img_upz/allart_full/4838.jpg"
        },
        {
          name: "Klajdi Haruni",
          songtilte: "Loose yourself to dance",
          img: "https://www.teksteshqip.com/img_upz/allart_full/4838.jpg"
        }
      ],
      windowWidth: window.innerWidth
    };
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
    if (this.windowWidth < 950) {
      this.artists.pop();
      this.artists.pop();
      this.artists.pop();
      this.artists.pop();
      this.artists.pop();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/abstracts/_mixins.scss";
.mobile-offset-2 {
  @include respond(phone) {
    margin-left: 20%;
  }
}

.more-artist-button {
  @include respond(phone) {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, 0);
  }
}

.graphic-left {
  position: absolute;
  bottom: -21%;
  left: -25%;
  transform: scale(1.2);

  img {
    max-width: 100%;
    height: auto;
  }
}
.graphic-right {
  position: absolute;
  bottom: 0%;
  right: -25%;
  transform: scale(0.9);
  img {
    max-width: 100%;
    height: auto;
  }
}

.respond-height {
  height: 35%;
  @include respond(4k-desktop) {
    height: 50%;
  }
  @include respond(phone) {
    height: 75%;
  }
}

.abs-bottom {
  position: absolute;
  bottom: 0;
  &--up {
    bottom: -20%;
    @include respond(phone) {
      bottom: 30%;
    }
  }
  // @include respond(phone) {
  //   bottom: 10%;
  // }
}

.high-index {
  position: relative;
  z-index: 4;
}

.artist-card {
  width: 90%;
  z-index: 4;
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
    @include respond(tab-land) {
      font-size: 1.5rem;
    }
    @include respond(4k-desktop) {
      font-size: 4rem;
    }
  }
  &__song {
    border: 1px solid black;
    background-color: white;
    text-transform: uppercase;
    font-family: Ubuntu;

    display: inline-block;
    padding: 6px 1rem;
    font-size: 1.5rem;
    @include respond(tab-land) {
      font-size: 1.25rem;
    }
    // @include respond(phone) {
    //   font-size: 1.25rem;
    // }
    @include respond(4k-desktop) {
      font-size: 3.5rem;
    }
  }

  @include respond(phone) {
    padding-top: 2rem;
  }
}

.h-35 {
  height: 35%;
}
.mt-6 {
  margin-top: 8rem;
  @include respond(phone) {
    margin-top: 0rem;
  }
}

.px-6 {
  margin-right: 4rem;
  margin-left: 4rem;

  @include respond(phone) {
    margin-right: 0;
    margin-left: 0;
  }
}

.btn {
  padding: 1rem 12rem;
  border: 2px solid black;
  border-radius: 10rem;

  font-family: Ubuntu;
  font-weight: 700;
  font-size: 2.5rem;
  @include respond(4k-desktop) {
    font-size: 5rem;
    margin-top: 20rem;
  }
  @include respond(phone) {
    padding: 1rem 0rem;
  }
}

.go-up {
  margin-top: -7rem;
  &--small {
    margin-top: -4rem;
  }
  @include respond(4k-desktop) {
    margin-top: -25rem;
  }
  @include respond(phone) {
    margin-top: -7rem;
  }
}

.section-artists {
  background-color: white;
}

.header-text {
  margin-top: -9rem;
  text-align: center;
  font-family: Vollkorn;
  // color: black;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 2px black;
  font-size: 25rem;
  @include respond(4k-desktop) {
    font-size: 30rem;
  }

  @include respond(tab-land) {
    font-size: 20rem;
  }
  @include respond(phone) {
    font-size: 10rem;
  }
}
</style>
