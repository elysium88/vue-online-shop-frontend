<template>
  <product-form @save-product="addProduct" :model="model" :manufacturers="manufacturers"></product-form>
</template>

<script>
import ProductForm from "@/components/products/ProductForm.vue";
export default {
  components: {
    "product-form": ProductForm
  },
  // data() {
  //   return {
  //     model: {},
  //     manufacturers: [
  //       {
  //         _id: "sam",
  //         name: "Samsung"
  //       },
  //       {
  //         _id: "apple",
  //         name: "Apple"
  //       }
  //     ]
  //   };
  // },
  created() {
   
    if (this.manufacturers.length === 0) {
      this.$store.dispatch("allManufacturers");
    }
  },

  computed: {
    manufacturers() {
      return this.$store.getters.allManufacturers;
    },
    //定义的计算属性 model 返回一个空对象作为默认值，因为我们是添加商品，本地中还不存在该商品
    model() {
      return {}
    },
   
  },
  
  methods: {
    addProduct(model) {
      // console.log("model", model);
      this.$store.dispatch('addProduct',{
        product:model
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>