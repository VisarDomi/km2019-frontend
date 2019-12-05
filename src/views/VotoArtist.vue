<template>
  <div class="voto-artist">
    <div class="row justify-content-between artist-row align-items-center h-15">
      <div class="col-lg-3 col-sm-3 col-6 text-center">
        <img src="@/assets/img/logowhite.svg" @click="goToHome()" class="logo-img img-logo" alt />
      </div>
      <div class="col-lg-1 col-sm-2 col-3 vertical-center back-hover" @click="goToVoto()">
        <img
          src="@/assets/img/artistet_arrow_right.svg"
          alt
          class="back-icon center-block respond-width"
        />
      </div>
    </div>
    <div class="row h-75 align-items-center nmr" v-if="windowWidth > 600">
      <div class="col-lg-7 offset-lg-2">
        <span class="artist-name">{{getArtist.name}}</span>
        <hr />
        <span class="artist-song" v-if="this.lang == 'en'">{{getArtist.songEng}}</span>
        <span class="artist-song" v-else>{{getArtist.song}}</span>
      </div>
      <div class="col-lg-1" @click="goToVoto()">
        <img src="@/assets/img/selected.svg" alt class="voto-img" />
      </div>
    </div>
    <div class="row h-75 align-items-center" v-else>
      <div class="col-lg-7 offset-lg-2 mobile-width-75 rel">
        <span class="artist-name">{{getArtist.name}}</span>
        <hr />
        <span class="artist-song" v-if="this.lang == 'en'">{{getArtist.songEng}}</span>
        <span class="artist-song" v-else>{{getArtist.song}}</span>
        <img src="@/assets/img/selected.svg" alt class="voto-img" @click="goToVoto()" />
      </div>
    </div>

    <!-- new login -->
    <div class="button-container">
      <b-button
        class="btn"
        @click="voteFirstWeek()"
        :disabled="disabled"
        v-if="this.lang == 'en'"
      >Vote</b-button>
      <b-button class="btn" @click="voteFirstWeek()" :disabled="disabled" v-else>Dërgoni votën</b-button>

      <div v-if="getIsLoading & this.lang == 'en'" class="my-text-message">Sending vote...</div>
      <div v-if="getIsLoading & this.lang != 'en'" class="my-text-message">Duke dërguar votën...</div>

      <div v-if="disabled" class="my-text-message">{{this.message}}</div>
    </div>
    <div class="spacer"></div>
    <FooterWhite v-if="windowWidth > 770" />
    <FooterWhiteSmall v-if="windowWidth < 770 && windowWidth > 600" />
    <FooterWhiteMobile gClass="height-5 rel" v-if="windowWidth < 600" />
  </div>
</template>


<script>
const FooterWhite = () => import("@/components/Footer/FooterWhite");
const FooterWhiteSmall = () => import("@/components/Footer/FooterWhiteSmall");
const FooterWhiteMobile = () => import("@/components/Footer/FooterWhiteMobile");
import axios from "axios";
import { serveArtistFromCloudFront } from "@/common/cloudFront";

import { mapGetters } from "vuex";
import { GET_ARTIST, PUT_VOTES, GET_HAS_VOTED } from "@/store/actions.type";
import {
  START_LOADING,
  STOP_LOADING,
  SET_ARTIST
} from "@/store/mutations.type";

import { getLanguage, saveLanguage } from "@/store/services/storage";

export default {
  name: "VotoArtist",
  components: {
    FooterWhite,
    FooterWhiteSmall,
    FooterWhiteMobile
  },
  data() {
    return {
      lang: "",
      message: "",
      voteSent: false,
      voteSentSuccess: false,
      isError: null,
      windowWidth: window.innerWidth,
      user: {},
      disabled: false
    };
  },
  methods: {
    goToVoto() {
      this.$router.push({ name: "Voto" });
    },
    async setDisabled(ip) {
      this.disabled = true;
      const params = {
        ip
      };
      await this.$store.dispatch(GET_HAS_VOTED, params);
      if (this.getHasVoted) {
        if (this.lang == "en") {
          this.message = "You have already voted for today!";
        } else {
          this.message = "Ju keni votuar për sot!";
        }
        this.disabled = true;
      } else if (this.getHasVoted === false) {
        this.disabled = false;
      }

      if (this.getArtist.isCurrentWeek == false) {
        this.disabled = true;
      }
    },
    async getIp() {
      this.disabled = true;

      const endpoint = "https://api.ipgeolocation.io/ipgeo";
      const ipParams = {
        apiKey: "9e6368cad8654c6e867dcbc3b8a2fec9",
        fields: ""
      };
      axios.defaults.headers.common = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      };
      let ip = "";
      await axios
        .get(endpoint, { params: ipParams })
        .then(response => {
          ip = response.data.ip;
          // first check if this ip can vote
          this.setDisabled(ip);
        })
        .catch(err => {
          // adblock blocks ip
          if (this.lang == "en") {
            this.message = "Adblock is blocking the voting (with IP)";
          } else {
            this.message = "Adblock-u pengon votimin (me IP)";
          }
        });
      // if it can vote, then send the vote to the backend (where it will be checked again)
      return ip;
    },
    async voteFirstWeek() {
      this.disabled = true;
      let ip = await this.getIp();
      const TableName = "KM2019-Vote";
      const id = this.$route.params.id;
      const params = {
        TableName,
        artistId: id,
        ip
      };
      this.$store.commit(START_LOADING);
      await this.$store.dispatch(PUT_VOTES, params);
      this.$store.commit(STOP_LOADING);
      if (this.getVoteErr !== null) {
        if (this.getVoteErr.response.status === 501) {
          this.$store.dispatch(PUT_VOTES, params);
          if (this.lang == "en") {
            this.message = "Try Again";
          } else {
            this.message = "Provoni përsëri";
          }
          this.disabled = false;
        } else if (this.getVoteErr.response.status === 409) {
          if (this.lang == "en") {
            this.message = "You have already voted for today!";
          } else {
            this.message = "Ju keni votuar për sot!";
          }
          this.disabled = true;
          // this.voteSentSuccess = false;
        }
      } else {
        this.disabled = true;
        if (this.lang == "en") {
          this.message = "Your vote has been recorded!";
        } else {
          this.message = "Vota u dërgua me sukses";
        }
      }
    },
    test(obj) {
      return Object.keys(obj).length !== 0;
    },

    goToHome() {
      this.$router.push({
        name: "Home",
        params: { lang: "al" }
      });
    },
    async fetchArtist(artistId) {
      const TableName = "KM2019-Artist";
      const id = artistId;
      const params = {
        TableName,
        id
      };
      this.$store.commit(START_LOADING);
      await this.$store.dispatch(GET_ARTIST, params);
      this.setArtistBackground(this.getArtist);

      this.$store.commit(STOP_LOADING);
    },

    setArtistBackground(artist) {
      let votoPage = document.getElementsByClassName("voto-artist")[0];

      votoPage.style.background =
        "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" +
        this.getArtist.bgImg +
        "), no-repeat ";

      votoPage.style.backgroundPosition = "center top";
      votoPage.style.backgroundSize = "cover";
      votoPage.style.backgroundAttachment = "fixed";
    }
  },
  async mounted() {
    this.lang = getLanguage();

    await this.fetchArtist(this.$route.params.id);
    let artist2 = serveArtistFromCloudFront(this.getArtist);
    this.$store.commit(SET_ARTIST, artist2);

    this.setArtistBackground(this.getArtist);

    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        this.windowWidth = window.innerWidth;
      });
    });
    this.getIp();
  },
  computed: {
    ...mapGetters([
      "getArtist",
      "getIsLoading",
      "getVote",
      "getVoteErr",
      "getHasVoted"
    ])
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/abstracts/_mixins.scss";

.nmr {
  margin-right: 0 !important;
}

.my-text-message {
  color: white;
  width: 100%;
  font-size: 3rem;
  font-weight: 800;
  margin-left: 4%;
  @include respond(phone) {
    font-size: 2rem;
    margin-left: 10%;
  }
}

.centered-voto {
  margin-left: 25%;
}

.Input__input___2Sh1s {
  @include respond(phone) {
    width: 75% !important;
  }
}

.spacer {
  height: 13%;
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

.button-container {
  position: absolute;
  bottom: 14%;
  left: 50%;
  transform: translate(-50%, -50%);
  @include respond(phone) {
    width: 80%;
  }
}

.btn {
  padding: 1rem 12rem;
  @include respond(phone) {
    padding: 3rem 7rem;
  }
  border-radius: 10rem;

  font-family: Ubuntu;
  font-weight: 700;
  font-size: 2.5rem;
  color: black;
  background: white;
}
.voto-img {
  margin-top: 13%;
  @include respond(phone) {
    position: absolute;
    right: -28%;
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

.voto-artist {
  height: 100vh;
  // background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  //   url("../../src/assets/img/sonimala2j.png") no-repeat;
  // background-size: cover;
  // background-position: center top;
  // background-attachment: fixed;
}
.logo-img {
  width: 50%;
}
.back-hover:hover {
  cursor: pointer;
  background: rgba(255, 255, 255, 0.05);
}
.artist-row {
  margin-right: 0px;
  margin-left: 0px;
  height: 10rem;
  background: transparent;
}
</style>