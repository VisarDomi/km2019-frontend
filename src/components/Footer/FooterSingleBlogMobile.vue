<template>
  <div>
    <div class="footer-container">



      <div class="row">
        
        <div class="col-5">
          <img src="@/assets/img/logoblack.svg" class="logo" alt="">
        </div>

        <div class="col-7">

          <div class="row links-row">

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

      <div class="row" style="margin-bottom:10px;">

        <div class="col-1">
          <img src="@/assets/img/icon facebook black.svg" class="social-1" alt />
        </div>

        <div class="col-1">
          <img src="@/assets/img/icon instagram black.svg" class="social-1" alt />
        </div>

        <div class="col-1">
          <img src="@/assets/img/icon youtube black.svg" class="social-1" alt />
        </div>

        <div class="col-4 offset-4" style="padding-left:35px; padding-top:5px;">
          <img src="@/assets/img/logocrestfooterwhite.svg" alt="">
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
  color:#0e1032;
}

hr {
  border-top: 2px solid #0e1032;
  // margin-left:5rem;
  margin-top: 2rem;
  // margin-right: 5rem;
}

.logo{
  width:110px;
}

.links-row{ 
  color:#0e1032;
  font-size:1.2rem;
}

.footer-container{
  background:white;
  height:14rem;
  position:fixed;
  
    z-index: 99999999;
  bottom:0%;
  width:100%;
  padding:2rem;
}

</style>