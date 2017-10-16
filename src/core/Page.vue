<template>
  <main class="main" id="main">
    <top></top>
      <div class="page" id="page">
        <transition name="page" mode="out-in">
            <router-view :key="$route.params.id" v-if="isMounted"></router-view>
        </transition>
      </div>
  </main>
</template>

<script>
import Top from 'core/components/Top'

export default {
  name: 'main',
  components: { Top },
  data() {
    return {
      isMounted: false
    }
  },
  mounted() {
    this.isMounted = true;
  }
}
</script>

<style lang="scss">
#main {
  flex: 1 0 60%;
  height: 100vh;
  max-width: 980px;
  display: flex;
  flex-direction: column;
}
#page {
  padding: 5%;
  max-width: 90%;
  width: 100%;
  min-height: 0;
  margin: 0 auto;
  overflow: auto
}

.page-enter-active, .page-leave-active {
  transition: opacity .5s
}
.page-enter, .page-leave-to /* .page-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>
