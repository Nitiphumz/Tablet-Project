<template>
  <div>
    <div class="container createcafe box text-inbox">
    <p class="h2"> Edit Tablet </p>
    <form class="form-inline form-search">
      <form v-on:submit.prevent="editTablet">
        <dl class="row">
            <dt class="col-sm-3"> Tablet ID : </dt>
            <dd class="col-sm-9"> {{ tablet.id }}</dd>
            <dt class="col-sm-3"> ชื่อรุ่น : </dt>
            <dd class="col-sm-9"> <input type="text" v-model="tablet.nametablet"> </dd>
            <dt class="col-sm-3"> ราคา : </dt>
            <dd class="col-sm-9"> <input type="text" v-model="tablet.price"> </dd> 
            <dt class="col-sm-3"> ระบบปฎิบัติการ : </dt>
            <dd class="col-sm-9"> <input type="text" v-model="tablet.OS"></dd>
            <dt class="col-sm-3"> ขนาดหน้าจอ : </dt>
            <dd class="col-sm-9"> <input type="text" v-model="tablet.Screensize"> </dd>
            <dt class="col-sm-3"> ความละเอียด : </dt>
            <dd class="col-sm-9"> <input type="text" v-model="tablet.Resolution"> </dd>
            <dt class="col-sm-3"> CPU : </dt>
            <dd class="col-sm-9"> <input type="text" v-model="tablet.CPU"> </dd>
            <dt class="col-sm-3"> พื้นที่ : </dt>
            <dd class="col-sm-9"> <input type="text" v-model="tablet.Storage"> </dd>
            <dt class="col-sm-3"> น้ำหนัก : </dt>
            <dd class="col-sm-9"> <input type="text" v-model="tablet.Weight"> </dd>
            <dt class="col-sm-3"> กว้างยาวและหนา : </dt>
            <dd class="col-sm-9"> <input type="text" v-model="tablet.Dimension"> </dd>
            <dt class="col-sm-3"> กล้องหลัง : </dt>
            <dd class="col-sm-9"> <input type="text" v-model="tablet.Rearcamera"> </dd>
            <dt class="col-sm-3"> กล้องหน้า : </dt>
            <dd class="col-sm-9"> <input type="text" v-model="tablet.Frontcamera"> </dd></dl>
    <button v-on:click="navigateTo('/tablet/edit/'+tablet.id)" class="btn btn-success">Edit</button>
    <button v-on:click="navigateTo('/tablets')" class="btn btn-danger">Back</button>
      
      </form>
    </form>
  
    <hr />
    <div>
      <p>Tablet Id {{ tablet.id }}</p>
      <p>ชื่อรุ่น: {{ tablet.nametablet }}</p>
      <p>ราคา: {{ tablet.price }}</p>
      <p>ระบบปฎิบัติการ : {{ tablet.OS }}</p>
      <p>ขนาดหน้าจอ : {{ tablet.Screensize }}</p>
      <p>ความละเอียด : {{ tablet.Resolution }}</p>
      <p>CPU : {{ tablet.CPU }}</p>
      <p>พื้นที่ : {{ tablet.Storage }}</p>
      <p>น้ำหนัก : {{ tablet.Weight }}</p>
      <p>กว้างยาวและหนา : {{ tablet.Dimension }}</p>
      <p>กล้องหลัง : {{ tablet.Rearcamera }}</p>
      <p>กล้องหน้า : {{ tablet.Frontcamera }}</p>
      </div>
    </div>
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
      tablet: {
        nametablet: '',
        price: '',
        OS: '',
        Screensize: '',
        Resolution: '',
        CPU: '',
        Storage: '',
        Weight: '',
        Dimension: '',
        Rearcamera: '',
        Frontcamera: '',
      }
    };
  },
  methods: {
    async editTablet() {
      try {
        await TabletService.put(this.tablet);
        this.$router.push({
          name: "tablets"
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
  async created() {
    try {
      let tabletId = this.$route.params.tabletId;
      this.tablet = (await TabletService.show(tabletId)).data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style scoped>
  .bd-teal-100 {
  color: #212529;
  background-color: #afecda; }
.text-inbox{  
  border: 5px solid lightblue;
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