<template>
  <main class="main-container">
    <Navbar :cart="cartSize" />
    <RouterView />
    <Footer />
  </main>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  computed: {
    cartSize(){
      return this.$store.state.cart.length
    }
  }
};
</script>

<style>
@import "@/assets/main.css";
</style>
