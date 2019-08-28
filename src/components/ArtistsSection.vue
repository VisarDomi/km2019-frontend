<template>
  <div class="artists-section">
    <HeaderHero menutype="menu__items--black" logoBlack="true" />
    <button @click="goToArtists()">Go To Artists</button>
  </div>
</template>

<script>
import HeaderHero from "@/components/Headers/HeaderHero.vue";
export default {
  name: "ArtistsSection",
  data() {
    return {};
  },
  methods: {
    goToArtists() {
      this.$router.push({ name: "Artists" });
    }
  },
  components: {
    HeaderHero
  }
};
</script>

<style lang="scss" scoped>
.artists-section {
  background-color: white;
}
</style>
