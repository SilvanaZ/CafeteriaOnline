import _products from "@/api/shop"

const setProducts = (context) => {
  context.commit('AddAllProducts')
}

export default {setProducts }