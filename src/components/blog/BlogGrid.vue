<template>
  <div>
    <div class="weui-grids">
      <router-link to="/Category" class="weui-grid">
        <div class="weui-grid__icon">
          <img>
        </div>
        <p class="weui-grid__label">
          分类
        </p>
      </router-link>
      <a class="weui-grid">
        <div class="weui-grid__icon">
          <img>
        </div>
        <p class="weui-grid__label">
          标签
        </p>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "BlogGrid"
    }
</script>

<style scoped>

</style>
