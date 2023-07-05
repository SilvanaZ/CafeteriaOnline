<template>
  <div class="list-container">
    <a
      href="#"
      class="list-group-item list-group-item-action active"
      aria-current="true"
    >
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">List group item heading</h5>
        <small>3 days ago</small>
      </div>
      <p class="mb-1">Some placeholder content in a paragraph.</p>
      <small>And some small print.</small>
    </a>
  </div>
</template>

<script>
export default {
    name:'ListItem'
};
</script>

<style scoped>
.list-container{
    width: 150px;
    height: 100px;
    background-color: blue;
}
</style>
