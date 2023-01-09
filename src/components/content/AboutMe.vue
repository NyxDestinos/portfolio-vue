<template>
  <div ref="about-me">
    <v-container v-if="windowWidth > 1150">
      <v-row>
        <v-col cols="3" >
          <v-img
          class="rounded-xl"
          :src="'./assets/img/Profile.jpg'"
    ></v-img>

        </v-col>
        <v-col class="align-center justify-center">
          <p class="nameText font-weight-bold"><span v-html="$t('main-content.name')"></span></p>
          <h3>Game Developer / Web Developer</h3><br>
          <span v-html="$t('main-content.introduce')"></span>
          <div ref="about-me" v-if="windowWidth > 1600">
            <h1 class="header">// ABOUT ME</h1>
            <span v-html="$t('about-me.text')"></span>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-container v-if="windowWidth < 1150">
      <v-img
          class="mx-auto rounded-xl"
          :src="'./assets/img/Profile.jpg'"
          width="75%"
          height="75%"
          max-width="360px"
          cover
      ></v-img>

      <p class="nameText font-weight-bold"><span v-html="$t('main-content.name')"></span></p>
      <h3>Game Developer / Web Developer</h3>
    </v-container>

    <v-spacer></v-spacer>

    <span v-if="windowWidth < 1150" v-html="$t('main-content.introduce')"></span>
    <div v-if="windowWidth < 1600">
      <h1 class="header">// ABOUT ME</h1>
      <span v-html="$t('about-me.text')"></span>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    windowWidth: 0,
    windowHeight: 0
  }),
  methods: {
    updateWindowSize () {
      this.windowWidth = window.innerWidth
      this.windowHeight = window.innerHeight
    }
  },

  mounted () {
    this.updateWindowSize()

    window.addEventListener('resize', this.updateWindowSize)
  }
}
</script>
<style>
.nameText {
  font-size: 250%;
}

@media (max-width: 600px) {
  .nameText {
    font-size: 200%;
  }
}
</style>
