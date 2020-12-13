

<template>

<div>
  <div class="header">
    <h1>Bootstrap</h1>
  </div>


  <div style="text-align:center">

    <button class="btn btn-primary">Test</button>
    <button class="btn btn-info">Test</button>
    <button class="btn btn-danger">Test</button>
    <button class="btn btn-secondary">Test</button>
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Hi!</strong> I'm prashanth saidugari
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">×</span>
      </button>
    </div>
  </div>



  
</div>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";



export default {
  name: 'Bootstrap',
  props: {
    msg: String
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
