<template>
  <div class="section-sponsorz padder">
    <HeaderHero menutype="menu__items--black" logoBlack="true" />
    <!-- if larger than tablet -->
    <div v-if="windowWidth > 950">
      <div class="container">
        <div
          class="row no-gutters justify-content-center"
          style="padding-bottom:15%; padding-top:10%;"
        >
          <div class="col-3">
            <a href="www.tirana.al" target="_blank">
              <img
                class="img-fluid img-sponsor"
                src="@/assets/img/sponsors/1_bashkiatirane_logo.png"
                alt
              />
            </a>
          </div>

          <div class="col-3">
            <a href="www.pirro.al" target="_blank">
              <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/2_pirro_logo.png" alt />
            </a>
          </div>

          <div class="col-3">
            <a href="www.hako.al" target="_blank">
              <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/3_hako_logo.png" alt />
            </a>
          </div>

          <div class="col-3">
            <a href="https://www.intermed.al/tylolhot-2/" target="_blank">
              <img
                class="img-fluid img-sponsor"
                src="@/assets/img/sponsors/4_tylol_hot_logo.png"
                alt
              />
            </a>
          </div>

          <div class="col-3">
            <a href="www.era.al" target="_blank">
              <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/5_Era_logo.png" alt />
            </a>
          </div>

          <div class="col-3">
            <a href=" www.tess.al" target="_blank">
              <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/6_tess_logo.png" alt />
            </a>
          </div>

          <div class="col-3">
            <a href=" www.prima.al" target="_blank">
              <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/7_prima_logo.png" alt />
            </a>
          </div>

          <div class="col-3">
            <a href="www.pierrecardin.al" target="_blank">
              <img
                class="img-fluid img-sponsor"
                src="@/assets/img/sponsors/8_pierrecardin_logo.png"
                alt
              />
            </a>
          </div>

          <div class="col-3">
            <a href="www.spar.al" target="_blank">
              <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/9_spar_logo.png" alt />
            </a>
          </div>

          <div class="col-3">
            <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/10_vezareas_logo.png" alt />
          </div>

          <div class="col-3">
            <a href="http://www.hidrosistem.al/" target="_blank">
              <img
                class="img-fluid img-sponsor"
                src="@/assets/img/sponsors/11_hidrosistem_logo.png"
                alt
              />
            </a>
          </div>

          <div class="col-3">
            <a href="https://www.teoren.al/en/" target="_blank">
              <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/12_Eglo_logo.png" alt />
            </a>
          </div>

          <div class="col-3">
            <a href="www.kgjs.al" target="_blank">
              <img
                class="img-fluid img-sponsor"
                src="@/assets/img/sponsors/13_klinikagjermaeesyrit_logo.png"
                alt
              />
            </a>
          </div>

          <div class="col-3">
            <a href="www.geraldinasposa.com" target="_blank">
              <img
                class="img-fluid img-sponsor"
                src="@/assets/img/sponsors/14_geraldina_logo.png"
                alt
              />
            </a>
          </div>
          <div class="col-3">
            <a href="https://www.curaprox.com/al-sq" target="_blank">
              <img
                class="img-fluid img-sponsor"
                src="@/assets/img/sponsors/15_curaprox_logo.png"
                alt
              />
            </a>
          </div>
          <div class="col-3">
            <a href=" https://instagram.com/smeg.al?igshid=sw4oviy3afmj" target="_blank">
              <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/16_smeg_logo.png" alt />
            </a>
          </div>
        </div>
      </div>

      <FooterBlack v-if="windowWidth > 770" />
    </div>

    <!-- if mobile -->
    <div v-else-if="windowWidth< 770">
      <HeaderMobile />

      <div class="container">
        <div
          class="row no-gutters justify-content-center"
          style="margin-top:17%; margin-bottom:20%;"
        >
          <div class="col-4">
            <a href="www.tirana.al" target="_blank">
              <img
                class="img-fluid img-sponsor"
                src="@/assets/img/sponsors/1_bashkiatirane_logo.png"
                alt
              />
            </a>
          </div>

          <div class="col-4">
            <a href="www.pirro.al" target="_blank">
              <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/2_pirro_logo.png" alt />
            </a>
          </div>

          <div class="col-4">
            <a href="www.hako.al" target="_blank">
              <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/3_hako_logo.png" alt />
            </a>
          </div>

          <div class="col-4">
            <a href="https://www.intermed.al/tylolhot-2/" target="_blank">
              <img
                class="img-fluid img-sponsor"
                src="@/assets/img/sponsors/4_tylol_hot_logo.png"
                alt
              />
            </a>
          </div>

          <div class="col-4">
            <a href="www.era.al" target="_blank">
              <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/5_Era_logo.png" alt />
            </a>
          </div>

          <div class="col-4">
            <a href="www.tess.al" target="_blank">
              <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/6_tess_logo.png" alt />
            </a>
          </div>

          <div class="col-4">
            <a href="www.prima.al" target="_blank">
              <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/7_prima_logo.png" alt />
            </a>
          </div>

          <div class="col-4">
            <a href="www.pierrecardin.al" target="_blank">
              <img
                class="img-fluid img-sponsor"
                src="@/assets/img/sponsors/8_pierrecardin_logo.png"
                alt
              />
            </a>
          </div>

          <div class="col-4">
            <a href="www.spar.al" target="_blank">
              <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/9_spar_logo.png" alt />
            </a>
          </div>

          <div class="col-4">
            <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/10_vezareas_logo.png" alt />
          </div>

          <div class="col-4">
            <a href=" http://www.hidrosistem.al/" target="_blank">
              <img
                class="img-fluid img-sponsor"
                src="@/assets/img/sponsors/11_hidrosistem_logo.png"
                alt
              />
            </a>
          </div>

          <div class="col-4">
            <a href="https://www.teoren.al/en/" target="_blank">
              <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/12_Eglo_logo.png" alt />
            </a>
          </div>

          <div class="col-4">
            <a href="www.kgjs.al" target="_blank">
              <img
                class="img-fluid img-sponsor"
                src="@/assets/img/sponsors/13_klinikagjermaeesyrit_logo.png"
                alt
              />
            </a>
          </div>

          <div class="col-4">
            <a href="www.geraldinasposa.com" target="_blank">
              <img
                class="img-fluid img-sponsor"
                src="@/assets/img/sponsors/14_geraldina_logo.png"
                alt
              />
            </a>
          </div>
          <div class="col-4">
            <a href="https://www.curaprox.com/al-sq" target="_blank">
              <img
                class="img-fluid img-sponsor"
                src="@/assets/img/sponsors/15_curaprox_logo.png"
                alt
              />
            </a>
          </div>
          <div class="col-4">
            <a href="  https://instagram.com/smeg.al?igshid=sw4oviy3afmj" target="_blank">
              <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/16_smeg_logo.png" alt />
            </a>
          </div>
        </div>
      </div>

      <FooterBlackMobile />
    </div>

    <!-- tablet -->
    <div v-else>
      <HeaderHero menutype="menu__items--black" logoBlack="true" />

      <div class="container">
        <div
          class="row no-gutters justify-content-center"
          style="margin-top:40%; margin-bottom:20%;"
        >
          <div class="col-4">
            <a href="www.tirana.al" target="_blank">
              <img
                class="img-fluid img-sponsor"
                src="@/assets/img/sponsors/1_bashkiatirane_logo.png"
                alt
              />
            </a>
          </div>

          <div class="col-4">
            <a href="www.pirro.al" target="_blank">
              <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/2_pirro_logo.png" alt />
            </a>
          </div>

          <div class="col-4">
            <a href="www.hako.al" target="_blank">
              <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/3_hako_logo.png" alt />
            </a>
          </div>

          <div class="col-4">
            <a href="https://www.intermed.al/tylolhot-2/" target="_blank">
              <img
                class="img-fluid img-sponsor"
                src="@/assets/img/sponsors/4_tylol_hot_logo.png"
                alt
              />
            </a>
          </div>

          <div class="col-4">
            <a href=" www.era.al" target="_blank">
              <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/5_Era_logo.png" alt />
            </a>
          </div>

          <div class="col-4">
            <a href="www.tess.al" target="_blank">
              <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/6_tess_logo.png" alt />
            </a>
          </div>

          <div class="col-4">
            <a href="www.prima.al" target="_blank">
              <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/7_prima_logo.png" alt />
            </a>
          </div>

          <div class="col-4">
            <a href="www.pierrecardin.al" target="_blank">
              <img
                class="img-fluid img-sponsor"
                src="@/assets/img/sponsors/8_pierrecardin_logo.png"
                alt
              />
            </a>
          </div>

          <div class="col-4">
            <a href="www.spar.al" target="_blank">
              <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/9_spar_logo.png" alt />
            </a>
          </div>

          <div class="col-4">
            <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/10_vezareas_logo.png" alt />
          </div>

          <div class="col-4">
            <a href="http://www.hidrosistem.al/" target="_blank">
              <img
                class="img-fluid img-sponsor"
                src="@/assets/img/sponsors/11_hidrosistem_logo.png"
                alt
              />
            </a>
          </div>

          <div class="col-4">
            <a href="https://www.teoren.al/en/" target="_blank">
              <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/12_Eglo_logo.png" alt />
            </a>
          </div>

          <div class="col-4">
            <a href="www.kgjs.al" target="_blank">
              <img
                class="img-fluid img-sponsor"
                src="@/assets/img/sponsors/13_klinikagjermaeesyrit_logo.png"
                alt
              />
            </a>
          </div>

          <div class="col-4">
            <a href="www.geraldinasposa.com" target="_blank">
              <img
                class="img-fluid img-sponsor"
                src="@/assets/img/sponsors/14_geraldina_logo.png"
                alt
              />
            </a>
          </div>
          <div class="col-4">
            <a href="https://www.curaprox.com/al-sq" target="_blank">
              <img
                class="img-fluid img-sponsor"
                src="@/assets/img/sponsors/15_curaprox_logo.png"
                alt
              />
            </a>
          </div>
          <div class="col-4">
            <a href=" https://instagram.com/smeg.al?igshid=sw4oviy3afmj" target="_blank">
              <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/16_smeg_logo.png" alt />
            </a>
          </div>
        </div>
      </div>

      <FooterBlackSmall />
    </div>
  </div>
</template>

<script>
import FooterBlack from "@/components/Footer/FooterBlack.vue";
import FooterBlackSmall from "@/components/Footer/FooterBlackSmall.vue";
import FooterBlackMobile from "@/components/Footer/FooterBlackMobile.vue";
import Footer from "@/components/Footer/FooterWhite.vue";
import HeaderHero from "@/components/Headers/HeaderHero.vue";

export default {
  name: "SponsorSectionz",
  components: {
    FooterBlack,
    FooterBlackSmall,
    FooterBlackMobile,
    Footer,
    HeaderHero
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/sass/abstracts/_mixins.scss";
.padder {
  padding-top: 50px;
  padding-bottom: 50px;
  @include respond(phone) {
    // padding-top: 50px;
    padding-bottom: 0;
  }
}

.spacer {
  height: 15rem;
}

.img-sponsor {
  width: 28vh;
}

.section-sponsorz {
  position: relative;
  // height: 100vh;
}
</style>
