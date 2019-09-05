<template>
  <div class="rregullat">
    <div class="row justify-content-between artist-row align-items-center">
      <div class="col-lg-3 col-sm-2 col-xs-1 text-center">
        <img src="@/assets/img/logowhite.svg" class="img-logo" @click="goToHome()" />
      </div>
      <div class="col-lg-1 col-sm-2 col-xs-1 vertical-center back-hover" @click="goToHome()">
        <img src="@/assets/img/artistet_arrow_left.svg" alt class="back-icon center-block" />
      </div>
    </div>

    <div class="row align-items-center justify-content-center row-title">
      <div class="col-xl-7 col-lg-9 col-md-12 text-center">
        <div class="row align-items-center justify-content-center">
          <h1 class="jumbo-title-artistet">rregullore</h1>
        </div>
      </div>
    </div>

    <div class="containertext">
      <h1 class="title-rregullat">
        Rregulla te pjesemarrjes ne
        Festivalin Kenga Magjike 2019
      </h1>

      <div>
        <p class="card-text">
          Kenget duhet te jene origjinale, te padegjuara me pare dhe te krijuara enkas per “Kenga Magjike 2019”.
          <br />
          <br />Kenget e paraqitura në “Kenga Magjike 2019” nuk duhet të jenë te gjata më shume se 3 minuta e 45 sekonda.
        </p>
        <b-collapse id="collapse-1" class="mt-2">
          <b-card>
            <p class="card-text">
              Datat e pranimit te kengeve jane 2 dhe 3 Shtator 2019, vetem prane TV Klan – Shqiperi dhe jo me poste elektronike.
              <br />
              <br />Ne festivalin Kenga Magjike, mosha e artisteve interpretues eshte deri 65 vjec.
              <br />
              <br />Ne Festivalin “Kenga Magjike 2019”, artistet interpertues kendojne “Live„ ne te dyja fazat e festivalit. “E Diela Shqiptare” dhe “Netet Finale” ne Pallat te Koncerteve mbi bazen orkestrale te regjistruar me pare. Ne bazen orkestrale lejohen vetem zerat shoqerues (backvocals) dhe jo linja vokale e zerit solistik.
              <br />
              <br />Te drejtat e kengeve per botim në cd, me perjashtim te kanaleve ne Youtube, iTunes dhe CD të vetë artistit, jane e drejte ekskluzive e Producentit te Festivalit Kenga Magjike, pa cenuar te drejten e Autorit dhe interpretuesit qe u mbeten autoreve pjesemarres dhe interpretuesit ne gare.
              <br />
              <br />Kenget pjesemarrese ne “Kenga Magjike 2019” u nenshtrohen kontrates se bashkepunimit mes Producentit te Festivalit dhe artisteve pjesemarres, qe kane te drejta te firmosin mbi pronesine e kenges, ose ne emer te producenteve te tyre.
              <br />
              <br />U sugjerojme artisteve pjesemarres qe nuk kane eksperience te meparshme ne Festival, ose artisteve te cilet jane te lidhur tashme me producente dhe kane nenshkruar kontrata me ta, te njihen me pare me kontraten mes Producentit te Festivalit dhe artisteve pjesemarres per te mos nisur nje pune, e cila mund te mbetet ne mes te rruges, per shkaqe te mos njohjes se pikave te kontrates se bashkepunimit. Kontraten e bashkepunimit ja u veme ne dispozicion me paraqitjen tuaj ne zyrat e Produksionit te Kenga Magjike, ne Tv Klan (Shqiperi) nga dita e marte e cdo jave deri diten e enjte, ora 11.00 – 13.00 deri ne daten 30 Qershor 2019.
              <br />
              <br />Kenget duhet te jene te paraqitura ne Compact Disc, si produksion i perfunduar, shoqeruar nga teksti perkates dhe baza e tyre orkestrale.
              <br />
              <br />Artistet e rinj apo grupet qe nuk kane marre pjese me pare ne kete eveniment, duhet t’i beshkengjitin kenges se tyre edhe nje foto.
              <br />
              <br />Kenget e paraqitura, te plota dhe orkestarle, mbeten prove dokumentare e organizatoreve te festivalit dhe nuk u kthehen artisteve.
              <br />
              <br />Kenget qe nuk seleksionohen ne festival mbeten te lira per t’u shfrytezuar nga ana e artisteve.
              <br />
              <br />Nje interpretues ka te drejte te interpretoje vetem nje kenge ne Festival.
              <br />
              <br />Studiot e prodhimit dhe autoret jane te lire te paraqesin kenge pa limit ne Festivalin “Kenga Magjike 2019”.
              <br />
              <br />Kenget e pranuara do te paraqiten ne fazen e pare ne programin “E diela Shqiptare„ – sezoni: Shtator – Dhjetor 2019. Kenget e kualifikuara, me pas paraqiten ne fazen e dyte: ne netet finale te Kenga Magjike: 4, 5 dhe 7 Dhjetor 2019.
              <br />
              <br />Artistet interpretues jane ne dispozicion te datave qe i komunikon produksioni televiziv per interpretimin e kenges ne nje nga te dielat e fazes se pare qe nga data 22 Shtator – 01 Dhjetor 2019, si dhe ne netet finale ne rast kualifikimi, perfshire ditet e provave.
              <br />
              <br />Në “Kenga Magjike 2019” votimi i kengeve per ne naten finale do te behet sipas tradites. Ai do te jete i hapur, kengetaret do t’i deklarojne vete votat e tyre. Votimit te artisteve, do t’i shtohet votimi ne internet si dhe votimi i jurise se Festivalit. Per ne fazen GjysmeFinale, limiti i kengeve percaktohet duke marre per baze votimet brenda 7 diteve nga dita e kenges se paraqitur.
              <br />
              <br />Produksioni i Festivalit, per artistet qe jetojne jashte kufijve tokesore te Shqiperise, merr persiper shpenzimet e qendrimit dhe ushqimit ne Tirane, vetem per ditet e komunikuara nga produksioni, ku artisti duhet te paraqitet per fazen e pare dhe ne rast kualifikimi – ne te dyten. Produksioni i Festivalit nuk merr persiper asnje shpenzim tjeter, pervec artistit titullar qe interpreton kengen.
              <br />
              <br />Ne Kenga Magjike, nuk pranohen artiste te cilet shkelin qofte edhe nje nga pikat e rregullores se Festivalit.
              <br />
              <br />
            </p>
          </b-card>
        </b-collapse>
        <b-button v-b-toggle.collapse-1 variant="primary" size="lg" class="more-button">
          <img src="@/assets/img/artistet arrow l-5.svg" alt />
        </b-button>
      </div>

      <div>
        <h1 class="jumbo-title-artistet kategoria" style="font-size:10rem;">Sipas Kategorise</h1>

        <h1 class="title-rregullat" style="margin-top:20px;">BIG</h1>

        <div>
          <p class="card-text">
            Kenget duhet te jene origjinale, te padegjuara me pare dhe te krijuara enkas per “Kenga Magjike 2019”.
            <br />
            <br />Kenget e paraqitura në “Kenga Magjike 2019” nuk duhet të jenë te gjata më shume se 3 minuta e 45 sekonda.
          </p>
          <b-collapse id="collapse-2" class="mt-2">
            <b-card>
              <p class="card-text">
                Studiot e prodhimit dhe autoret jane te lire te paraqesin kenge pa limit ne Festivalin “Kenga Magjike 2019”.
                <br />
                <br />Kenget e pranuara do te paraqiten ne fazen e pare ne programin “E diela Shqiptare„ – sezoni: Shtator – Dhjetor 2019. Kenget e kualifikuara, me pas paraqiten ne fazen e dyte: ne netet finale te Kenga Magjike: 4, 5 dhe 7 Dhjetor 2019.
                <br />
                <br />
              </p>
            </b-card>
          </b-collapse>
          <b-button v-b-toggle.collapse-2 variant="primary" size="lg" class="more-button">
            <img src="@/assets/img/artistet arrow l-5.svg" alt />
          </b-button>
        </div>

        <h1 class="title-rregullat" style="margin-top:20px;">New Artist</h1>

        <div>
          <p class="card-text">
            Kenget duhet te jene origjinale, te padegjuara me pare dhe te krijuara enkas per “Kenga Magjike 2019”.
            <br />
            <br />Kenget e paraqitura në “Kenga Magjike 2019” nuk duhet të jenë te gjata më shume se 3 minuta e 45 sekonda.
          </p>
          <b-collapse id="collapse-3" class="mt-2">
            <b-card>
              <p class="card-text">
                Studiot e prodhimit dhe autoret jane te lire te paraqesin kenge pa limit ne Festivalin “Kenga Magjike 2019”.
                <br />
                <br />Kenget e pranuara do te paraqiten ne fazen e pare ne programin “E diela Shqiptare„ – sezoni: Shtator – Dhjetor 2019. Kenget e kualifikuara, me pas paraqiten ne fazen e dyte: ne netet finale te Kenga Magjike: 4, 5 dhe 7 Dhjetor 2019.
                <br />
                <br />
              </p>
            </b-card>
          </b-collapse>
          <b-button v-b-toggle.collapse-3 variant="primary" size="lg" class="more-button">
            <img src="@/assets/img/artistet arrow l-5.svg" alt />
          </b-button>
        </div>

        <h1 class="title-rregullat" style="margin-top:20px;">Finaliste</h1>

        <div>
          <p class="card-text">
            Kenget duhet te jene origjinale, te padegjuara me pare dhe te krijuara enkas per “Kenga Magjike 2019”.
            <br />
            <br />Kenget e paraqitura në “Kenga Magjike 2019” nuk duhet të jenë te gjata më shume se 3 minuta e 45 sekonda.
          </p>
          <b-collapse id="collapse-4" class="mt-2">
            <b-card>
              <p class="card-text">
                Studiot e prodhimit dhe autoret jane te lire te paraqesin kenge pa limit ne Festivalin “Kenga Magjike 2019”.
                <br />
                <br />Kenget e pranuara do te paraqiten ne fazen e pare ne programin “E diela Shqiptare„ – sezoni: Shtator – Dhjetor 2019. Kenget e kualifikuara, me pas paraqiten ne fazen e dyte: ne netet finale te Kenga Magjike: 4, 5 dhe 7 Dhjetor 2019.
                <br />
                <br />
              </p>
            </b-card>
          </b-collapse>
          <b-button v-b-toggle.collapse-4 variant="primary" size="lg" class="more-button">
            <img src="@/assets/img/artistet arrow l-5.svg" alt />
          </b-button>
        </div>
      </div>
    </div>

    <Footer v-if="windowWidth > 770" />
    <FooterSmall v-if="windowWidth < 770 && windowWidth > 600" />
  </div>
</template>


<script>
import Footer from "@/components/Footer/FooterWhite.vue";
import FooterSmall from "@/components/Footer/FooterWhiteSmall.vue";
export default {
  name: "Rregullore",
  components: {
    Footer,
    FooterSmall
  },
  data() {
    return {
      windowWidth: window.innerWidth
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
    goToHome() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/abstracts/_mixins.scss";
.kategoria {
  text-align: left;
  -webkit-text-stroke: 2px #52c2bd !important;
}

.more-button {
  border: 2px solid white;
  border-radius: 50%;
  background: transparent;
  padding: 2rem;
  margin-top: 40px;
  margin-bottom: 60px;
}

.more-button:hover {
  border: 2px solid white;
  background: transparent;
}

.more-button:focus {
  border: 2px solid white;
  background: transparent;
  box-shadow: none;
}
.more-button:active {
  border: 2px solid white;
  background: transparent;
  box-shadow: none;
}

.btn-primary:not(:disabled):not(.disabled):active,
.btn-primary:not(:disabled):not(.disabled).active,
.show > .btn-primary.dropdown-toggle {
  color: #fff;
  background-color: transparent;
  border-color: transparent;
}

.card-text {
  color: white;
  background: #0e1032;
  font-family: Ubuntu;
  font-size: 2rem;
  text-align: left;
}
.card-body {
  background: #0e1032;
  border: none;
  padding-left: 0;
}

.card {
  border: none;
}

.containertext {
  margin: 20rem;
  margin-top: 3%;
  text-align: center;
}

.title-rregullat {
  color: #52c2bd;
  font-family: Vollkorn;
  text-align: left;
  margin-bottom: 30px;
  font-size: 8rem;
  @include respond(small-screen) {
    font-size: 6rem;
  }
  @include respond(tab-port) {
    font-size: 5rem;
  }
}

.row-title {
  margin-top: 8rem;
}

.jumbo-title-artistet {
  // text-align:right;
  padding-right: 20px;
  margin-right: 20px;
  font-size: 12rem;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 2px white;

  font-family: Vollkorn;
  @include respond(small-screen) {
    font-size: 11rem;
  }
}

//on mobile breakpoint change to 100%;
.rregullat {
  position: relative;
  height: 100%;
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
</style>