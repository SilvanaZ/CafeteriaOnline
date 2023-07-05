<template>
  <div class="col-md-3 mx-auto">
    <div class="card mb-4 rounded-3 shadow-sm">
      <div class="card-header py-3">
        <img :src="product.img" :alt="product.title" class="card-img-top" />
      </div>
      <div class="card-body">
        <p class="card-title">{{ price }}</p>
        <p class="my-0 fw-normal">{{ product.title }}</p>
        <button class="w-100 btn btn-lg btn-outline-brown" @click="addToCart">
            Comprar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: ["product"],
  computed: {
    price() {
       return this.product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    },
    shortDescription(){
        let desc = this.product.description
        if(desc.length > 50){
            return `${desc.substring(0,47)}...`;
        } else 
        {
            return desc
        }
    }
  },
  methods:{
    addToCart(){
        this.$emit('add-to-cart', this.product.id)
    }
  }
};
</script>

<style scoped>
a{
  text-decoration: none;
  color: var(--darkColor);
}
img{
  width: 128px;
  height: 128px;
  transition: .5s;
}
img:hover{
  transform: scale(1.1);
}
</style>
