<template>
  <div class="btn-box">
    <div>字体大小转rem测试</div>
    <!-- <div style="font-size:16px">正常字体</div> -->
    <!-- <div style="font-size:20px"> 20px字体</div> -->
    <van-button block type="primary">登录</van-button>
    <van-button class="register-btn" block color="#fff">注册</van-button>
  </div>
</template>
<style lang="scss" scoped>
.btn-box {
  font-size: 20px;
  padding: 0 20px;
  box-sizing: border-box;
  .register-btn {
    color: rgb(76, 155, 240) !important;
  }
}
</style>
