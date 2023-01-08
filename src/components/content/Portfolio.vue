<template>
    <div ref="portfolio">
        <h1 class="header">// PORTFOLIO</h1>
        <h2>PROJECTS</h2>
        <v-container grid-list-xs class="overflow-auto" height="375">
            <v-row style="justify-content: center; display: flex">
                <v-col cols="auto" v-for="work in workList" :key="work.id">
                    <v-hover v-slot="{ isHovering, props }">
                        <v-card
                        class="mx-auto"
                        width="100%"
                        height="100%"
                        max-width="360px"
                        variant="outlined"
                        v-bind="props"
                        >
                            <v-card-item>
                                <div>
                                    <div class="text-overline mb-1">
                                        {{ work.type }}
                                    </div>
                                    <div class="text-h5 mb-1">
                                        <strong>{{ work.name.toUpperCase() }}</strong>
                                    </div>
                                    <div class="text-caption">{{ work.caption }}</div>
                                </div>
                                <v-img :src="work.image"/>
                            </v-card-item>

                            <v-card-actions>
                                <v-btn
                                    color="blue-lighten-2"
                                    variant="text"
                                >
                                    Click to Explore
                                </v-btn>
                            </v-card-actions>

                            <v-overlay
                            v-model="work.showOverlay"
                            activator="parent"
                            location-strategy="static"
                            scroll-strategy="close"
                            >
                                <v-card
                                class="pa-2 align-center justify-center overflow-y-auto"
                                :style="{
                                    top: '12.5%',
                                    left: '12.5%',
                                    transform: 'translate(0%, 12.5%)',
                                    width: windowWidth *0.75 + 'px',
                                    height: windowHeight *0.75 + 'px',
                                    'background-color': 'black',
                                    'color': 'white'
                                }"
                                >
                                    <transition name="fade">
                                        <v-card-item v-if="work.showOverlay">
                                            <v-row>
                                                <v-col class="align-center justify-center" cols="auto">
                                                    <v-img :src="work.logo" contain width="100px" height="100px" v-if="windowWidth > 750"/>
                                                </v-col>
                                                <v-col cols="auto">
                                                    <h1>{{ work.name.toUpperCase() }}</h1>
                                                    <h4>USING {{ work.tools.toUpperCase() }}</h4>
                                                </v-col>
                                            </v-row>
                                            <p>
                                                <v-card
                                                elevation="24"
                                                max-width="700px"
                                                class="mx-auto"
                                                :style="{'background-color': 'black'}"
                                                >
                                                    <v-carousel
                                                    width="auto"
                                                    height="auto"
                                                    hide-delimiter-background
                                                    delimiter-icon="mdi-square"
                                                    >
                                                        <v-carousel-item v-for="image in work.gallery" :key="image.id"
                                                            cover
                                                            contain
                                                            width="auto"
                                                            height="auto"
                                                            class="mx-auto"
                                                        >
                                                        <v-img :src=image.path contain max-width="700px"/>
                                                        </v-carousel-item>
                                                    </v-carousel>
                                                </v-card>
                                                &nbsp;<br>
                                                <span v-html="work.content"></span>
                                            </p>

                                            <p>&nbsp;</p>
                                        </v-card-item>
                                    </transition>
                                </v-card>
                            </v-overlay>

                            <v-overlay
                            :model-value="isHovering"
                            contained
                            scrim="black"
                            class="align-center justify-center"
                            >
                                <v-btn variant="flat" color="black">See more info</v-btn>
                            </v-overlay>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>
        </v-container>

        <h2>AWARD & PRIZE</h2>
        &nbsp;<br>
        <v-layout row v-if="windowWidth >= 900">
            <v-flex xs4 style="margin-right: 1rem;">
                <v-img
                :src="'https://scontent.fbkk5-6.fna.fbcdn.net/v/t39.30808-6/277098539_5287639811269945_5737378731780810833_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGrUVvu9p93qbY1HxGJos0_FFWYlZ4eojwUVZiVnh6iPG8pbTSleNKPyVqlVZW2qB0K10jn89N-_x3eT-4e4zSZ&_nc_ohc=JMOwb9FHPLIAX9o7S8t&_nc_ht=scontent.fbkk5-6.fna&oh=00_AfBULzFk9Mlj7QwJoAP0fEIyxTZ3k7QNgoCrqX0QpMAszQ&oe=63BF1BDA'"
                width="30rem"
                height="30rem"
                max-width="350px"/>
            </v-flex>
            <v-flex xs8>
                <h1>GLITCHER OF THE COSMATA | BEST OF GAME DESIGN</h1>
                <h4>In Game Talent Showcase 2022 by Thai Game Software Industry Association</h4>
                <li>Best of Game Design <strong>(1st place)</strong></li>
                <li>Best of Technology <strong>(top 3)</strong></li>
            </v-flex>
        </v-layout>

        <v-container grid-list-xs v-if="windowWidth < 900">
            <v-row style="justify-content: center; display: flex">
                <v-col cols="auto">
                <v-card
                class="mx-auto"
                max-width="344"
                variant="outlined"
                >
                    <v-card-item>
                    <div>
                        <v-img :src="'https://scontent.fbkk5-6.fna.fbcdn.net/v/t39.30808-6/277098539_5287639811269945_5737378731780810833_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGrUVvu9p93qbY1HxGJos0_FFWYlZ4eojwUVZiVnh6iPG8pbTSleNKPyVqlVZW2qB0K10jn89N-_x3eT-4e4zSZ&_nc_ohc=JMOwb9FHPLIAX9o7S8t&_nc_ht=scontent.fbkk5-6.fna&oh=00_AfBULzFk9Mlj7QwJoAP0fEIyxTZ3k7QNgoCrqX0QpMAszQ&oe=63BF1BDA'"/>
                        <div class="text-overline mb-1">
                        GLITCHER OF THE COSMATA
                        </div>
                        <div class="text-h6 mb-1">
                        BEST OF GAME DESIGN
                        </div>
                        <div class="text-caption">
                            <li>Best of Game Design <strong>(1st place)</strong></li>
                            <li>Best of Technology <strong>(top 3)</strong></li>
                        </div>
                    </div>
                    </v-card-item>
                </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
  data: () => ({
    windowWidth: 0,
    windowHeight: 0,
    workList:
      [
        {
          id: 0,
          name: 'Backtrack',
          type: 'Game',
          caption: 'A Turn-Based Arcade Game with Time-Altering Mechanics',
          tools: 'Unity, C#',
          content: `&nbsp;<br>
                                        &emsp;&emsp;<b>Backtrack</b> is a turn-based arcade game inspired by Megaman Battle Network and One Step from Eden.
                                        In the game, players must confront increasingly powerful waves of enemies. During their turn,
                                        players can choose to attack or move to adjacent tiles. The game also features a skill system that allows players to gain an advantage over their foes.
                                        One of the key features of Backtrack is the ability to "Rewind" time, allowing players to change the course of the game
                                        by going back to previous turns and consuming energy based on the number of turns they wish to rewind.

                                        <br>&nbsp;<br>

                                        &emsp;&emsp;This project was a solo development effort, with all design, SFX, and art created by the developer.
                                        It was submitted to <strong>Brackey's Jam 2020.2</strong> and completed in approximately four days.
                                        
                                        <br>&nbsp;<br>

                                        <p style="justify-content: center; display: flex">
                                            <iframe style="justify-content: center; display: flex" frameborder="0" src="https://itch.io/embed/723322?bg_color=455fa2&amp;fg_color=ffffff&amp;link_color=e94560&amp;border_color=193683" width="552" height="167">
                                            <a href="https://destinos.itch.io/backtrack">Backtrack by destinos</a>
                                            </iframe>
                                        </p>`,
          image: '/assets/img/backtrack/backtrack-banner.gif',
          logo: '/assets/img/backtrack/backtrack-logo.png',
          gallery:
          [
            { id: 0, path: '/assets/img/backtrack/backtrack-banner.gif' },
            { id: 1, path: '/assets/img/backtrack/backtrack-1.png' },
            { id: 2, path: '/assets/img/backtrack/backtrack-2.png' },
            { id: 3, path: '/assets/img/backtrack/backtrack-3.png' }
          ]
        },
        {
          id: 1,
          name: 'The MEOWquerade',
          type: 'Game',
          caption: 'Become a Furry Detective in The MEOWquarade, a Turn-Based Card Game for 4-6 Players',
          tools: 'Unity, C#',
          content: `&nbsp;<br>
                                        &emsp;&emsp;<b>The MEOWquarade</b> is a tabletop role-playing game inspired by Amongus and Ultimate Werewolf.
                                        The game is played in a turn-based card game system that allows 4-6 players to role-play at a cat masquerade party
                                        where one or more players are secretly betrayers.

                                        <br>&nbsp;<br>

                                        &emsp;&emsp;Players on the guest team must identify and eliminate the betrayer(s) before they become the majority,
                                        as betrayers win the game if they are able to outnumber the guests.
                                        
                                        <br>&nbsp;<br>
                                        
                                        I worked on this project with a team of six members, serving as the game developer, game designer,
                                        and contributing to the art and client-server code. This project was completed as part of a software engineering course
                                        at Chulalongkorn University, and it took several months to complete a prototype version.`,
          image: '/assets/img/meowquerade/meowquerade-banner.png',
          logo: '/assets/img/meowquerade/meowquerade-logo.png',
          gallery:
          [
            { id: 0, path: '/assets/img/meowquerade/meowquerade-banner.png' },
            { id: 1, path: '/assets/img/meowquerade/meowquerade-1.png' },
            { id: 2, path: '/assets/img/meowquerade/meowquerade-2.png' },
            { id: 3, path: '/assets/img/meowquerade/meowquerade-3.png' }
          ]
        },
        {
          id: 2,
          name: 'Glitcher of the Cosmata',
          type: 'Game',
          caption: 'Glitcher of the Cosmata: The Roguelike Deck-Builder You Won\'t Want to Miss',
          tools: 'Unity, C#',
          content: `&nbsp;<br>
                        &emsp;&emsp;<strong>Glitcher of the Cosmata</strong> is a Deck-building Roguelike inspired by Slay the Spire and Library of Ruina which designed, developed by TEAM Destinii

                        This is our senior project and still a work in progress, however, We will keep updating and accompanying you. The final version of the game will
                        be released around this Q2. We're looking forward to seeing you again in the final version, so stay tuned. Thank you and love to all of you guys! 

                        <br>&nbsp;<br>

                        &emsp;&emsp;Most of gameplay code and assets were made by us. and some bought/free assets

                        <br>&nbsp;<br>

                        &emsp;&emsp;<strong>Credits</strong> <br>
                        &emsp;&emsp;Project Leader / Lead Programmer / Game Design / Level Design - Destinos <br>
                        &emsp;&emsp;Programmer / UX/UI / Artists - On Som
                        
                        <br>&nbsp;<br>
                                        
                        <p style="justify-content: center; display: flex">
                            <iframe frameborder="0" src="https://itch.io/embed/1420205?bg_color=222&amp;fg_color=FFF" width="552" height="167">
                                <a href="https://destinos.itch.io/glitcher-of-the-cosmata">Glitcher of the Cosmata by destinos</a>
                            </iframe>
                        </p>
                        
                        
                        <br>&nbsp;<br>
                                        
                        <p style="justify-content: center; display: flex">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/kfS3jBSguOQ" 
                            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                            picture-in-picture; web-share" allowfullscreen>
                            </iframe>
                        </p>`,
          image: '/assets/img//glitcher/glitcher-banner.png',
          logo: '/assets/img//glitcher/glitcher-logo.png',
          gallery:
          [
            { id: 0, path: '/assets/img//glitcher/glitcher-banner.png' },
            { id: 1, path: '/assets/img//glitcher/glitcher-1.png' },
            { id: 1, path: '/assets/img//glitcher/glitcher-2.png' }
          ]
        }]
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter-from, .fade-leave-to {
  opacity: 0
}
</style>
