<template>
  <div class="home">
    <el-menu class="el-menu-demo" mode="horizontal">
      <template v-for="(item,index) in $router.options.routes[1].children[0].children" v-if="!item.hidden">
        <router-link :to="item.path">
          <el-menu-item :index="index+''">
            <template slot="title"><i :class="item.iconType"></i> {{item.name}}</template>
          </el-menu-item>
        </router-link>
      </template>
    </el-menu>
    <div class="home-content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {};
    },
    mounted() {
      console.log(this.$router.options.routes[1].children[0].children)
    },
    methods: {}
  }
</script>
<style scoped>
  .home {

  }
  .home-content{

  }
  .el-menu {
    display: flex;
    justify-content: flex-end;
    background-color: #2c3e50 !important;
    border-radius: 0 !important;
  }

  .router-link-exact-active, .router-link-active {
    background-color: #41b883;
  }
</style>
