<template>
  <div>
    <div class="title">
      <!-- <h1>{{msg}}</h1> -->
      <h1>In Stock</h1>
    </div>
    <product-list></product-list>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue'
export default {
  name: "home",
  components: {
    'product-list':ProductList,
  },
  data() {
    return {
      msg: "welcom to your vue.js app"
    };
  }
};
</script>

<style lang="scss" scoped>
</style>