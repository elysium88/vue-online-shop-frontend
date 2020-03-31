<template>
  <manufacturer-form @save-manufacturer="addManufacturer" :model="model" :isEditing="true"></manufacturer-form>
</template>

<script>
import ManufacturerForm from "@/components/ManufacturerForm";
export default {
  components: {
    "manufacturer-form": ManufacturerForm
  },
  created() {
    this.$store.dispatch("manufacturerById", {
      manufacturerId: this.$route.params["id"]
    });
  },
  computed: {
    model() {
      const manufacturer = this.$store.getters.manufacturerById(
        this.$route.params["id"]
      );
      return { ...manufacturer };
    }
  },
  methods: {
    addManufacturer(model) {
      this.$store.dispatch("updateManufacturer", {
        manufacturer: model
      });
      
    }
  }
};
</script>

<style lang="scss" scoped>
</style>