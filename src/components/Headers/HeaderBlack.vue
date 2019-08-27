<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
    <div class="d-flex flex-grow-1">
      <span class="navbar-brand d-none d-lg-inline-block" href="#">
        <img src="@/assets/img/logoblack.svg" alt="Logo" class="logo" />
      </span>
      <div class="w-100 text-right">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
    <div class="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
      <ul class="navbar-nav ml-auto flex-nowrap">
        <li class="nav-item">
          <a href="#" class="nav-link m-2 menu-item nav-active">Our Solution</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link m-2 menu-item">How We Help</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link m-2 menu-item">Blog</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link m-2 menu-item">Contact</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link m-2 menu-item">X</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderWhite"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.logo {
  margin-left: 4rem;
}

.navbar {
  height: 10rem;
}
.nav-item {
  font-size: 2rem;
  font-family: Ubuntu;
  // color: white;
}
.nav-link {
  color: black !important;
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
