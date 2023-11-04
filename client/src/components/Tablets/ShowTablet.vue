<template>
  <div class="container createcafe box text-inbox">
    <form class="form-inline form-search">
  <div>
 <h2>Show Tablet By Id</h2>
        <hr>
        <dl class="row">
          <dt class="col-sm-3"> ชื่อรุ่น :</dt>
            <dd class="col-sm-9">{{ tablet.nametablet }}</dd>
            <dt class="col-sm-3"> Tablet ID</dt>
            <dd class="col-sm-9">{{ tablet.id }}</dd>
            <dt class="col-sm-3"> ราคา :</dt>
            <dd class="col-sm-9">{{ tablet.price }}</dd>
            <dt class="col-sm-3"> ระบบปฎิบัติการ :</dt>
            <dd class="col-sm-9">{{ tablet.OS }}</dd>
            <dt class="col-sm-3"> ขนาดหน้าจอ :</dt>
            <dd class="col-sm-9">{{ tablet.Screensize }}</dd>
            <dt class="col-sm-3"> ความละเอียด :</dt>
            <dd class="col-sm-9">{{ tablet.Resolution }}</dd>
            <dt class="col-sm-3"> CPU :</dt>
            <dd class="col-sm-9">{{ tablet.CPU }}</dd>
            <dt class="col-sm-3"> พื้นที่ :</dt>
            <dd class="col-sm-9">{{ tablet.Storage }}</dd>
            <dt class="col-sm-3"> น้ำหนัก :</dt>
            <dd class="col-sm-9">{{ tablet.Weight }}</dd>
            <dt class="col-sm-3"> กว้างยาวและหนา :</dt>
            <dd class="col-sm-9">{{ tablet.Dimension }}</dd>
            <dt class="col-sm-3"> กล้องหลัง :</dt>
            <dd class="col-sm-9">{{ tablet.Rearcamera }}</dd>
            <dt class="col-sm-3"> กล้องหน้า :</dt>
            <dd class="col-sm-9">{{ tablet.Frontcamera }}</dd></dl>

        <button v-on:click="navigateTo('/tablets')" class="btn btn-danger">Back</button>
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
      tablet: null
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  },
  async created() {
    try {
      let tabletId = this.$route.params.tabletId;
      this.tablet = (await TabletService.show(tabletId)).data;
      console.log(this.tablet);
    } catch (err) {
      console.log(err);
    }
  }
};
</script>
<style scoped>
  .bd-teal-100 {
  color: #212529;
  background-color: #afecda; }
.text-inbox{  
  border: 5px solid rgb(195, 195, 195);
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
  padding: 10px;
}
</style>