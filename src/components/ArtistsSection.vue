<template>
  <div class="section-artists" id="section-artists">
    <!-- <HeaderHero
      menutype="menu__items--black"
      logoBlack="true"
    />-->
    <div class="container-fluid mods">
      <div class="row go-up--small">
        <div class="col-lg-12 text-center">
          <h1 class="header-text" v-if="lang == 'en'" data-aos="fade-up">artists</h1>
          <h1 class="header-text" v-else data-aos="fade-up">artistët</h1>
        </div>
      </div>
      <div class="row px-6 respond-height" v-if="nrArtists(5) || nrArtists(6)">
        <div
          class="col-lg-2 col-sm-2 pos-relative"
          :class="{'ml-6': !nrArtists(6)}"
          v-for="(artist, index) in this.artists"
          :key="artist.name"
          @click="goToArtist(artist)"
          data-aos="fade-up"
        >
          <div class="artist-card abs-bottom" :class="{'abs-bottom--up': index % 2 === 0}">
            <div>
              <img :src="artist.img" alt />
            </div>
            <p class="artist-card__name go-up--small">{{artist.name}}</p>
            <br />
            <p class="artist-card__song" v-if="lang == 'en'">{{artist.songEng}}</p>
            <p class="artist-card__song" v-else>{{artist.song}}</p>
          </div>
        </div>
      </div>
      <div class="row mt--2" :class="{'mt-4' : nrArtists(5) || nrArtists(6)}">
        <div
          class="col-lg-6 offset-lg-3 col-12 text-center"
          :class="{'mt-6' : nrArtists(5) || nrArtists(6)}"
        >
          <a
            href="#"
            class="btn"
            @click="goToArtists()"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            v-if="this.lang == 'en'"
          >more artists</a>
          <a
            href="#"
            class="btn"
            @click="goToArtists()"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            v-else
          >më shumë artistë</a>
        </div>
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
import axios from "axios";
import { getLanguage, saveLanguage } from "@/store/services/storage";

import { LIST_ARTIST } from "@/store/actions.type";
import { SET_ARTIST } from "@/store/mutations.type";
import { mapGetters } from "vuex";
export default {
  name: "ArtistsSection",
  methods: {
    goToArtists() {
      this.$router.push({ name: "Artists" });
    },
    nrArtists(n) {
      if (this.artists.length === n) {
        return true;
      }
      return false;
    },
    goToArtist(artist) {
      this.$router.push({
        name: "SingleArtist",
        params: { slug: artist.name, id: artist.id }
      });
    },
    myClass() {
      let nrColumns = this.artists2Row.length;
      if (nrColumns == 3) {
        return `col-lg-3`;
      }
      return `col-lg-3--spacer`;
    },
    async fetchArtists() {
      const TableName = "KM2019-Artist";
      const Limit = "100";
      const params = {
        TableName,
        Limit
      };
      await this.$store.dispatch(LIST_ARTIST, params);
      for (let artist of this.getArtists) {
        if (artist.isCurrentWeek == true) {
          this.artists.push(artist);
        }
      }
      this.artists.sort((a, b) => a.ordering - b.ordering);
      // console.log("ordering->>", this.artists)
    }
  },
  components: {
    HeaderHero
  },
  data() {
    return {
      artists: [],
      artists2Row: [],
      lang: "",
      windowWidth: window.innerWidth
    };
  },
  async mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        this.windowWidth = window.innerWidth;
      });
    });
    this.lang = getLanguage();
    await this.fetchArtists();
  },
  computed: {
    ...mapGetters(["getArtists"])
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/abstracts/_mixins.scss";
.mx--2 {
  margin-right: -2%;
  margin-left: -2%;
}

.mods {
  height: 80%;
  margin-top: 5%;
}

.mt--2 {
  margin-top: -0.5%;
}

.col-lg-3--spacer {
  -webkit-box-flex: 0;
  flex: 0 0 27%;
  max-width: 27%;
}

.go-down {
  margin-top: 2%;
}

.inside-card {
  position: absolute;
  bottom: 31%;
  @include respond(small-screen) {
    bottom: 29%;
  }
  @include respond(tab-land) {
    bottom: 24%;
  }
  left: 0%;
}

.ml-25 {
  margin-left: 24%;
}
.ml-- {
  margin-right: -2%;
}

.pos-relative {
  position: relative;
}

.col-3-centered {
  margin-left: 13% !important;
}
.col-2-centered {
  margin-left: 23% !important;
}

.img-container {
  max-width: 100%;
  height: auto;
}

.ml-6 {
  margin-left: 3%;
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
}

.abs-bottom {
  position: absolute;
  bottom: 0;
  &--up {
    bottom: -20%;
  }
}

.high-index {
  position: relative;
  z-index: 4;
}

.artist-card {
  // width: 90%;
  width: 63%;
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
    @include respond(4k-desktop) {
      font-size: 3.5rem;
    }
  }
}

.h-35 {
  height: 35%;
}
.mt-6 {
  margin-top: 7rem;
}

.px-6 {
  margin-right: 4rem;
  margin-left: 4rem;
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
  @include respond(tab-port) {
    margin-top: 20rem;
  }
  &:hover {
    border: 0px;
    color: white;
    background-color: black;
  }
  &:focus {
    transform: translateY(4px);
  }
}

.go-up {
  margin-top: -7rem;
  &--small {
    margin-top: -3.4rem;
  }
  &--medium {
    margin-top: -5rem;
  }
  @include respond(4k-desktop) {
    margin-top: -25rem;
  }
  @include respond(small-screen) {
    margin-top: -4%;
  }
  @include respond(tab-port) {
    margin-top: 0rem;
  }
}

.section-artists {
  background-color: white;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.header-text {
  margin-top: 4rem;
  text-align: center;
  font-family: Vollkorn;
  // color: black;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 2px black;
  font-size: 17rem;
  @include respond(4k-desktop) {
    font-size: 30rem;
  }
  @include respond(small-screen) {
    margin-top: -10%;
    font-size: 22rem;
  }
  @include respond(tab-land) {
    font-size: 20rem;
  }
  @include respond(tab-port) {
    font-size: 15rem;
    margin-top: 8rem;
  }
}
</style>
