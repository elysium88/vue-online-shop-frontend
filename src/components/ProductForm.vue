<template>
  <form action @submit.prevent="saveProduct">
    <!-- 其他表单，如 input 等 -->
    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
      <div class="form-control">
        <label for>Name</label>
        <input class="form-control" type="text" name="name" placeholder="name" v-model="model.name" />
      </div>

      <div class="form-control">
        <label for>Price</label>
        <input
          class="form-control"
          type="text"
          name="price"
          placeholder="price"
          v-model="model.price"
        />
      </div>

      <div class="form-control">
        <label>manufacturer</label>
        <select class="form-control" name="manufacturer" v-model="model.manufacturer">
          <template v-for="manufacturer in manufacturers">
            <option
              :value="manufacturer._id"
              :key="manufacturer._id"
              :selected="manufacturer._id == (model.manufacturer && model.manufacturer._id)"
            >{{manufacturer.name}}</option>
          </template>
        </select>
      </div>
    </div>

    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div class="form-control">
        <label for>Image</label>
        <input
          class="form-control"
          type="text"
          name="Image"
          placeholder="Image"
          v-model="model.image"
        />
      </div>
      <div class="form-control">
        <label for>Description</label>
        <input
          class="form-control"
          type="text"
          name="Description"
          placeholder="Description"
          v-model="model.description"
        />
      </div>
      <div class="form-group new-button">
        <button class="button">
          <i class="fa fa-pencil"></i>
          <span v-if="isEditing">Update Product</span>
          <span v-else>Add Product</span>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      isSaved: false
    };
  },
  //props 接收来自父组件的三个参数：model、manufacturers、isEditing。
  props: ["model", "manufacturers", "isEditing"],
  methods: {
    // `然后我们定义了一个 saveProduct 方法，就是当用户填写完商品信息的表单之后，点击提交按钮会触发的方法，
    // 在 saveProduct 内部，我们调用了父组件的 save-product 方法，并把修改后的 this.model 变量内容传给父组件。
    // 所以这里我们还可以看到，methods 不仅可以使得数据可以双向流动，而且还可以在子组件反向操作父组件的内容，使得数据还可以上下流动。`
    saveProduct() {
      this.$emit("save-product", this.model);
      //this.isSaved = true;
      // 完成一些保存创建商品的逻辑 ...
    }
  }
};
</script>

<style lang="scss" scoped>
</style>