<template>
  <div>
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