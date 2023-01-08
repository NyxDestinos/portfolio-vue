<template>
  <v-app>
    <v-main class="background">
      <NavBar ref="navbar"/>
      <MainContent ref="mainContent"/>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue'
import MainContent from './components/MainContent.vue'

export default {
  name: 'App',

  components: {
    NavBar,
    MainContent
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@200;300;500&display=swap');

body, html {
  font-family: 'Kanit', sans-serif;
  font-weight: 200;
  font-size: 120%;

  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
}

body {
  background-color: rgb(22, 33, 62);
}

li {
  padding-left: 2rem;
}

.background{
  background-color: rgb(22, 33, 62);
}

@media (max-width: 900px) {
  body, html {
    font-size: 100%;
  }
}
</style>
