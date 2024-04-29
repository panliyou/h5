<template>
  <div class="home-box">
  <img src="../../assets/zrsm_bg1.png" alt="">
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {
  },
});

import { ref } from "vue";


</script>

<style scoped lang="scss">
.home-box {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #efeeec;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  -o-user-select: none;
  user-select: none;
  overflow-y: auto;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);

  img{
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    width:100%;
    // height:100%;
    
    // margin-top: 120px;
  }

}
</style>