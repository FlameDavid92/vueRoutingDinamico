<template>
  <div>
    <h1>Category View</h1>
    <loader :loading="loading" loaderText="Loading..." />
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
      loading: true,
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
      categories: "category/getCategories",
      getCategory: "category/getCategory",
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
