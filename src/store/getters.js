const getAll = (state) => {
  return state.products
}

const getCartItems = (state) => {
  return state.cart
}

const getCartSize = (state) => {
  return state.cart.length
}

export default {getAll, getCartItems, getCartSize}