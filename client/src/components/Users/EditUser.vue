<template>
<div>
    <div class="container createcafe box text-inbox">
    <p class="h2"> Edit User </p>
<form class="form-inline form-search">
    <form v-on:submit.prevent = "editUser">
        
          <dl class="row">
            <dt class="col-sm-3"> User ID : </dt>
            <dd class="col-sm-9"> {{ user.id }}</dd>
            <dt class="col-sm-3"> name : </dt>
            <dd class="col-sm-9"> <input type="text" v-model="user.name"> </dd>
            <dt class="col-sm-3"> lastname : </dt>
            <dd class="col-sm-9"> <input type="text" v-model="user.lastname"> </dd> 
            <dt class="col-sm-3"> Email : </dt>
            <dd class="col-sm-9"> <input type="text" v-model="user.email"></dd>
            <dt class="col-sm-3"> Password : </dt>
            <dd class="col-sm-9"> <input type="text" v-model="user.password"> </dd></dl>
    <button v-on:click="navigateTo('/user/edit/'+user.id)" class="btn btn-success">Edit</button>
    <button v-on:click="navigateTo('/users')" class="btn btn-danger">Back</button>
    </form>
</form>
    <hr>
    <div>
        <p>userid: {{ user.id }}</p>
        <p>name: {{user.name}}</p>
        <p>lastname: {{user.lastname}}</p>
        <p>email: {{user.email}}</p>
        <p>status: {{ user.status }}</p>
    </div>
    
</div>
</div>
</template>
<script>

import UsersService from '@/services/UsersService'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'

export default {
    data(){
        return{
            user:{
                name: '',
                lastname: '',
                email: '',
                password: '',
                status: 'active'
            }
        }
    },
    methods:{
        async editUser(){
            try{
                await UsersService.put(this.user)
                this.$router.push({
                    name: 'users'
                })

            }catch(error){
                console.log(error)
            }
        }
    }, 
    async created(){
        try{
            let userId = this.$route.params.userId
            this.user = (await UsersService.show(userId)).data
        }catch(error){
            console.log(error)
        }
    }
}
</script>
<style scoped>
  .bd-teal-100 {
  color: #212529;
  background-color: #afecda; }
.text-inbox{  
  border: 5px solid rgb(212, 212, 212);
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