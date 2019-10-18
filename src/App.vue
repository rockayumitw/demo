<template>
  <div id="app">
    <Header/>
    <Main/>
    <Footer/>
    <!-- <router-view/> -->
  </div>
</template>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fade-content > *{transition: ease opacity .25s, ease transform .25s;}
.fade-content > *:nth-child(3n+2) {transition-delay: .1s;}
.fade-content > *:nth-child(3n+3) {transition-delay: .2s;}

</style>

<script>
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Main,
    Footer
  }
  // created(){
  //   this.axios.get(api).then((response) => {
  //     console.log(response.data)
  //   })
  // }
}
</script>
