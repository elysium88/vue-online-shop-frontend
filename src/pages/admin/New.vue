<template>
  <product-form @save-product="addProduct" :model="model" :manufacturers="manufacturers"></product-form>
</template>

<script>
import ProductForm from "@/components/products/ProductForm.vue";
export default {
  components: {
    "product-form": ProductForm
  },
  data() {
    return {
      model: { manufacturer: { name: "", _id: "" } }
    };
  },
  created() {
    console.log('create');

    if (this.manufacturers.length === 0) {
      this.$store.dispatch("allManufacturers");
    }
  },

  computed: {
    manufacturers() {
      console.log(this.$store.getters.allManufacturers);

      return this.$store.getters.allManufacturers;
    }
    //定义的计算属性 model 返回一个空对象作为默认值，因为我们是添加商品，本地中还不存在该商品
    // model() {
    //   return {}
    // },
  },
  mounted() {
    console.log(this);
  },
  methods: {
    addProduct(model) {
      // console.log("model", model);
      this.$store.dispatch("addProduct", {
        product: model
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>