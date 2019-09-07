<template>
  <div class="voto-artist">
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
    <div class="row h-75 align-items-center">
      <div class="col-lg-7 offset-lg-2">
        <span class="artist-name">Soni Malaj</span>
        <hr />
        <span class="artist-song">Loose Yourself to dance</span>
      </div>
      <div class="col-lg-1">
        <img @click="goToVotoArtist()" src="@/assets/img/selected.svg" alt class="voto-img" />
      </div>
    </div>
    <div class="button-container">
      <a href="#" class="btn" @click="goToArtists()">Dërgo votën tënde</a>
    </div>
  </div>
</template>


<script>
export default {
  name: "VotoArtist",
  components: {},
  data() {
    return {};
  },
  mounted() {},
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

.button-container {
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.btn {
  padding: 1rem 12rem;
  border-radius: 10rem;

  font-family: Ubuntu;
  font-weight: 700;
  font-size: 2.5rem;
  color: black;
  background: white;
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

.voto-artist {
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../../src/assets/img/sonimala2j.png") no-repeat;
  background-size: cover;
  background-attachment: fixed;
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