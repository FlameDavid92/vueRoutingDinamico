<template>
  <div id="app">
    <div class="wrapper">
      <nav id="sidebar">
        <router-link tag="div" class="link" :to="{ name : 'home'}">Home</router-link>|
        <router-link tag="div" class="link" :to="{ name : 'counter'}">Counter</router-link>
      </nav>
      <div id="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
};
</script>

<style lang="scss">
.link {
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  transition: 0.3s;
}
.link:hover {
  font-size: 28px;
  color: green;
}
.wrapper{
  display: flex;
  width: 100%;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
