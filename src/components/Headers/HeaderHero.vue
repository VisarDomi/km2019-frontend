<template>
  <!-- <li class="nav-item">
          <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />
          <label for="navi-toggle" class="navigation__button nav-link">
            <span class="navigation__icon">
              <img src="@/assets/img/icon_menu_close.svg" alt />
            </span>
          </label>
  </li>-->

  <div class="row align-items-center justify-content-end menu__items">
    <!-- v-transition v-if="show"> -->
    <div class="col-lg-1 cmi">artistet</div>
    <div class="col-lg-1 cmi">nder vite</div>
    <div class="col-lg-1 cmi">#magjike</div>
    <div class="col-lg-1 cmi">te reja</div>
    <div class="col-lg-1 cmi">rregullore</div>
    <div class="col-lg-1">
      <span class="navigation__icon" @click="collapseMenu">
        <img v-if="shouldHide" src="@/assets/img/icon_menu_close.svg" alt />
        <img v-if="!shouldHide" src="@/assets/img/icon_menu.svg" alt />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderWhite",
  data() {
    return {
      shouldHide: false,
      listMenu: []
    };
  },
  methods: {
    collapseMenu() {
      var menuElement = document.getElementsByClassName("menu__items")[0];

      var artistet = this.listMenu[0];
      var ndervite = this.listMenu[1];
      var magjike = this.listMenu[2];
      var tereja = this.listMenu[3];
      var rregullore = this.listMenu[4];
      if (this.shouldHide) {
        artistet.style.opacity = 0;
        artistet.style.transition = "all 1s";
        artistet.style.transform = "translate(35vw, 0)";

        ndervite.style.opacity = 0;
        ndervite.style.transition = "all 1s";
        ndervite.style.transform = "translate(30vw, 0)";

        magjike.style.opacity = 0;
        magjike.style.transition = "all 1s";
        magjike.style.transform = "translate(20vw, 0)";

        tereja.style.opacity = 0;
        tereja.style.transition = "all 1s";
        tereja.style.transform = "translate(10vw, 0)";

        rregullore.style.opacity = 0;
        rregullore.style.transition = "all 1s";
        rregullore.style.transform = "translate(5vw, 0)";

        this.shouldHide = false;
      } else {
        artistet.style.opacity = 1;
        artistet.style.transition = "all 1s";
        artistet.style.transform = "translate(0, 0)";

        ndervite.style.opacity = 1;
        ndervite.style.transition = "all 1s";
        ndervite.style.transform = "translate(0, 0)";

        magjike.style.opacity = 1;
        magjike.style.transition = "all 1s";
        magjike.style.transform = "translate(0, 0)";

        tereja.style.opacity = 1;
        tereja.style.transition = "all 1s";
        tereja.style.transform = "translate(0, 0)";

        rregullore.style.opacity = 1;
        rregullore.style.transition = "all 1s";
        rregullore.style.transform = "translate(0, 0)";
        this.shouldHide = true;
      }
    }
  },
  mounted: function() {
    var artistet = document.getElementsByClassName("cmi")[0];
    var ndervite = document.getElementsByClassName("cmi")[1];
    var magjike = document.getElementsByClassName("cmi")[2];
    var tereja = document.getElementsByClassName("cmi")[3];
    var rregullore = document.getElementsByClassName("cmi")[4];
    this.listMenu.push(artistet);
    this.listMenu.push(ndervite);
    this.listMenu.push(magjike);
    this.listMenu.push(tereja);
    this.listMenu.push(rregullore);
    //  = [artistet, ndervite, magjike, tereja, rregullore, listMenu];
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.menu__items {
  text-align: center;
  color: white;
  font-family: Ubuntu;
  height: 15rem;
  font-size: 1.7rem;
}

.cmi {
  opacity: 0;
  transition: all 1s;
}

.col-lg-1 {
  padding-left: 0;
  padding-right: 0;
}

.navigation {
  &__icon {
    cursor: pointer;
  }
}

@media (min-width: 768px) {
  .navbar-brand.abs {
    position: absolute;
    width: 100%;
    left: 0;
    text-align: center;
  }
}
</style>
