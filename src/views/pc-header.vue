<template>
  <el-col :span="24" class="header">
    <el-col  class="logo">
      <img src="../assets/logo.png"/>
      <span>Gray Coder</span>
    </el-col>

    <el-col :span="4" class="userinfo">
      <div class="user-inner">
          <span class="inner-text">welcome,{{userName}}</span>
          <img :src="userImage"/>
      </div>
      <el-dropdown trigger="click" class="dropdown">
        <i class="fa fa-sign-out" style="cursor: pointer;font-size: 30px;margin-top: 15px;color: #fff;margin-left: 20px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>我的消息</el-dropdown-item>
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-col>
</template>
<script>
  export default{
    data(){
      return {
        sysUserName: 'Gray Coder',
        userName:sessionStorage.userName,
        userImage:sessionStorage.image
      }
    },
    mounted(){

    },
    methods: {
      logout(){
        var vm = this;
        this.$confirm('确认退出吗?', '提示', {
          type: 'warning'
        }).then(() => {
          vm.$router.push('/login');
        }).catch(() => {

        });
      }
    }
  }
</script>
<style scoped>
  .header {
    height: 60px;
    line-height: 60px;
    background: #20A0FF;
    color: #fff;
    width: 100%;
  }

  .userinfo {
    display: flex;
    flex-direction:row;
    justify-content: flex-end;
    min-width: 200px;
    padding-right: 27px;
    float: right;
  }
  .user-inner {
    display: inline-flex;
  }
  .userinfo img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border: 1px solid #ccc;
    margin: 10px 10px 10px 18px;
  }
  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 230px;
    font-size: 22px;
    padding-left: 20px;
    padding-right: 20px;
    border-color: rgba(238, 241, 146, 0.3);
    border-right-width: 1px;
    border-right-style: solid;
  }
  .logo img{
    width: 40px;
    height: 40px;
    margin-right: 13px;
  }




</style>
