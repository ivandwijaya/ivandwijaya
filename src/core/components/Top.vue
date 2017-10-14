<template>
  <header id="header" class="header">
    <profile></profile>
    <div class="menu">
      <button class="menu__button">
        <img class="menu__icon" src="~assets/menu.svg" alt="menu">
      </button>
    </div>
  </header>
</template>

<script>
import Profile from 'core/components/Profile'

export default {
  components: { Profile },
  data () {
    return {
      msg: 'Header'
    }
  }
}
</script>

<style lang="scss">
#header {
  padding: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 90%;
  margin: auto;
}

.menu {
  padding: 0 1.5rem;
}

.menu__icon {
  width: 20px;
}
</style>
