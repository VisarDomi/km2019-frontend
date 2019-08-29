<template>
  <div class="section-sponsorz h-100">
    <HeaderHero menutype="menu__items--black" iconBlack="true" logoBlack="true" />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer/Footer.vue";
import HeaderHero from "@/components/Headers/HeaderHero.vue";

export default {
  name: "SponsorSectionz",
  components: {
    Footer,
    HeaderHero
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.section-sponsorz {
}
</style>
