<template>
  <div class="container createcafe box">
    <div class="blog-header">
      <div>
        <h1>Create Tablet</h1>
        <form v-on:submit.prevent="createTablet">
          <label for="name">ชื่อรุ่น : </label>
          <input type="text" id="name" name="name" placeholder="Input tablet-name" v-model="tablet.nametablet">
          <label for="price">ราคา : </label>
          <input type="text" id="price" name="price" placeholder="Input price" v-model="tablet.price">
          <label for="email">ระบบปฎิบัติการ : </label>
          <input type="text" id="os" name="os" placeholder="OS" v-model="tablet.OS">
          <label for="password">ขนาดหน้าจอ : </label>
          <input type="text" id="Screensize" name="Screensize" placeholder="Input screensize" v-model="tablet.Screensize">
          <label for="password">ความละเอียด : </label>
          <input type="text" id="Resolution" name="Resolution" placeholder="Input resolution" v-model="tablet.Resolution">
          <label for="password">CPU : </label>
          <input type="text" id="CPU" name="CPU" placeholder="Input CPU" v-model="tablet.CPU">
          <label for="password">พื้นที่ :</label>
          <input type="text" id="Storage" name="Storage" placeholder="Input storage" v-model="tablet.Storage">
          <label for="password">น้ำหนัก :</label>
          <input type="text" id="Weight" name="Weight" placeholder="Input weight" v-model="tablet.Weight">
          <label for="password">กว้างยาวและหนา :</label>
          <input type="text" id="Dimension" name="Dimension" placeholder="Input dimension" v-model="tablet.Dimension">
          <label for="password">กล้องหลัง :</label>
          <input type="text" id="Rearcamera" name="Rearcamera" placeholder="Input rearcamera" v-model="tablet.Rearcamera">
          <label for="password">กล้องหน้า :</label>
          <input type="text" id="Frontcamera" name="Frontcamera" placeholder="Input frontcamera" v-model="tablet.Frontcamera">
          <button type="submit" class="btn btn-success createuser">Create Tablet</button>
          <button v-on:click="navigateTo('/tablets')" class="btn btn-danger">Back</button>

        </form>
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
        nametablet: "",
        price: "",
        OS: "",
        Screensize: "",
        Resolution: "",
        CPU: "",
        Storage: "",
        Weight: "",
        Dimension: "",
        Rearcamera: "",
        Frontcamera: "",
      }
    };
  },
  methods: {
    async createTablet() {
      try {
        await TabletService.post(this.tablet);
        this.$router.push({
          name: "tablets"
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style scoped>
input[type=text],
select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type=password],
select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type=submit] {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

input[type=submit]:hover {
    background-color: #45a049;
}

div {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
}

.createcafe {
    margin: 10px;
    margin-top: 10px;
    margin-left: 100px;
}

.center {
    text-align: center;
}

.box {
    padding: 10px;
}

.createuser {
    margin-top: 20px;
}

label {
    font-size: 20px;
}
</style>
