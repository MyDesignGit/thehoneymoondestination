<template>
<div class="preview">
  <div class="row">
    <div class="col-sm-6">
      <!--  this part will contain the product info -->
      <h1> {{ product_name }} </h1>
      <div>
        <p> {{ product_desc }} </p>
        <p> Price : ${{ product_price }} </p>
      </div>
    </div>
  </div>
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
name: 'Preview',
data () {
return {
media :[],
product_name : "",
product_desc : "",
product_price : ""
}
},
mounted : function(){
// now we get all the related infomation for the particular product id
// axios.get(`static/json/products/${this.$route.params.id}`)

axios.get(`https://jsonplaceholder.typicode.com/todos/1`)
.then( res => {
this.media = res.data.media;
this.product_name = res.name;
this.product_desc = res.product_desc;
this.product_price = res.product_price;
})
},
methods : {

}
}
</script>