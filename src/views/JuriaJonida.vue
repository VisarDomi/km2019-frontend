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
        <div class="col-lg-4">
          <div class="img-container">
            <img class="img" src="@/assets/juria/j2_hover.png" alt />
          </div>
        </div>
        <div class="col-lg-6 ml-5 top-padded-col">
          <h1 class="artist-name">Jonida</h1>
          <h1 class="artist-surname">Maliqi</h1>
          <h3 class="bio-text">bio</h3>
          <h4
            class="bio-description"
          >Është cilësuar si një prej legjendave të muzikës shqiptare. Artist unik, kantautor, kompozitor dhe autor këngësh mjaft të njohura. Armend Rexhepagiq me gjykimin e tij korrekt, profesional dhe pak shpotitës, ishte pjesë e jurisë së festivalit "Kënga Magjike" për kategorinë New Artist, edhe në edicionin e 20-të.</h4>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h1 class="trigger-text">Anetare te tjere te jurise:</h1>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-3">
          <div class="artist-card abs-bottom" @click="goToJuria('JuriaArmend')">
            <div class="img-container">
              <img class="img" src="@/assets/juria/j1_hover.png" alt />
            </div>
            <p class="artist-card__name go-up--small">Emer Mbiemer</p>
            <br />
          </div>
        </div>
        <div class="col-lg-3">
          <div class="artist-card abs-bottom" @click="goToJuria('JuriaArben')">
            <div class="img-container">
              <img class="img" src="@/assets/juria/j3_hover.png" alt />
            </div>
            <p class="artist-card__name go-up--small">Emer Mbiemer</p>
            <br />
          </div>
        </div>
        <div class="col-lg-3">
          <div class="artist-card abs-bottom" @click="goToJuria('JuriaEnkel')">
            <div class="img-container">
              <img class="img" src="@/assets/juria/j4_hover.png" alt />
            </div>
            <p class="artist-card__name go-up--small">Emer Mbiemer</p>
            <br />
          </div>
        </div>
        <div class="col-lg-3">
          <div class="artist-card abs-bottom" @click="goToJuria('JuriaDj')">
            <div class="img-container">
              <img class="img" src="@/assets/juria/j5_hover.png" alt />
            </div>
            <p class="artist-card__name go-up--small">Emer Mbiemer</p>
            <br />
          </div>
        </div>
      </div>
    </div>
    <div class="spacer"></div>
    <FooterWhite v-if="windowWidth > 770" />
    <FooterWhiteSmall v-if="windowWidth < 770 && windowWidth > 600" />
    <FooterWhiteMobile v-else />
  </div>
</template>

<script>
import FooterWhite from "@/components/Footer/FooterWhite.vue";
import FooterWhiteMobile from "@/components/Footer/FooterWhiteMobile.vue";
import FooterWhiteSmall from "@/components/Footer/FooterWhiteSmall.vue";
// @ is an alias to /src

export default {
  name: "SingleArtist",
  components: {
    FooterWhiteMobile,
    FooterWhite,
    FooterWhiteSmall
  },
  data() {
    return {
      windowWidth: window.innerWidth
    };
  },
  methods: {
    goToArtists() {
      this.$router.push({ name: "Artists" });
    },
    goToHome() {
      this.$router.push({ name: "Home" });
    },
    goToJuria(routename) {
      this.$router.push({ name: routename });
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        this.windowWidth = window.innerWidth;
      });
    });
    // this.getArtists();
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/abstracts/_mixins.scss";
.spacer {
  height: 15rem;
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
  background-color: #0e1032;
  // background-size: cover;
  // background-attachment: fixed;
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
.img {
  width: 100%;
}
.artist-card {
  // width: 90%;
  img {
    height: 100%;
    // width: 100%;
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
