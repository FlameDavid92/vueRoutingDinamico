<template>
  <div>
    <h1>Post</h1>
    <div v-if="post">
      <div class="card mb-3">
        <div class="card-body">
          <h5 class="card-title"><small>{{ post.time }}</small></h5>
          <p></p>
          <p></p>
        </div>
        <img src="" alt="">
      </div>
    </div>
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
