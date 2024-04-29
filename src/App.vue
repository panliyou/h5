<template>
  <!-- <nav>
    <router-link to="/privacyPolicy">隐私政策</router-link> |
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view v-wechat-title="$route.meta.title"/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
}

body{
  padding: 0 !important;
  margin: 0 !important;
}

nav {
  padding: 30px;


  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
