<template>
  <div class="artists">
    <div class="row justify-content-between artist-row align-items-center">
      <div class="col-lg-3 col-sm-2 col-xs-1 text-center ">
        <img src="@/assets/img/logowhite.svg" alt />
      </div>
      <div class="col-lg-1 col-sm-2 col-xs-1  vertical-center back-hover" @click="goToHome()">
        <img src="@/assets/img/artistet_arrow_l.svg" alt="" class="back-icon center-block ">
      </div>
    </div>


    <div class="row align-items-center justify-content-center row-title">
      <div class="col-xl-7 col-lg-9 col-md-12 text-center ">

        <div class="row align-items-center justify-content-center">


          <h1 class="jumbo-title-artistet">artistët</h1>



          <!-- <img src="@/assets/img/search_icon.svg" alt="" class="search-icon"> -->
          	<input type="search" placeholder="Search">

        </div>


      </div>
    </div>

    <div class="row">
      <div class="col-lg-3">
        <div class="artist-card" @click="goToArtist()">

        </div>
      </div>

    </div>



  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Artists",
  components: {},
  data() {
    return {};
  },
  methods: {
    goToArtist(){
      this.$router.push({ name: "SingleArtist" });
    },
    goToHome(){
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style scoped lang="scss">

.artist-card{
  background:salmon;
  height: 300px;
}

.artist-card:hover{
  cursor: pointer;
}

.search-icon:hover{
  cursor:pointer;
}


.row-title{
  margin-top:10rem;
}

.search-icon{
  height: 5rem;
  // text-align:left;
}

.jumbo-title-artistet{
  // text-align:right;
  padding-right:20px;
  margin-right: 20px;
font-size: 12rem;
   -webkit-text-fill-color: transparent;
   -webkit-text-stroke: 2px white;

font-family: Vollkorn;
}



.artists {
  height: 100vh;
  background: #0e1032;
}

.vertical-center {
  min-height: 100%;  /* Fallback for browsers do NOT support vh unit */
  display: flex;
  align-items: center;
}

.back-hover:hover{
  
  background: #21234E;
  cursor: pointer;
}

.center-block{
display: block;
    margin-left: auto;
    margin-right: auto;

}

.row{
  
  margin-right: 0px !important;
  margin-left: 0px;
}
.artist-row {
  margin-right: 0px;
  margin-left: 0px;
  height: 10rem;
  background: #151745;
}

.text-center {
  text-align: center;
}



input[type=search] {
	background:  url('../../src/assets/img/search_icon.svg') no-repeat 9px center;
	// border: solid 1px #ccc;
	padding: 9px 10px 9px 32px;
	width: 55px;
	
	-webkit-border-radius: 10em;
	-moz-border-radius: 10em;
	border-radius: 10em;
	
	-webkit-transition: all .5s;
	-moz-transition: all .5s;
	transition: all .5s;
}


input {
	outline: none;
}
input[type=search] {
	-webkit-appearance: textfield;
	-webkit-box-sizing: content-box;
	font-family: inherit;
	font-size: 100%;
      border: none !important;
    padding: 50px ;
}
input::-webkit-search-decoration,
input::-webkit-search-cancel-button {
	display: none; 
}


input[type=search]:focus {
	width: 330px !important;
  
    color: white !important;
    font-size: 3rem ;
    padding-top:15px;
    padding-bottom:15px;
	background-color: #1A1C3C;
	border-color: #66CC75;
	padding-left:100px !important;
	-webkit-box-shadow: 0 0 5px rgba(109,207,246,.5);
	-moz-box-shadow: 0 0 5px rgba(109,207,246,.5);
	box-shadow: 0 0 5px rgba(109,207,246,.5);
}


input:-moz-placeholder {
	color: #999;
}
input::-webkit-input-placeholder {
	color: #999;
}

/* Demo 2 */
 input[type=search] {
	width: 15px;
	padding-left: 10px;
	color: transparent;
	cursor: pointer;
}
 input[type=search]:hover {
	// background-color: #fff;
}
 input[type=search]:focus {
	width: 130px;
	padding-left: 32px;
	color: #000;
	background-color: #1A1C3C;
	cursor: auto;
}
input:-moz-placeholder {
	color: transparent;
}
 input::-webkit-input-placeholder {
	color: transparent;
}
</style>
