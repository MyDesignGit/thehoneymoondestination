<template>
<div id="app">
  <headercomponent/>
    <div class="listing container-fluid wildbg"> 
    <div class="overlay"></div>     
      <div class="row">
        <div class="col-md-12 wild">
          <div class="w-75  mx-auto mb-5 ">

          <h2 class="mt-2  text-bold">IN THE WILD</h2>
          <P>Redefine your idea of an awe-inspiring exciting holiday and set sail on the magnificent new cruise launched from Mumbai that will take
          you through the high seas towards local and international shores starting 17 April 2019.</P>
        </div>        
      </div>
    </div>
  </div>
  <template v-for="product in products">
    <div class="container mt-5">
      <div class="row"> 
      <div class="col-md-8 card-height" >
           <!--  <img class="img-responsive" src="static/img/WelcomHotel-Jodhpur-1.jpg"> -->
             <img :src="product.img_src" />
        </div>     
        <div class="col-md-4 text-center productlist card">
          <h2>{{ product.name }}</h2>
           <div class="col-xs-6"><h4><b>{{product.nights}}</b></h4></div>
        <hr class="col-xs-12">
       
        <div><p><span class="desicon"><img class="img-responsive" src="static/img/destinationicon.png"></span><b>{{product.destination}}</b></p></div>
       
       
          
          <ul>
          <li class="iconimg"><img class="img-responsive" :src="product.highlights_img" /></li>
          <li class="iconimg"><img class="img-responsive" :src="product.flights_img" /></li>
          <li class="iconimg"><img class="img-responsive" :src="product.hotel_img" /></li>
          <li class="iconimg"><img class="img-responsive" :src="product.meals_img" /></li>
          </ul>
          <p class="product_value">Was <strike>{{product.product_value}}/-</strike></p>
          <p class="product_price">Now <span>{{product.product_price}}/-*</span></p>
          <p>Starting price per adult</p>
          <!-- <p>{{ product.id }}</p> -->
          <ul class="ullist">
            <li> <button class="btn btn-primary">Contact us</button></li>
            <li> <router-link class="btn btn-warning" :to="{path: '/product/'+product.id }" >View Details</router-link></li>
         </ul>
        </div>
        
       
      </div>
    </div>
      </template>
    </div>
  </div>
  </template>
  <script>
  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'
  
  Vue.use(VueAxios, axios)
  import headercomponent from '@/components/ui/headercomponent'
  import footerComponent from '@/components/ui/footer'
  export default {
  name: 'Listing',
  data () {
  return {
   
  products : []
  }
  },
  components:{
  headercomponent,footerComponent
  },
  mounted : function(){
  axios.get('static/json/products.json').
  then( result => {
  console.log( result );
  this.products = result.data;
  })
  }
  }
  
  </script>
  <style scoped>
  .wild{
    padding-top:50px;
  }
  .card-height{
    height: 400px;
  }
  .wildbg{
  background-image: url(/static/img/inthewild.jpg);
  background-position: top;
  position: relative;
 /* padding: 50px 0*/
  }

  .wild h2{
    font-weight: bold;
    color: #fff;
  }
  .wild p{
    color: #fff;
  }

  .iconimg{
    width: 35px;
    display: inline-block;
    margin: 10px;

  }

  .iconimg:first-child{

margin-left: 0;
  }

  .desicon {
    width: 25px;
    display: inline-block;
    margin: 5px;

  }
  .productlist h2{
    font-weight: bold;
    font-size: 35px;
    margin-top: 10px;
  }

  .iconimg img, .desicon img{
    width: 100%;
  }

  .product_value{
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 0;
  }
  .product_price{
    font-weight: bold;
     font-size: 20px;
      margin-bottom: 0;
  }
  .product_price span{
    font-weight: bold;
    font-size: 30px;
  }
  .btn{
    display: inline-block;
    width: 120px;
  }

  .ullist li{
    display: inline-block;

  }
  </style>