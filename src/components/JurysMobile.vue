<template>
  <div class="mobile-juria pb-5 pt-5" id="juria-mobile">
    <div class="row h-15 align-items-center ml-0" style="width:100%;">
      <h1 class="title" v-if="this.lang == 'en'" data-aos="zoom-in">the jury</h1>
      <h1 class="title" v-else data-aos="zoom-in">juria</h1>
    </div>

    <div class="row ml-0" style="width:100%;">
      <div class="row ml-0" style="margin-bottom:50px; margin:10px; margin-top:20px; width:100%;">
        <div class="col-6" v-for="jury of jurys1" :key="jury.id">
          <div
            class="jury-card"
            @click="goToJury(jury)"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <div class="img-container">
              <img :src="jury.img" alt />
            </div>
            <p
              class="jury-card__name inside-card"
            >{{ (jury.firstName + " " + jury.lastName).toUpperCase() }}</p>
          </div>
        </div>
      </div>

      <div class="row ml-0" style="margin-bottom:50px; margin:10px; width:100%;">
        <div class="col-6" v-for="jury of jurys2" :key="jury.id">
          <div
            class="jury-card"
            @click="goToJury(jury)"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <div class="img-container">
              <img :src="jury.img" alt />
            </div>
            <p
              class="jury-card__name inside-card"
            >{{ (jury.firstName + " " + jury.lastName).toUpperCase() }}</p>
          </div>
        </div>
      </div>

      <div class="row mb-5 ml-0" style=" margin:10px; width:100%;">
        <div class="col-6" v-for="jury of jurys3" :key="jury.id">
          <div
            class="jury-card"
            @click="goToJury(jury)"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <div class="img-container">
              <img :src="jury.img" alt />
            </div>
            <p
              class="jury-card__name inside-card"
            >{{ (jury.firstName + " " + jury.lastName).toUpperCase() }}</p>
          </div>
        </div>
      </div>
      <div class="row" style="margin-bottom:30px; width:100%;"></div>
    </div>
  </div>
</template>

<script>
import { getLanguage } from "@/store/services/storage";
import { LIST_JURY } from "@/store/actions.type";
import { mapGetters } from "vuex";
import { serveJuryFromCloudFront } from "@/common/cloudFront";

export default {
  name: "JurysMobile",
  data() {
    return {
      jurys: [],
      jurys1: [],
      jurys2: [],
      jurys3: [],
      lang: ""
    };
  },
  computed: {
    ...mapGetters(["getJurys"])
  },
  methods: {
    goToJury(jury) {
      this.$router.push({
        name: "SingleJury",
        params: { slug: jury.firstName + jury.lastName, id: jury.id }
      });
    },
    nextSlide() {
      this.$refs.carouselJurysMobile.goToPage(
        this.$refs.carouselJurysMobile.getNextPage()
      );
    },
    prevSlide() {
      this.$refs.carouselJurysMobile.goToPage(
        this.$refs.carouselJurysMobile.getPreviousPage()
      );
    },
    async fetchJurys() {
      const TableName = "KM2019-Jury";
      const Limit = "100";
      const params = {
        TableName,
        Limit
      };
      await this.$store.dispatch(LIST_JURY, params);
      for (let jury of this.getJurys) {
        let jury2 = serveJuryFromCloudFront(jury)
        this.jurys.push(jury2);
      }
      //reverse sorting for mobile
      this.jurys.sort((b, a) => a.ordering - b.ordering);
      this.jurys1.push(this.jurys.pop())
      this.jurys1.push(this.jurys.pop())
      this.jurys2.push(this.jurys.pop())
      this.jurys2.push(this.jurys.pop())
      this.jurys3.push(this.jurys.pop())
    }
  },
  mounted() {
    this.fetchJurys();
    this.lang = getLanguage();
  }
};
</script>


<style>
.row {
  width: 100%;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/sass/abstracts/_mixins.scss";

.mobile-juria {
  position: relative;
  background: #0e1032;
}

.col-left {
  padding-right: 0;
  padding-left: 39px;
}

.col-right {
  padding-right: 19px;
  padding-left: 20px;
}

.graphic-right {
  width: 2px;
  height: 70%;
  background-color: black;
  position: absolute;
  bottom: 15%;
  right: 0%;
  box-shadow: -3px 0 3px 0 black;
}
.pt-10 {
  padding-top: 10%;
}
.inside-card {
  position: absolute;
  bottom: -16%;
}

.go-up {
  margin-top: -5%;
  &--small {
    margin-top: -2%;
  }
}

.card-2 {
  max-width: 75%;
}
.mt-30 {
  margin-top: 35%;
  margin-left: 17%;
}

.slide {
  flex-basis: initial !important;
  flex-shrink: 1 !important;
}

.img-next-arrow {
  width: 7rem;
}

.carousel-right {
  position: absolute;
  bottom: 10%;
  right: 3rem;
  padding-top: 19px;
  z-index: 99;
}
.carousel-right:hover {
  cursor: pointer;
}

.img-left-arrow {
  width: 7rem;
}

.carousel-left {
  z-index: 99;
  position: absolute;
  bottom: 10%;
  left: 3rem;
  padding-top: 15px;
}

.carousel-left:hover {
  cursor: pointer;
}

.title {
  text-align: center;
  font-family: Vollkorn;
  // color: black;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 2px white;
  font-size: 10rem;
  margin-top: 2rem;
}

.btn-container {
  position: absolute;
  bottom: 3%;
}

.btn {
  padding: 0.5rem 7rem;
  border: 2px solid black;
  border-radius: 10rem;
  font-family: Ubuntu;
  font-weight: 700;
  font-size: 3rem;
  margin-top: 8rem;
}

.mt-6 {
  margin-top: 5rem;
}
.jury-card {
  position: relative;
  width: 100%;
  z-index: 4;
  margin-top: 1rem;
  img {
    height: 100%;
    width: 100%;
    // z-index: 5;
  }
  &__name {
    color: white;
    font-size: 2rem;
    padding: 4px 1rem;
    background-color: #0e1032;
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
    line-height: 2rem;
  }
}

.title {
  margin-left: auto;
  margin-right: auto;
}

.h-5 {
  height: 5%;
}
.h-10 {
  height: 10%;
}
.h-15 {
  height: 15%;
}
</style>
