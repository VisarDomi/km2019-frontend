<template>
  <div class="home">
    <LandingSection />
    <HeaderMobile v-if="windowWidth < 950" />
    <div class="fullpage-container">
      <div class="fullpage-wp" v-fullpage="opts" ref="example">
        <HeroSection />

        <ArtistsSection />

        <AcrossYearsSection v-if="windowWidth > 950" />
        <AcrossYearsMobile v-else />

        <SubmissionSection v-if="windowWidth > 950" />
        <SubmissionMobile v-else />

        <NewsSection />

        <SponsorSectionz />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderMobile from "@/components/Headers/MobileHeader.vue";
import LandingSection from "@/components/LandingSection.vue";

import HeroSection from "@/components/HeroSection.vue";
import ArtistsSection from "@/components/ArtistsSection.vue";

import AcrossYearsSection from "@/components/AcrossYearsSection.vue";
import AcrossYearsMobile from "@/components/AcrossYearsMobile.vue";

import SubmissionSection from "@/components/SubmissionSection.vue";
import SubmissionMobile from "@/components/SubmissionMobile.vue";

import NewsSection from "@/components/NewsSection.vue";
import SponsorSectionz from "@/components/SponsorSection.vue";

export default {
  name: "Home",
  components: {
    LandingSection,
    HeroSection,
    ArtistsSection,
    AcrossYearsSection,
    AcrossYearsMobile,
    SubmissionSection,
    SubmissionMobile,
    NewsSection,
    SponsorSectionz,
    HeaderMobile
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
      windowWidth: window.innerWidth
    };
  },
  method: {},
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  }
};
</script>

<style lang="scss">
.home {
  height: 100vh;
}
</style>
