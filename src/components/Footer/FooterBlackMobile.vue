<template>
  <div>
    <div class="footer-container">



      <div class="row ml-0">
        
        <div class="col-5 pl-0 pr-0">
          <img src="@/assets/img/logowhite.svg" class="logo" alt="">
        </div>

        <div class="col-7 pr-0">

          <div class="row links-row ml-0">

            <div class="col-4">

              <div class="row" style="margin-bottom:5px;">artistët</div>
              
              <div class="row">ndër vite</div>

            </div>

            <div class="col-4">

              <div class="row" style="margin-bottom:5px;">#magjike</div>
              
              <div class="row">të reja</div>

            </div>

            <div class="col-4">

              <div class="row" style="margin-bottom:5px;">rregullore</div>
              
              <div class="row">voto</div>

            </div>

          </div>

        </div>
      </div>

      <hr class="footer-separator">

      <div class="row " style="margin-bottom:10px;">

        <div class="col-1">
          <img src="@/assets/img/icon facebook white.svg" class="social-1" alt />
        </div>

        <div class="col-1">
          <img src="@/assets/img/icon instagram white.svg" class="social-1" alt />
        </div>

        <div class="col-1">
          <img src="@/assets/img/icon youtube white.svg" class="social-1" alt />
        </div>

        <div class="col-4 offset-4" style="padding-top:10px;">
          <a href="https://boldcrest.com/">
          <img src="@/assets/img/logocrestfooterblack.svg" alt="">
          </a>
        </div>

        

      </div>




    </div>
  </div>
</template>

<script>
export default {
  
}
</script>


<style lang="scss" scoped>

.social-1{
  width:25px;
}

.footer-separator{
  color:white;
}

hr {
  border-top: 2px solid white;
  // margin-left:5rem;
  margin-top: 2rem;
  // margin-right: 5rem;
}

.logo{
  width:110px;
}

.links-row{
  color:white;
  font-size:1.2rem;
}

.footer-container{
  background:#0e1032;
  // height:14rem;
  // position:absolute;
  // bottom:0%;
  width:100%;
  padding:2rem;
}

</style>