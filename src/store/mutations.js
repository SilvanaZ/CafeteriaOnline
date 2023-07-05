import _products from "@/api/shop"

const AddAllProducts = (state) => {
  state.products.push(_products)
}

const AddToCart = (state, payload) => {
  let check = state.cart.some(element => element == payload)
  if(!check){
    state.cart.push(payload)
  }
}

const RemoveFromCart = (state, payload) => {
  state.cart = state.cart.filter(item => item.id !== payload.id)
}

const Checkout = (state) => {
  state.cart = []
}

export default {AddAllProducts, AddToCart, RemoveFromCart, Checkout}