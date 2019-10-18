<template>
    <div>
        <Carousel/>
        <!-- <Item/> -->
        <Item2/>
        <Contact/>
        <Map/>
    </div>
</template>

<script>

import Carousel from '../components/Carousel.vue'
import Item from '../components/Item.vue'
import Map from '../components/Map.vue'
import Item2 from '../components/Item2.vue'
import Contact from '../components/Contact.vue'

export default {
  components: {
    Carousel,
    Item,
    Item2,
    Map,
    Contact
  }
}
</script>
