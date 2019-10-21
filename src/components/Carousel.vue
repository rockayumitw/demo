<template>
  <div>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" >

      <ol class="carousel-indicators">
        <li v-for='(item,index) in carouselList' :key="index" data-target="#carouselExampleIndicators" :data-slide-to="index" class="" ></li>
      </ol>

      <div class="carousel-inner" >
        <div class="carousel-item"  v-for='(item,index) in carouselList' :key="index">
          <img class="d-block w-100" :src="item.img" />
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
.carousel-item {
  max-height: 550px;
}
</style>

<script>
var apiURL_Carousel = "/api/carousel";

export default {
  data() {
    return {
      baseUrl: process.env.VUE_APP_BASE_URL,
      carouselList: []
    };
  },
  methods: {
    getCarousel() {},
    //json格式撈取
    getCarouselData() {
      this.axios.get(apiURL_Carousel).then(res => {
        this.carouselList = res.data;
        setTimeout(function(){
          $('.carousel-item:first-child').addClass('active')
          $('ol>li:first-child').addClass('active')
        },300)
      });
    }
  },
  created() {
    //json格式撈取
    this.getCarouselData();
  },
};
</script>
