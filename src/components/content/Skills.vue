<template>
  <div ref="skills">
    <h1 class="header">// SKILLS & EXPERIENCE</h1>
    <h2>WORK EXPERIENCE</h2>

    <v-container grid-list-xs class="overflow-auto" height="375" v-if="windowWidth < 900">
      <v-row style="justify-content: center; display: flex">
        <v-col cols="auto" v-for="exp in expList" :key="exp.id">
          <v-card
          class="mx-auto"
          max-width="344"
          variant="outlined"
          >
            <v-card-item>
              <div>
                <div class="text-overline mb-1">
                  {{ exp.place }} | {{ exp.time }}
                </div>
                <div class="text-h6 mb-1">
                  {{ exp.title }}
                </div>
                <div class="text-caption">{{ exp.description }}</div>
              </div>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container grid-list-xs v-if="windowWidth >= 900">
      <h3>Game Programmer Intern</h3>
      Urnique Studio | May-July 2021 <br>
      <span v-html="$t('experience.urnique-intern.description')"></span>
      <li><span v-html="$t('experience.urnique-intern.bullet-1')"></span></li>
      <li><span v-html="$t('experience.urnique-intern.bullet-2')"></span></li>
      <li><span v-html="$t('experience.urnique-intern.bullet-3')"></span></li>

      <p>&nbsp;</p>

      <h3>Game Programmer - Frontend</h3>
      Urnique Studio | June 2022 - Present <br>
      <span v-html="$t('experience.urnique.description')"></span>
      <li><span v-html="$t('experience.urnique.bullet-1')"></span></li>
      <li><span v-html="$t('experience.urnique.bullet-2')"></span></li>
      <li><span v-html="$t('experience.urnique.bullet-3')"></span></li>
      <li><span v-html="$t('experience.urnique.bullet-4')"></span></li>
      <p>&nbsp;</p>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    windowWidth: 0,
    expList:
    [
      {
        id: 0,
        title: 'Game Programmer Intern',
        place: 'Urnique Studio',
        time: 'May-July 2021',
        description: 'Urnique Studio is an independent game studio located in Thailand that has excellent connections to all relevant partners within Southeast Asia and the Global game industry.'
      },
      {
        id: 1,
        title: 'Game Programmer - Frontend',
        place: 'Urnique Studio',
        time: 'June 2022 - Present',
        description: 'Urnique Studio is an independent game studio located in Thailand that has excellent connections to all relevant partners within Southeast Asia and the Global game industry.'
      }
    ]
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
