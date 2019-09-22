<template>
  <vue-page-transition>
    <router-view />
  </vue-page-transition>
</template>

<script>
import { AmplifyEventBus } from "aws-amplify-vue";
import { Auth } from "aws-amplify";

export default {
  name: "App",
  data() {
    return {
      signedIn: false
    };
  },
  beforeCreate() {
    AmplifyEventBus.$on("authState", info => {
      if (info === "signedIn") {
        this.signedIn = true;
        // this.$router.push('/voto')
        this.$router.go();
      }
      if (info === "signedOut") {
        this.$router.push("/auth");
        this.signedIn = false;
      }
    });

    Auth.currentAuthenticatedUser()
      .then(user => {
        this.signedIn = true;
      })
      .catch(() => (this.signedIn = false));
  }
};
</script>

<style lang="scss">
@import "assets/sass/main.scss";
.overlay-right {
  background: #0e1032 !important;
  z-index: 9999999;
}
.overlay-left-green {
  background: #47b8b0 !important;
  z-index: 9999999;
}
.overlay-right-green {
  background: #47b8b0 !important;
  z-index: 9999999;
}

.overlay-left {
  background: #0e1032 !important;
  z-index: 9999999;
}
</style>
