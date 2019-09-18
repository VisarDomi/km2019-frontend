<template>
  <div class="section-sponsorz h-100">
    <div v-if="windowWidth > 950">
      <div class="spacer"></div>

      <div class="container h-75">
        <div class="row no-gutters justify-content-center">
          <div class="col-3">
            <img
              class="img-fluid img-sponsor"
              src="@/assets/img/sponsors/1_bashkiatirane_logo.png"
              alt
            />
          </div>

          <div class="col-3">
            <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/2_pirro_logo.png" alt />
          </div>

          <div class="col-3">
            <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/3_hako_logo.png" alt />
          </div>

          <div class="col-3">
            <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/4_tylol_hot_logo.png" alt />
          </div>

          <div class="col-3">
            <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/5_Era_logo.png" alt />
          </div>

          <div class="col-3">
            <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/6_tess_logo.png" alt />
          </div>

          <div class="col-3">
            <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/7_prima_logo.png" alt />
          </div>

          <div class="col-3">
            <img
              class="img-fluid img-sponsor"
              src="@/assets/img/sponsors/8_pierrecardin_logo.png"
              alt
            />
          </div>

          <div class="col-3">
            <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/9_spar_logo.png" alt />
          </div>

          <div class="col-3">
            <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/10_vezareas_logo.png" alt />
          </div>

          <div class="col-3">
            <img
              class="img-fluid img-sponsor"
              src="@/assets/img/sponsors/11_hidrosistem_logo.png"
              alt
            />
          </div>

          <div class="col-3">
            <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/12_Eglo_logo.png" alt />
          </div>

          <div class="col-3">
            <img
              class="img-fluid img-sponsor"
              src="@/assets/img/sponsors/13_klinikagjermaeesyrit_logo.png"
              alt
            />
          </div>

          <div class="col-3">
            <img
              class="img-fluid img-sponsor"
              src="@/assets/img/sponsors/14_geraldina_logo.png"
              alt
            />
          </div>
        </div>
      </div>

      <FooterBlack v-if="windowWidth > 770" />
    </div>

    <div v-else-if="windowWidth< 770">
      <div class="spacer"></div>

      <div class="container h-75">
        <div class="row no-gutters justify-content-center" style="margin-top:40%;">
          <div class="col-4">
            <img
              class="img-fluid img-sponsor"
              src="@/assets/img/sponsors/1_bashkiatirane_logo.png"
              alt
            />
          </div>

          <div class="col-4">
            <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/2_pirro_logo.png" alt />
          </div>

          <div class="col-4">
            <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/3_hako_logo.png" alt />
          </div>

          <div class="col-4">
            <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/4_tylol_hot_logo.png" alt />
          </div>

          <div class="col-4">
            <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/5_Era_logo.png" alt />
          </div>

          <div class="col-4">
            <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/6_tess_logo.png" alt />
          </div>

          <div class="col-4">
            <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/7_prima_logo.png" alt />
          </div>

          <div class="col-4">
            <img
              class="img-fluid img-sponsor"
              src="@/assets/img/sponsors/8_pierrecardin_logo.png"
              alt
            />
          </div>

          <div class="col-4">
            <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/9_spar_logo.png" alt />
          </div>

          <div class="col-4">
            <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/10_vezareas_logo.png" alt />
          </div>

          <div class="col-4">
            <img
              class="img-fluid img-sponsor"
              src="@/assets/img/sponsors/11_hidrosistem_logo.png"
              alt
            />
          </div>

          <div class="col-4">
            <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/12_Eglo_logo.png" alt />
          </div>

          <div class="col-4">
            <img
              class="img-fluid img-sponsor"
              src="@/assets/img/sponsors/13_klinikagjermaeesyrit_logo.png"
              alt
            />
          </div>

          <div class="col-4">
            <img
              class="img-fluid img-sponsor"
              src="@/assets/img/sponsors/14_geraldina_logo.png"
              alt
            />
          </div>
        </div>
      </div>

      <FooterBlackMobile />
    </div>

    <div v-else>
      <div class="spacer"></div>

      <div class="container h-75">
        <div class="row no-gutters justify-content-center" style="margin-top:40%;">
          <div class="col-4">
            <img
              class="img-fluid img-sponsor"
              src="@/assets/img/sponsors/1_bashkiatirane_logo.png"
              alt
            />
          </div>

          <div class="col-4">
            <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/2_pirro_logo.png" alt />
          </div>

          <div class="col-4">
            <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/3_hako_logo.png" alt />
          </div>

          <div class="col-4">
            <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/4_tylol_hot_logo.png" alt />
          </div>

          <div class="col-4">
            <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/5_Era_logo.png" alt />
          </div>

          <div class="col-4">
            <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/6_tess_logo.png" alt />
          </div>

          <div class="col-4">
            <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/7_prima_logo.png" alt />
          </div>

          <div class="col-4">
            <img
              class="img-fluid img-sponsor"
              src="@/assets/img/sponsors/8_pierrecardin_logo.png"
              alt
            />
          </div>

          <div class="col-4">
            <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/9_spar_logo.png" alt />
          </div>

          <div class="col-4">
            <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/10_vezareas_logo.png" alt />
          </div>

          <div class="col-4">
            <img
              class="img-fluid img-sponsor"
              src="@/assets/img/sponsors/11_hidrosistem_logo.png"
              alt
            />
          </div>

          <div class="col-4">
            <img class="img-fluid img-sponsor" src="@/assets/img/sponsors/12_Eglo_logo.png" alt />
          </div>

          <div class="col-4">
            <img
              class="img-fluid img-sponsor"
              src="@/assets/img/sponsors/13_klinikagjermaeesyrit_logo.png"
              alt
            />
          </div>

          <div class="col-4">
            <img
              class="img-fluid img-sponsor"
              src="@/assets/img/sponsors/14_geraldina_logo.png"
              alt
            />
          </div>
        </div>
      </div>

      <FooterBlackSmall />
    </div>
    <div class="spacer"></div>
  </div>
</template>

<script>
import FooterBlack from "@/components/Footer/FooterBlack.vue";
import FooterBlackSmall from "@/components/Footer/FooterBlackSmall.vue";
import FooterBlackMobile from "@/components/Footer/FooterBlackMobile.vue";
import Footer from "@/components/Footer/FooterWhite.vue";

export default {
  name: "SponsorSectionz",
  components: {
    FooterBlack,
    FooterBlackSmall,
    FooterBlackMobile,
    Footer
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
.spacer {
  height: 15rem;
}

.img-sponsor {
  width: 28vh;
}

.section-sponsorz {
  position: relative;
  height: 100vh;
}
</style>
