<template>
    <div ref="contact">
      <v-row justify="center" no-gutters>
          <h2>CONTACT</h2>
      </v-row>

      &nbsp;<br>

      <v-row justify="center" no-gutters>
        <v-icon
        class="icon-button"
        variant="text"
        icon="mdi-email"
        href="https://github.com/NyxDestinos"
        target="_blank"
        ></v-icon>E-mail: &nbsp;<a href="mailto:n.punprasitwech@gmail.com" :style="{ 'color':'white'}">n.punprasitwech@gmail.com</a>
      </v-row>

      <v-row justify="center" no-gutters>
          <v-btn
          class="icon-button"
          variant="text"
          icon="mdi-github"
          href="https://github.com/NyxDestinos"
          target="_blank"
          :style="{'font-size': '2rem' }"
          ></v-btn>

          <v-btn
          class="icon-button"
          variant="text"
          icon="mdi-linkedin"
          href="https://www.linkedin.com/in/nutthapon-punprasitwech/"
          target="_blank"
          :style="{'font-size': '2rem' }"
          ></v-btn>
      </v-row>

      &nbsp;<br>

      <v-row justify="center" no-gutters>
          <h2>// Destinii</h2>
      </v-row>
    </div>
</template>

<style>
.icon-button {
  color: white;
}

.icon-button:hover {
  color: skyblue;
}
</style>
