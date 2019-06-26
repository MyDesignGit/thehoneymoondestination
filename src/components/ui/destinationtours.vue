<template>
<div>
	
	<div class="container-fluid">
		<div class="row">
			<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 p-0 h-75a">
				<div class="hovereffect">
					<img class="img-responsive" src="static/img/place-1.jpg" alt="">
											<div class="overlay">
						<h2>Hover effect 1</h2>
						<a class="info" href="#">View Details</a>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 p-0 h-75a">
				<div class="hovereffect">
					<img class="img-responsive" src="static/img/place-2.jpg" alt="">
					<div class="overlay">
						<h2>Hover effect 1</h2>
						<a class="info" href="#">View Details</a>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 p-0 h-75a">
				<div class="hovereffect">
					<img class="img-responsive" src="static/img/place-3.jpg" alt="">
					<div class="overlay">
						<h2>Hover effect 1</h2>
						<a class="info" href="#">View Details</a>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 p-0 h-75a">
				<div class="hovereffect">
					<img class="img-responsive" src="static/img/place-9.jpg" alt="">
					<div class="overlay">
						<h2>Hover effect 1</h2>
						<a class="info" href="#">View Details</a>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 p-0 h-75a">
				<div class="hovereffect">
					<img class="img-responsive" src="static/img/place-4.jpg" alt="">
						
					<div class="overlay">
						<h2>Hover effect 1</h2>
						<a class="info" href="#">View Details</a>
					</div>
				</div>
			</div>
			<div class="col-lg-6 col-md-4 col-sm-6 col-xs-12 p-0 h-75a bg-primary1">
				<h1>Top Honeymoon Destinations</h1>
			</div>			
			<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 p-0 h-75a">
				<div class="hovereffect">
					<img class="img-responsive" src="static/img/place-7.jpg" alt="">
					<div class="overlay">
						<h2>Hover effect 1</h2>
						<a class="info" href="#">View Details</a>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 p-0 h-75a">
				<div class="hovereffect">
					<img class="img-responsive" src="static/img/place-6.jpg" alt="">
					
					<div class="overlay">
						<h2>Hover effect 1</h2>
						<a class="info" href="#">View Details</a>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 p-0 h-75a">
				<div class="hovereffect">
					<img class="img-responsive" src="static/img/place-7.jpg" alt="">
					<div class="overlay">
						<h2>Hover effect 1</h2>
						<a class="info" href="#">View Details</a>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 p-0 h-75a">
				<div class="hovereffect">
					<img class="img-responsive" src="static/img/place-8.jpg" alt="">
					<div class="overlay">
						<h2>Hover effect 1</h2>
						<a class="info" href="#">View Details</a>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 p-0 h-75a">
				<div class="hovereffect">
					<img class="img-responsive" src="static/img/place-9.jpg" alt="">
					<div class="overlay">
						<h2>Hover effect 1</h2>
						<a class="info" href="#">View Details</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

</template>
<script>
export default {
name: 'destinationtours'
}
</script>
<style scoped>
	
.hovereffect {
  width: 100%;
  height: 100%;
  float: left;
  overflow: hidden;
  position: relative;
  text-align: center;
  cursor: default;
  background: #CA1444;
}

.hovereffect .overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  padding: 50px 20px;
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
  font-size: 17px;
  overflow: hidden;
  padding: 0.5em 0;
  background-color: transparent;
  margin-top: 30px;
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