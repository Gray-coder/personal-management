<template>
  <aside class="menu-expanded">
    <!--导航菜单-->
    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose"
             @select="handleselect"
             unique-opened router>
      <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
        <el-submenu :index="index+''" v-if="!item.leaf">
          <template slot="title"><i :class="item.iconType"></i>{{item.name}}</template>
          <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">
            {{child.name}}
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i
          :class="item.iconType"></i>{{item.children[0].name}}
        </el-menu-item>
      </template>
    </el-menu>
  </aside>
</template>
<script>
  export default{
    mounted(){
      console.log(this.$route.path);
    },
    methods: {
      handleopen() {
      },
      handleclose() {
      },
      handleselect: function (a, b) {
      },
    }
  }
</script>
<style scoped>
  aside {
    flex: 0 0 230px;
    width: 230px;
  }

  .el-menu {
    height: 100%;
  }

  .item {
    position: relative;
  }

  .submenu {
    position: absolute;
    top: 0px;
    left: 60px;
    z-index: 99999;
    height: auto;
    display: none;
  }
  aside i{
    margin-right: 5px;
    font-size: 17px;
  }

</style>
