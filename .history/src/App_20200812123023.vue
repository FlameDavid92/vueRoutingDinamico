<template>
  <div id="app">
    <div class="wrapper">
      <nav id="sidebar">
        <a href="/" rel="noopener noreferrer" target="_blank">
          <img
            src="https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/ee/91/eb/ee91ebc6-f7e6-2fa2-356e-d5930900691b/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.png"
            width="100%"
            alt
          />
        </a>
        <loader :loading="loading" loaderText="Loading..." />
        <template v-if="!loading">
          <router-link tag="div" class="link" :to="{ name : 'home'}">Home</router-link>|
          <router-link tag="div" class="link" :to="{ name : 'counter'}">Counter</router-link>|
          <template v-for="(categoria,index) in categories">
            <router-link :key="`menu_${index}`" tag="div" class="link" :to="'/blog/'+categoria.key">{{categoria.name}}</router-link>
            <template v-if="index < (categories.length - 1)"></template>|
          </template>
        </template>
      </nav>
      <div id="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "app",
  components: {
    Loader,
  },
  data() {
    return {
      loading: true,
    };
  },
  beforeMount() {
    this.fetchCategories()
      .then(() => {
        this.loading = false;
      })
      .catch((error) => {
        this.loading = false;
        throw new Error(error);
      });
  },
  computed: {
    ...mapGetters({
      categories: "category/getCategories",
    }),
  },
  methods: {
    ...mapActions({
      fetchCategories: "category/fetchCategories",
    }),
  },
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
.wrapper {
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
  background: rgb(94, 236, 177);
  padding: 60px 60px 100px 60px;
  color: #fff;
}
#content {
  width: calc(100% - 300px);
  max-width: none;
  margin-left: 300px;
  padding: 60px 60px 100px 60px;
  min-height: 50vh;
  box-sizing: border-box;
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
