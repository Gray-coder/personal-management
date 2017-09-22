<template>
  <div class="login-page">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="0px"
             class="demo-ruleForm login-container">
      <h3 class="title">个人系统登录</h3>
      <p v-text="errorLogin" class="errorLogin"></p>
      <el-form-item prop="userName">
        <el-input type="text" v-model="ruleForm.userName" auto-complete="off" placeholder="用户名"></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input type="password" v-model="ruleForm.password" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>

      <el-checkbox v-model="isChecked" checked class="remember">记住密码</el-checkbox>

      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click.native.prevent="login" :loading="logining">登录
        </el-button>
      </el-form-item>
    </el-form>
    <canvas id="loginBackground"></canvas>
  </div>
</template>

<script>
  function render() {
    var canvas = document.querySelector('#loginBackground');
    if (!canvas) {
      return;
    }
    var ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.lineWidth = .3;
    ctx.strokeStyle = (new Color(150)).style;

    var i, j, i_dot, j_dot;

    var mousePosition = {
      x: 30 * canvas.width / 100,
      y: 30 * canvas.height / 100
    };

    var dots = {
      nb: 750,
      distance: 50,
      d_radius: 100,
      array: []
    };

    function colorValue(min) {
      return Math.floor(Math.random() * 255 + min);
    }

    function createColorStyle(r, g, b) {
      return 'rgba(' + r + ',' + g + ',' + b + ', 0.8)';
    }

    function mixComponents(comp1, weight1, comp2, weight2) {
      return (comp1 * weight1 + comp2 * weight2) / (weight1 + weight2);
    }

    function averageColorStyles(dot1, dot2) {
      var color1 = dot1.color,
        color2 = dot2.color;

      var r = mixComponents(color1.r, dot1.radius, color2.r, dot2.radius),
        g = mixComponents(color1.g, dot1.radius, color2.g, dot2.radius),
        b = mixComponents(color1.b, dot1.radius, color2.b, dot2.radius);
      return createColorStyle(Math.floor(r), Math.floor(g), Math.floor(b));
    }

    function Color(min) {
      min = min || 0;
      this.r = colorValue(min);
      this.g = colorValue(min);
      this.b = colorValue(min);
      this.style = createColorStyle(this.r, this.g, this.b);
    }

    function Dot() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;

      this.vx = -.5 + Math.random();
      this.vy = -.5 + Math.random();

      this.radius = Math.random() * 2;

      this.color = new Color();
    }

    Dot.prototype = {
      draw: function () {
        ctx.beginPath();
        ctx.fillStyle = this.color.style;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
      }
    };

    function createDots() {
      for (i = 0; i < dots.nb; i++) {
        dots.array.push(new Dot());
      }
    }

    function moveDots() {
      for (i = 0; i < dots.nb; i++) {

        var dot = dots.array[i];

        if (dot.y < 0 || dot.y > canvas.height) {
          dot.vx = dot.vx;
          dot.vy = -dot.vy;
        }
        else if (dot.x < 0 || dot.x > canvas.width) {
          dot.vx = -dot.vx;
          dot.vy = dot.vy;
        }
        dot.x += dot.vx;
        dot.y += dot.vy;
      }
    }

    function connectDots() {
      for (i = 0; i < dots.nb; i++) {
        for (j = 0; j < dots.nb; j++) {
          i_dot = dots.array[i];
          j_dot = dots.array[j];

          if ((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > -dots.distance && (i_dot.y - j_dot.y) > -dots.distance) {
            if ((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > -dots.d_radius && (i_dot.y - mousePosition.y) > -dots.d_radius) {
              ctx.beginPath();
              ctx.strokeStyle = averageColorStyles(i_dot, j_dot);
              ctx.moveTo(i_dot.x, i_dot.y);
              ctx.lineTo(j_dot.x, j_dot.y);
              ctx.stroke();
              ctx.closePath();
            }
          }
        }
      }
    }

    function drawDots() {
      for (i = 0; i < dots.nb; i++) {
        var dot = dots.array[i];
        dot.draw();
      }
    }

    function animateDots() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      moveDots();
      connectDots();
      drawDots();

      requestAnimationFrame(animateDots);
    }

    canvas.onmousemove = function (e) {
      mousePosition.x = e.pageX;
      mousePosition.y = e.pageY;
    };

    canvas.onmouseleave = function (e) {
      mousePosition.x = canvas.width / 2;
      mousePosition.y = canvas.height / 2;
    };

    createDots();
    requestAnimationFrame(animateDots);
  }

  export default {
    '$route' () {
      if (this.$route.name == 'login') {
        this.render()
      }
    },
    mounted () {
      this.render();

      this.ruleForm.userName = sessionStorage.userName;
      if(sessionStorage.password){
        this.isChecked = true;
        this.ruleForm.password = sessionStorage.password;
      }else {
        this.isChecked = false;
        this.ruleForm.password = '';
      }
    },
    data() {
      return {
        logining: false,
        ruleForm: {
          userName: '',
          password: ''
        },
        rules: {
          userName: [
            {required: true, message: '用户名不能为空', trigger: 'blur'},
          ],
          password: [
            {required: true, message: '密码不能为空', trigger: 'blur'},
          ]
        },
        isChecked: false,
        errorLogin: '',
      };
    },
    methods: {
      login() {
        var vm = this;
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            vm.logining = true;
            this.axios.get('/login/user').then(
              (res) => {
                if (vm.ruleForm.userName == res.data.userName && vm.ruleForm.password == res.data.password) {
                  //登录成功,是否记住用户名密码
                  vm.isChecked ? sessionStorage.setItem('password', vm.ruleForm.password) : sessionStorage.removeItem('password');
                  sessionStorage.setItem("userName", vm.ruleForm.userName);
                  sessionStorage.setItem("image", res.data.image);
                  vm.logining = false;
                  vm.$router.push({
                    path: '/homePage'
                  });
                } else {
                  vm.errorLogin = '用户名或密码错误';
                  vm.logining = false;
                  setTimeout(
                    () => {
                      vm.errorLogin = '';
                    }
                    , 3000)
                }
              },
              (res) => {
                console.log(res);
              }
            )
          } else {
            return false;
          }
        });
      },
      render: render,
    }
  }

</script>

<style scoped>
  .login-page {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #111;
  }

  .login-page canvas {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .login-container {
    border-radius: 10px;
    background-clip: padding-box;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #ccc;
    box-shadow: 2px 2px 32px 1px rgba(0, 0, 0, .45);
    z-index: 1000;
  }

  .title {
    margin: 0px auto 50px auto;
    text-align: center;
    color: #505458;
  }

  .errorLogin {
    position: absolute;
    color: red;
    top: 350px;
  }

  .remember {
    margin: 0px 0px 35px 0px;
  }
</style>
