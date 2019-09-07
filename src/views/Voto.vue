<template>
  <div class="voto">
    <div class="row justify-content-between header-row align-items-center h-15">
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

    <div class="row voto-artist-row voto-card mb-5">
      <div class="col-lg-7 offset-lg-2">
        <span class="artist-name">Soni Malaj</span>
        <hr />
        <span class="artist-song">Loose Yourself to dance</span>
      </div>
      <div class="col-lg-1 bg-danger">
        
      </div>
    </div>
    <div class="row voto-artist-row voto-card mb-5">
      <div class="col-lg-7 offset-lg-2">
        <span class="artist-name">Daft</span>
        <hr />
        <span class="artist-song">Loose Yourself to dance</span>
      </div>
      <div class="col-lg-1 bg-danger"></div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Voto",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {
    goToRoute(name) {
      this.$router.push({ name: name });
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/abstracts/_mixins.scss";
.voto-card {
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
}

.back-hover:hover {
  background: #21234e;
  cursor: pointer;
}

.h-15 {
  height: 14% !important;
}

.voto {
  height: 100vh;
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
  height: 10rem;
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