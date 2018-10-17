<template>
    <div>
        <router-view name="header-top"></router-view>
        <div class="container-fluid">
          <transition name="slide" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
    </div>
</template>

<script>
// components
import Navbar from "./components/Navbar.vue";
// helpers
import { mapActions } from "vuex";

export default {
  components: {
    appNavbar: Navbar
  },
  created() {
    this.$store.dispatch("initStocks");
  }
};
</script>

<style>
body {
  padding: 30px;
}

.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}
.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}
@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
