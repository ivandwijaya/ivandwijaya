<template>
  <div class="side" id="side">
    <canvas id="canvas" class="canvas"></canvas>
  </div>
</template>

<script>
import { SIDE_COLOR } from 'core/utils/constants'

export default {
  name: 'side',
  mounted () {
    require('core/utils/animation')
  }
}
</script>

<style lang="scss">
#side {
  flex: 1 1 20%;
  background: #dddfd4;
}

#canvas {
  height: 100%;
  width: 100%;
}
</style>
