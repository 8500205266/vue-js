<template>
<div>
  <div class="header">
    <h1>Parent program</h1>
  </div>
    <h1 style="text-align:center">{{ msg }}</h1> 

    <div>
    <Child title="This is my title"></Child>
    <Child :parentData="{msg: 'message'}"></Child>



     <Child :parentData="myData" @childToParent="onChildClick" @increment="counter++" />
     {{counter}}
  </div>
</div>
</template>

<script>
import Child from '../components/Child.vue'
export default 
{
    data()
    {
        return{
              counter: 0,
      fromChild: '', 
    }
    },
   components:
   {
       Child
   }
  
, methods: {
    
    onChildClick (value) {
      this.fromChild = value
    }
  }
}
</script>


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
