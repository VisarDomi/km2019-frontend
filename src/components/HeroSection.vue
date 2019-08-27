
<template>
  <div class="section-hero">
    <HeaderHero />
    <img src="@/assets/img/logo.svg" alt="Kenga Magjike logo" class="logo" />
  </div>
</template>

<script>
import HeaderHero from "@/components/Headers/HeaderHero.vue";
export default {
  name: "HeroSection",

  components: {
    HeaderHero
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.section-hero {
  background-color: #0e1032;
}

.logo {
  margin-top: -5rem;
  margin-left: 4rem;
  height: 16rem;
}
</style>
