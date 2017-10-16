<template>
  <header id="header" class="header">
    <profile></profile>
    <div class="menu">
      <img class="menu__icon" src="~assets/menu.svg" alt="menu" @click="activateMenu">
      <div class="menu__items" :class="{'menu__items--active': isActive}">
        <router-link class="menu__item" to="/" exact>HOME</router-link>
        <router-link class="menu__item" to="/writing">WRITING</router-link>
        <router-link class="menu__item" to="/contact">CONTACT</router-link>
      </div>
    </div>
  </header>
</template>

<script>
import Profile from 'core/components/Profile'

export default {
  components: { Profile },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    activateMenu() {
      this.isActive = true;
      setTimeout(() => document.addEventListener('click', this.disableMenu), 0);
    },
    disableMenu() {
      setTimeout(() => this.isActive = false, 200);
      document.removeEventListener('click', this.disableMenu);
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
  width: 100%;
  margin: 0 auto;
  flex-shrink: 0;
}

.menu {
  padding: 0 1.5rem;
  position: relative;
  .menu__item {
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
}

.menu__items {
  &--active {
    position: absolute;
    top: 0;
    right: 0;
    background: #fff;
    padding: 1rem;
    border: 1px solid rgba(#000, .3);
    .menu__item {
      display: block;
    }
  }
}

.menu__item {
  font-weight: 500;
  color: #000;
  letter-spacing: 0.2rem;
  font-size: 1rem;
  &--active {
    color: #3fb0ac;
  }
}

.menu__icon {
  width: 1.5rem;
  display: none;
  cursor: pointer;
}

@media only screen and (max-width: 980px) {
  .menu__icon {
    display: block;
  }

  .menu__item {
    display: none;
  }
}
</style>
