<template>
  <div class="section-submission">
    <HeaderHero menutype="menu__items--white" iconWhite="true" logoWhite="true" />

    <h1>Submissions Section</h1>
  </div>
</template>

<script>
import HeaderHero from "@/components/Headers/HeaderHero.vue";

export default {
  name: "SubmissionSection",

  components: {
    HeaderHero
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.section-submission {
  background-color: lightseagreen;
}
</style>
