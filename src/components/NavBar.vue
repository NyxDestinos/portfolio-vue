<template>
  <nav>
    <v-navigation-drawer
    v-model="drawer"
    temporary
    >
      <v-list>
        <v-list-item
          v-for="link in links" :key="link.id"
        >
          <v-list-item-title class="menu-item" ref="menuLinks" @mouseover="setSelectedIndex(link.id)"
          @click=scrollToContent(link.refId)
          >
          {{ link.text }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="rgb(15, 52, 96)">
      <div class="navbar-left">
        <v-btn @click="() => scrollToContent('about-me')"><h1>// Destinii</h1></v-btn>
      </div>

      <div class="navbar-right" v-if="windowWidth > 1000">
        <li class="menu-item" v-for="link in links" :key="link.id">
          <v-btn text class="text-white" ref="menuLinks" @mouseover="setSelectedIndex(link.id)" @click=scrollToContent(link.refId)>
            <span><h4>{{ link.text }}</h4></span>
          </v-btn>
        </li>

        <button v-if="windowWidth > 1000" class="menu-link" @click="() => switchLocale('en')">EN</button>
        <button v-if="windowWidth > 1000" class="menu-link" @click="() => switchLocale('th')">TH</button>
      </div>

      <p v-if="windowWidth < 1000">
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn icon="mdi-earth"
                v-if="windowWidth < 1000"
                class="menu-item"
                color="white"
                v-bind="props"
              >
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-title class="menu-item" ref="menuLinks" @click="() => switchLocale('en')">EN</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title class="menu-item" ref="menuLinks" @click="() => switchLocale('th')">TH</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </p>
        <v-btn icon="mdi-menu"
        v-if="windowWidth < 1000"
        class="menu-item"
        color="white"
        @click.stop="drawer = !drawer"
        >
        </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
import { emitter } from '../main.js'
export default {
  data () {
    return {
      drawer: null,
      windowWidth: 1001,
      windowHeight: 0,
      menuItems: [],
      menuIndicator: null,
      selectedIndex: 0,
      links: [
        {
          id: 0,
          text: 'About Me',
          refId: 'about-me'
        },
        {
          id: 1,
          text: 'Skill & Experience',
          refId: 'skills'
        },
        {
          id: 2,
          text: 'Portfolio',
          refId: 'portfolio'
        },
        {
          id: 3,
          text: 'Contact',
          refId: 'contact'
        }
      ]
    }
  },

  methods: {
    setSelectedIndex (index) {
      this.selectedIndex = index
    },

    getCurrentItemPosition () {
      if (this.menuItems.length === 0) {
        return 0
      }
      return this.menuItems[this.selectedIndex].offsetLeft
    },

    getCurrentItemWidth () {
      if (this.menuItems.length === 0) {
        return 0
      }
      return this.menuItems[this.selectedIndex].offsetWidth
    },

    updateWindowSize () {
      this.windowWidth = window.innerWidth
      this.windowHeight = window.innerHeight
    },

    scrollToContent (refId) {
      emitter.emit('button-clicked', refId)
    },

    switchLocale (locale) {
      if (this.$i18n.locale === locale) {
        return null
      }

      this.$i18n.locale = locale
    }
  },

  mounted () {
    this.menuItems = this.$refs.menuLinks
    this.menuIndicator = this.$refs.menuIndicator
    this.selectedIndex = 0

    this.updateWindowSize()

    window.addEventListener('resize', this.updateMenuIndicator)
    window.addEventListener('resize', this.updateWindowSize)
  }
}
</script>

<style>
:root {
  --active-color: rgb(233, 69, 96);
  --link-text-color: white;
  --menu-background-color: rgb(15, 52, 96);
  --active-background-color: grey;
}

.navbar-left {
  flex: 1;
  color: var(--link-text-color);
  text-align: left;
  padding: 0.5rem 1rem;
}

.navbar-right {
  align-items: center;
  text-align: right;
  display: flex;
}

.menu-item{
  display: inline-flex;
  width: auto;
  height: 50px;
  align-items: center;
}

.menu-link{
  padding: 0.75rem 1rem;
  display: inline-flex;
  align-items: center;
  color: var(--link-text-color);
  text-decoration: none;
}

.selected {
    position: relative;
  }

.menu-indicator {
  position: absolute;
  height: 0.25rem;
  background-color: var(--active-color);
  bottom: 0;
  left: 0;
  margin: auto;
  width: 3rem;
  transition: all ease 0.5s;
}

</style>
