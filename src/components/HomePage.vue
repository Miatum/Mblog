<template>
  <div>
    <div class="top_bar">
    </div>
    <router-view>
      <router-link></router-link>
    </router-view>
    <div class="bottom_bar bottom">
      <div class="weui-tab">
        <div class="weui-tab__panel"></div>
        <div class="weui-tabbar">
          <a class="weui-tabbar__item weui-bar__item_on">
            <img class="weui-tabbar__icon">
            <p class="weui-tabbar__label">博客</p>
          </a>
          <a class="weui-tabbar__item">
            <img class="weui-tabbar__icon">
            <p class="weui-tabbar__label">账单</p>
          </a>
          <a class="weui-tabbar__item">
            <img class="weui-tabbar__icon">
            <p class="weui-tabbar__label">备忘录</p>
          </a>
          <a class="weui-tabbar__item">
            <img class="weui-tabbar__icon">
            <p class="weui-tabbar__label">我</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HomePage"
    }
</script>

<style scoped>

</style>
