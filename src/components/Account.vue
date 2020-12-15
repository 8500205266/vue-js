<template>
 
  <div>
     <h1>Account</h1>
  <button @click="home">go Home</button>
  </div>
</template>

<script>

export default 
{
    methods:
    {
      home()
      {
        this.$router.push('/')
      }
    }
}
</script>

