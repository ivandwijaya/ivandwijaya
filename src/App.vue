<template>
  <div id="app">
    <page></page>
    <side-canvas v-if="isDesktop"></side-canvas>
  </div>
</template>

<script>
import Page from 'core/Page'
import SideCanvas from 'core/SideCanvas'

export default {
  name: 'app',
  components: { Page, SideCanvas },
  computed: {
    isDesktop() {
      return !window.matchMedia("(max-width: 980px)").matches
    }
  }
}
</script>

<style lang="scss">
@import './main.scss';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  margin:0 auto;

  height:auto !important; /* real browsers */
  height:100%; /* IE6: treaded as min-height*/

  min-height:100%; /* real browsers */
  display: flex;
}
</style>
