<template>
  <div class="home">
    <!-- <HeaderHero v-if="windowWidth > 750" /> -->
    <HeaderHero
      v-if="windowWidth > 750 && this.section == 'HeroSection'"
      menutype="menu__items--white"
      iconWhite="true"
    />
    <HeaderHero
      v-if="windowWidth > 750 && this.section == 'JuriaSection'"
      menutype="menu__items--black"
      logoBlack="true"
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
      logoWhite="true"
      iconWhite="true"
    />
    <HeaderHero
      v-if="windowWidth > 750 && this.section == 'SponsorSection'"
      menutype="menu__items--black"
      logoBlack="true"
    />
    <HeaderMobile v-if="windowWidth < 750" />

    <HeroSection />

    <AcrossYearsSection v-if="windowWidth > 750" />
    <AcrossYearsMobile v-else />

    <NewsSection v-if="windowWidth > 950" />
    <NewsMobile v-else />

    <ArtistsSectionJuria v-if="windowWidth > 600" />
    <ArtistsMobile v-else />

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
import ArtistsSectionJuria from "@/components/ArtistsSectionJuria.vue";
import ArtistsMobile from "@/components/ArtistsMobile.vue";

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
    ArtistsSectionJuria,
    ArtistsMobile,
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
      // console.log("scrolling", window.scrollY);
      if (window.scrollY > 0 && window.scrollY < window.innerHeight - 100) {
        this.section = "HeroSection";
      } else if (
        window.scrollY > window.innerHeight - 100 &&
        window.scrollY < window.innerHeight * 2 - 100
      ) {
        this.section = "AcrossYearsSection";
      } else if (
        window.scrollY > window.innerHeight * 2 - 100 &&
        window.scrollY < window.innerHeight * 3 - 100
      ) {
        this.section = "BlogSection";
      } else if (
        window.scrollY > window.innerHeight * 3 - 100 &&
        window.scrollY < window.innerHeight * 4 - 100
      ) {
        this.section = "JuriaSection";
      } else if (window.scrollY > window.innerHeight * 4 - 100) {
        console.log("Sponsors");
        this.section = "SponsorSection";
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
.home {
  // height: 100vh;
}
</style>
