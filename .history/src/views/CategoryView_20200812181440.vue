<template>
  <div>
    <template v-if="!paramKeyPost && category">
      <h1 >{{ category.name }}</h1>
      <h4 >{{ category.description }}</h4>
      <hr />
      <loader :loading="loading" loaderText="Loading..." />
      <div v-if="!loading">
        <div class="row" v-for="(post, index) in getPosts" :key="'card'+ index">
          <div class="col-8">
            <div class="card" style="margin-bottom:50px;padding:10px;">
              <div class="card-body">
                <div class="row">
                  <div class="col-8">
                    <h5 class="card-title">{{post.name | truncate(70)}}</h5>
                    <p class="card-text">{{post.description | truncate(200) }}</p>
                    <router-link
                      tag="a"
                      class="btn btn-primary"
                      :to="{ name : 'post', params : {keypost : post.key}}"
                    >View...</router-link>
                  </div>
                  <div class="col-4">
                    <img class="card-img top" :src="post.img" height="150px;" alt="immagine" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <loader :loading="loading" loaderText="Loading..." />
      <router-view v-if="!loading" />
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
      getPost: "post/getPost"
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
            if (
              this.$route.params.keypost &&
              !this.getPost(this.$route.params.keypost)
            ) {
              this.$router.push({ name: "notfound" });
            }
            this.loading = false;
          })
          .catch((error) => {
            this.loading = false;
            throw new Error(error);
          });
      }
    },
  },
};
</script>

<style lang="scss">
</style>
