import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';

import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './app.vue';
Vue.use(VueCompositionAPI);
Vue.use(Element);

import './index.css';

new Vue({
  el: '#app',
  components: {
    App,
  },
  render: c => c(App),
});
