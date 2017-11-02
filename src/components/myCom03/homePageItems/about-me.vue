<template>
  <el-row class="about-me">
    <el-col :span="24" class="about-me-content">
      <div class="content">
        <div class="content-title">about me</div>
        <p class="description-me">Non curae est ut consectetur ac auctor morbi.<br>Quam morbi. Arcu at nullam accumsan nulla.</p>
        <div class="imageContainer">
          <img src="../../../assets/pic0.jpg"/>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    mounted() {

    },
    methods: {

    }
  }
</script>
<style scoped>
  .about-me {
    width: 100%;
    height: 100%;
    background-color: #272833;
    background-image: url("../../../assets/pic5.jpg");
    box-shadow:0 0.25em 0.5em 0 rgba(0, 0, 0, 0.25);
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
  }
  .about-me-content{
    background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("../../../assets/overlay.png");
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content{
    width: 500px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    margin-bottom: 110px;
  }
  .content-title{
    font-size: 25px;
  }
  .description-me{
    margin-bottom: 20px;
  }
  .imageContainer img{
    border-radius: 50%;
    height: 312px;
    width: 321px;
  }
</style>
