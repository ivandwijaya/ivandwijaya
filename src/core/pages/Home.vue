<template>
  <div class="home">
    <h1>HELLO</h1>
    <div class="divider">.</div>
    <!-- <p>
      I'm a web designer / developer based in Indonesia.
    </p>
    <p>
      I have a great passion in web development and graphic design in general.
    </p> -->
    <main-content>
      <p>
        I'm an independent developer with extensive experience in web & product development, user experience design and complex problem solving. My primary development workflow includes <a href="#">Vue</a>, <a href="#">Node</a>, and <a href="#">Webpack</a>.
      </p>
      <p>
        If you have a project that you want to get help with, think you want to ask me something, or just simply want to get in touch. Feel free to learn a bit more <a href="#">about me</a> and <a href="#">contact me</a>
      </p>
    </main-content>
  </div>
</template>

<script>
import MainContent from 'core/components/MainContent'

export default {
  name: 'home',
  components: { MainContent },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">

</style>
