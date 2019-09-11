<template>
  <div class="home">
    <HeaderMobile v-if="windowWidth < 750" />
    <div class="fullpage-container">
      <div class="fullpage-wp" v-fullpage="opts" ref="fullpage">
        <!-- <HeroSection2 data-id="0" /> -->

        <!-- <ArtistsSection data-id="1" v-if="windowWidth > 600" /> -->
        <ArtistsSectionJuria data-id="1" v-if="windowWidth > 600" />
        <ArtistsMobile v-else />

        <AcrossYearsSection data-id="2" v-if="windowWidth > 750" />
        <AcrossYearsMobile v-else />

        <!-- <SubmissionSection data-id="3" v-if="windowWidth > 950" />
        <SubmissionMobile v-else />-->

        <NewsSection data-id="4" v-if="windowWidth > 950" />
        <NewsMobile v-else />

        <SponsorSectionz data-id="5" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderMobile from "@/components/Headers/MobileHeader.vue";
import LandingSection from "@/components/LandingSection.vue";

import HeroSection from "@/components/HeroSection.vue";
import HeroSection2 from "@/components/HeroSection2.vue";

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
    LandingSection,
    HeroSection,
    HeroSection2,
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
  methods: {
    moveTo: function(index) {
      this.$refs.fullpage.$fullpage.moveTo(index, true);
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        this.windowWidth = window.innerWidth;
      });
    });
    eventBus.$on("changeSection", payload => {
      this.moveTo(payload);
    });
  }
};
</script>

<style lang="scss">
.home {
  height: 100vh;
}
</style>
