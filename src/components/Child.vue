<template>
<div>
  <div class="header">
    <h1>Child program</h1>
  </div>
    <h1 style="text-align:center">{{ msg }}</h1> 
     <h3>Data from parent</h3>   
        {{parentData}}
        {{stringProp}}
        {{title}}
<br/><br/>
        <button type="button" name="button" @click="$emit('increment')">Click me to increment!</button><br/><br/>
    <label for="child-input">Child input: </label><br/><br/>
    <input id="child-input" type="text" name="msg" v-model="childMessage" @keyup="emitToParent">
    
     </div>
     
</template>

<script>


export default {
  name: 'Child',
  props: {
    parentData: Object,
    stringProp: String,
    title: String
  },
  data()
  {
      return{
 childMessage: 'child message'
      }
  },
  methods:
  {

    emitToParent () 
    {
      this.$emit('childToParent', this.childMessage)
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
