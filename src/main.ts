import Vue from 'vue'
import GetTextPlugin from 'vue-gettext'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(GetTextPlugin, {translations: {}})

new Vue({
  render: h => h(App),
}).$mount('#app')
