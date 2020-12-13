<template>
<div >
    <div class="header">
    <h1>V-Bind program</h1>
    </div>

    <div style="text-align:center">
        <img :src="catimgsrc" style= "width:500px" height=300px />
    </div>

    <div class = "info"  :class = "{ active: isActive, 'displayError': hasError }">
            {{title}}
    </div>
<div style="text-align: center;width: 600px;" > 
        <h1 style="color: green;"> 
            V-Bind Example
        </h1> 
        <b> 
            VueJS | v-bind directive 
        </b> 
    </div> 
  <div style="text-align:center">
    <div id="canvas" style= 
        "border:1px solid #000000; 
        width: 600px;height: 200px;"> 
  
        <div id="app" style= 
            "text-align: center;  
            padding-top: 40px;"> 
            <button @click= 
                "ifActive = !ifActive"> 
                Click to Toggle 
            </button> 
              
            <h1 :class= 
                "{active: ifActive, error: !ifActive}"> 
              V-Bind Example
            </h1> 
        </div> 
    </div> 
  </div>
  </div>
</template>

<script>


export default {

data () {
return {
catimgsrc: "https://i.ytimg.com/vi/7ZjNQ92Pl3c/maxresdefault.jpg",
title : "This is class binding example",
    isActive : false,
    hasError : false,
              ifActive: true 
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
