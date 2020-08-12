<template>
  <div class="loader">
    <div class="loader-container" v-if="loading" :style="style">
      <img :src="Loader" height="32px" width="32px" alt="logo" />
    </div>
    <div v-if="loaderText" class="loader-text">
      {{ loaderText }}
    </div>
  </div>
</template>


<script>
export default {
  name: 'Counter',
  data () {
    return {
      count : 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.count{
  font-size: 10em;
}
.btn{
  font-size: 3em;
}
</style>
