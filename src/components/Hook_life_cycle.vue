<template>
<div>
  <div class="header">
    <h1>Hook life cycle</h1>
  </div>
    <h1 style="text-align:center">{{ msg }}</h1> 

    <div>
     <p>{{val}}</p>
     <button @click='val = 5'>Click to Change</button>
   </div>
  
</div>
</template>

<script>
export default
 {
      data() { 
         return { 
           val: 'hello'   ,n: 1, name: "Emmanuel Etukudo",accessToken: localStorage.getItem('accessToken')
         }
      },
      beforeCreate() 
      {     
         console.log('Value of val is: ' + this.val)   
      },
     computed:{
      messageChange(){
        console.log(`This will look up to ${this.message} for changes`);
        return this.messages 
      }
    },
    
    created(){
      this.message = "now the message is changed";
      console.log(`messageChange will be updated since reactivity is present`);
    }
  ,
    
 beforeMount(){
      console.log(`${this.el} is about to be mount`);
    },
      mounted() {         
         this.someMethod();           
         window.addEventListener('resize', this.someMethod);        
      }, 
      
      beforeUpdate(){
      console.log(this.n) 
    },
 

    updated() {
   
    console.log(this.$refs['dom-element'].textContent === this.name)
  },

       beforeDestroy() {
 
    localStorage.removeItem('accessToken');
  },  
  destroyed() {
    console.log(this) 
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
