<template>
  <div>
    <h1>{{ category.name }}</h1>
    <h4>{{ category.description }}</h4>
    <hr/>
    <loader :loading="loading" loaderText="Loading..." />
    <div v-if="!loading">
      POSTS
    </div>
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
  beforeMount() {},
  computed: {
    paramKey : function(){
      return this.$route.params.key
    },
    category: function () {
        return this.getCategory(this.paramKey);
    },
    ...mapGetters({
      getCategory: "category/getCategory",
      getPosts: 'post/getPosts'
    }),
  },
  methods: {
    ...mapActions({
      fetchPosts: "post/fetchPosts"
    }),
    checkPost(){
      if(this.category){
        this.loading = true;
        this.fetchPosts( {cat: this.category.id} )
        .then(
          () => {
            this.loading = false;
          }
        )
        .catch((error) => {
          this.loading = false;
        });
      }
    }
  },
};
</script>

<style lang="scss">
</style>
