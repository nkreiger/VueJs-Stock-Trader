const state = {
  funds: 10000,
  stocks: []
};

const mutations = {
  buyStock(state, { stockId, quantity, stockPrice }) {
    // auto loops through all el and execute this function for each
    const record = state.stocks.find(element => element.id == stockId);
    // record is set with true or false now

    if (record) {
      record.quantity += quantity;
    } else {
      // add to state array
      state.stocks.push({
        id: stockId,
        quantity: quantity
      });
    }
    // update funds
    state.funds -= stockPrice * quantity;
  },
  sellStock(state, { stockId, quantity, stockPrice }) {
    // record is set to correct stock
    const record = state.stocks.find(element => element.id == stockId);

    // quantity is more than what you have, don't sell
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    // update funds
    state.funds += stockPrice * quantity;
  }, // this must be in this file
  setPortfolio(state, portfolio) {
    // get state and portfolio from actions.js
    state.funds = portfolio.funds;
    console.log(state.funds);
    state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
    console.log(state.stocks);
  }
};

const actions = {
  sellStock({ commit }, order) {
    commit("sellStock", order);
  }
  // buy stock is already committed in stocks.js actions
};

const getters = {
  stockPortfolio(state, getters) {
    // transform each el in stocks array
    return state.stocks.map(stock => {
      // get stocks with stocks.js getter
      const record = getters.stocks.find(element => element.id == stock.id);

      // for each record return a new object, from the map
      const currentStock = {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      };
      return currentStock;
    });
  },
  funds(state) {
    return state.funds;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
