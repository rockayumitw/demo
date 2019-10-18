<template>
  <div class="dropdown">
    <button
      class="btn btn-secondary dropdown-toggle"
      type="button"
      id="dropdownMenu2"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >語系切換</button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
      <button class="dropdown-item" type="button" v-on:click="changeLangEvent('en')">英語</button>
      <button class="dropdown-item" type="button" v-on:click="changeLangEvent('zh')">繁體</button>
      <button class="dropdown-item" type="button" v-on:click="changeLangEvent('cn')">簡體</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeLangEvent (locale) {
      this.$i18n.locale = locale
    }
  }
}
</script>
