<template>
  <el-col :span="24" class="main">
    <pc-menu></pc-menu>
    <pc-content></pc-content>
  </el-col>
</template>
<script>
  import pcMenu from './pc-menu.vue'
  import pcContent from './pc-content.vue'
  export default{
      components:{
        pcMenu,
        pcContent
      }
  }
</script>
<style scoped>
  .main {
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 100%;

  }
</style>
