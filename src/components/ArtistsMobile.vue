<template>
  <div class="mobile-artists pb-5 pt-5" id="artists-mobile">
    <div class="row h-15 align-items-center ml-0" style="width:100%;">
      <h1 class="title" v-if="this.lang == 'en'" data-aos="fade-up">artists</h1>
      <h1 class="title" v-else data-aos="fade-up">artistët</h1>
    </div>
    <div class="row ml-0" style="width:100%;">
      <div class="row ml-0" style="margin: 34px 10px 34px;width: 100%;">
        <div class="col-6" v-for="artist in artists" :key="artist.id" data-aos="fade-up">
          <div class="artist-card" @click="goToArtist(artist)">
            <div class="img-container">
              <img :src="artist.img" alt />
            </div>
            <div class="name_container">
              <p class="artist-card__name inside-card">{{artist.name}}</p>
              <br />
              <p class="artist-card__song inside-card--down" v-if="lang == 'en'">{{artist.songEng}}</p>
              <p class="artist-card__song inside-card--down" v-else>{{artist.song}}</p>
            </div>
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
            data-aos="zoom-out"
            data-aos-anchor-placement="center-bottom"
          >more artists</a>
          <a
            href="#"
            @click="goToRoute('Artists')"
            class="btn"
            style="margin-left:8%;"
            v-else
            data-aos="zoom-out"
            data-aos-anchor-placement="top-bottom"
          >më shumë artistë</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LIST_ARTIST } from "@/store/actions.type";
import { mapGetters } from "vuex";
import { getLanguage } from "@/store/services/storage";
import { serveArtistFromCloudFront } from "@/common/cloudFront";

export default {
  name: "ArtistsMobile",
  data() {
    return {
      artists: [],
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

      for (let artist of this.getArtists) {
        if (artist.isCurrentWeek == true) {
          let artist2 = serveArtistFromCloudFront(artist)
          this.artists.push(artist2);
        }
      }
      this.artists.sort((a, b) => a.ordering - b.ordering);
    }
  },
  mounted() {
    this.lang = getLanguage();
    this.fetchArtists();
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

.name_container {
}

p {
  margin-bottom: 0rem;
}

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
  // position: absolute;
  // top: 91%;
  // &--down {
  //   position: absolute;
  //   top: 111%;
  // }
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

    // margin-bottom: 9px;
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
</style>
