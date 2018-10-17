import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";

import App from "./App.vue";
// get routes
import { routes } from "./routes";
// vuex store
import { store } from "./store/store";

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = "https://vuejs-stock-trader-4e617.firebaseio.com/";

// filter for currency
Vue.filter("currency", value => {
  return "$" + value.toLocaleString();
});

// router
const router = new VueRouter({
  // configure server appropriately
  mode: "history",
  routes,
  // scroll to hash if it exists
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return {
        selector: to.hash
      };
    }
    // else return normal position
    return {
      x: 0,
      y: 0
    };
  }
});

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});

/* #####################################
Project Set-UP 

1. npm install -ave-dev babel-preset-stage-2 to use spread operator

2. the .babelrc file should be changed too:
{
  "presets": [["env", { "modules": false }], ["stage-2"]]
}

3. npm install vuex --save

*/
