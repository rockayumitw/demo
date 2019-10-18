<template>
  <div class="header">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <router-link class="navbar-brand" to="/Home">LOGO</router-link>
      <button
        class="navbar-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="navbar-collapse collapse" id="navbarCollapse" style>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="/" @click.prevent="point('l_news')">{{ $t('news') }}</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="/" @click.prevent="point('l_about')">{{ $t('about') }}</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="/" @click.prevent="point('l_contact')">contact</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="/" @click.prevent="point('l_map')">map</a>
          </li>
          <!-- <li class="nav-item active">
            <router-link class="nav-link" to="/About">
              {{ $t('about') }}
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/News">{{ $t('news') }}</router-link>
          </li>
          <li class="nav-item">
            <span v-html="$t('email')"></span>
          </li> -->
        </ul>
        <form class="form-inline mt-2 mt-md-0">
          <!--語言切換-->
          <Language/>
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
        </form>
      </div>
    </nav>
  </div>
</template>

<style lang="scss">
body {
  padding-top: 60px;
}
nav {
  .navbar-brand {
    font-size: 30px;
  }
  .navbar-toggle {
    margin: 13px 15px 13px 0;
  }
  a {
    font-size: 18px;
    padding-bottom: 20px !important;
    padding-top: 20px !important;
    transition: all 0.3s ease;
  }
}

nav.navbar.shrink {
  min-height: 35px;
  .navbar-brand {
    font-size: 25px;
  }
  a {
    font-size: 15px;
    padding-bottom: 10px !important;
    padding-top: 10px !important;
  }
  .navbar-toggle {
    margin: 8px 15px 8px 0;
    padding: 4px 5px;
  }
}
</style>

<script>

import Language from '../components/Language.vue'

export default {
  methods: {
    point (value) {
      if (value == 'l_map') {
        $('html, body').stop().animate({
          scrollTop: $('.map').offset().top - 160
        }, 400)
      }
      if (value == 'l_contact') {
        $('html, body').stop().animate({
          scrollTop: $('.l_contact').offset().top - 160
        }, 400)
      }
    }
  },
  components: {
    Language
  }
}

$(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
      $('nav').addClass('shrink')
    } else {
      $('nav').removeClass('shrink')
    }
  })
})

</script>>
