<template>
<div>
  <div class="header">
    <h1>Style And class objects</h1>
  </div>
    <h1 style="text-align:center">{{ msg }}</h1> 
<div style="text-align:center">
    <button @click="fontSize++">
  Increase font size
</button>
<button @click="fontSize--">
  Decrease font size
</button>

<p :style="{ fontSize: fontSize + 'px' }">
  Font size is: {{ fontSize }}
</p>
</div>

<p :style="[baseStyles, overrideStyles]">
  baseStyles and overrideStyles
</p>
<h2>************Class objects*******</h2>
<h2 :class="[classArray]">
  Multiple classes {{ classArray }}
</h2>

</div>
</template>

<script>
export default 
{
data() {
  return {
    fontSize: 20,
    msg:"well come" ,

    classArray: ['apple', 'orange'],

    baseStyles: {
      fontWeight:'800',
      color: 'blue'
  },
    overrideStyles: {
      color:'red'
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
