<template>
  <div class="home">
    <h1>CONTACT</h1>
    <div class="divider">.</div>
    <main-content>
      <p>
        The fastest way to contact me is through my <a href="mailto:ivandwijaya@gmail.com">email</a>.
      </p>
      <p>
        Otherwise, feel free to reach me through other platform as well.
      </p>
      <hr>
      <ul>
        <li v-for="(link, social) in socialPlatforms">
          <a :href="link" target="_blank"><i :class="'fa fa-' + socialIcons[social]" aria-hidden="true"></i> {{ social }}</a>
        </li>
      </ul>
    </main-content>
  </div>
</template>

<script>
import MainContent from 'core/components/MainContent'
import {
  SOCIAL_PLATFORMS,
  SOCIAL_ICONS
} from 'core/utils/constants'

export default {
  name: 'home',
  data() {
    return {
      socialPlatforms: SOCIAL_PLATFORMS,
      socialIcons: SOCIAL_ICONS
    }
  },
  components: { MainContent }
}
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
}

li {
  list-style-type: none;
  display: inline-block;
  width: 33.333%;
  a {
    color: #000;
  }
  i {
    padding-right: 0.5rem;
  }
}

hr {
  margin: 1rem 0;
}
</style>
