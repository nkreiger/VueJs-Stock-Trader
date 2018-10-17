<template>
  <div>
    <div class="col-sm-6 col-md-4">
        <div class="card border-danger">
          <div class="card-header">
            <h3 class="card-title">
              {{ stock.name }}
              <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
            </h3>
          </div>
          <div class="card-body text-success">
            <input type="number" class="form-control" 
            :class="{danger: insufficientQuantity}"
            placeholder="Quantity"
            v-model.number="quantity"
            >
            <!-- v-model.number to keep it number when it changes and not convert to string -->
            <br>
            <button class="btn btn-danger" @click="sellStock"
            :disabled="insufficientQuantity ||quantity <= 0 || !Number.isInteger(quantity)"
            >
              {{ insufficientQuantity ? 'Not Enough Shares' : 'Sell'}}
            </button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    insufficientQuantity() {
      // trying to sell more than have return true
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: "sellStock"
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      // max range error = same name as function
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }
};
</script>

  <style scoped>
.card.border-danger {
  width: 20rem;
  margin: 15px;
}
.danger {
  border: 1px solid red;
}
</style>