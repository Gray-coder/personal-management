<template>
  <el-row class="works">
    <el-col class="works-content">
      <el-button style="color:red">works</el-button>
    </el-col>
  </el-row>
</template>
<style scoped>
  .works {
    width: 100%;
    height: 100%;
    background-color: #272833;
    background-image: url("../../../assets/pic4.jpg");
    box-shadow:0 0.25em 0.5em 0 rgba(0, 0, 0, 0.25);
    background-repeat: no-repeat;
    background-size: cover;
  }
  .works-content{
    background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("../../../assets/overlay.png");
    height: 100%;
  }
</style>
