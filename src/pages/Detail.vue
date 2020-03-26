<template>
  <div>
    <!-- <product-detail  :product="product"></product-detail> -->
  </div>
</template>

<script>
import ProductDetail from "@/components/products/ProductDetail.vue";
export default {
  
  created() {
    const { name } = this.product;
    if (!name) {
      
      this.$store.dispatch("productById", {
        productId: this.$route.params["id"]
      });
    }
  },
  computed: {
    product() {
        console.log('computed');
        
      const  product = this.$store.getters.productById(this.$route.params["id"]);
        
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