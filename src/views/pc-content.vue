<template>
  <section class="content-container">
    <div class="grid-content bg-purple-light">
      <!--<el-col :span="24" class="breadcrumb-container">
        <strong class="title">{{$route.name}}</strong>
        <el-breadcrumb separator="/" class="breadcrumb-inner">
          <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
            {{ item.name }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>-->
      <el-col :span="24" class="content-wrapper">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-col>
    </div>
  </section>
</template>
<script>
  export default{
      mounted(){

      }

  }
</script>
<style scoped>
  .content-container {
    width: calc(100% - 230px);
    height: 100%;
  }
  .breadcrumb-container .title {
    width: 200px;
    float: left;
    color: #475669;
  }
  .breadcrumb-inner {
    float: right;
  }
  .content-wrapper {
    background-color: #fff;
    box-sizing: border-box;
  }
  .grid-content,.content-wrapper{
    height: 100%;
  }
</style>
