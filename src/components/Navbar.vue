<template>
  <nav class="navbar sticky-top">
    <div class="container-fluid">
      <Brand img="./images/logo.png" name="Cafeteria Orange" />
      <RouterLink to="/products" class="nav-link">Productos</RouterLink>
      <CartIcon :productCount="cart" @click="openDialog" />
    </div>
  </nav>
</template>

<script>
import Swal from "sweetalert2";
import { RouterLink } from "vue-router";
import Brand from "./Brand.vue";
import CartIcon from "./CartIcon.vue";
import ListItem from './ListItem.vue';

export default {
  name: "Navbar",
  components: { Brand, CartIcon, RouterLink, ListItem },
  props: ["cart"],
  methods: {
    openDialog() {
      const currency = (value) => {
          return value.toLocaleString('PT-BR', {style: 'currency', currency: 'BRL'})
      }
      let item = ''
      let total = 0
      let canBuy = (this.cart !== 0)
      if(this.cart == 0) {
        item = 'No hay artículos en el carrito'
      } else {
        item = '<ul class="list-group">'
         this.$store.state.cart.forEach(element => {
          total += element.price
             item += `
             <li class="list-group-item">
              <table>
                <tr>
                  <td>
                    <img src="${element.img}" class="rounded float-start" width="48" alt="${element.title}">
                  </td>
                  <td class='col-md-6'>
                    ${element.title}
                  </td>
                  <td class='badge text-bg-secondary'>
                    ${currency(element.price)}
                  </td>
                </tr>
              </table>
            </li>`
         });
         item += '</ul>'
         item += `
         <div class="navbar bg-dark navbar-dark sticky-bottom">
          <div class='container-md text-light'>
            Total: <span class='navbar-text text-success'> ${currency(total)}</span>
          </div>
        </div>`
      }
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success mx-2",
          cancelButton: "btn btn-danger mx-2",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          position: "top-end",
          title: "Mi Carrito",
          width: '50%',
          html: item,
          showCancelButton: true,
          showConfirmButton: canBuy,
          confirmButtonText: "Comprar",
          cancelButtonText: "Cancelar",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
              "¡Gracias por tu compra!",
              "Gracias por elegir nuestros productos.",
              "Ok"
            );
            this.$store.commit('Checkout')
          }
        });
    },
  },
};
</script>

<style scoped>
nav {
  background-color: var(--lightColor);
  border-bottom: 2px solid var(--darkColor);
}
</style>
