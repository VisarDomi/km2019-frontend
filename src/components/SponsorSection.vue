<template>
  <div class="section-sponsorz h-100">
    <div v-if="windowWidth > 950">
      <HeaderHero menutype="menu__items--black" iconBlack="true" logoBlack="true" />
    </div>
    <div v-else>
      <!-- <HeaderMobile /> -->
    </div>

    <FooterBlack />
  </div>
</template>

<script>
import FooterBlack from "@/components/Footer/Footer Black.vue";
import HeaderHero from "@/components/Headers/HeaderHero.vue";
import HeaderMobile from "@/components/Headers/MobileHeader.vue";

export default {
  name: "SponsorSectionz",
  components: {
    FooterBlack,
    HeaderHero,
    HeaderMobile
  },
  data() {
    return {
      windowWidth: inner.windowWidth
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
