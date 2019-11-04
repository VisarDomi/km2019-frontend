<template>
  <div class="home">
    <HeaderHero v-if="windowWidth > 750" menutype="menu__items--white" />
    <HeaderHero
      v-if="windowWidth > 750 && this.section == 'ArtistSection'"
      menutype="menu__items--white"
      logoWhite="true"
    />
    <HeaderHero
      v-if="windowWidth > 750 && this.section == 'AcrossYearsSection'"
      menutype="menu__items--white background--green"
      logoGreen="true"
    />
    <HeaderHero
      v-if="windowWidth > 750 && this.section == 'BlogSection'"
      menutype="menu__items--white"
      logoWhite="true"
    />
    <HeaderHero
      v-if="windowWidth > 750 && this.section == 'JurySection'"
      menutype="menu__items--white background--green"
      logoGreen="true"
    />
    <HeaderHero
      v-if="windowWidth > 750 && this.section == 'SponsorSectionz'"
      menutype="menu__items--white"
      logoWhite="true"
    />
    <HeaderMobile v-if="windowWidth < 750" />

    <HeroSection />

    <ArtistsSection v-if="windowWidth > 750" />
    <ArtistsMobile v-else />

    <AcrossYearsSection v-if="windowWidth > 750" />
    <AcrossYearsMobile v-else />

    <BlogsSection v-if="windowWidth > 950" />
    <BlogsMobile v-else />

    <JurysSection v-if="windowWidth > 600" />
    <JurysMobile v-else />

    <SponsorSectionz />
  </div>
</template>

<script>
// @ is an alias to /src

import ComingSoon from "@/components/ComingSoon.vue";
import FooterBlackMobile from "@/components/Footer/FooterBlackMobile.vue";

import HeaderMobile from "@/components/Headers/MobileHeader.vue";
import HeaderHero from "@/components/Headers/HeaderHero.vue";

import HeroSection from "@/components/HeroSection.vue";

import ArtistsSection from "@/components/ArtistsSection.vue";
import ArtistsMobile from "@/components/ArtistsMobile.vue";

import JurysSection from "@/components/JurysSection.vue";
import JurysMobile from "@/components/JurysMobile.vue";

import AcrossYearsSection from "@/components/AcrossYearsSection.vue";
import AcrossYearsMobile from "@/components/AcrossYearsMobile.vue";

import BlogsSection from "@/components/BlogsSection.vue";
import BlogsMobile from "@/components/BlogsMobile.vue";

import SponsorSectionz from "@/components/SponsorSectionz.vue";

import { eventBus } from "@/main";
// import Blogs from "@/views/Blogs.vue";

export default {
  name: "Home",
  components: {
    FooterBlackMobile,
    ComingSoon,
    HeroSection,
    ArtistsSection,
    ArtistsMobile,
    JurysSection,
    JurysMobile,
    AcrossYearsSection,
    AcrossYearsMobile,
    BlogsSection,
    BlogsMobile,

    SponsorSectionz,
    HeaderMobile,
    HeaderHero
  },
  data() {
    return {
      opts: {
        start: 0,
        dir: "v",
        duration: 500,
        beforeChange: function(currentSlideEl, currenIndex, nextIndex) {},
        afterChange: function(currentSlideEl, currenIndex) {}
      },
      section: "HeroSection",
      windowWidth: window.innerWidth
    };
  },
  methods: {
    handleScroll(event) {
      if (window.scrollY > 0 && window.scrollY < window.innerHeight - 100) {
        this.section = "HeroSection";
      } else if (
        window.scrollY > window.innerHeight - 100 &&
        window.scrollY < window.innerHeight * 2 - 100
      ) {
        this.section = "ArtistSection";
      } else if (
        window.scrollY > window.innerHeight * 2 - 100 &&
        window.scrollY < window.innerHeight * 3 - 100
      ) {
        this.section = "AcrossYearsSection";
      } else if (
        window.scrollY > window.innerHeight * 3 - 100 &&
        window.scrollY < window.innerHeight * 4 - 100
      ) {
        this.section = "BlogSection";
      } else if (
        window.scrollY > window.innerHeight * 4 - 100 &&
        window.scrollY < window.innerHeight * 5 - 100
      ) {
        this.section = "JurySection";
      } else if (window.scrollY > window.innerHeight * 5 - 100) {
        this.section = "SponsorSectionz";
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  mounted() {
    // eventBus.$on("changeSection", payload => {
    //   this.moveTo(payload);
    // });
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        this.windowWidth = window.innerWidth;
      });
    });
  }
};
</script>

<style lang="scss">
</style>
