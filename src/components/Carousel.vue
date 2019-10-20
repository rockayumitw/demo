<template>
  <div>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">

        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>

      </ol>
      <div class="carousel-inner">

        <div class="carousel-item active">
          <img class="d-block w-100" src="../assets/DSC06921.png"/>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../assets/DSC06921.png"/>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../assets/DSC06921.png"/>
        </div>

      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<style lang='scss'>
.carousel-item{
  max-height:550px;
}
</style>

<script>

// var api = 'https://jsonplaceholder.typicode.com/todos/1'
var api = '/data/json/carousel.json'

export default {
  data () {
    return {
      baseUrl: process.env.VUE_APP_BASE_URL,
      carouselList: []
    }
  },
  methods: {
    carousel () {
      this.axios.get(api).then((res) => {
        console.log(res)
      })
    }
  },
  created () {
     this.carousel();
  }
}
</script>
