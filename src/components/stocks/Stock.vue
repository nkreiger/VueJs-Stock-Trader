  <template>
    <div>
      <div class="col-sm-6 col-md-4">
        <div class="card border-success">
          <div class="card-header">
            <h3 class="card-title">
              {{ stock.name }}
              <small>(Price: {{ stock.price }})</small>
            </h3>
          </div>
          <div class="card-body text-success">
            <input type="number" 
            class="form-control"
            :class="{danger: insufficientFunds}" 
            placeholder="Quantity"
            v-model.number="quantity"
            >
            <!-- v-model.number to keep it number when it changes and not convert to string -->
            <br>
            <button class="btn btn-success" @click="buyStock"
            :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)"
            >
              {{ insufficientFunds ? 'Insufficient Funds' : 'Buy'}}
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    funds() {
      // need this to check funds below
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      // check if quantity * price is greater than funds
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };

      console.log("order dispatched");

      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  }
};
</script>
  

  <style scoped>
.card.border-success {
  width: 20rem;
  margin: 15px;
}
.danger {
  border: 1px solid red;
}
</style>
  
