import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import mitt from 'mitt'
import i18n from './i18n'

export const emitter = mitt()

loadFonts()

createApp(App).use(i18n)
  .use(vuetify)
  .mount('#app')
