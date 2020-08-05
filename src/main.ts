import Vue from 'vue';
import GetTextPlugin from 'vue-gettext';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(GetTextPlugin, {
  availableLanguages: {
    en_US: "English Stars & Stripes",
    en_ROB: "English Bobajobs"
  },
    translations: {
        en_US: {
            "You have %{countdown} seconds to live": "You have %{countdown} seconds to live"
        },
        en_ROB: {
            "You have %{countdown} seconds to live": "Hurdy gurdy flibberty gibbet %{countdown} badger!"
        }
    }
});

new Vue({
    render: h => h(App),
}).$mount('#app');
