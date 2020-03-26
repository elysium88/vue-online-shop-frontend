<template>
  <div>
   <!--如果产品不存在 不加载组件-->
    <product-detail v-if="product.name" :product="product"></product-detail>
  </div>
</template>

<script>
import ProductDetail from "@/components/products/ProductDetail.vue";
export default {
  
  created() {
    console.log(this.product);
    const { name } = this.product;
    if (!name) {
      
      this.$store.dispatch("productById", {
        productId: this.$route.params["id"]
      });
    }
  },
  computed: {
    product() {
      const  product = this.$store.getters.productById(this.$route.params["id"]);
      console.log(this.$store.getters.allProducts);
      return product
    }
  },
  components: {
    "product-detail": ProductDetail
  }
};
</script>

<style lang="scss" scoped>
</style>