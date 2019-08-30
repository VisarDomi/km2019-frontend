<template>
  <div class="section-sponsorz h-100">
    <HeaderHero menutype="menu__items--black" iconBlack="true" logoBlack="true" />
    <FooterBlack />
  </div>
</template>

<script>
import FooterBlack from "@/components/Footer/Footer Black.vue";
import HeaderHero from "@/components/Headers/HeaderHero.vue";

export default {
  name: "SponsorSectionz",
  components: {
    FooterBlack,
    HeaderHero
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.section-sponsorz {
}
</style>
