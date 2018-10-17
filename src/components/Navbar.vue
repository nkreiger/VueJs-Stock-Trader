  <template>
    <!-- for the drop down you need to bring in the bootstrp jquery packages too -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
      <router-link to="/" tag="a" class="navbar-brand" exact>
        <i class="fas fa-globe-americas"></i>
        Stock Trader
      </router-link>
      <strong>Funds: {{ funds | currency }}</strong>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse format-navbar" id="navbarCollapse">
        <ul class="nav navbar-nav">
          <li class="nav-item">
            <router-link to="/" tag="a" class="nav-item btn btn-primary" active-class="active" exact>
              <a>
                Home
              </a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/stocks" class="btn btn-primary" tag="a" active-class="active" exact>
              <a>
                Trade
              </a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/portfolio" tag="a" class='btn btn-primary' active-class="active" exact>
              <a>
                Portfolio
              </a>
            </router-link>
          </li>
        </ul>
        <ul nav navbar-nav navbar-right>
          <li>
            <a href="#" @click="endDay" class="btn btn-danger">End Day</a>
          </li>
          <li class="dropdown" :class="{show: isDropdownOpen}" @click="isDropdownOpen = !isDropdownOpen">
            <a href="#" class="dropdown-toggle btn btn-info" role="button" aria-haspopup="true" aria-expanded="false">Save and Load</a>
            <ul class="dropdown-menu" :class="{show: isDropdownOpen}">
              <li>
                <a href="#" @click="saveData">Save Data</a>
              </li>
              <li>
                <a href="#" @click="loadData">Load Data</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </template>

<script>
// map actions
import { mapActions } from "vuex";

export default {
  data() {
    return {
      isDropdownOpen: false
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: "randomizeStocks",
      fetchData: "loadData"
    }),
    endDay() {
      // call action to end day in store
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        // could use map getters instead
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      // put request to override old data
      // name node whatever must be .json
      this.$http.put("data.json", data);
    },
    loadData() {
      this.fetchData();
    }
  }
};
</script>

<style scoped>
.navbar-brand {
  font-size: 30px;
  cursor: pointer;
}

.btn.btn-primary {
  margin-left: 25px;
}

.format-navbar {
  justify-content: flex-end;
}

ul {
  list-style-type: none;
}
</style>

