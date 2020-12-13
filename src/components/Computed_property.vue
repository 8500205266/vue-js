<template>
<div>
  <div class="header">
    <h1>computed property and watch to observe a data property.</h1>
  </div>
 


 <h2>Original message: "{{ message }}"</h2>
  <h2>Computed reversed message: "{{ reversedMessage }}"</h2>

  <div><h2>{{ fullName }}</h2></div>
  
</div>
</template>

<script>
export default {

data() {
  return {
    message: "Hello World!",
    data: false ,
    firstName: 'Prashanth',
    lastName: 'saidugari',
    fullName: 'Prashanth saidugari'
}
},
  computed: {  
     reversedMessage: function () {

      return this.message.split('').reverse().join('')
    }
  }, 
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
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
