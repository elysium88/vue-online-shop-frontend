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
  </form>-->

  <div class="manufacturerInfo">
    <el-form
      class="form"
      ref="form"
      label-width="180px"
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
    >
      <el-form-item label="Name">
        <el-input v-model="modelData.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          v-if="isEditing"
          type="primary"
          native-type="submit"
          @click="onSubmit"
        >Update Manufacturer</el-button>
        <el-button v-else @click="onSubmit">Add Manufacturer</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: ["model", "isEditing"],
  data() {
    return {
      modelData: { name: "" }
    };
  },
  created() {
    const manufacturer = this.model;
    this.modelData = { ...manufacturer };
  },
  watch: {
    model(newValue, oldValue) {
      this.modelData = newValue;
    }
  },
  computed: {
    // 这里我们通过获取本地状态中的 showLoader 属性作为 loading 属性值，
    // 因为在用户刚进行添加或修改操作时，向后端发起数据请求，此时本地状态中的 showLoader 属性值为 true，
    // 当成功获取到了数据响应之后，也就是后端数据同步完成，此时 showLoader 属性值为 false，这样就实现了在指定时间显示动态加载效果；
    loading() {
      return this.$store.showLoader;
    }
  },
  methods: {
    onSubmit() {
      this.$emit("save-manufacturer", this.modelData);
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