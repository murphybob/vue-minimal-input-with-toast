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
            "You have %{countdown} seconds to live because %{advertiser} says so!": "You have %{countdown} seconds to live because %{advertiser} says so!"
        },
        en_ROB: {
            "You have %{countdown} seconds to live because %{advertiser} says so!": "Hurdy gurdy %{advertiser} flibberty gibbet %{countdown}!"
        }
    }
});

new Vue({
    render: h => h(App),
}).$mount('#app');
