<template>
  <section>
    <div class="py-3 text-center">
      <h1 class="display-5">Productos</h1>
      <p class="fs-5 text-muted">
        Estos son nuestros kits especiales de lanzamiento
      </p>
    </div>
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <ProductItem v-for="prod in products[0]" :product="prod" :key="prod.id" @add-to-cart="AddToCart"/>
    </div>
  </section>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";
import { mapState } from "vuex";

export default {
  name: "Products",
  components: { ProductItem },
  computed: {
    ...mapState(["products", "cart"]),
  },
  mounted() {
    this.$store.dispatch('setProducts')
  },
  methods:{
    AddToCart(evt){
      let product = this.products[0].find(item => item.id == evt)
      this.$store.commit('AddToCart',product)
      this.$emit('update:cartSize')
    }
  }
};
</script>

<style scoped>
section{
  max-width: 95vw;
  margin: auto;
  background-color: rgba(230, 192, 179, 0.75);
}
</style>
