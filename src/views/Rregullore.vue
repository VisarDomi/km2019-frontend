<template>
  <div class="rregullat">
    <div class="row justify-content-between artist-row align-items-center">
      <div class="col-lg-3 col-sm-2 col-1 col-xs-1 text-center">
        <img src="@/assets/img/logowhite.svg" class="img-logo" @click="goToHome()" />
      </div>
      <div class="col-lg-1 col-sm-2 col-xs-1 col-3 vertical-center back-hover" @click="goToHome()">
        <img src="@/assets/img/artistet_arrow_left.svg" alt class="back-icon center-block" />
      </div>
    </div>

    <div class="row align-items-center justify-content-center row-title">
      <div class="col-xl-7 col-lg-9 col-md-12 text-center">
        <div class="row align-items-center justify-content-center">
          <h1 class="jumbo-title-artistet" v-if="this.lang == 'en'">rules</h1>
          <h1 class="jumbo-title-artistet" v-else>rregullore</h1>
        </div>
      </div>
    </div>
    <div class="containertext" v-if="this.lang=='en'">
      <h1 class="title-rregullat">Rules of participating in ‘Kënga Magjike’ 2019</h1>

      <div>
        <p class="card-text">
          Songs should be original and created only for ‘Kënga Magjike 2019’
          <br />
          <br />
          <span class="font-weight-bold">Songs shouldn’t be longer than 3 minutes and 45 seconds</span>
        </p>
        <b-collapse id="collapse-1" class="mt-2">
          <b-card>
            <p class="card-text">
              The maximum age of participating is 65 years old
              <br />
              <br />
              <span
                class="font-weight-bold"
              >In the ‘Kënga Magjike’ 2019, the artists who will interpret their art works will sing live in both phases of the festival. ‘E Diela Shqiptare’ and ‘Final Nights’ in the Palace of Congress. Only back vocals are accepted.</span>
              <br />
              <br />The rights to the songs for CD publishing, with the exception of the artist’s own YouTube, iTunes and CD channels, are the exclusive rights of the Producer of the Magic Song Festival, without prejudice to the copyright and performers remaining on the participating authors and performers in the competition
              <br />
              <br />Songs participating in this year’s festival are subject to a contract of cooperation between the Festival Producer and the participating artists, who have the right to sign ownership of the song, or on behalf of their producers.
              <br />
              <br />The songs should be featured on the CD, as finished production accompanied by the respective text and their orchestral basis. The featured songs full and orchestral, remain documentary evidence of the festival’s organizers and are not returned to the artists.
              <br />
              <br />Songs not selected at the festival remain free to be used by artists.
              <br />
              <br />One performer has the right to perform only one song at the festival
              <br />
              <br />Production studios and authors are free to present unlimited songs for the festival
              <br />
              <br />Accepted songs will appear in the first phase of the program ‘E Diela Shqiptare’, in the new season September – December 2019. Qualified songs will then appear in the second stage: the final nights of ‘Kënga Magjike’. During 4, 5 and 7 December 2019.
              <br />
              <br />Performing artists are available on dates announced by the television production for the performance of the song on one of the first stage Sundays from September 22nd to December 1st 2019; as well as the final nights in case of qualification, including rehearsals.
              <br />
              <br />
              <br />In ‘Kënga Magjike 2019’ the voting of the songs for the final night will be done according to tradition. It will be open; the singers will declare their votes for themselves.. For the semi-final stage, the song limit is determined based on the voting within 7 days of the song being presented.
              <br />
              <br />
              <br />The festival’s production, for artists living outside Albania’s territorial boundaries, covers the cost of stay and food in Tirana, only for the days communicated by the production, where the artist must appear for the first stage and in case of qualification – in the second. The festival’s production assumes no expense other than the artist interpreting the song.
              <br />Ne Kenga Magjike, nuk pranohen artiste te cilet shkelin qofte edhe nje nga pikat e rregullores se Festivalit.
              <br />
              <br />In ‘Kënga Magjike’ artists who violate even one of the rules of the festival are not accepted.
              <br />
              <br />
            </p>
          </b-card>
        </b-collapse>
        <b-button
          v-b-toggle.collapse-1
          size="lg"
          class="improved-button"
          :class="{'rotated': RregulloreExpanded}"
          @click="RregulloreMoreClicked()"
        >
          <img src="@/assets/img/buttons_export/button_rregullore_down.svg" style="width:8rem;" alt />
        </b-button>
      </div>

      <div>
        <h1 class="jumbo-title-artistet kategoria" style="font-size:7rem;">According to the category</h1>

        <h1 class="title-rregullat" style="margin-top:20px;">BIG</h1>

        <div>
          <p class="card-text">
            The ‘BIG’ category includes artists who have sung in this category in the final and semifinal nights of ‘Kënga Magjike’ from 1999 to 2018.
            <br />
            <br />In the ‘Big’ category are only first place winners in: ‘X Factor’, ‘The Voice’, and ‘Top Fest’.
          </p>
        </div>
        <div class="row spacer--small"></div>
        <h1 class="title-rregullat" style="margin-top:20px;">New Artist</h1>

        <div>
          <p class="card-text">
            In the ‘New Artist’ category, all artists who do not meet the requirements for participation in the ‘Big’ category, but who wish to participate in the festival.
            <br />
            <br />The ‘New Artist’ category presents the songs before the jury in the first phase, which takes place within ‘E Diela Shqiptare’
          </p>
        </div>
        <div class="row-spacer--small"></div>
        <h1 class="title-rregullat" style="margin-top:20px;">International Artist</h1>

        <div>
          <p
            class="card-text"
          >This category includes artists who come from foreign countries and have non – Albanian nationality. They compete both in the Big category and New Artist category, where they serve the same criteria as Albanian artists</p>
        </div>
        <div class="spacer--small"></div>
        <h1 class="title-rregullat" style="margin-top:20px;">Finalist Artists</h1>

        <div>
          <p class="card-text">
            During the final there is a total of 20 performances, voted by the artists, jury and public according to regulation.
            <br />
            <br />If the voting artists go to the Final Night also the name of the artist selected by the production, as well as the artist selected by the Jury of the ‘New Artist’ category, then the 20 finalist songs voted by the artists are respected.
            <br />
            <br />Otherwise there will be 18 or 19 of them voted on, depending on which of the two artists did not vote for the final night
          </p>
        </div>
      </div>
    </div>
    <div class="containertext" v-else>
      <h1 class="title-rregullat">Rregulla te pjesemarrjes ne Festivalin Kenga Magjike 2019</h1>

      <div>
        <p class="card-text">
          Kenget duhet te jene origjinale, te padegjuara me pare dhe te krijuara enkas per “Kenga Magjike 2019”
          <br />
          <br />
          <span
            class="font-weight-bold"
          >Kenget e paraqitura në “Kenga Magjike 2019” nuk duhet të jenë te gjata më shume se 3 minuta e 45 sekonda.</span>
        </p>
        <b-collapse id="collapse-1" class="mt-2">
          <b-card>
            <p class="card-text">
              Ne festivalin Kenga Magjike, mosha e artisteve interpretues eshte deri 65 vjec.
              <br />
              <br />
              <span
                class="font-weight-bold"
              >Ne Festivalin “Kenga Magjike 2019”, artistet interpertues kendojne “Live" ne te dyja fazat e festivalit. “E Diela Shqiptare” dhe “Netet Finale” ne Pallat te Koncerteve mbi bazen orkestrale te regjistruar me pare. Ne bazen orkestrale lejohen vetem zerat shoqerues (backvocals) dhe jo linja vokale e zerit solistik.</span>
              <br />
              <br />Te drejtat e kengeve per botim në cd, me perjashtim te kanaleve ne Youtube, iTunes dhe CD të vetë artistit, jane e drejte ekskluzive e Producentit te Festivalit Kenga Magjike, pa cenuar te drejten e Autorit dhe interpretuesit qe u mbeten autoreve pjesemarres dhe interpretuesit ne gare.
              <br />
              <br />Kenget pjesemarrese ne “Kenga Magjike 2019” u nenshtrohen kontrates se bashkepunimit mes Producentit te Festivalit dhe artisteve pjesemarres, qe kane te drejta te firmosin mbi pronesine e kenges, ose ne emer te producenteve te tyre.
              <br />
              <br />Kenget duhet te jene te paraqitura ne Compact Disc,
              <span
                class="font-weight-bold"
              >si produksion i perfunduar,</span> shoqeruar nga
              <span class="font-weight-bold">teksti perkates</span> dhe
              <br />
              <br />Kenget qe nuk seleksionohen ne festival mbeten te lira per t’u shfrytezuar nga ana e artisteve.
              <br />
              <br />Nje interpretues ka te drejte te interpretoje vetem nje kenge ne Festival.
              <br />
              <br />Studiot e prodhimit dhe autoret jane te lire te paraqesin kenge pa limit ne Festivalin “Kenga Magjike 2019”.
              <br />
              <br />Kenget e pranuara do te paraqiten ne fazen e pare ne programin “E diela Shqiptare" – sezoni: Shtator – Dhjetor 2019. Kenget e kualifikuara, me pas paraqiten ne fazen e dyte: ne netet finale te Kenga Magjike: 4, 5 dhe 7 Dhjetor 2019.
              <br />
              <br />Artistet interpretues jane ne dispozicion te datave qe i komunikon produksioni televiziv per interpretimin e kenges ne nje nga te dielat e fazes se pare qe nga data 22 Shtator – 01 Dhjetor 2019, si dhe ne netet finale ne rast kualifikimi, perfshire ditet e provave.
              <br />
              <br />Në “Kenga Magjike 2019” votimi i kengeve per ne naten finale do te behet sipas tradites. Ai do te jete i hapur, kengetaret do t’i deklarojne vete votat e tyre. Votimit te artisteve, do t’i shtohet votimi ne internet si dhe votimi i jurise se Festivalit. Per ne fazen GjysmeFinale, limiti i kengeve percaktohet duke marre per baze votimet brenda 7 diteve nga dita e kenges se paraqitur.
              <br />
              <br />Produksioni i Festivalit, per artistet qe jetojne jashte kufijve tokesore te Shqiperise, merr persiper shpenzimet e qendrimit dhe ushqimit ne Tirane,
              <span
                class="font-weight-bold"
              >vetem per ditet e komunikuara nga produksioni</span>, ku artisti duhet te paraqitet per fazen e pare dhe ne rast kualifikimi – ne te dyten. Produksioni i Festivalit nuk merr persiper asnje shpenzim tjeter, pervec artistit titullar qe interpreton kengen.
              <br />
              <br />Ne Kenga Magjike, nuk pranohen artiste te cilet shkelin qofte edhe nje nga pikat e rregullores se Festivalit.
              <br />
              <br />
            </p>
          </b-card>
        </b-collapse>
        <b-button
          v-b-toggle.collapse-1
          size="lg"
          class="improved-button"
          :class="{'rotated': RregulloreExpanded}"
          @click="RregulloreMoreClicked()"
        >
          <img src="@/assets/img/buttons_export/button_rregullore_down.svg" style="width:8rem;" alt />
        </b-button>
      </div>

      <div>
        <h1 class="jumbo-title-artistet kategoria" style="font-size:7rem;">Sipas Kategorise</h1>

        <h1 class="title-rregullat" style="margin-top:20px;">BIG</h1>

        <div>
          <p class="card-text">
            Ne kategorine “Big” bejne pjese artistet qe kane kenduar ne kete kategori ne netet finale dhe gjysemfinale te Festivalit Kenga Magjike nga Edicioni 1999 deri 2018.
            <br />
            <br />Ne kategorine “Big” bejne pjese vetem fituesit e vendit te pare ne: “X Factor”, “The Voice” dhe “Top Fest”,
          </p>
          <b-collapse id="collapse-2" class="mt-2">
            <b-card>
              <p class="card-text">
                Ne kategorine “Big” bejne pjese vetem fituesit e 3 çmimeve te para te Fest RTSH.
                <br />
                <br />Ne kategorine “Big”, Produksioni ne baze te nje Komisioni qe therret, mund te marre ne konsiderate kengetaret te cilet kane mbi 10 milion klikime ne kenget e tyre ne YOUTUBE.
                <br />
                <br />Ne kategorine “Big” bejne pjese artistet te cilet Juria e kategorisë New Artist i kualifikon direkt ne kete kategori.
                <br />
                <br />Nese artistet e rinj, kane fituar apo fitojne per dy edicione festivali te drejten per te votuar ne netet gjysemfinale perkrah artisteve ‘’Big’’, ata kalojne automatikisht ne kategorine “Big” per Edicionin e rradhes dhe pergjithmone.
                <br />
                <br />Ne kategorine Big bejne pjese ata artiste te cilet kane nje aktivitet te pasur interancional, ose qe kane fituar nje nga 3 çmimet e para ne nje aktivitet te rendesishem nderkombetar.
                <br />
                <br />Produksioni i Festivalit Kenga Magjike, zgjedh kenget e kategorise “Big” te cilat do te kalojne ne Fazen e Pare te Edicionit 2019 (Shtator – Dhjetor 2019) si edhe ne Netet Finale ne Pallatin e Koncerteve. Kengetaret e kesaj kategorie, ne fund, votojne kenget qe do te shkojne ne Naten Finale.
                <br />
                <br />Produksioni i Festivalit Kenga Magjike, ka te drejten fakultative te zgjedhe nje nga kenget e cdo Edicioni, per ta kaluar ne Naten Finale duke e futur emrin ne nje zarf ne perfundim te Nates 2.
                <br />
                <br />Ne kategorine “Big” bejne pjese te gjithe artistet e Kategorise New Artist, te cilet votohen nga koleget per te interpretuar ne Naten Finale.
                <br />
              </p>
            </b-card>
          </b-collapse>
          <b-button
            v-b-toggle.collapse-2
            size="lg"
            class="improved-button"
            :class="{'rotated': RregulloreExpanded}"
            @click="RregulloreMoreClicked()"
          >
            <img
              src="@/assets/img/buttons_export/button_rregullore_down.svg"
              style="width:8rem;"
              alt
            />
          </b-button>
        </div>

        <h1 class="title-rregullat" style="margin-top:20px;">New Artist</h1>

        <div>
          <p class="card-text">
            1. Ne kategorine “New Artist”, bejne pjese te gjithe artistet te cilet nuk plotesojne kushtet e pjesemarrjes ne Kategorine “Big”, por qe kane deshire te marrin pjese ne Kenga Magjike 2019.
            <br />
            <br />2. Kategoria “New Artist”, paraqesin kenget perpara jurise ne Fazen e pare e cila zhvillohet brenda programit “E Diela Shqiptare”.
          </p>
          <b-collapse id="collapse-3" class="mt-2">
            <b-card>
              <p class="card-text">
                3. Ne rast kualifilimi per me tej, Juria e kesaj kategorie, do te shpalle artistet te cilet do te kalojne ne mbremjet GjysemFinale.
                <br />
                <br />4. Ne Naten GjysemFinale 1 dhe Naten GjysemFinale 2 artistet e Kategorise “New Artist” do te vleresohen perseri nga Juria, e njejta e fazes se pare. Kjo Juri vendos se cilet artiste kane te drejte te votojne dhe te votohen per ne Naten Finale.
                <br />
                <br />6. Ne rast se nje artist i kategorise “New Artist”, e fiton 2 here statusin per te votuar, atehere ai automatikisht fiton pergjithmone statusin e kategorise “Big”.
                <br />
                <br />7. Pavaresisht votimeve te vete artisteve, Juria e Kategorise “New Artist”, ka te drejte te kaloje ne Naten Finale, vetem nje nga artistet e Kategorise “New Artist”. Emri i saj/i tij/i tyre/ vendoset ne nje zarf ne fund te Nates GjysemFinale 2 dhe deklarohet vetem ne Naten Finale duke fituar Cmimin “Best New Artist”.
                <br />
                <br />8. Juria e Kategorise “New Artist”, ka te drejte t’u jape artisteve te rinj, statusin e perhershem e kalimit ne Kategorine “Big” edhe ne rastin kur nuk votohet nga koleget artiste. Kjo nese ndodh, do te deklarohet ne Naten Finale.
                <br />
                <br />9. Pas Festivalit “Kenga Magjike” duke pare votimet e artisteve dhe duke analizuar performancat ne skene, Produksioni i Fastivalit ka te drejte fakultative çdo vit te jape statusin “Big”, vetem per nje ose dy nga artistet e kategorise “New Artist”.
                <br />
                <br />10. Nese nje kengetar New Artist merr pjese ne duet apo trio me nje artist Big, pavaresisht nga kjo, kur ai te konkurroje ne edicionet pasardhese, ai do te jete serish ne kategorine New Artist deri ne nje vendimarrje te jurise.
              </p>
            </b-card>
          </b-collapse>
          <b-button
            v-b-toggle.collapse-3
            size="lg"
            class="improved-button"
            :class="{'rotated': RregulloreExpanded}"
            @click="RregulloreMoreClicked()"
          >
            <img
              src="@/assets/img/buttons_export/button_rregullore_down.svg"
              style="width:8rem;"
              alt
            />
          </b-button>
        </div>

        <h1 class="title-rregullat" style="margin-top:20px;">International Artist</h1>

        <div>
          <p class="card-text">
            Ne kete Kategori marrin pjese artiste te cilet vijne nga shtete te huaja dhe kane kombesi jo shqiptare.
            <br />
            <br />Ata konkurrojne edhe ne kategorine Big edhe ne Kategorine New Artist, ku si baze per kete sherbejne te njejtat kritere si edhe per artistet shqiptare.
          </p>
        </div>
        <div class="spacer--small"></div>
        <h1 class="title-rregullat" style="margin-top:20px;">Artistet Finaliste</h1>

        <div>
          <p class="card-text">
            Ne naten Finale do te interperetohen 20 kenge, te votuar nga vete artistet, sipas rregullores.
            <br />
            <br />Nese artistet votues do te kalojne ne Naten Finale edhe emrin e Artistit te zgjedhur nga Produksioni, si edhe artistin e zgjedhur nga Juria e Kategorise “New Artist”, atehere respektohen 20 Kenget Finaliste te votuara nga artistet. Ne rast te kundert do te jene 18 ose 19 te votuara prej tyre, ne varesi se cilin nga 2 artistet nuk kane votuar per ne Naten Finale.
          </p>
        </div>
      </div>
    </div>

    <!-- <div class="spacer"></div> -->
    <div class="row spacer"></div>

    <FooterWhite height="height-5" v-if="windowWidth > 770" />
    <FooterWhiteSmall v-else-if="windowWidth < 770 && windowWidth > 600" />
    <FooterWhiteMobile v-else />
  </div>
</template>


<script>
const FooterWhite = () => import("@/components/Footer/FooterWhite");
const FooterWhiteSmall = () => import("@/components/Footer/FooterWhiteSmall");
const FooterWhiteMobile = () => import("@/components/Footer/FooterWhiteMobile");

import { getLanguage, saveLanguage } from "@/store/services/storage";

export default {
  name: "Rregullore",
  components: {
    FooterWhiteMobile,
    FooterWhite,
    FooterWhiteSmall
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      lang: "",
      BigExpanded: false,
      NewExpanded: false,
      RregulloreExpanded: false
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        this.windowWidth = window.innerWidth;
      });
    });

    this.lang = getLanguage();
  },
  methods: {
    goToHome() {
      this.$router.push({ name: "Home" });
    },
    BigMoreClicked() {
      this.BigExpanded = !this.BigExpanded;
    },
    NewMoreClicked() {
      this.NewExpanded = !this.NewExpanded;
    },
    RregulloreMoreClicked() {
      this.RregulloreExpanded = !this.RregulloreExpanded;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/abstracts/_mixins.scss";

.improved-button {
  background: none;
  border-color: transparent;
  background-color: transparent;
  box-shadow: none;
}

.btn {
  background: none;
  border-color: transparent;
  background-color: transparent;
  box-shadow: none;
}

.improved-button:focus {
  background: none;
  border-color: transparent;
  background-color: transparent;
  box-shadow: none;
}
.btn:focus {
  background: none;
  border-color: transparent;
  background-color: transparent;
  box-shadow: none;
}

.improved-button:active {
  background: none;
  border-color: transparent;
  background-color: transparent;
  box-shadow: none;
}

.btn:active {
  background: none;
  border-color: transparent;
  background-color: transparent;
  box-shadow: none;
}

.btn-secondary:active {
  background: none;
  border-color: transparent;
  background-color: transparent;
  box-shadow: none;
}

.improved-button:hover {
  background: none;
  border-color: transparent;
  background-color: transparent;
  box-shadow: none;
}

.btn:hover {
  background: none;
  border-color: transparent;
  background-color: transparent;
  box-shadow: none;
}

.btn-secondary:hover {
  background: none;
  border-color: transparent;
  background-color: transparent;
  box-shadow: none;
}

.rotated {
  transform: rotate(180deg);
}

.spacer {
  height: 20rem;
  @include respond(phone) {
    height: 20rem;
  }
  &--small {
    height: 5rem;
  }
}

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
  margin: 16%;
  margin-top: 3%;
  text-align: center;
  margin-bottom: 0px;
  @include respond(phone) {
    margin: 6%;
  }
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
  @include respond(phone) {
    margin-top: 4rem;
  }
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
  @include respond(phone) {
    font-size: 8rem;
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