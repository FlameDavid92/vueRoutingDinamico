<template>
  <div>
    <h1>Category View</h1>
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
