/* ### LAZY LOADING */
const Navbar = resolve => {
  require.ensure(
    ["./components/Navbar.vue"],
    () => {
      resolve(require("./components/Navbar.vue"));
    },
    "general"
  );
};

const Home = resolve => {
  require.ensure(
    ["./components/Home.vue"],
    () => {
      resolve(require("./components/Home.vue"));
    },
    "general"
  );
};

const Portfolio = resolve => {
  require.ensure(
    ["./components/portfolio/Portfolio.vue"],
    () => {
      resolve(require("./components/portfolio/Portfolio.vue"));
    },
    "portfolio"
  );
};

const Portfolio_Stock = resolve => {
  require.ensure(
    ["./components/portfolio/Stock.vue"],
    () => {
      resolve(require("./components/portfolio/Stock.vue"));
    },
    "portfolio"
  );
};

const Stocks = resolve => {
  require.ensure(
    ["./components/stocks/Stocks.vue"],
    () => {
      resolve(require("./components/stocks/Stocks.vue"));
    },
    "stocks"
  );
};

const Stocks_Stock = resolve => {
  require.ensure(
    ["./components/stocks/Stock.vue"],
    () => {
      resolve(require("./components/stocks/Stock.vue"));
    },
    "stocks"
  );
};

export const routes = [
  {
    path: "/",
    name: "home",
    components: {
      default: Home,
      "header-top": Navbar
    }
  },
  {
    path: "/stocks",
    components: {
      default: Stocks,
      "header-top": Navbar
    }
  },
  {
    path: "/portfolio",
    components: {
      default: Portfolio,
      "header-top": Navbar
    }
  },
  {
    path: "*",
    redirect: {
      name: "home"
    }
  }
];
