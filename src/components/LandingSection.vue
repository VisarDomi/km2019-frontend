
<template>
  <div class="section-landing" scroll="no">
    <div class="bg-video">
      <video class="bg-video__content" autoplay loop>
        <source src="@/assets/video.mp4" type="video/mp4" />
        <!-- <source src="https://www.youtube.com/embed/tgbNymZ7vqY" type="video/mp4" /> -->
      </video>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-1 col-sm-2 down-arrow">
          <!-- <div class="down-arrow"> -->

          <a @click="collapse()">
            <img src="@/assets/img/landing_page_arrow_down.svg" alt="Go Down" />
          </a>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  name: "LandingSection",
  methods: {
    handleScroll(event) {
      // window.scrollY = 0;
      window.scroll(0, 0);
      console.log("window.scrollY =  0");
    },
    collapse() {
      Element = document.getElementsByClassName("section-landing");
      Element[0].style.height = 0;
      setTimeout(function() {
        Element[0].parentNode.removeChild(Element[0]);
      }, 1000);

      // console.log(Element);
      // console.log(Element[0]);
    },
    isInView(el) {
      var rect = el.getBoundingClientRect();
      return !(rect.top > $(window).height() || rect.bottom < 0);
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    $(document).on("scroll", function() {
      // console.log("scrolling");
      $("video").each(function() {
        // console.log("yea");
        if (isInView($(this)[0])) {
          // visible?
          if ($(this)[0].paused) $(this)[0].play(); // play if not playing
        } else {
          if (!$(this)[0].paused) $(this)[0].pause(); // pause if not paused
        }
      });
    });
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@keyframes pulsate {
  0% {
    transform: scale(1);
    box-shadow: none;
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
    box-shadow: none;
  }
}

.section-landing {
  background-color: #0e1032;
  height: 100vh;
  transition: all 1s;
}

.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  // z-index: 1;
  opacity: 0.65;
  overflow: hidden;

  &__content {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

.down-arrow {
  position: absolute;
  bottom: 5%;
  text-align: center;

  // transform: translate(-50%, 0);

  animation: pulsate 1s infinite;
  img {
    cursor: pointer;
  }
}
</style>
