<template>
  <main class="page" id="page">
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
