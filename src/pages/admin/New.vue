<template>
  <product-form @save-product="addProduct" :model="model" :manufacturers="manufacturers"></product-form>
</template>

<script>
import ProductForm from "@/components/ProductForm.vue";
export default {
  data() {
    return {
      model: {},
      manufacturers: [
        {
          _id: "sam",
          name: "Samsung"
        },
        {
          _id: "apple",
          name: "Apple"
        }
      ]
    };
  },
  components: {
    "product-form": ProductForm
  },
  methods: {
    addProduct(model) {
      console.log("model", model);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>