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

a:not([href]):not([tabindex]) {
  // color: #007bff !important;
  text-decoration: none;
}

[class^="Form__formSection"] {
  color: red !important;
  font-size: 14px;
}
[class^="Input__input"] {
  @include respond(phone) {
    width: 75%;
  }
}
#auth {
  overflow: hidden;
}
[class^="Button__button"] {
  @include respond(phone) {
    width: 75% !important;
  }
}
[class^="Section__sectionFooterSecondaryContent"] {
  @include respond(phone) {
    text-align: left;
  }
}
</style>
