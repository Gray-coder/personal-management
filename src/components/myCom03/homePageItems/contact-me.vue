<template>
  <el-row class="contact">
    <el-col class="contact-content">
      <el-button style="color:red">contact</el-button>
    </el-col>
  </el-row>
</template>
<style scoped>
  .contact {
    width: 100%;
    height: 100%;
    background-color: #272833;
    background-image: url("../../../assets/pic1.jpg");
    box-shadow:0 0.25em 0.5em 0 rgba(0, 0, 0, 0.25);
    background-repeat: no-repeat;
    background-size: cover;
  }
  .contact-content{
    background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("../../../assets/overlay.png");
    height: 100%;
  }
</style>
