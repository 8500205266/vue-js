<template>
<div>
  <div class="header">
    <h1>Event_key_modifier</h1>
  </div>
  <div style="text-align:center">
   <button @click = "displaynumbers">Click Me to Add No.</button>  
         <h2> Add Number 100 + 200 = {{total}}</h2>  
         <div>
          <button @click="handleClick">Click me!</button>
            <button @click="handleClick">Click me!</button>
             <button @click="handleClick($event)">Click me!</button>
              <button @click="handleClick('something', $event)">Click me!</button>
              <h2>key modifiers</h2>
              <input type=”text” @keyup.enter="pressedEnter"><br/><br/>
              <input type="text" @keyup.enter="pressedEnter"><br/><br/>
              <input type="text" @keyup.enter.space="pressedEnter"><br/><br/>
              <input type="text" @keyup.enter.space="pressedSomethingInteresting"><br/>
         </div>
  </div>
</div>
</template>



<script>
export default {
data() {
  return {
      num1: 50,  
     num2 : 100,  
     total : ''  
}
},
  methods: {  
     displaynumbers : function(event) {  
                  console.log(event);  
                  return this.total =  this.num1+ this.num2;   
    },
     handleClick: function(text, event) {
      console.log(text)
      console.log(event)
  },
  pressedEnter: function() {
			alert("You pressed the Enter key!");
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
