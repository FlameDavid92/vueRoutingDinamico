<template>
  <div>
    <h1>Post</h1>
    <div v-if="post">
      <div class="card mb-3">
        <div class="card-body">
          <h5 class="card-title"><small>{{ post.name }}</small></h5>
          <p class="card-text">{{ post.description }}</p>
          <p class="card-text"><small class="text-muted">{{ post.time }}</small></p>
        </div>
        <img class="card-img top" :src="post.img" alt="Card Image cap">
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
      console.log(this.$route.params.keypost)
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
