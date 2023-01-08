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
      &emsp;&emsp;Urnique Studio is an independent game studio located in Thailand that has excellent connections to all relevant partners within Southeast Asia and the Global game industry.
      <li>Developed and implemented game prototypes using Unity Engine, gaining valuable experience in game development.</li>
      <li>Designed new mechanics and content suitable for game prototypes.</li>
      <li>Collaborated with another intern to build a standalone prototype, enhancing teamwork and communication skills.</li>

      <p>&nbsp;</p>

      <h3>Game Programmer - Frontend</h3>
      Urnique Studio | June 2022 - Present <br>
      &emsp;&emsp;After graduating from university, I continued to work at the same place where I completed my internship.
      This allowed me to transition smoothly into a full-time role and continue to grow and develop my skills in my chosen field.
      <li>Implemented gameplay mechanics and features using Unity C# and Git</li>
      <li>Improved the user interface and added form validation to enhance the player experience</li>
      <li>Debugged and troubleshot issues to ensure smooth gameplay and a high-quality game</li>
      <li>Stayed up-to-date with industry trends and best practices in game development</li>
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
