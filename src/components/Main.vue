<template>
  <div class="main">
    <router-view/>
  </div>
</template>

<script>
import News from '../views/News.vue'
import About from '../views/About.vue'

export default {
  name: 'Main',
  components: {
    News,
    About
  }
}
</script>
