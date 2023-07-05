<template>
  <section>
    <h1>
      Bienvenidos a <span class="brand">{{ app_name }}</span>
    </h1>
    <p>Pasión en quien produce y en quien lo usa</p>
  </section>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      app_name: "Cafeteria Orange",
    };
  },
};
</script>
<style scoped>
section{
  max-width: 95vw;
  margin: auto;
  background: linear-gradient(to right, transparent, var(--lightColor) 2%, transparent 90%);
  height: 80vh;
  padding: 2rem;
  color: var(--darkColor);
}
.brand{
  font-family: 'Pacifico', cursive;
  display: block;
  font-size: 5rem;
  line-height: 6rem;
  padding: 2rem 0;
}
</style>
