import Vue from 'vue'
import App from './App.vue'
import Phaser from 'phaser'

Vue.config.productionTip = false

Vue.use(Phaser)

new Vue({
  render: h => h(App),
}).$mount('#app')

