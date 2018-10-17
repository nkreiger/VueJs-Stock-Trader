// grab custom data
import stocks from "../../data/stocks";

// stocks state
const state = {
  stocks: []
};

const mutations = {
  setStocks(state, stocks) {
    console.log("setting stocks");
    state.stocks = stocks;
    console.log(state.stocks);
  },
  randStocks(state) {
    state.stocks.forEach(stock => {
      // set price to new price, round it back to integer
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
    });
  }
};

const actions = {
  buyStock: ({ commit }, order) => {
    commit("buyStock", order);
  },
  initStocks: ({ commit }) => {
    commit("setStocks", stocks);
  },
  randomizeStocks: ({ commit }) => {
    commit("randStocks");
  }
};

const getters = {
  stocks: state => {
    return state.stocks;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
