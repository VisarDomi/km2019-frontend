<template>
  <div class="artists">
    <div class="row justify-content-between artist-row align-items-center h-15">
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
          <h1 class="jumbo-title-artistet">artistët</h1>

          <!-- <img src="@/assets/img/search_icon.svg" alt="" class="search-icon"> -->
          <input type="search" placeholder="Search" />
        </div>
      </div>
    </div>

    <div class="row mx-6 row-artists">
      <div class="col-lg-3">
        <div class="artist-card" @click="goToArtist()">
          <div class="h-75 artist-card">
            <div class="img-container">
              <img src="@/assets/img/Soni Malaj.svg" alt />
            </div>
            <p class="artist-card__name go-up--small">Soni Malaj</p>
            <p class="artist-card__song">Loose Yourself to Dance</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="artist-card" @click="goToArtist()">
          <div class="h-75 artist-card">
            <div class="img-container">
              <img src="@/assets/img/Eneda Tarifa.svg" alt />
            </div>
            <p class="artist-card__name go-up--small">Eneda Tarifa</p>
            <p class="artist-card__song">Loose Yourself to Dance</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="artist-card" @click="goToArtist()">
          <div class="h-75 artist-card">
            <div class="img-container">
              <img src="@/assets/img/Kejsi Tola.svg" alt />
            </div>
            <p class="artist-card__name go-up--small">Kejsi Tola</p>
            <p class="artist-card__song">Loose Yourself to Dance</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="artist-card" @click="goToArtist()">
          <div class="h-75 artist-card">
            <div class="img-container">
              <img src="@/assets/img/Klajdi Haruni.svg" alt />
            </div>
            <p class="artist-card__name go-up--small">Klajdi Haruni</p>
            <p class="artist-card__song">Loose Yourself to Dance</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="artist-card" @click="goToArtist()">
          <div class="h-75 artist-card">
            <div class="img-container">
              <img src="@/assets/img/Rozana Radi.svg" alt />
            </div>
            <p class="artist-card__name go-up--small">Rozana Radi</p>
            <p class="artist-card__song">Loose Yourself to Dance</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="artist-card" @click="goToArtist()">
          <div class="h-75 artist-card">
            <div class="img-container">
              <img src="@/assets/img/Alar Band.svg" alt />
            </div>
            <p class="artist-card__name go-up--small">Alar Band</p>
            <p class="artist-card__song">Loose Yourself to Dance</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Artists",
  components: {},
  data() {
    return {};
  },
  methods: {
    goToArtist() {
      this.$router.push({ name: "SingleArtist" });
    },
    goToHome() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/abstracts/_mixins.scss";

.respond-width {
  @include respond(tab-land) {
    width: 70%;
  }
  @include respond(phone) {
    width: 20%;
  }
  @include respond(4k-desktop) {
    width: 40%;
  }
}

.logo-img {
  width: 50%;
  @include respond(tab-land) {
    width: 80%;
  }
  @include respond(tab-port) {
    width: 90%;
  }
}
.h-15 {
  height: 14% !important;
}

.mx-6 {
  padding-right: 8rem;
  padding-left: 8rem !important;
}

.row-artists {
  background: #0e1032;
}

.artist-card:hover {
  cursor: pointer;
}

.search-icon:hover {
  cursor: pointer;
}

.row-title {
  margin-top: 10rem;
  @include respond(phone) {
    margin-top: 3rem;
  }
}

.search-icon {
  height: 5rem;
  // text-align:left;
}

.jumbo-title-artistet {
  // text-align:right;
  padding-right: 20px;
  margin-right: 20px;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 2px white;
  font-family: Vollkorn;

  @include respond(phone) {
    margin-top: 1rem;
    margin-right:0px;
    padding-right:0px;
  }

  font-size: 12rem;
  @include respond(big-desktop) {
    font-size: 14rem;
  }
  @include respond(4k-desktop) {
    font-size: 30rem;
  }
}

//on mobile breakpoint change to 100%;
.artists {
  height: 100vh;
  background: #0e1032;
  background-size: cover;
  background-attachment: fixed;
}

.vertical-center {
  min-height: 100%; /* Fallback for browsers do NOT support vh unit */
  display: flex;
  align-items: center;
}

.back-hover:hover {
  background: #21234e;
  cursor: pointer;
}

.center-block {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.row {
  margin-right: 0px !important;
  margin-left: 0px;
}
.artist-row {
  margin-right: 0px;
  margin-left: 0px;
  height: 10rem;
  background: #151745;
}

.text-center {
  text-align: center;
}

input[type="search"] {
  background: url("../../src/assets/img/search_icon.svg") no-repeat 9px center;
  // border: solid 1px #ccc;
  padding: 9px 10px 9px 32px;
  width: 55px;

  -webkit-border-radius: 10em;
  -moz-border-radius: 10em;
  border-radius: 10em;

  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
}

input {
  outline: none;
}
input[type="search"] {
  -webkit-appearance: textfield;
  -webkit-box-sizing: content-box;
  font-family: inherit;
  font-size: 100%;
  border: none !important;
  padding: 50px;
}
input::-webkit-search-decoration,
input::-webkit-search-cancel-button {
  display: none;
}

input[type="search"]:focus {
  width: 330px !important;

  color: white !important;
  font-size: 3rem;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: #1a1c3c;
  border-color: #66cc75;
  padding-left: 100px !important;

  @include respond(phone) {
    padding-left: 60px !important;
  }

  -webkit-box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
  -moz-box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
  box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
}

input:-moz-placeholder {
  color: #999;
}
input::-webkit-input-placeholder {
  color: #999;
}

/* Demo 2 */
input[type="search"] {
  width: 15px;
  padding-left: 10px;
  color: transparent;
  cursor: pointer;
}
input[type="search"]:hover {
  // background-color: #fff;
}
input[type="search"]:focus {
  @include respond(phone) {
    width: 90% !important ;
    padding-left:22% !important;
  }

  width: 130px;
  padding-left: 32px;
  color: #000;
  background-color: #1a1c3c;
  cursor: auto;
}
input:-moz-placeholder {
  color: transparent;
}
input::-webkit-input-placeholder {
  color: transparent;
}

.artist-card {
  // width: 90%;
  margin-top: 30px;
  img {
    height: 100%;
    width: 100%;
    z-index: -1;
  }
  &__name {
    color: white;
    padding: 4px 1rem;
    background-color: black;
    font-family: Vollkorn;
    display: inline-block;
    border: solid 2px white;
    margin-bottom: 2px;

    font-size: 2rem;
    @include respond(big-desktop) {
      font-size: 2rem;
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
    font-weight: 700;
    font-size: 1.35rem;
    font-size: 2rem;
    @include respond(tab-land) {
      line-height: 2rem;
    }
    @include respond(big-desktop) {
      font-size: 2rem;
      line-height: 2.6rem;
    }
    @include respond(4k-desktop) {
      font-size: 4.35rem;
      line-height: 4rem;
    }
  }
}

.go-up {
  margin-top: -10rem;
  &--small {
    margin-top: -4rem;
  }
}
</style>
