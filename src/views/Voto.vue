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

    <div class="row align-items-center justify-content-center row-title">
      <div class="col-xl-7 col-lg-9 col-md-12 text-center">
        <div class="row align-items-center justify-content-center">
          <h1 class="jumbo-title-voto">voto</h1>

          <!-- <img src="@/assets/img/search_icon.svg" alt="" class="search-icon"> -->
          <input type="search" placeholder="Search" />
        </div>
      </div>
    </div>

    <div
      class="row voto-artist-row voto-card mt-5"
      v-for="artist of this.artists"
      :key="artist.name"
      @click="goToVotoArtist(artist)"
    >
      <div class="col-lg-7 offset-lg-2 mobile-width-75 rel">
        <span class="artist-name">{{artist.name}}</span>
        <hr />
        <span class="artist-song">{{artist.song}}</span>
      </div>
      <div class="col-lg-1">
        <img src="@/assets/img/Ellipse 13.svg" alt class="voto-img" />
      </div>
    </div>
    <div class="spacer"></div>
    <Footer v-if="windowWidth > 770" />
    <FooterSmall v-if="windowWidth < 770 && windowWidth > 600" />
    <FooterMobile v-if="windowWidth < 600" />
  </div>
</template>


<script>
import Footer from "@/components/Footer/FooterWhite.vue";
import FooterSmall from "@/components/Footer/FooterWhiteSmall.vue";
import FooterMobile from "@/components/Footer/FooterWhiteMobile.vue";

import { LIST_ARTIST } from "@/store/actions.type";
import { SET_ARTIST } from "@/store/mutations.type";
import { mapGetters } from "vuex";

export default {
  name: "Voto",
  components: {
    Footer,
    FooterSmall,
    FooterMobile
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      artists: [],
    };
  },
  head: {
    meta: [
      {
        p: "og:image",
        c: "https://previews.dropbox.com/p/thumb/AAjetZWkmr1AgCJVdj2yQHmrvynIDQ8zMyslaobI95MHPHWAO92v-0SAUgfJwGorICCWSLYRVmvsoIe81uMV8Lj3apx63P3y4BvLF4bQp9b4PjQ9kpEXHYNWg7-dxiXsPq6IV-n9Ot2B132_F254hhRrjJ1lwRIiC6bmMs9Hx6BoWUQekrz4q9hu4L0tUzTDLp2Mxgan05FAmbEmZnCrW24xNiLa8QT83JonauN_XOBbs4xaqPdL0bSfPrMpsI6SKcyI0hJ09rSVEXrZFmO89R9rXzZ-ZQDOKZhy7lF_w0YlpkuvDipNQq7jE4qy_suVG__yAaW-bwFCDACcjcTR--Gt7RABf08AS7iyOrpFqHWvXQ/p.png?fv_content=true&size_mode=5"
      },
      {
        p: "og:url",
        c: "https://kengamagjike.com/voto"
      },
      {
        p: "og:title",
        c: "Kenga Magjike 2019"
      },
      {
        p: "og:description",
        c: "Voto kengetarin tuaj te preferuar..."
      }
    ]
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
      for (let i in [1, 2, 3, 4, 5]) {
        this.artists.push({});
      }
      for (let artist of this.getArtists) {
        if (artist.name == "Lindita") {
          this.artists[0] = artist;
          // continue
        }
        if (artist.name == "Genti Deda") {
          this.artists[1] = artist;
        }
        if (artist.name == "Rea Nuhu") {
          this.artists[2] = artist;
        }
        if (artist.name == "Khuba") {
          this.artists[3] = artist;
        }
        if (artist.name == "Sisma") {
          this.artists[4] = artist;
        }
      }
    },
    goToHome() {
      this.$router.push({ name: "Home" });
    }
  },
  async mounted() {
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