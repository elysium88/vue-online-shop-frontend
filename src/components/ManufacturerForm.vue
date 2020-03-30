<template>
  <form action @submit.prevent="saveManufacturer">
    <div class="form-group">
      <label for>Name</label>
      <input
        class="form-control"
        type="text"
        name="name"
        id
        placeholder="Name"
        v-model="model.name"
      />
    </div>
    <div class="form-group new-button">
      <button class="button">
        <i class="fa fa-pencil"></i>
        <span v-if="isEditing">更新制造商</span>
        <span v-else>添加制造商</span>
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: ["model", "isEditing"],
  methods: {
    saveManufacturer() {
      this.$emit("save-manufacturer", this.model);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>