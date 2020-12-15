<template>
<div>
  <div class="header">
    <h1>option_merging</h1>
  </div>
    <h1 style="text-align:center">{{ msg }}</h1> 
  
<div>
    <button @click.prevent="onIncrement(3)">increment</button> 
 
</div>
  <h2> {{counter}}
   {{msgg}}</h2>

</div>
</template>

<script>
import CounterMixin from '../mixins/CounterMixin'
export default {
  name: 'option_merging',
  props: {
    msg: String
  },data()
  {
      return{
          counter:5,
          msgg:'mounted from option merging'
      };
  },
  mounted()
  {
      console.log("mounted from option meging")
  },
  mixins:[CounterMixin],
};
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
