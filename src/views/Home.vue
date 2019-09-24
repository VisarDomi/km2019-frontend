<template>
  <div class="home">
    <HeaderHero
      menutype="menu__items--white"
      iconWhite="true"
      v-if="windowWidth > 750 && this.section == 'HeroSection'"
    />
    <HeaderHero
      v-if="windowWidth > 750 && this.section == 'JurySection'"
      menutype="menu__items--white"
      logoWhite="true"
      iconWhite="true"
    />
    <HeaderHero
      v-if="windowWidth > 750 && this.section == 'AcrossYearsSection'"
      menutype="menu__items--white"
      logoWhite="true"
      iconWhite="true"
    />
    <HeaderHero
      v-if="windowWidth > 750 && this.section == 'BlogSection'"
      menutype="menu__items--white"
      logoGreen="true"
      iconWhite="true"
    />
    <HeaderHero
      v-if="windowWidth > 750 && this.section == 'SponsorSection'"
      menutype="menu__items--black"
      logoBlack="true"
    />
    <HeaderHero
      v-if="windowWidth > 750 && this.section == 'ArtistSection'"
      menutype="menu__items--black"
      logoBlack="true"
    />
    <HeaderMobile v-if="windowWidth < 750" />

    <HeroSection />

    <ArtistsSection v-if="windowWidth > 750" />
    <ArtistsMobile v-else />

    <AcrossYearsSection v-if="windowWidth > 750" />
    <AcrossYearsMobile v-else />

    <NewsSection v-if="windowWidth > 950" />
    <NewsMobile v-else />

    <JuriaSection v-if="windowWidth > 600" />
    <JuriaMobile v-else />

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

import JuriaSection from "@/components/ArtistsSectionJuria.vue";
import JuriaMobile from "@/components/ArtistsSectionJuriaMobile.vue";

import AcrossYearsSection from "@/components/AcrossYearsSection.vue";
import AcrossYearsMobile from "@/components/AcrossYearsMobile.vue";

import SubmissionSection from "@/components/SubmissionSection.vue";
import SubmissionMobile from "@/components/SubmissionMobile.vue";

import NewsSection from "@/components/NewsSection.vue";
import NewsMobile from "@/components/NewsMobile.vue";

import SponsorSectionz from "@/components/SponsorSection.vue";

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
    JuriaSection,
    JuriaMobile,
    AcrossYearsSection,
    AcrossYearsMobile,
    SubmissionSection,
    SubmissionMobile,
    NewsSection,
    NewsMobile,

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
      // // console.log("scrolling", window.scrollY);
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
        // console.log("Sponsors");
        this.section = "JurySection";
      } else if (window.scrollY > window.innerHeight * 5 - 100) {
        this.section = "SponsorSection";
      }
      console.log(this.section);
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
