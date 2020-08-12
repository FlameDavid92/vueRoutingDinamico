<template>
  <div id="app">
    <div class="wrapper">
      <nav id="sidebar">
        <a href="https://isjeady.com" target="_blank"><img src="https://isjeady.com/wp-content/uploads/2018/09/logoDEF.png" width="100%" alt=""></a>
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
#sidebar {
  width: 300px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 999;
  background: rgb(94,236,177);
  padding: 60px 60px 100px 60px;
  color: #fff;
}
#content {
  width: calc(100% - 300px);
  max-width: none;
  margin-left: 300px;
  padding: 60px 60px 100px 60px;
  min-height: 50vh;
  box-sizing:border-box;
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
