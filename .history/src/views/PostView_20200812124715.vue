<template>
  <div>
    <h1>Post</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "postview",
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
  }
};
</script>

<style lang="scss">

</style>
