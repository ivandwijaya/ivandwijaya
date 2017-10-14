<template>
  <main class="main" id="main">
    <top></top>
    <div class="page" id="page">
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
import Top from 'core/components/Top'

export default {
  name: 'main',
  components: { Top }
}
</script>

<style lang="scss">
#main {
  flex: 1 0 60%;
}
#page {
  padding: 5%;
  max-width: 90%;
  margin: auto;
}
</style>
