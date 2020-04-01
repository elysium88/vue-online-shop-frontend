<template>
  <!-- <div>
    <table class="table">
      <thead>
        <tr>
          <th>制造商</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(manufacturer) in manufacturers" :key="manufacturer._id">
          <td>{{manufacturer.name}}</td>
          <td class="modify">
            <router-link :to="'/admin/manufacturers/edit/'+manufacturer._id">修改</router-link>
          </td>
          <td class="remove">
            <a href @click="removeManufacturer(manufacturer._id)">删除</a>
          </td>
        </tr>
      </tbody>
    </table>
    <router-view></router-view>
  </div> -->



  <div class="manufacturers">
      <el-table class="table" :data="manufacturers" style="width: 100%">
        <el-table-column prop="name" label="制造商" width="180"></el-table-column>    

        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button class="modify" type="" size="small">
               <router-link :to="'/admin/manufacturers/edit/'+scope.row._id" tag="div">修改</router-link>
            </el-button>
            <el-button
              class="remove"
              @click="removeManufacturer(scope.row._id), deleteRow(scope.$index, manufacturers)"
              type="danger"
              size="small"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
export default {
  created() {
     
    if (this.manufacturers.length === 0) {
      this.$store.dispatch("allManufacturers");
    }
  },
  computed: {
    manufacturers() {
      return this.$store.getters.allManufacturers;
    }
  },
  methods: {
    removeManufacturer(manufacturerId) {
      const res = confirm("是否删除？");

      if (res) {
        this.$store.dispatch("removeManufacturer", {
          manufacturerId
        });
      }
    }
  }
};
</script>

<style>
table {
  margin: 0 auto;
}

.modify {
  color: blue;
}

.remove a {
  color: red;
}
</style>