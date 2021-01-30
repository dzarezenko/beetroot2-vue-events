import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.config.keyCodes.efodin = 112

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
