<template>
    <a class="navbar-brand" href="#">
        <img
          :src="img"
          :alt="name"
          class="d-inline-block align-text-top"
        />
        <span>
          {{name}}
        </span>
      </a>
</template>

<script>
    export default {
        name: 'Brand',
        props: ['img','name']
    }
</script>

<style scoped>
  a{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img{
    width: 48px;
    height: 48px;
  }
  span{
    font-size: .9rem;
    color: var(--darkColor);
    font-family:'Pacifico', cursive;
  }
</style>