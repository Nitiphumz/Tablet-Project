<template>
  <div class="container createcafe box">
    <form class="form-inline form-search">
      <div>
        <h2>Show All Tablets</h2>
        <h4>จํานวนแท็ปเล็ตทั้งหมด {{ tablets.length }} เครื่อง</h4>
        <div>
          <button v-on:click="navigateTo('/tablet/create')" class="btn btn-success pull-left">
            สร้างแท็ปเล็ต
          </button>
          <button v-on:click="navigateTo('/users')" class="btn btn-secondary pull-left">
            กลับสู่หน้าผู้ใช้
          </button>
        </div>
        <hr />
        <div v-for="tablet in tablets" v-bind:key="tablet.id" class="text-inbox box">
          <dl class="row">
          <dt class="col-sm-3">ID : </dt> 
          <dd class="col-sm-9"> {{ tablet.id }} </dd>
          <dt class="col-sm-3">ชื่อรุ่น : </dt>
          <dd class="col-sm-9"> {{ tablet.nametablet }}  </dd>
          <dt class="col-sm-3">ราคา : </dt>
          <dd class="col-sm-9"> {{ tablet.price }} </dd></dl>
          <button v-on:click="navigateTo('/tablet/' + tablet.id)" class="btn btn-primary btn-lg">
            <i class="bi bi-search">View</i>
          </button>
          <button v-on:click="navigateTo('/tablet/edit/' + tablet.id)" class="btn btn-warning btn-lg">
            <i class="bi bi-gear-wide">Edit</i>
          </button>
          <button v-on:click="deleteTablet(tablet)" class="btn bg-danger btn-info btn-lg ">
            <i class="bi bi-trash">Delete</i>
          </button>
          <hr />
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import TabletService from "@/services/TabletService";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'

export default {
  data() {
    return {
      tablets: []
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteTablet(tablet) {
      let result = confirm("Want of delete?");
      if (result) {
        try {
          await TabletService.delete(tablet);
          this.refreshData();
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      this.tablets = (await TabletService.index()).data;
    }
  },
  async created() {
    try {
      this.tablets = (await TabletService.index()).data;
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style scoped >
.bd-teal-100 {
  color: #212529;
  background-color: #afecda; }
.text-inbox{  
  border: 5px rgb(76, 76, 76);
  padding: 50px;
}
.createcafe{
	margin: 10px;
	margin-top: 10px;
	margin-left: 100px;
}
.center{
	text-align: center;
	}
.box{
  padding: 15px;
}
</style>
