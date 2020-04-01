<template>
  <div>
    <!-- <div class="title">
      <h1>This is Admin/Products</h1>
    </div>
    <div class="body">
      {{product.name}}
    </div>-->
    <!-- <table class="table">
      <thead>
        <tr>
          <th>名称</th>
           <th>价格</th>
            <th>制造商 </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product) in products" :key="product._id">
          <td>{{product.name}}</td>
          <td>{{product.price}}</td>
          <td>{{product.manufacturer.name}}</td>
          <td class="modify">
            <router-link :to="'/admin/edit/'+product._id">修改</router-link>
          </td>
          <td class="remove">
            <a href @click="removeProduct(product._id)">删除</a>
          </td>
        </tr>
      </tbody>
    </table>-->

    <div class="products">
      <el-table class="table" :data="products" style="width: 100%">
        <el-table-column prop="name" label="名称" width="180"></el-table-column>
        <el-table-column prop="price" label="价格" width="180"></el-table-column>
        <el-table-column prop="manufacturer.name" label="制造商" width="180"></el-table-column>

        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button class="modify" type size="small">
              <router-link :to="'/admin/edit/' + scope.row._id" tag="div">修改</router-link>
            </el-button>

            <el-popconfirm title="确定删除吗？" placement="top" @onConfirm="removeProduct(scope.row._id), deleteRow(scope.$index, products)">
              <el-button slot="reference" type="danger"
              size="small">删除</el-button>
            </el-popconfirm>

            <!-- <el-button
              class="remove"
              @click="removeProduct(scope.row._id), deleteRow(scope.$index, products)"
              type="danger"
              size="small"
            >删除</el-button>-->
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  created() {
    if (this.products.length === 0) {
      this.$store.dispatch("allProducts");
    }
  },

  computed: {
    products() {
      return this.$store.getters.allProducts;
    }
  },
  methods: {
    removeProduct(productId) {
      //const res = confirm("是否删除此商品");
      const res = true;
      if (res) {
        this.$store.dispatch("removeProduct", {
          productId
        });
      }
    }
  }
};
</script>

<style>
.products {
  padding-top: 10px;
  text-align: center;
}
table {
  margin: 0 auto;
  width: 740px;
}
.el-table .cell {
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
}
.modify {
  color: blue;
}

.remove {
  color: red;
}
</style>