<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/product-list">Product List</router-link> |
    <router-link to="/shopping-bag">Shopping Bag</router-link> 
  </nav>
  <router-view/>
</template>

<script>
export default{
  name: 'App',
  created(){
    this.$store.dispatch('loadCart');
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  display: flex;
  /* direction row */
  flex-direction: row;
  justify-content: center;
  background-color: #b7c7d8;
  left : 0px;
  top : 0px;
  right : 0;
  width : 100%;
  position : relative;
  gap : 10px;
  margin-bottom: 20px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
