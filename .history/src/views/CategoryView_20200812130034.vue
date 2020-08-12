<template>
  <div>
    <template v-if="!paramKeyPost">
      <h1>{{ category.name }}</h1>
      <h4>{{ category.description }}</h4>
      <hr />
      <div v-if="!loading">
        <div class="row" v-for="(post, index) in getPosts" :key="'card'+ index">
          {{ post.name }} |
          <router-link
            tag="a"
            class="btn btn-primary"
            :to="{ name : 'post', params : {keypost : post.key}}"
          >View</router-link>
        </div>
      </div>
    </template>
    <template v-else>
      <loader :loading="loading" loaderText="Loading..." />
      <router-view />
    </template>
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "categoryview",
  components: {
    Loader,
  },
  data() {
    return {
      loading: false,
    };
  },
  mounted() {
    this.checkPost();
  },
  computed: {
    paramKey: function () {
      return this.$route.params.key;
    },
    paramKeyPost: function () {
      return this.$route.params.keypost;
    },
    category: function () {
      return this.getCategory(this.paramKey);
    },
    ...mapGetters({
      getCategory: "category/getCategory",
      getPosts: "post/getPosts",
    }),
  },
  watch: {
    category: function (/*val, old*/) {
      this.checkPost();
    },
  },
  methods: {
    ...mapActions({
      fetchPosts: "post/fetchPosts",
    }),
    checkPost() {
      if (this.category) {
        this.loading = true;
        this.fetchPosts({ cat: this.category.id })
          .then(() => {
            this.loading = false;
          })
          .catch((/*error*/) => {
            this.loading = false;
          });
      }
    },
  },
};
</script>

<style lang="scss">
</style>
