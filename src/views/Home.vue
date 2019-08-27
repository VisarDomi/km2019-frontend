<template>
  <div class="home">
    <!-- <LandingSection /> -->
    <div class="fullpage-container">
      <div class="fullpage-wp" v-fullpage="opts" ref="example">
        <HeroSection />

        <ArtistsSection />

        <SubmissionSection />

        <NewsSection />

        <SponsorSectionz />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LandingSection from "@/components/LandingSection.vue";
import HeroSection from "@/components/HeroSection.vue";
import ArtistsSection from "@/components/ArtistsSection.vue";

import SubmissionSection from "@/components/SubmissionSection.vue";
import NewsSection from "@/components/NewsSection.vue";
import SponsorSectionz from "@/components/SponsorSection.vue";

export default {
  name: "Home",
  components: {
    LandingSection,
    HeroSection,
    ArtistsSection,
    SubmissionSection,
    NewsSection,
    SponsorSectionz
  },
  data() {
    return {
      opts: {
        start: 0,
        dir: "v",
        duration: 500,
        beforeChange: function(currentSlideEl, currenIndex, nextIndex) {},
        afterChange: function(currentSlideEl, currenIndex) {}
      }
    };
  },
  method: {}
};
</script>

<style lang="scss">
.home {
  height: 100vh;
}
</style>
