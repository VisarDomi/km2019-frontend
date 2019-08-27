<template>
  <div class="section-news">
    <h1>News Section</h1>
    <button @click="goToBlogs()">Go To Blogs</button>
  </div>
</template>

<script>
export default {
  name: "NewsSection",
  methods: {
    goToBlogs() {
      this.$router.push({ name: "Blogs" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.section-news {
  background-color: lightsteelblue;
}
</style>
