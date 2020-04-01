<template>
  <div class="productInfo">
    <el-form class="form" ref="form" :model="model" label-width="80px">
      <el-form-item label="Name">
        <el-input v-model="modelData.name"></el-input>
      </el-form-item>
      <el-form-item label="Price">
        <el-input v-model="modelData.price"></el-input>
      </el-form-item>

      <el-form-item label="制造商">
        <el-select
          v-model="modelData.manufacturer.name"
          clearable
          placeholder="请选择制造商"
          style="width:100%;"
        >
          <el-option
            v-for="manufacturer in manufacturers"
            :key="manufacturer._id"
            :label="manufacturer.name"
            :value="manufacturer.name"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Image">
        <el-input v-model="modelData.image"></el-input>
      </el-form-item>

      <el-form-item label="Description">
        <el-input type="textarea" v-model="modelData.description"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button v-if="isEditing" type="primary" @click="saveProduct">更新</el-button>
        <el-button v-else @click="saveProduct">新增</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modelData: { manufacturer: { name: "" } },
      isSaved: false
    };
  },
  created() {
    console.log(this.manufacturers);
    
    const product = this.model;
    this.modelData = { ...product, manufacturer: { ...product.manufacturer } };
  },
  //props 接收来自父组件的三个参数：model、manufacturers、isEditing。
  props: ["model", "manufacturers", "isEditing"],
  watch: {
    model(newValue, oldValue) {
      console.log(oldValue.name);
      console.log(newValue.name);

      this.modelData = newValue;
    }
  },
  methods: {
    // `然后我们定义了一个 saveProduct 方法，就是当用户填写完商品信息的表单之后，点击提交按钮会触发的方法，
    // 在 saveProduct 内部，我们调用了父组件的 save-product 方法，并把修改后的 this.model 变量内容传给父组件。
    // 所以这里我们还可以看到，methods 不仅可以使得数据可以双向流动，而且还可以在子组件反向操作父组件的内容，使得数据还可以上下流动。`
    saveProduct() {
      console.log(this.manufacturers);

       // 由于表单中只绑定了modelData.manufacturer.name，
      // 缺少manufacturer._id,但是后端需要manufacturer整个对象,
      // 所以需要将manufacturers中对应的manufacturer找出并覆盖到modelData中
      const manufacturer = this.manufacturers.find(
        item => item.name === this.modelData.manufacturer.name
      );
      this.modelData.manufacturer = manufacturer;
      console.log(this.model);
      
      //this.$emit("save-product", this.model);
      //this.isSaved = true;
      // 完成一些保存创建商品的逻辑 ...
    }
  }
};
</script>

<style>
.productInfo {
  padding-top: 10px;
}
.form {
  margin: 0 auto;
  width: 500px;
}
.el-input__inner {
  height: 60px;
}
</style>