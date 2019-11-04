<template>
  <div class="artist-page">
    <div class="row justify-content-between menu-row align-items-center">
      <div class="col-lg-3 col-sm-2 col-xs-9 col-9 text-center logo-col">
        <img src="@/assets/img/logowhite.svg" class="align-middle img-logo" @click="goToHome()" alt />
      </div>
      <div
        class="col-lg-1 col-sm-2 col-xs-3 col-3 vertical-center back-hover-artist"
        @click="goToHome()"
      >
        <img src="@/assets/img/artistet_arrow_right.svg" alt class="back-icon center-block" />
      </div>
    </div>

    <div class="artist-container container">
      <div class="row">
        <div class="col-lg-4">
          <div class="img-container">
            <img class="img" :src="getJury.hoverImg" alt />
          </div>
        </div>
        <div class="col-lg-6 ml-5 top-padded-col">
          <h1 class="artist-name">{{getJury.firstName}}</h1>
          <h1 class="artist-surname">{{getJury.lastName}}</h1>
          <h3 class="bio-text">bio</h3>
          <h4 class="bio-description" v-if="this.lang == 'en'">{{getJury.bioEng}}</h4>
          <h4 class="bio-description" v-else>{{getJury.bio}}</h4>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h1 class="trigger-text" v-if="this.lang == 'en'">Other jury participants:</h1>
          <h1 class="trigger-text" v-else>Anetare te tjere te jurise:</h1>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-3" v-for="jury of jurys" :key="jury.id">
          <div class="artist-card abs-bottom" @click="goToJury(jury)">
            <div class="img-container">
              <img class="img" :src="jury.hoverImg" alt />
            </div>
            <p class="artist-card__name go-up--small">{{jury.firstName + " " + jury.lastName}}</p>
            <br />
          </div>
        </div>
      </div>
    </div>
    <div class="spacer"></div>
    <FooterWhite v-if="windowWidth > 770" />
    <FooterWhiteSmall v-if="windowWidth < 770 && windowWidth > 600" />
    <FooterWhiteMobile v-if="windowWidth < 600" />
  </div>
</template>

<script>
const FooterWhite = () => import("@/components/Footer/FooterWhite");
const FooterWhiteMobile = () => import("@/components/Footer/FooterWhiteMobile");
const FooterWhiteSmall = () => import("@/components/Footer/FooterWhiteSmall");
import { getLanguage, saveLanguage } from "@/store/services/storage";
import { mapGetters } from "vuex";
import { ApiService } from "@/store/services/api";
import store from "@/store";
import { LIST_JURY, GET_JURY } from "@/store/actions.type";
import { SET_JURY } from "@/store/mutations.type";
import { serveJuryFromCloudFront } from "@/common/cloudFront";

export default {
  name: "SingleJury",
  components: {
    FooterWhiteMobile,
    FooterWhite,
    FooterWhiteSmall
  },
  data() {
    return {
      lang: "",
      windowWidth: window.innerWidth,
      jurys: []
    };
  },
  beforeRouteEnter(to, from, next) {
    const TableName = "KM2019-Jury";
    const id = to.params.id;
    const params = {
      TableName,
      id
    };
    ApiService.get(params)
      .then(res => {
        let jury = res.data.Item;
        let jury2 = serveJuryFromCloudFront(jury);
        store.commit(SET_JURY, jury2);
        next();
      })
      .catch(err => {
        next();
      });
  },
  head() {
    return {
      meta: [
        {
          name: "og:image",
          content: this.getJury.img
        },
        {
          name: "og:title",
          content: this.getJury.firstName + " " + this.getJury.lastName
        },
        {
          name: "og:description",
          content: this.getJury.bio
        }
      ]
    };
  },

  computed: {
    ...mapGetters(["getJury", "getJurys"])
  },
  methods: {
    goToHome() {
      this.$router.push({ name: "Home" });
    },
    async goToJury(jury) {
      this.jurys = [];
      await this.fetchJury(jury.id);
      this.fetchJurys(jury);
      this.$router.push({
        name: "SingleJury",
        params: { slug: jury.firstName + jury.lastName, id: jury.id }
      });
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
        if (jury.id != this.getJury.id) {
          let jury2 = serveJuryFromCloudFront(jury);
          this.jurys.push(jury2);
        }
      }
      this.jurys.sort((a, b) => a.ordering - b.ordering);
    },
    async fetchJury(id) {
      const TableName = "KM2019-Jury";
      const params = {
        TableName,
        id
      };
      await this.$store.dispatch(GET_JURY, params);
      let jury2 = serveJuryFromCloudFront(this.getJury);
      this.$store.commit(SET_JURY, jury2);
    }
  },
  mounted() {
    this.lang = getLanguage();
    this.fetchJurys();
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        this.windowWidth = window.innerWidth;
      });
    });
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
  @include respond(phone) {
    margin-bottom: 5rem;
  }
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
