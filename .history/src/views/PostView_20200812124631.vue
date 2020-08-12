<template>
  <div>
    <h1>Post View</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "postview",
  components: {
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
      getPost : 'post/getPost'
    }),
    paramKeyPost : function(){
      return this.$route.params.keypost
    },
    post : function(){
      return this.getPost(this.paramKeyPost);
    }
  },
  methods: {
    ...mapActions({
      fetchCategories: "category/fetchCategories",
    }),
  },
};
</script>

<style lang="scss">

</style>
