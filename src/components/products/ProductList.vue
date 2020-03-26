<template>
  <div>
    <div class="products">
      <div class="container">This is ProductList</div>
    </div>
    <template v-for="product in products">
      <!-- <div :key="product._id" class="product">
        <p class="product__name">产品名称：{{product.name}}</p>
        <p class="product__description">介绍：{{product.description}}</p>
        <p class="product__price">价格：{{product.price}}</p>    
        <p class="product.manufacturer">生产厂商：{{product.manufacturer.name}}</p>
        <img :src="product.image" alt class="product__image" />
        <button @click="addToCart(product)">加入购物车</button>
      </div>-->
      <product-item :product="product" :key="product._id"></product-item>
    </template>
  </div>
</template>

<script>
import ProductItem from "./ProductItem";
export default {
  name: "product-list",
  
 components: {
   'product-item':ProductItem,
 },
  // 在该组件刚被创建时判断 this.products.length === 0 是 true 还是 false，
  // 如果是 true 则证明本地中还没有任何商品，需要向后端获取商品数据，
  // 于是通过 this.$store.dispatch 的方式触发类型为 allProducts 的 action 中，
  // 在 action 中进行异步操作，发起网络请求向后端请求商品数据并返回；如果是 false 则证明本地中存在商品，
  // 所以可以直接从本地获取然后进行渲染。
  created() {
    if (this.products.length === 0) {
      this.$store.dispatch("allProducts");
    }
  },

  computed: {
    products() {
      //return this.$store.state.products;
      return this.$store.getters.allProducts;
    }
  },

  // methods: {
  //   addToCart(product) {
  //     console.log(product);
  //     console.log({
  //       product
  //     });
  //     this.$store.commit("ADD_TO_CART", {
  //       product
  //     });
  //   }
  // }
};
</script>

<style>
.product {
  border-bottom: 1px solid black;
}

.product__image {
  width: 100px;
  height: 100px;
}
</style>