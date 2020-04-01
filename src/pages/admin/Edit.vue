<template>
  <div>
    <div class="title">
      <!-- <h1>This is Admin/Edit/{{$route.params.id}}</h1> -->
      <h1>This is Admin/Edit</h1>
    </div>
    <!-- 父组件监听到之后触发 updateProduct 事件 -->
    <product-form
      @save-product="updateProduct"
      :model="model"
      :manufacturers="manufacturers"
      :isEditing="true"
    ></product-form>
  </div>
</template>

<script>
import ProductForm from "@/components/products/ProductForm.vue";
export default {
  // data: {
  //   model() {
  //     // 这里返回 product 的拷贝，是为了在修改 product 的拷贝之后，
  //     //在保存之前不修改本地 Vuex store 的 product 属性
  //     const product = this.$store.getters.productById(this.$route.params["id"]);
  //     console.log(product);

  //     return { ...product, manufacturer: { ...product.manufacturer } };
  //   }
  // },

  // data() {
  //   return {
  //     model: { manufacturer: { name: "" } }
  //   };
  // },
  created() {
    console.log("222");
    const { name = "" } = this.model || {};
    console.log(this.model);
    if (!name) {
      this.$store.dispatch("productById", {
        productId: this.$route.params["id"]
      });
    }
    if (this.manufacturers.length === 0) {
      this.$store.dispatch("allManufacturers");
    }
  },
  computed: {
    manufacturers() {
      console.log(this.$store.getters.allManufacturers);

      return this.$store.getters.allManufacturers;
    },
    model() {
      // 这里返回 product 的拷贝，是为了在修改 product 的拷贝之后，
      //在保存之前不修改本地 Vuex store 的 product 属性
      const product = this.$store.getters.productById(this.$route.params["id"]);
      const res = { ...product, manufacturer: { ...product.manufacturer } };

      return res;
    }
  },
  methods: {
    updateProduct(product) {
      this.$store.dispatch("updateProduct", {
        product
      });
    }
  },
  components: {
    "product-form": ProductForm
  }
};
</script>

<style lang="scss" scoped>
</style>