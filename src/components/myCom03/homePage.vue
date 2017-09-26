<template>
  <div class="home">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">关于我</el-menu-item>
      <el-menu-item index="2">技术栈</el-menu-item>
      <el-menu-item index="3">经历</el-menu-item>
      <el-menu-item index="4">作品</el-menu-item>
      <el-menu-item index="5">联系我</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
  .el-menu{
    background-color: #2c3e50 !important;
    border-radius:0 !important;
  }
</style>
