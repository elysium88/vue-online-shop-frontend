<template>
  <manufacturer-form @save-manufacturer="addManufacturer" :model="model"></manufacturer-form>
</template>

<script>
import ManufacturerForm from "@/components/ManufacturerForm";
export default {
  data() {
    return {
      model:{}
    };
  },
  components: {
    "manufacturer-form": ManufacturerForm
  },
  created() {},
  computed: {},
  methods: {
    addManufacturer(model) {
      this.$store.dispatch("addManufacturer", {
        manufacturer: model
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>