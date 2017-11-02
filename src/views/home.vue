<template>
  <el-row class="container">
    <pc-header></pc-header>
    <pc-container></pc-container>
  </el-row>
</template>
<script>
  import pcHeader from './pc-header.vue'
  import pcContainer from './pc-container.vue'
  export default{
    components: {
      pcHeader,
      pcContainer
    },
    mounted(){

    }
  }
</script>
<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    width: 100%;

  }
</style>
