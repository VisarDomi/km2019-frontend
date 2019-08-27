<template>
  <div class="artists-section">
    <HeaderBlack />
    <button @click="goToArtists()">Go To Artists</button>
  </div>
</template>

<script>
import HeaderBlack from "@/components/Headers/HeaderBlack.vue";
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
    HeaderBlack
  }
};
</script>

<style lang="scss" scoped>
.artists-section {
  background-color: white;
}
</style>
