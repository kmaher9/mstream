import Vue from 'vue'
import './plugins/axios'
import './plugins/vuetify'
import App from './App.vue'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'

Vue.config.productionTip = false

Vue.use(VueVideoPlayer)

new Vue({
  render: h => h(App),
}).$mount('#app')
