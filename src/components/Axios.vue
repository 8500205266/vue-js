<template>
<div>
  <div class="header">
    <h1>Axios</h1>
  </div>
     <h1>Employess List</h1>
     <table border="2px">
 <tr>
<th>Name</th>
<th>Salary</th>
<th>Age</th>
 </tr>

<tr v-for="item in list" v-bind:key="item.id">
<td>{{item.employee_name}}</td>
<td>{{item.employee_salary}}</td>
<td>{{item.employee_age}}</td>
</tr>
    </table>
  
</div>
</template>

<script>

import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)

export default {
  name: 'Axios',
  props: {
    msg: String
  },
  data()
  {
      return{list:undefined}
  },
  mounted()
  {
      Vue.axios.get('http://dummy.restapiexample.com/api/v1/employees')
      .then((resp)=>
      {
          this.list=resp.data.data
          console.warn(resp.data.data)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
