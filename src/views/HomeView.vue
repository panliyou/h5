<template>
  <div class="home-box">
    <img src="../assets/bg1.png" alt="" />
    <div class="footer" @click="toAddWx">
      <img src="../assets/bg2.png" alt="" />
    </div>

    <div class="to-add-wx" @click="toAddWx"></div>
    <!-- <img src="../assets/zrsm_bg1.png" alt="" /> -->
    <!-- <div class="link-br"></div> -->
    <!-- <img src="../assets/bottom_code.jpg" alt=""> -->
    <!-- <img src="../assets/zrsm_bg2.png" alt="" /> -->
    <!-- <div class="link-br"></div> -->
    <!-- <img src="../assets/zrsm_bg3.png" alt="" /> -->
    <!-- <div class="link-br"></div> -->
    <!-- <div class="footer" @click="toAddWx" >
      <img src="../assets/zrsm_bg4.png" alt="" />
    </div> -->
    <!-- <div class="header-box">
      恢复身心平衡
    </div>
    <div class="main-content">
      <div class="first-content">
        <div>掌握自然睡眠方法</div>
        <div>解决一生睡眠问题</div>
      </div>

      <div class="second-content">
        <div class="title">整夜无法入睡 睡着易惊醒</div>
        <div class="title2">不用<span>药</span></div>
        <div class="title3">睡觉梦多<span>胡思乱想</span></div>
      </div>

      <div class="three-content">
        <div class="tag-box">
          <div class="tag-item">困了就能睡</div>
          <div class="tag-item">到点就能睡</div>
          <div class="tag-item">想睡就能睡</div>
          <div class="tag-item">累了就能睡</div>
        </div>

        <div class="footer-content">
          <span>扫码</span>
          <img src="../assets/code.png" alt="">
          <span>了解</span>
        </div>
      </div>

    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";

export default defineComponent({
  name: "HomeView",
  setup() {
    const timeOutEvent = ref<any>(null);
    const gotouchstart = () => {
      clearTimeout(timeOutEvent.value); //清除定时器
      timeOutEvent.value = 0;
      timeOutEvent.value = setTimeout(function () {
        //执行长按要执行的内容，
        console.log("长按");
        axios
          .post("https://work.weixin.qq.com/ca/cawcdea068bb0d45fb", { uv: 0, visit: 1 })
          .then((res: any) => {
            console.log(res.data);
          });
      }, 2000); //这里设置定时
    };

    //手释放，如果在500毫秒内就释放，则取消长按事件，此时可以执行onclick应该执行的事件
    const gotouchend = () => {
      clearTimeout(timeOutEvent.value);
      if (timeOutEvent.value != 0) {
        //这里写要执行的内容（尤如onclick事件）
      }
    };

    //如果手指有移动，则取消所有事件，此时说明用户只是要移动而不是长按
    const gotouchmove = () => {
      clearTimeout(timeOutEvent.value); //清除定时器
      timeOutEvent.value = 0;
    };

    const toAddWx = () => {
      axios
        .post("http://118.31.188.223:8081/saveUvAndVisit", { uv: 0, visit: 1 })
        .then((res: any) => {
          console.log(res.data);
        });
      window.location.href = "https://work.weixin.qq.com/ca/cawcdea068bb0d45fb";
    };

    onMounted(() => {
      axios
        .post("http://118.31.188.223:8081/saveUvAndVisit", { uv: 1, visit: 0 })
        .then((res: any) => {
          console.log(res.data);
        });
    });

    return {
      timeOutEvent,
      gotouchstart, //导出方法，调用方法与vue2相同
      gotouchend,
      gotouchmove,
      toAddWx,
    };
  },
});
</script>

<style scoped lang="scss">
.home-box {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #d63c11;
  // min-height: 100vh;
  // background-color: #f5e8d8;
  // background-color: #efeeec;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  -o-user-select: none;
  user-select: none;
  overflow-y: auto;
  padding-bottom: calc(320px + constant(safe-area-inset-bottom));
  padding-bottom: calc(320px + env(safe-area-inset-bottom));
  padding-bottom: 170px;

  .to-add-wx {
    position: absolute;
    top: 3825px;
    left: 60px;
    right: 55px;
    // width: 100%;
    height: 135px;
  }

  img {
    // display: inline-block;
    // position: absolute;
    // top: 0px;
    // left: 0;
    // right: 0;
    width: 100%;
    // height:100%;
    // margin-top: 120px;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .link-br {
    width: 100%;
    height: 5px;
    background-color: #fff;
  }

  img:nth-child(1) {
    // margin-top: -0px;
    pointer-events: none;
  }

  // img:nth-child(2) {
  //   // margin-top: -8px;
  //   pointer-events:none;
  // }

  // img:nth-child(3) {
  //   pointer-events:none;
  //   // margin-top: -8px;
  // }

  .footer {
    position: fixed;
    bottom: 0px;
    left: 0;
    right: 0;
    z-index: 9999;
    padding: 0 15px;
    background-color: #d63c11;
    // border: 1px solid #000;

    img {
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      // height: 180px;
      // width: 100%;
      // object-fit: cover;
      // border: 1px solid #000;
    }
  }

  .header-box {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: #fb5046;
    color: #fff;
    font-size: 80px;
    font-weight: 900;
    // height: 10%;
    letter-spacing: 10px;

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 20px;
      width: 30px;
      height: 30px;
      transform: translateY(-50%);
      background-color: #fff;
    }

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      right: 20px;
      width: 30px;
      height: 30px;
      transform: translateY(-50%);
      background-color: #fff;
    }
  }

  .main-content {
    // min-height: 86%;
    margin: 30px 25px;
    border: 6px solid #3b3431;
    box-sizing: border-box;

    .first-content {
      padding: 60px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      // min-height: 40%;
      letter-spacing: 5px;
      border-bottom: 6px solid #3b3431;
      font-size: 65px;
      font-weight: 700;
      box-sizing: border-box;
      min-height: 350px;
    }

    .second-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      // min-height: 32%;
      padding: 40px 0;
      min-height: 480px;
      border-bottom: 6px solid #3b3431;
      box-sizing: border-box;

      .title {
        font-size: 50px;
        font-weight: 900;
        letter-spacing: 5px;
      }

      .title2 {
        font-size: 120px;
        font-weight: 900;

        span {
          color: #fb4f47;
        }
      }

      .title3 {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #000;
        height: 90px;
        margin: 0 30px;
        color: #fff;
        font-size: 55px;
        font-weight: 800;
        letter-spacing: 10px;

        span {
          margin-left: 20px;
        }
      }
    }

    .three-content {
      // min-height: 40%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 50px 0;
      min-height: 590px;
      box-sizing: border-box;

      .tag-box {
        // width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0 20px;

        .tag-item {
          width: 45%;
          border: 4px solid #807670;
          font-size: 40px;
          font-weight: 900;
          padding: 5px 0;
          border-radius: 12px;
          letter-spacing: 9px;
          margin-bottom: 4%;
        }
      }

      .footer-content {
        display: flex;
        align-items: center;
        justify-content: center;

        span {
          font-size: 60px;
          font-weight: 900;
        }

        img {
          // width: 35%;
          width: 210px;
          padding: 12px;
          border: 6px solid #3b3431;
          border-radius: 8px;
          margin: 0 15px;
        }
      }
    }
  }
}
</style>
