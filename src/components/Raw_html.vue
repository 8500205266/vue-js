<template>
<div>
  <div class="header">
    <h1>Bind raw html,Use javascript expressions </h1>
  </div>
    <h1 style="text-align:center">{{ msg }}</h1> 
<div style="text-align:center">
   <div v-html='someText'></div>
   <h2>
   {{num +1}} <br />
{{ ok ? 'YES' : 'NO' }} <br />
{{ message.split('').reverse().join('') }} <br />
   </h2>

</div>
</div>
</template>

<script>

export default {
 name: "Raw_html",
   data(){
       return{
         someText: "hiii this is Raw HTML"
         ,num:1,ok:true,message: "prashanth",
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
