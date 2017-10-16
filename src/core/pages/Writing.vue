<template>
  <div class="home">
    <h1>WRITING</h1>
    <div class="divider">.</div>
    <main-content>
      <p>
        What I’ve been up to lately:
      </p>
      <ul>
        <li>rewriting this website from static html document to a full single-page application</li>
        <li>working in a great co-working e-commerce startup environment called Jakmall here in Jakarta</li>
        <li>doing an online course on Laracasts to touch-up my skills</li>
      </ul>
      <p>
        I'm currently trying my hand in writing a blog here in <a :href="medium">Medium</a>. I will be very grateful if you can give me some feedback about my page since this is a new experience for me.
      </p>
    </main-content>
  </div>
</template>

<script>
import MainContent from 'core/components/MainContent'
import {
  MEDIUM,
  SOCIAL_PLATFORMS
} from 'core/utils/constants'

export default {
  name: 'writing',
  components: { MainContent },
  data() {
    return {
      medium: SOCIAL_PLATFORMS[MEDIUM]
    }
  }
}
</script>
