<template>
  <div class="home">
    <h1>HELLO</h1>
    <div class="divider">.</div>
    <main-content>
      <p>
        I'm a developer with extensive experience in web & product development, user experience design and complex problem solving. My primary development workflow includes <a :href="vue" target="_blank">Vue</a>, <a :href="node" target="_blank">Node</a>, and <a :href="webpack" target="_blank">Webpack</a>.
      </p>
      <p>
        If you have a project that you want to get help with, think you want to ask me something, or just simply want to get in touch. Feel free to learn a bit more <router-link to="/writing">about me</router-link> and <router-link to="/contact">contact me</router-link>
      </p>
    </main-content>
  </div>
</template>

<script>
import MainContent from 'core/components/MainContent'
import {
  LINK_VUE,
  LINK_NODE,
  LINK_WEBPACK
} from 'core/utils/constants'

export default {
  name: 'home',
  data() {
    return {
      vue: LINK_VUE,
      node: LINK_NODE,
      webpack: LINK_WEBPACK
    }
  },
  components: { MainContent }
}
</script>
