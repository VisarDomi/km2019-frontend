<template>
  <div class="voto">
    <div class="row justify-content-between header-row align-items-center">
      <div class="col-lg-3 col-sm-3 col-6 text-center">
        <img src="@/assets/img/logowhite.svg" @click="goToHome()" class="logo-img img-logo" alt />
      </div>
      <div class="col-lg-1 col-sm-2 col-3 vertical-center back-hover" @click="goToHome()">
        <img
          src="@/assets/img/artistet_arrow_right.svg"
          alt
          class="back-icon center-block respond-width"
        />
      </div>
    </div>

    <div class="row align-items-center justify-content-center row-title nmr">
      <div class="col-xl-7 col-lg-9 col-md-12 text-center">
        <div class="row align-items-center justify-content-center">
          <h1 class="jumbo-title-voto" v-if="lang == 'en'">vote</h1>
          <h1 class="jumbo-title-voto" v-else>voto</h1>

          <!-- <img src="@/assets/img/search_icon.svg" alt="" class="search-icon"> -->
          <!-- <input type="search" placeholder="Search" /> -->
        </div>
      </div>
    </div>

    <div
      class="row voto-artist-row voto-card mt-5 nmr"
      v-for="artist of this.artists"
      :key="artist.name"
      @click="goToVotoArtist(artist)"
    >
      <div class="col-lg-7 offset-lg-2 mobile-width-75 rel">
        <span class="artist-name">{{artist.name}}</span>
        <hr />
        <span class="artist-song" v-if="lang == 'en'">{{artist.songEng}}</span>
        <span class="artist-song" v-else>{{artist.song}}</span>
      </div>
      <div class="col-lg-1">
        <img src="@/assets/img/Ellipse 13.svg" alt class="voto-img" />
      </div>
    </div>
    <div class="spacer"></div>
    <FooterWhite v-if="windowWidth > 770" />
    <FooterWhiteSmall v-if="windowWidth < 770 && windowWidth > 600" />
    <FooterWhiteMobile v-if="windowWidth < 600" />
  </div>
</template>


<script>
const FooterWhite = () => import("@/components/Footer/FooterWhite");
const FooterWhiteSmall = () => import("@/components/Footer/FooterWhiteSmall");
const FooterWhiteMobile = () => import("@/components/Footer/FooterWhiteMobile");

import { LIST_ARTIST } from "@/store/actions.type";
import { SET_ARTIST } from "@/store/mutations.type";
import { mapGetters } from "vuex";
import { getLanguage, saveLanguage } from "@/store/services/storage";
import { serveArtistFromCloudFront } from "@/common/cloudFront";

export default {
  name: "Voto",
  components: {
    FooterWhite,
    FooterWhiteSmall,
    FooterWhiteMobile
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      lang: "",
      artists: []
    };
  },
  methods: {
    goToVotoArtist(artist) {
      this.$router.push({
        name: "VotoArtist",
        params: { slug: artist.name, id: artist.id }
      });
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
          let artist2 = serveArtistFromCloudFront(artist);

          this.artists.push(artist2);
        }
      }
      this.artists.sort((a, b) => a.ordering - b.ordering);
    },
    goToHome() {
      this.$router.push({ name: "Home" });
    }
  },
  mounted() {
    this.lang = getLanguage();
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        this.windowWidth = window.innerWidth;
      });
    });
    this.fetchArtists();
  },
  computed: {
    ...mapGetters(["getArtists"])
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/abstracts/_mixins.scss";
.nmr {
  margin-right: 0% !important;
}

.rel {
  @include respond(phone) {
    position: relative;
  }
}
.mobile-width-75 {
  @include respond(phone) {
    width: 75% !important;
    margin-left: 4%;
  }
}
.spacer {
  // background: #0e1032;
  height: 17rem;
  @include respond(phone) {
    height: 25rem;
  }
}

.voto-img {
  margin-top: 13%;
  @include respond(phone) {
    position: absolute;
    right: 0%;
    margin-top: -19%;
  }
}

hr {
  margin-top: 0%;
  border: 1px solid white;
}

.artist-name {
  font-family: Vollkorn;
  font-size: 3.2rem;
  font-weight: 700;
  color: white;
}
.artist-song {
  font-family: Montserrat;
  font-size: 1.7rem;
  color: white;
  text-transform: uppercase;
}

.voto-artist-row {
  height: 10%;
  background: #0e1032;
}

.back-hover:hover {
  background: #21234e;
  cursor: pointer;
}

.voto {
  position: relative;
  // height: 100vh;
  background: #0e1032;
  background-size: cover;
  background-attachment: fixed;
}

.jumbo-title-voto {
  padding-right: 20px;
  margin-right: 20px;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 2px white;
  font-family: Vollkorn;
  font-size: 12rem;
  margin-left: 11%;
}

.s1 {
  height: 75vh;
  margin-top: 10rem;
}
.logo-img {
  width: 50%;
}

.header-row {
  margin-right: 0px;
  margin-left: 0px;
  height: 12rem;
  background: #151745;
}

input {
  outline: none;
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button {
    display: none;
  }

  &:-moz-placeholder {
    color: transparent;
  }

  &::-webkit-input-placeholder {
    color: transparent;
  }
}

input[type="search"] {
  background: url("../../src/assets/img/search_icon.svg") no-repeat 9px center;

  -webkit-border-radius: 10em;
  -moz-border-radius: 10em;
  border-radius: 10em;

  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;

  -webkit-appearance: textfield;
  -webkit-box-sizing: content-box;
  font-family: inherit;
  font-size: 100%;
  border: none !important;
  padding: 50px;
  width: 15px;
  padding-left: 10px;
  color: transparent;
  cursor: pointer;

  &:focus {
    width: 330px !important;
    @include respond(phone) {
      margin-left: 15%;
      width: 200px !important;
      padding-left: 70px !important;
    }

    color: white !important;
    font-size: 3rem;
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: #1a1c3c;
    border-color: #66cc75;
    padding-left: 100px !important;

    -webkit-box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
    -moz-box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
    box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
    cursor: auto;
  }
}
</style>