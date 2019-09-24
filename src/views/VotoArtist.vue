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
    <div class="row h-75 align-items-center" v-if="windowWidth > 600">
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
        <span class="artist-name">{{getArtist.nameEng}}</span>
        <hr />
        <span class="artist-song" v-if="this.lang == 'en'">{{getArtist.songEng}}</span>
        <span class="artist-song" v-else>{{getArtist.song}}</span>
        <img src="@/assets/img/selected.svg" alt class="voto-img" @click="goToVoto()" />
      </div>
    </div>

    <!-- new login -->
    <div class="button-container">
      <b-button class="btn" @click="voteFirstWeek()" :disabled="disabled">Dërgoni votën</b-button>
      <div v-if="getIsLoading" class="my-text-message">Duke dërguar votën</div>
      <div v-if="voteSentSuccess" class="my-text-message">{{this.message}}</div>
      <div v-if="disabled & !voteSentSuccess" class="my-text-message">Ju keni votuar për sot!</div>
    </div>
    <!-- new login -->

    <!-- old login -->
    <!-- <div class="button-container" v-if="test(user)">
      <b-button class="btn" @click="voto()">Dërgo votën</b-button>
      <div v-if="getIsLoading" class="my-text-message">Duke dërguar votën</div>
      <div v-if="voteSent" class="my-text-message">{{this.message}}</div>
    </div>
    <div class="button-container" v-else>
      <b-button class="btn centered-voto" v-b-modal.my-modal>Voto</b-button>
    </div>-->
    <!-- old login -->
    <div class="spacer"></div>

    <!-- pop up -->
    <b-modal id="my-modal">
      <h5 class="m-2" style="text-align: center; font-size: 12px; font-weight: 700;">
        <div>Loading...</div>
      </h5>

      <div id="auth">
        <amplify-authenticator :authConfig="authConfig"></amplify-authenticator>
        <!-- <AmplifyAuthenticator></AmplifyAuthenticator> -->
      </div>
    </b-modal>
    <!-- pop up -->

    <Footer v-if="windowWidth > 770" />
    <FooterSmall v-if="windowWidth < 770 && windowWidth > 600" />
    <FooterMobile gClass="height-5 rel" v-if="windowWidth < 600" />
  </div>
</template>


<script>
import Footer from "@/components/Footer/FooterWhite.vue";
import FooterSmall from "@/components/Footer/FooterWhiteSmall.vue";
import FooterMobile from "@/components/Footer/FooterWhiteMobile.vue";
import { sleep } from "@/common/functions";

import AmplifyAuthenticator from "@/components/AwsCustomComponent.vue";

import { mapGetters } from "vuex";
import { GET_ARTIST, PUT_VOTES, PUT } from "@/store/actions.type";
import {
  START_LOADING,
  STOP_LOADING,
  SET_ARTIST
} from "@/store/mutations.type";
import { Auth } from "aws-amplify";
import { aws_user_pools_web_client_id } from "@/main";

import { getLanguage, saveLanguage } from "@/store/services/storage";

export default {
  name: "VotoArtist",
  components: {
    Footer,
    FooterSmall,
    FooterMobile,
    AmplifyAuthenticator
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
      disabled: false,
      authConfig: {
        signInConfig: {
          header: "Sign In"
        },
        signUpConfig: {
          header: "Sign Up",
          hideAllDefaults: true,
          signUpFields: [
            {
              label: "Username",
              key: "username",
              required: true,
              displayOrder: 1,
              type: "string"
            },
            {
              label: "Email",
              key: "email",
              required: true,
              displayOrder: 2,
              type: "string",
              signUpWith: true
            },
            {
              label: "Password",
              key: "password",
              required: true,
              displayOrder: 3,
              type: "password"
            }
          ]
        }
      }
    };
  },
  methods: {
    goToVoto() {
      this.$router.push({ name: "Voto" });
    },
    async voteFirstWeek() {
      const TableName = "KM2019-Vote";
      const id = this.$route.params.id;
      const params = {
        TableName,
        artistId: id
      };
      this.$store.commit(START_LOADING);
      await this.$store.dispatch(PUT_VOTES, params);
      // await sleep(1000);
      // await this.$store.dispatch(PUT_VOTES, params);
      this.$store.commit(STOP_LOADING);
      if (this.getVoteErr !== null) {
        // console.log("this.getVoteErr", this.getVoteErr);
        if (this.getVoteErr.response.status === 501) {
          this.$store.dispatch(PUT_VOTES, params);
          this.voteSentSuccess = false;
          this.message = "Provoni përsëri";
          this.disabled = false;
        }
      } else {
        let now = new Date();
        let tomorrow = new Date(`${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()+1}`);
        // console.log("tomorrow", tomorrow)
        // console.log("tomorrow.toGMTString()", tomorrow.toGMTString())
        document.cookie = `vote=${Date.now()};expires=${tomorrow.toGMTString()}`;
        this.voteSentSuccess = true;
        this.message = "Vota u dërgua me sukses";
        this.disabled = true;
        await sleep(3000);
        this.voteSentSuccess = false;
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
      // console.log("artistId", artistId);
      const params = {
        TableName,
        id
      };
      this.$store.commit(START_LOADING);
      await this.$store.dispatch(GET_ARTIST, params);
      this.$store.commit(STOP_LOADING);
    }
  },
  async mounted() {
    let cookies = document.cookie;
    if (cookies !== null) {
      // console.log("cookie.split(';')", cookies.split(';'))
      for (let cookie of cookies.split(';')) {
        if (cookie.split("=")[0]==="vote") {
          let voted = cookie.split("=")[1];
          let now = new Date();
          let today = new Date(`${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`);
          if (voted - today > 0) {
            this.disabled = true;
          }
        }
      }
    }
    this.lang = getLanguage();
    await this.fetchArtist(this.$route.params.id);

    let votoPage = document.getElementsByClassName("voto-artist")[0];
    // console.log(votoPage);
    votoPage.style.background =
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" +
      this.getArtist["bgImg"] +
      "), no-repeat ";
    votoPage.style.backgroundPosition = "center top";
    votoPage.style.backgroundSize = "cover";
    votoPage.style.backgroundAttachment = "fixed";

    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        this.windowWidth = window.innerWidth;
      });
    });
  },
  computed: {
    ...mapGetters(["getArtist", "getIsLoading", "getVote", "getVoteErr"])
  },
  beforeCreate() {
    Auth.currentAuthenticatedUser()
      .then(user => {
        this.user = user;
        // // console.log(this.user);
      })
      .catch(() => {
        // console.log("not signed in...");
        // // console.log("user: ", this.test(this.user));
      });
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/abstracts/_mixins.scss";

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
  height: 16rem;
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