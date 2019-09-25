<template>
  <div class="mobile-artists pb-5 pt-5" id="artists-mobile">
    <div class="row h-15 align-items-center ml-0" style="width:100%;">
      <h1 class="title" v-if="this.lang == 'en'">artists</h1>
      <h1 class="title" v-else>artistët</h1>
    </div>
    <div class="row ml-0" style="width:100%;">
      <div class="row ml-0" style="margin: 34px 10px 34px;width: 100%;">
        <div class="col-6" v-for="artist in artists1" :key="artist.id">
          <div class="artist-card" @click="goToArtist(artist)">
            <div class="img-container">
              <img :src="artist.img" alt />
            </div>
            <p class="artist-card__name inside-card">{{artist.name}}</p>
            <br />
            <p class="artist-card__song inside-card--down" v-if="lang == 'en'">{{artist.songEng}}</p>
            <p class="artist-card__song inside-card--down" v-else>{{artist.song}}</p>
          </div>
        </div>
      </div>
      <div class="row ml-0" style="margin: 34px 10px; width: 100%;">
        <div class="col-6" v-for="artist in artists2" :key="artist.id">
          <div class="artist-card" @click="goToArtist(artist)">
            <div class="img-container">
              <img :src="artist.img" alt />
            </div>
            <p class="artist-card__name inside-card">{{artist.name}}</p>
            <br />
            <p class="artist-card__song inside-card--down" v-if="lang == 'en'">{{artist.songEng}}</p>
            <p class="artist-card__song inside-card--down" v-else>{{artist.song}}</p>
          </div>
        </div>
      </div>
      <div class="row ml-0" style="margin: 34px 10px; width: 100%;">
        <div class="col-6" v-for="artist in artists3" :key="artist.id">
          <div class="artist-card" @click="goToArtist(artist)">
            <div class="img-container">
              <img :src="artist.img" alt />
            </div>
            <p class="artist-card__name inside-card">{{artist.name}}</p>
            <br />
            <p class="artist-card__song inside-card--down" v-if="lang == 'en'">{{artist.songEng}}</p>
            <p class="artist-card__song inside-card--down" v-else>{{artist.song}}</p>
          </div>
        </div>
      </div>
      <div class="row h-10rem">
        <div class="w-100 text-center btn-container">
          <a
            href="#"
            @click="goToRoute('Artists')"
            class="btn"
            style="margin-left:8%;"
            v-if="this.lang == 'en'"
          >more artists</a>
          <a
            href="#"
            @click="goToRoute('Artists')"
            class="btn"
            style="margin-left:8%;"
            v-else
          >më shumë artistë</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LIST_ARTIST } from "@/store/actions.type";
import { SET_ARTIST } from "@/store/mutations.type";
import { mapGetters } from "vuex";
import { getLanguage, saveLanguage } from "@/store/services/storage";

export default {
  name: "NewsMobile",
  data() {
    return {
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
    goToArtist(artist) {
      this.$router.push({
        name: "SingleArtist",
        params: { slug: artist.name, id: artist.id }
      });
    },
    prevSlide() {
      this.$refs.carouselArtistsMobile.goToPage(
        this.$refs.carouselArtistsMobile.getPreviousPage()
      );
    },
    async fetchArtists() {
      const TableName = "KM2019-Artist";
      const Limit = "100";
      const params = {
        TableName,
        Limit
      };
      await this.$store.dispatch(LIST_ARTIST, params);
      // console.log(this.getArtists);
      this.artists1.push({});
      this.artists1.push({});
      this.artists2.push({});
      this.artists2.push({});
      this.artists3.push({});
      for (let artist of this.getArtists) {
        if (artist.name == "Lindita") {
          this.artists1[0] = artist;
        }
        if (artist.name == "Genti Deda") {
          this.artists1[1] = artist;
        }
        if (artist.name == "Rea Nuhu") {
          this.artists2[0] = artist;
          // this.artists2.push(artist);
        }
        if (artist.name == "Khuba") {
          this.artists2[1] = artist;
          // this.artists2.push(artist);
        }
        if (artist.name == "Sisma") {
          this.artists3[0] = artist;
          // this.artists3.push(artist);
        }
      }

      // let resItems = this.getArtists;
      // // console.log("resItems: ", resItems);
      // this.artists1 = [...resItems.splice(0, 2)];
      // this.artists2 = [...resItems.splice(0, 2)];
      // this.artists3 = [...resItems.splice(0, 2)];
      // if (resItems.length > 0) {
      //   this.artists4 = [...resItems.splice(0, 2)];
      // }
    }
  },
  async mounted() {
    this.lang = getLanguage();
    setTimeout(() => {
      this.$forceUpdate();
    }, 500);
    await this.fetchArtists();
  },
  computed: {
    ...mapGetters(["getArtists"])
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

.master-row {
  margin-left: -1rem !important;
  margin-top: -5%;
  height: 100%;
}

.h-10rem {
  height: 16rem;
}

.mobile-artists {
  position: relative;
}

.col-left {
  padding-right: 0;
  padding-left: 39px;
}

.col-right {
  padding-right: 19px;
  padding-left: 20px;
}

.pt-10 {
  padding-top: 10%;
}
.inside-card {
  position: absolute;
  top: 91%;
  &--down {
    position: absolute;
    top: 111%;
  }
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

    margin-bottom: 9px;
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
