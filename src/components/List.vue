<template>
<div>
  <div class="header">
    <h1>List in Mixin</h1>
  </div>
  
<div>
  <input v-model="filterText">
  <h2>
  <ul>
    <li v-for="fruit in filterdfruits" :key="fruit.id">{{fruit}}</li>
  </ul>
  </h2>
  <h2>----------------------------------------------------------------------------------------------</h2>
  <h2>*******************Routing***********************</h2>
  <h2>----------------------------------------------------------------------------------------------</h2>
</div>

  
</div>
</template>

<script>
import {mixin} from './mixin'
export default 
{
  mixins: [mixin]
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
