<template>
  <div>
      <!-- <button v-if="isAdding" class="button" @click="addToCart">加入购物车</button>
      <button v-else class="button" @click="removeFromCart(product._id)">从购物车移除</button> -->
      <el-button v-if="isAdding" class="button" @click="addToCart" type="text" size="small">加入购物车</el-button>
      <el-button v-else class="button" @click="removeFromCart(id)" type="text" size="small" >从购物车移除</el-button>
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    isAdding() {
      let isAdding = true;
      this.cart.map(product => {
        if (product._id === this.product._id) {
          isAdding = false;
        }
      });
      return isAdding;
    },
    cart() {
      return this.$store.state.cart;
    },
    product(){
      let product = this.$store.getters.allProducts.find(product => product._id === this.id)
      return product;
    }
  },
  methods: {
    addToCart() {
      this.$store.commit("ADD_TO_CART", {
        product: this.product
      });
    },
    removeFromCart(productId) {
      this.$store.commit("REMOVE_FROM_CART", {
        productId
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>