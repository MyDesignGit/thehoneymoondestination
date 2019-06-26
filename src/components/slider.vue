<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="static/img/honeymoonSlider2.jpg"></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="static/img/nathan-dumlao-honeymoon.jpg">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="static/img/Switzerland.jpg"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
     
 <b-carousel-slide img-src="static/img/Waldorf-Astoria-Maldives.jpg"></b-carousel-slide>


      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
     
    </b-carousel>

  <!--   <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p> -->


  </div>
</template>

<script>

  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    components:{
      
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>