import Vue from "vue";
import App from "./App.vue";
import { VueSpinners } from "@saeris/vue-spinners";
import Chartick from "vue-chartkick";
import Chart from "chart.js";
import "@/assets/css/tailwind.css";

import router from "@/router";
import { dollarFilter, percentFilter } from "@/filters";

Vue.use(VueSpinners);
Vue.use(Chartick.use(Chart));
Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
