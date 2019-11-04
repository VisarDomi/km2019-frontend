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
const ComingSoon = () => import("@/components/ComingSoon");

const HeroSection = () => import("@/components/HeroSection");
const ArtistsSection = () => import("@/components/ArtistsSection");
const ArtistsMobile = () => import("@/components/ArtistsMobile");
const JurysSection = () => import("@/components/JurysSection");
const JurysMobile = () => import("@/components/JurysMobile");
const AcrossYearsSection = () => import("@/components/AcrossYearsSection");
const AcrossYearsMobile = () => import("@/components/AcrossYearsMobile");
const BlogsSection = () => import("@/components/BlogsSection");
const BlogsMobile = () => import("@/components/BlogsMobile");
const SponsorSectionz = () => import("@/components/SponsorSectionz");

const HeaderHero = () => import("@/components/Header/HeaderHero");
const HeaderMobile = () => import("@/components/Header/HeaderMobile");
const FooterBlackMobile = () => import("@/components/Footer/FooterBlackMobile");

import { eventBus } from "@/main";

export default {
  name: "Home",
  components: {
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

    HeaderHero,
    HeaderMobile,
    FooterBlackMobile
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
