import Vue from "vue";
import Vuex from "vuex";

// modules
import stocks from "./modules/stocks";
import portfolio from "./modules/portfolio";

// supplementary actions
import * as actions from "./actions";

Vue.use(Vuex);

export const store = new Vuex.Store({
  // state actions getters mutators and so on
  actions,
  modules: {
    stocks,
    portfolio
  }
});
