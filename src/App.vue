<template>
  <div id="app">
    <page></page>
    <side-canvas></side-canvas>
  </div>
</template>

<script>
import Page from '@/Page'
import SideCanvas from '@/SideCanvas'

export default {
  name: 'app',
  components: { Page, SideCanvas }
}
</script>

<style lang="scss">
@import './main.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  margin:0 auto;

  height:auto !important; /* real browsers */
  height:100%; /* IE6: treaded as min-height*/

  min-height:100%; /* real browsers */
}
</style>
