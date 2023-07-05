<template>
  <Transition>
    <div class="icon-container">
      <span class="material-symbols-outlined"> shopping_cart </span>
      <span class="badge rounded-pill" v-if="productCount > 0">
        {{ productCount }}
        <span class="visually-hidden">Mensajes no leidos</span>
      </span>
    </div>
  </Transition>
</template>

<script>
export default {
  name: "CartIcon",
  props: ['productCount']
};
</script>

<style scoped>
@import "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0";
.material-symbols-outlined {
  font-size: 36px;
}
.icon-container {
  margin-right: 20px;
}
.badge{
    background-color: var(--darkColor);
    transform: translate(-15px,-30px);
    color: var(--lightColor);
}
</style>
