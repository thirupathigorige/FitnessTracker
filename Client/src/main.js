import Vue from 'vue'
import App from './App.vue';
import VueSimpleAlert from "vue-simple-alert";
import router from "./router/router"
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import { AutoCompletePlugin } from '@syncfusion/ej2-vue-dropdowns';

Vue.use(AutoCompletePlugin);
Vue.use(VueSimpleAlert);

require("./assets/main.scss");

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
