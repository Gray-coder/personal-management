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
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
  }
</style>
