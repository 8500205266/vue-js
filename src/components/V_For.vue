<template>
<div>
  <div class="header">
    <h1>V-For</h1>
  </div>
    <h1 style="text-align:center">{{ msg }}</h1> 
    <div style="text-align: center; 
        width: 600px;"> 
          
        <h1 style="color: green;"> 
            V-For
        </h1> 
          
        <b> 
            VueJS | v-for directive 
        </b> 
    </div> 
  
    <div id="canvas" style= 
        "border:1px solid #000000; 
        width: 600px;height: 200px;"> 
  
        <div> 
         
               <h2 v-for="data in datas" :key="data.id">
                {{data}} 
            </h2> 
        </div> 
    </div> 

       <div id="canvas" style= 
        "border:1px solid #000000; 
        width: 600px;height: 200px;"> 

  <h2 v-for="value in object" :key="value.id">
   {{ value }}</h2>
  
       </div>

  
</div>
</template>

<script>
export default {
    data() {
  return {
    datas: [ 
                    'Hello',  
                    'World',  
                    'Prashanth saidugari' 
                ] ,
    object: {
      title: 'The Power of Now',
      author: 'prashasnth saidugari',
      publishedAt: '2020-12-13'
    }
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
