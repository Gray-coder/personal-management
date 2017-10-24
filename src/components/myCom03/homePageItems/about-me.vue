<template>
  <div class="about-me" :style="noteImages">

  </div>
</template>
<script>
  export default {
    data() {
      return {
        noteImages: {
          backgroundImage: "url(" + require("../../../assets/pic2.jpg") + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }
      }
    },
    mounted() {
      var vm = this;
      setInterval(() => {
        vm.getRandomImages();
      }, 5000)
    },
    methods: {
      getRandomImages() {
        //产生1-3的随机数
        let randomNum = Math.ceil(Math.random() * 3);
        this.noteImages.backgroundImage = "url(" + require("../../../assets/pic"+ randomNum +".jpg") + ")"
        console.log(randomNum);
      }
    }
  }
</script>
<style scoped>
  .about-me {
    width: 100%;
    height: 890px;
  }
</style>
