<template>
  <div class="loader">
    <div class="loader-container" v-if="loading" :style="style">
      <img :src="Loader" height="80px" width="80px" alt="logo" />
    </div>
    <div v-if="loaderText" class="loader-text">
      {{ loaderText }}
    </div>
  </div>
</template>


<script>
import Loader from '../assets/images/loader-green.svg';

export default {
  name: 'Loader',
  data () {
    return {
      Loader,
      style: {}
    };
  },
  props: {
    loaderText: String,
    loading: {
      default: true,
      type: Boolean
    }
  },
  created() {
    this.style = {
      zIndex: '1000',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      height: '100px'
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.loader-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.loader-text {
  margin-top: 0;
}
</style>
