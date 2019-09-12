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

    <div class="row voto-artist-row voto-card mt-5" v-for="artist in artists" :key="artist.name">
      <div class="col-lg-7 offset-lg-2">
        <span class="artist-name">{{artist.name}}</span>
        <hr />
        <span class="artist-song">{{artist.song}}</span>
      </div>
      <div class="col-lg-1">
        <img @click="goToVotoArtist()" src="@/assets/img/Ellipse 13.svg" alt class="voto-img" />
      </div>
    </div>
    <div class="spacer"></div>
    <Footer v-if="windowWidth > 770" />
    <FooterSmall v-if="windowWidth < 770 && windowWidth > 600" />
  </div>
</template>


<script>
import Footer from "@/components/Footer/FooterWhite.vue";
import FooterSmall from "@/components/Footer/FooterWhiteSmall.vue";
export default {
  name: "Voto",
  components: {
    Footer,
    FooterSmall
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      artists: [
        { name: "John Wick", song: "La Vendetta" },
        { name: "Chamunda", song: "Goddess of war and famine" },
        { name: "Mike Tyson", song: "suplex!!!" },
        { name: "Batman", song: "I'm batman" },
        { name: "Daft", song: "Loose yourself to dance" },
        { name: "Daft", song: "Loose yourself to dance" }
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        this.windowWidth = window.innerWidth;
      });
    });
  },
  methods: {
    goToVotoArtist() {
      this.$router.push({ name: "VotoArtist" });
    },
    goToHome() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/abstracts/_mixins.scss";
.spacer {
  // background: #0e1032;
  height: 17rem;
}

.voto-img {
  margin-top: 13%;
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