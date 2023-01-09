<template>
  <div>
    <div class="main-content">
      <div ref="about-me">
        <AboutMe/>
      </div>

      <v-divider class="seperateLine"></v-divider>

      <div ref="skills">
        <Skills/>
      </div>

      <v-divider class="seperateLine"></v-divider>

      <div ref="portfolio">
        <Portfolio/>
      </div>

      <!-- <v-divider class="seperateLine"></v-divider>

      <div ref="bio">
        <Bio/>
      </div> -->

      <v-divider class="seperateLine"></v-divider>

      <div ref="contact">
        <Contact/>
      </div>
    </div>
  </div>
</template>

<script>
import AboutMe from './content/AboutMe.vue'
import Skills from './content/Skills.vue'
import Portfolio from './content/Portfolio.vue'
// import Bio from './content/Bio.vue'
import Contact from './content/Contact.vue'

import { emitter } from '../main.js'

export default {
  name: 'MainContent',

  components: {
    AboutMe,
    Skills,
    Portfolio,
    // Bio,
    Contact
  },

  data () {

  },

  mounted () {
    emitter.on('button-clicked', (refId, e) => this.scrollToContent(refId))
  },

  methods: {
    scrollToContent (refId) {
      this.$refs[refId].scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }
}
</script>

<style>
.main-content{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 50px;
  font-size: 100%;
  width: 70%;
  height: 80%;
  color: white;
}

hr {
  position: relative;
  top: 20px;
  border: none;
  height: 0.25rem;
  background: rgb(83, 52, 131);
  margin-bottom: 50px;
}
.seperateLine{
  margin-bottom: 2rem;
  margin-top: 1rem;
}

.header{
  font-size: 200%;
  color: rgb(170, 238, 255);
}

@media (max-width: 900px) {
  .main-content {
    width: 90%;
  }

  .header{
    font-size: 175%;
  }
}
</style>
