<template>
  <div>
    <div class="row">
    <app-stock v-for="(stock, index) in stocks" :key="index" :stock="stock">
    </app-stock>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "./Stock.vue";

export default {
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio"
    })
  },
  components: {
    appStock: Stock
  }
};
</script>

<style scoped>
div.row {
  justify-content: center;
}
</style>