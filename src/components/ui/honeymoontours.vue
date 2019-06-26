<template>
<div>
	<div class="text-center m-5">
		<h1 class="heade-caption">Hot Honeymoon Deals</h1>
		<p class="subtitle">For those much-in-love newly married honeymooning couples, there are special honeymoon packages, offering you a memorable experience to celebrate your special occasion. If you want to make your honeymoon experience further exclusive, you can also opt for customized honeymoon package which can be tailor-made to suit your requirements. </p>
	</div>
	<div class="container">
		<div class="row">
			<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
				<div class="hovereffect">
					<img class="img-responsive" src="static/img/place-1.jpg" alt="">
						
					<div class="overlay genre">
						<h2>By the Beach</h2>
						<p>3 nights + Flight 5*Hotel</p>
						
						<p class="valued starts"><span class="was">WAS </span><strike>₹ 60000</strike></p>
						<p class="starts">NOW <span class="rupee">₹ 25000*</span></p>
						<a class="info" href="#">View Tour Packages</a>

					</div>
				</div>
			</div>
			<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
				<div class="hovereffect">
					<img class="img-responsive" src="static/img/place-2.jpg" alt="">
					<div class="overlay genre">
						<h2>In the City</h2>
						<p>3 nights + Flight 5*Hotel</p>
						
						<p class="valued starts"><span class="was">WAS </span><strike>₹ 60000</strike></p>
						<p class="starts">NOW <span class="rupee">₹ 25000*</span></p>
						<a class="info" href="#">View Tour Packages</a>

					</div>
				</div>
			</div>
			<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
				<div class="hovereffect">
					<img class="img-responsive" src="static/img/place-3.jpg" alt="">
					<div class="overlay genre">
						<h2>In the Wild</h2>
						<p>3 nights + Flight 5*Hotel</p>
						
						<p class="valued starts"><span class="was">WAS </span><strike>₹ 60000</strike></p>
						<p class="starts">NOW <span class="rupee">₹ 25000*</span></p>
						<a class="info" href="#">View Tour Packages</a>

					</div>
				</div>
			</div>
		</div>
		<div class="row mt-5 mb-5">
			<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb-5 ">
				<div class="hovereffect">
					<img class="img-responsive" src="static/img/place-4.jpg" alt="">
					<div class="overlay genre">
						<h2>High on the Mountains</h2>
						<p>3 nights + Flight 5*Hotel</p>
						
						<p class="valued starts"><span class="was">WAS </span><strike>₹ 60000</strike></p>
						<p class="starts">NOW <span class="rupee">₹ 25000*</span></p>
						<a class="info" href="#">View Tour Packages</a>

					</div>
				</div>
			</div>
			<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb-5 ">
				<div class="hovereffect">
					<img class="img-responsive" src="static/img/place-7.jpg" alt="">
					<div class="overlay genre">
						<h2>By the Snow</h2>
						<p>3 nights + Flight 5*Hotel</p>
						
						<p class="valued starts"><span class="was">WAS </span><strike>₹ 60000</strike></p>
						<p class="starts">NOW <span class="rupee">₹ 25000*</span></p>
						<a class="info" href="#">View Tour Packages</a>

					</div>

				</div>
			</div>
			<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb-5">
				<div class="hovereffect">
					<img class="img-responsive" src="static/img/place-6.jpg" alt="">
					<div class="overlay genre">
						<h2>On the Ocean</h2>
						<p>3 nights + Flight 5*Hotel</p>
						
						<p class="valued starts"><span class="was">WAS </span><strike>₹ 60000</strike></p>
						<p class="starts">NOW <span class="rupee">₹ 25000*</span></p>
						<a class="info" href="#">View Tour Packages</a>

					</div>
				</div>
			</div>
		</div>


	</div>
</div>

</template>
<script>
export default {
name: 'honeymoontours'
}
</script>
<style scoped >
.subtitle{
	padding: 0 100px;
}
.genre{
	background-color: rgba(5,5,5, 0.4);
}

.genre h2{

	font-size: 25px;
	font-weight: bold;
}
.valued{
	font-size: 20px;
}

.rupee{
	font-size: 30px;
	font-weight: bold;
	margin-bottom: 10px;
	/*background-color: #CA1444;*/
	padding: 5px;
}

.starts{
	padding: 0;
	margin: 0;
	
}

.was{
	font-size: 16px;
}

.info{

	border:1px solid #fff;
	padding: 5px;
	margin-top: 20px;
	display: block;
}
	
.hovereffect {
  width: 100%;
  height: 100%;
  float: left;
  overflow: hidden;
  position: relative;
  text-align: center;
  cursor: default;
  background: #000;
}

.hovereffect .overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  /*overflow: hidden;*/
  top: 0;
  left: 0;
  padding: 20px 20px;
}

.hovereffect img {
  display: block;
  position: relative;
  max-width: none;
  width: calc(100% + 20px);
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(-10px,0,0);
  transform: translate3d(-10px,0,0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

}

.hovereffect:hover img {
  opacity: 0.4;
  filter: alpha(opacity=40);
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}

.hovereffect h2 {
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  position: relative;
  font-size: 25px;
  overflow: hidden;
  padding: 0.5em 0;
  background-color: transparent;
  margin-top: 20px;
}



.hovereffect h2:after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #fff;
  content: '';
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
  -webkit-transform: translate3d(-100%,0,0);
  transform: translate3d(-100%,0,0);
}

.hovereffect:hover h2:after {
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}

.hovereffect a, .hovereffect p {
  color: #FFF;
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(100%,0,0);
  transform: translate3d(100%,0,0);
}

.hovereffect:hover a, .hovereffect:hover p {
  opacity: 1;
  filter: alpha(opacity=100);
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}
</style>