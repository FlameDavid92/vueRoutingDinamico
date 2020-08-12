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
