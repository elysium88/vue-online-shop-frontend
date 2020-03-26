<template>
  <div>
    <div class="title">
      <h1>This is Admin/Products</h1>
    </div>
    <div class="body">
      {{product.name}}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    product () {     
      return this.$store.state.products[0];
    }
  }
};
</script>

<style lang="scss" scoped>
</style>