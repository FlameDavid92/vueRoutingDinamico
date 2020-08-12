<template>
  <div>
    <h1>Post View</h1>
    <loader :loading="loading" loaderText="Loading..." />
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "postview",
  components: {
    Loader,
  },
  data() {
    return {
      loading: true,
    };
  },
  beforeMount() {
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

</style>
