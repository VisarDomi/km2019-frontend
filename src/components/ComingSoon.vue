


<template>
  <div class="bgimg">
  <div class="topleft">
    <p>Kënga Magjike 2019</p>
  </div>
  <div class="middle">
    <h1 style="font-size:5rem;">COMING SOON</h1>
    <hr>
    <p>1 day left</p>
  </div>
  <div class="bottomleft">
    <p>Stay Tuned</p>
  </div>
</div>
</template>

<script>
export default {
  
}
</script>


<style lang="css" scoped>

body, html {
  height: 100%;
  margin: 0;
}

.bgimg {
  /* background-image: url('../assets/img/bridge.jpg'); */
  background-color: #0e1032;
  height: 100%;
  background-position: center;
  background-size: cover;
  position: relative;
  color: white;
  font-family: "Courier New", Courier, monospace;
  font-size: 25px;
}

.topleft {
  position: absolute;
  top: 0;
  left: 16px;
}

.bottomleft {
  position: absolute;
  bottom: 0;
  left: 16px;
}

.middle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

hr {
  margin: auto;
  width: 40%;
}
</style>