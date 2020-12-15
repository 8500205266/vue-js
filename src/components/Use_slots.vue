<template>
<div>
  <div class="header">
    <h1>Use slots</h1>
  </div>

   <slot></slot>
    <h4>hello this from child</h4>

    <div class="container">

  <header>
    <slot name="header1"></slot>
  </header>

  <main>
    <slot></slot>
  </main>

  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
  
   
  
</div>
</template>

<script>
export default {
  name: 'Use_slots',
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
