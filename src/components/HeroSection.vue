
<template>
  <div class="section-hero" id="kengamagjike">
    <img
      data-aos="zoom-out"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
      src="@/assets/img/logo.svg"
      alt="Kenga Magjike logo"
      class="logo w-50 h-50 z-2"
    />
    <div class="bg-video">
      <video class="bg-video__content" autoplay muted loop>
        <source :src="cloudFrontDomain+'/test26.mp4'" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script>

import { cloudFrontDomain } from "@/common/constants";

export default {
  name: "HeroSection",
  methods: {},
  data() {
    return {
      cloudFrontDomain,
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
  top: 25%;
  left: 25%;
  // transform: translate(-25%, -25%);
}
</style>
