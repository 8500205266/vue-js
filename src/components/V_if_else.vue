<template>
<div>
  <div class="header">
    <h1>v-else-if</h1>
  </div>


 <div style="text-align: center; 
        width: 600px;"> 
          
        <h1 style="color: green;"> 
           VueJS | v-else-if directive 
        </h1> 
    </div> 
  
    <div id="canvas" style= 
        "border:1px solid #000000; 
        width: 600px;height: 200px;"> 
  
        <div id="app"> 
            <h2 v-if="data"> 
                if is executed 
            </h2> 
            <h2 v-else-if="!data"> 
                else-if is executed 
            </h2> 
        </div> 
   

    </div>
</div>
</template>

<script>
export default {
data() {
  return {
    msg: "Hello World!",
    data: false 
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
