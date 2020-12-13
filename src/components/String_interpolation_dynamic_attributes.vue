<template>
<div>
  <div class="header">
    <h1>String interpolation And Dynamic attributes</h1>
  </div>
    <h1 style="text-align:center">{{ msg }}</h1> 

    <div v-bind:style="{ color: activeColor,fontSize: fontSize + 'px' }"><h2>{{msg}}</h2></div>


</div>
</template>

<script>
export default {
  name: 'String_interpolation_dynamic_attributes',
 
  data() 
  {
     
    return {
      
      msg: 'Well come String interpolation And Bind Dynamic attributes'
      
    
    }
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
