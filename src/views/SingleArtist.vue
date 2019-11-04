<template>
  <div class="artist-page">
    <div class="row justify-content-between menu-row align-items-center">
      <div class="col-lg-3 col-sm-2 col-xs-9 col-9 text-center logo-col">
        <img src="@/assets/img/logowhite.svg" class="align-middle img-logo" @click="goToHome()" alt />
      </div>
      <div
        class="col-lg-1 col-sm-2 col-xs-3 col-3 vertical-center back-hover-artist"
        @click="goToArtists()"
      >
        <img src="@/assets/img/artistet_arrow_right.svg" alt class="back-icon center-block" />
      </div>
    </div>

    <div class="artist-container container">
      <div class="row">
        <div class="col-lg-7">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" :src="getArtist.video" allowfullscreen></iframe>
          </div>
        </div>
        <div class="col-lg-5 top-padded-col">
          <h1 class="artist-name">{{getArtist.name}}</h1>
          <h2 class="artist-songtitle" v-if="this.lang == 'en'">{{getArtist.songEng}}</h2>

          <h2 class="artist-songtitle" v-else>{{getArtist.song}}</h2>

          <h3 class="bio-text">bio</h3>
          <h4 class="bio-description" v-if="this.lang == 'en'">{{getArtist.bioEng}}</h4>
          <h4 class="bio-description" v-else>{{getArtist.bio}}</h4>

          <div v-if="getArtist.isCurrentWeek">
            <button class="btn" @click="sendToVoto()" v-if="this.lang == 'en'">Vote</button>
            <button class="btn" @click="sendToVoto()" v-else>Voto</button>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <p class="share-text" v-if="this.lang == 'en'">Shpërndaje:</p>
          <p class="share-text" v-else>Share:</p>
          <span>
            <i class="fa fa-facebook facebook-icon" style="margin-right:5px;"></i>
            <i class="fa fa-instagram" style="margin-right:5px;"></i>
            <i class="fa fa-whatsapp"></i>
          </span>
          <br />
          <h1 class="trigger-text" v-if="this.lang == 'en'">Will you listen to only one song</h1>
          <h1 class="trigger-text" v-else>Vetëm një këngë do dëgjosh?</h1>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-3" v-for="artist of artists" :key="artist.id">
          <div class="artist-card abs-bottom" @click="goToArtist(artist)">
            <div class="img-container">
              <img :src="artist.img" alt />
            </div>
            <p class="artist-card__name go-up--small">{{artist.name}}</p>
            <br />
            <p class="artist-card__song">{{artist.song}}</p>
          </div>
        </div>
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
// @ is an alias to /src
import { LIST_ARTIST, GET_ARTIST } from "@/store/actions.type";
import { mapGetters } from "vuex";
import {
  START_LOADING,
  STOP_LOADING,
  SET_ARTIST
} from "@/store/mutations.type";
import { ApiService } from "@/store/services/api";
import store from "@/store";
import { getLanguage, saveLanguage } from "@/store/services/storage";
import { serveArtistFromCloudFront } from "@/common/cloudFront";

export default {
  name: "SingleArtist",
  components: {
    FooterWhiteMobile,
    FooterWhite,
    FooterWhiteSmall
  },
  beforeRouteEnter(to, from, next) {
    const TableName = "KM2019-Artist";
    const id = to.params.id;
    const params = {
      TableName,
      id
    };
    ApiService.get(params)
      .then(res => {
        let artist = res.data.Item;
        let artist2 = serveArtistFromCloudFront(artist);
        store.commit(SET_ARTIST, artist2);
        next();
      })
      .catch(err => {
        next();
      });
  },
  head() {
    return {
      meta: [
        {
          name: "og:image",
          content: this.getArtist.img
        },
        {
          name: "og:title",
          content: this.getArtist.name
        },
        {
          name: "og:description",
          content: this.getArtist.bio
        }
      ]
    };
  },

  data() {
    return {
      windowWidth: window.innerWidth,
      artists: [],
      lang: "",
      artist: {}
    };
  },

  methods: {
    goToArtists() {
      this.$router.push({ name: "Artists" });
    },
    sendToVoto() {
      let name = this.getArtist.name;
      let id = this.getArtist.id;
      this.$router.push({
        name: "VotoArtist",
        params: { slug: name, id: id }
      });
    },
    async goToArtist(artist) {
      this.artists = [];
      this.fetchArtists();
      await this.fetchArtist(artist.id);
      this.setArtistBackground(artist)
      this.$router.push({
        name: "SingleArtist",
        params: { slug: artist.name, id: artist.id }
      });
    },
    goToHome() {
      this.$router.push({ name: "Home" });
    },
    async fetchArtist(id) {
      const TableName = "KM2019-Artist";
      const params = {
        TableName,
        id
      };
      this.$store.commit(START_LOADING);
      await this.$store.dispatch(GET_ARTIST, params);
      this.$store.commit(STOP_LOADING);
    },
    shuffle(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    },
    async fetchArtists() {
      const TableName = "KM2019-Artist";
      const Limit = "100";
      const params = {
        TableName,
        Limit
      };
      await this.$store.dispatch(LIST_ARTIST, params);
      let coppy = this.getArtists.slice();
      let shuffledArr = this.shuffle(coppy);
      for (let artist of shuffledArr) {
        if (artist.name !== this.getArtist.name) {
          let artist2 = serveArtistFromCloudFront(artist);
          this.artists.push(artist2);
        }
        if (this.artists.length == 4) {
          break;
        }
      }
    },
    goToHome() {
      this.$router.push({ name: "Home" });
    },
    setArtistBackground(artist) {
      let artistPage = document.getElementsByClassName("artist-page")[0];
      artistPage.style.background =
        "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" +
        artist.bgImg +
        "), no-repeat ";

      artistPage.style.backgroundSize = "cover";
      artistPage.style.backgroundAttachment = "fixed";
    }
  },
  computed: {
    ...mapGetters(["getArtist", "getArtists"])
  },
  mounted() {
    this.lang = getLanguage();
    this.fetchArtist(this.$route.params.id);
    this.fetchArtists();

    this.setArtistBackground(this.getArtist)
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        this.windowWidth = window.innerWidth;
      });
    });
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/abstracts/_mixins.scss";
.spacer {
  height: 15rem;
  @include respond(phone) {
    height: 22rem;
  }
}

.btn {
  color: white;
  font-size: 20px;
  border: 1px solid white;
  border-radius: 24px;
  // margin-left: 12%;
  padding: 6px 25px;
  &:hover {
    color: black;
    background-color: white;
  }
}

.artist-name {
  font-family: Vollkorn;
  color: white;
  font-weight: 600;
  font-size: 3rem;
  line-height: 1.8rem;
}

.logo-col {
  @include respond(phone) {
    height: 100%;
  }
}

.top-padded-col {
  padding-top: 20px;
}
.artist-surname {
  font-family: Vollkorn;
  color: white;
  font-weight: 900;
  font-size: 3rem;
}
.artist-surname:after {
  background: none repeat scroll 0 0 white;
  bottom: -10px;
  content: "";
  display: block;
  height: 9px;
  position: relative;
  width: 48px;
}

.artist-songtitle {
  margin-top: 20px;
  text-transform: uppercase;
  font-family: Montserrat;
  // font-weight: 300;
  color: white;
  font-size: 2rem;
}

.bio-text {
  overflow: hidden;
  color: white;
  font-family: Vollkorn;
  font-weight: 400;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px white;
  font-size: 2rem;
  margin-top: 20px;
}

.bio-text:after {
  background-color: white;
  content: "";
  display: inline-block;
  height: 1px;
  position: relative;
  vertical-align: middle;
  width: 100%;
}

.bio-text:after {
  left: 0.5em;
  margin-right: -50%;
}

.bio-description {
  font-family: Montserrat;
  color: white;
  font-size: 1.3rem;
}

.share-text {
  color: white;
  text-transform: uppercase;
  font-family: Ubuntu;
  font-weight: 700;
  padding-top: 10px;
  font-size: 1.2rem;
}
.artist-container {
  margin-top: 5rem;
}

i.fa {
  color: white;
  display: inline-block;
  border-radius: 60px;
  border: 1px solid white;
  // box-shadow: 0px 0px 2px #fff;
  padding: 0.9em 1em;
}

.facebook-icon {
  padding-left: 1.1em !important;
  padding-right: 1.1em !important;
}

.trigger-text {
  color: white;
  font-family: Vollkorn;
  margin-top: 20px;
}

.img-logo {
  position: relative;
  top: 30%;
}
.img-logo:hover {
  cursor: pointer;
}

body {
  height: 100% !important;
}

.artist-page {
  // height: 100vh;
  position: relative;
  height: 100%;
  @include respond(phone) {
    height: 100%;
  }

  @include respond(tab-port) {
    height: 100%;
  }

  @include respond(tab-land) {
    // height:100vh;
  }
  // background: lightsalmon;
  // background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  //   url("../../src/assets/img/sonimala2j.png") no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

.menu-row {
  margin-right: 0px;
  margin-left: 0px;
  height: 10rem;
  @include respond(phone) {
    padding-top: 18px;
  }
}

.row {
  margin-right: 0px !important;
  margin-left: 0px;
}

.back-hover-artist:hover {
  box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1) !important;
  cursor: pointer;
}

.vertical-center {
  min-height: 100%; /* Fallback for browsers do NOT support vh unit */
  display: flex;
  align-items: center;
}

.center-block {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.artist-card {
  // width: 90%;
  img {
    height: 100%;
    width: 100%;
    z-index: -1;
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
    font-size: 1.35rem;
    font-weight: 700;
  }
}

.go-up {
  margin-top: -10rem;
  &--small {
    margin-top: -4rem;
  }
}
</style>
