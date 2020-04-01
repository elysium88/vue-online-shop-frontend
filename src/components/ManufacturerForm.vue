<template>
  <!-- <form action @submit.prevent="saveManufacturer">
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
  </form> -->

<div class="manufacturerInfo">
    <el-form class="form" ref="form" :model="model" label-width="180px">
      <el-form-item label="Name">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button v-if="isEditing" type="primary" @click="onSubmit">Update Manufacturer</el-button>
        <el-button v-else @click="onSubmit">Add Manufacturer</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
export default {
  props: ["model", "isEditing"],
  methods: {
    onSubmit() {
      this.$emit("save-manufacturer", this.model);
    }
  }
};
</script>

<style>
.manufacturerInfo {
  padding-top: 10px;
}
.form {
  margin: 0 auto;
  width: 500px;
}
.el-input__inner {
  height: 50px;
}
</style>