<template>
  <div class="section-sponsorz h-100">
    <HeaderHero
      menutype="menu__items--black"
      iconBlack="true"
      logoBlack="true"
      v-if="windowWidth > 950"
    />

    <HeaderMobile v-else />

    <FooterBlack />
    <!-- <FooterWhite v-if="windowWidth > 600" /> -->
  </div>
</template>

<script>
import FooterBlack from "@/components/Footer/FooterBlack.vue";
import Footer from "@/components/Footer/Footer White.vue";
import HeaderHero from "@/components/Headers/HeaderHero.vue";
import HeaderMobile from "@/components/Headers/MobileHeader.vue";

export default {
  name: "SponsorSectionz",
  components: {
    FooterBlack,
    Footer,
    HeaderHero,
    HeaderMobile
  },
  data() {
    return {
      windowWidth: window.innerWidth
    };
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.section-sponsorz {
}
</style>
