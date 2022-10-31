<template>
  <div>
    <div class="top_bar">
      <div v-bind:class="[isSearch ? 'weui-search-bar_focusing' : '', 'weui-search-bar']" id="searchBar">
            <form id="searchForm" role="combobox" aria-haspopup="true" aria-expanded="false" aria-owns="searchResult" class="weui-search-bar__form" v-on:click = "clickSearchButton">
                <div class="weui-search-bar__box">
                    <i class="weui-icon-search"></i>
                    <input type="search" aria-controls="searchResult" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required="">
                    <a href="javascript:" role="button" title="清除" class="weui-icon-clear" id="searchClear" wah-hotarea="click"></a>
                </div>
                <label for="searchInput" class="weui-search-bar__label" id="searchText" wah-hotarea="click" style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);">
                    <i class="weui-icon-search"></i>
                    <span aria-hidden="true">搜索</span>
                </label>
            </form>
            <a href="javascript:" role="button" class="weui-search-bar__cancel-btn" id="searchCancel" wah-hotarea="click" v-on:clikc = "cancelSearch">取消</a>
        </div>
    </div>
    <div class="weui-grids">
      <router-link to="/Category" class="weui-grid">
        <div class="weui-grid__icon">
          <img>
        </div>
        <p class="weui-grid__label">
          分类
        </p>
      </router-link>
      <router-link to="/Tag" class="weui-grid">
        <div class="weui-grid__icon">
          <img>
        </div>
        <p class="weui-grid__label">
          标签
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "BlogGrid",
        data() {
          return {
            isSearch: false
          }
        },
        methods: {
          clickSearchButton: function () {
            this.isSearch = true
          },
          cancelSearch: function () {
            this.isSearch = false
            console.log("click cancel")
          }
        }
    }
</script>

<style scoped>

</style>
