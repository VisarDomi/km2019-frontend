
<template>
  <div class="section-hero" id="kengamagjike">
    <HeaderHero menutype="menu__items--white" iconWhite="true" v-if="windowWidth > 750" />
    <img src="@/assets/img/logo.svg" alt="Kenga Magjike logo" class="logo w-50 h-50 z-2" />
    <div class="bg-video">
      <video class="bg-video__content" autoplay muted loop>
        <source src="@/assets/videoplayback.webm" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script>
import HeaderHero from "@/components/Headers/HeaderHero.vue";
export default {
  name: "HeroSection",

  components: {
    HeaderHero
  },
  methods: {},
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
<style lang="scss">
.z-2 {
  z-index: 2;
}
.z-3 {
  z-index: 3;
}
.z-4 {
  z-index: 4;
}
</style>

<style scoped lang="scss">
@import "@/assets/sass/abstracts/_mixins.scss";

.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0.85;

  overflow: hidden;

  &__content {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
.section-hero {
  background-color: #0e1032;
  height: 100vh;
  position: relative;
}

.logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
