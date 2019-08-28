<template>
  <div class="section-artists">
    <HeaderHero menutype="menu__items--black" logoBlack="true" />
    <div class="row">
      <div class="col-lg-6 offset-lg-3 text-center">
        <h1 class="header-text">artistët</h1>
      </div>
    </div>
    <div class="row px-6 h-35 go-up">
      <div class="col-lg-2">
        <div class="h-75 abs-bottom artist-card">
          <div class="img-container">
            <img src="@/assets/img/Eneda Tarifa.svg" alt />
          </div>
          <p class="artist-card__name go-up--small">Eneda Tarifa</p>
          <p class="artist-card__song">Loose Yourself to Dance</p>
        </div>
      </div>

      <div class="col-lg-2">
        <div class="h-75 artist-card">
          <div class="img-container">
            <img src="@/assets/img/Soni Malaj.svg" alt />
          </div>
          <p class="artist-card__name go-up--small">Eneda Tarifa</p>
          <p class="artist-card__song">Loose Yourself to Dance</p>
        </div>
      </div>

      <div class="col-lg-2">
        <div class="h-75 abs-bottom artist-card">
          <div class="img-container">
            <img src="@/assets/img/Kejsi Tola.svg" alt />
          </div>
          <p class="artist-card__name go-up--small">Kejsi Tola</p>
          <p class="artist-card__song">Loose Yourself to Dance</p>
        </div>
      </div>

      <div class="col-lg-2">
        <div class="h-75 artist-card">
          <div class="img-container">
            <img src="@/assets/img/Klajdi Haruni.svg" alt />
          </div>
          <p class="artist-card__name go-up--small">Klajdi Haruni</p>
          <p class="artist-card__song">Loose Yourself to Dance</p>
        </div>
      </div>

      <div class="col-lg-2">
        <div class="h-75 abs-bottom artist-card">
          <div class="img-container">
            <img src="@/assets/img/Alar Band.svg" alt />
          </div>
          <p class="artist-card__name go-up--small">Alar Band</p>
          <p class="artist-card__song">Loose Yourself to Dance</p>
        </div>
      </div>

      <div class="col-lg-2">
        <div class="h-75 artist-card">
          <div class="img-container">
            <img src="@/assets/img/Rozana Radi.svg" alt />
          </div>
          <p class="artist-card__name go-up--small">Rozana Radi</p>
          <p class="artist-card__song">Loose Yourself to Dance</p>
        </div>
      </div>
    </div>
    <div class="row mt-6">
      <div class="col-lg-6 offset-lg-3 text-center">
        <a href="#" class="btn">më shumë artistë</a>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderHero from "@/components/Headers/HeaderHero.vue";
export default {
  name: "ArtistsSection",
  data() {
    return {};
  },
  methods: {
    goToArtists() {
      this.$router.push({ name: "Artists" });
    }
  },
  components: {
    HeaderHero
  }
};
</script>

<style lang="scss" scoped>
.abs-bottom {
  position: absolute;
  bottom: 0;
}

.artist-card {
  width: 90%;
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
    font-size: 1.5rem;
  }
}

.h-35 {
  height: 35%;
}
.mt-6 {
  margin-top: 8rem;
}

.px-6 {
  margin-right: 4rem;
  margin-left: 4rem;
}

.btn {
  padding: 1rem 12rem;
  border: 2px solid black;
  border-radius: 10rem;

  font-family: Ubuntu;
  font-weight: 700;
  font-size: 2.5rem;
}

.go-up {
  margin-top: -10rem;
  &--small {
    margin-top: -4rem;
  }
}

.section-artists {
  background-color: white;
}

.header-text {
  text-align: center;
  font-size: 25rem;
  font-family: Vollkorn;
  // color: black;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 2px black;
}
</style>
