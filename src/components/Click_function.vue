<template>
<div>
  <div class="header">
    <h1>click Function</h1>
  </div>
   <div style="text-align: center;width: 600px;"> 
        <h1 style="color: green;"> 
             v-on:click
        </h1> 
        <b> 
            VueJS | v-on:click directive 
        </b> 
    </div> 
  
    <div id="canvas" style="border:1px solid #000000; 
                            width: 700px;height: 300px;"> 
        <div id="app" style="text-align: center; 
                             padding-top: 40px;"> 
                             
            <button v-on:click="data = !data"> 
              Show 
            </button> 
            <h1 v-if="data">well come prashanth</h1> 
        </div> 
      
   
             <h2>{{ message }}</h2>
              <button v-on:click="reverseMessage" class="btn btn-block btn-success">Click Reverse String</button>
          </div>
  
</div>
</template>

<script>
export default {
data() {
  return {
    message: "Hello World!",
    data: false 
}
},
  methods: {  
    reverseMessage: function () {  
     this.message = this.message.split('').reverse().join('')  
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
