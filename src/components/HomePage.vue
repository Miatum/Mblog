<template>
  <div>
    <router-view>
      <router-link></router-link>
    </router-view>
    <div role="tablist" aria-label="选项卡标题" class="weui-tabbar">
      <div id="tab1" role="tab" aria-labelledby="t1_title" aria-describedby="t1_tips" aria-selected="true"
        aria-controls="panel1" class="weui-tabbar__item weui-bar__item_on" wah-hotarea="click">
        <div id="t1_tips" aria-hidden="true" style="display: inline-block; position: relative;">
          <img src="./../assets/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
          <span class="weui-badge" style="position: absolute; top: -2px; right: -13px;">8</span>
        </div>
        <p id="t1_title" aria-hidden="true" class="weui-tabbar__label">blog</p>
      </div>
      <div id="tab2" role="tab" aria-labelledby="t2_title" aria-selected="false" aria-controls="panel2"
        class="weui-tabbar__item" wah-hotarea="click">
        <img src="./../assets/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
        <p aria-hidden="true" id="t2_title" class="weui-tabbar__label">bill</p>
      </div>
      <div id="tab3" role="tab" aria-labelledby="t3_title" aria-describedby="t3_tips" aria-selected="false"
        aria-controls="panel3" class="weui-tabbar__item" wah-hotarea="click">
        <div id="t3_tips" aria-hidden="true" style="display: inline-block; position: relative;">
          <img src="./../assets/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
          <span class="weui-badge weui-badge_dot" role="img" alt="new"
            style="position: absolute; top: 0; right: -6px;"></span>
        </div>
        <p id="t3_title" aria-hidden="true" class="weui-tabbar__label">calendar</p>
      </div>
      <div id="tab4" role="tab" aria-labelledby="t4_title" aria-selected="false" aria-controls="panel4"
        class="weui-tabbar__item" wah-hotarea="click">
        <img src="./../assets/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
        <p class="weui-tabbar__label" aria-hidden="true" id="t4_title">setting</p>
      </div>
    </div>
    <!-- <div class="bottom_bar">
      <div class="weui-tab">
        <div class="weui-tab__panel"></div>
        <div class="weui-tabbar">
          <a class="weui-tabbar__item weui-bar__item_on">
            <p class="weui-tabbar__label">blog</p>
            <p class="weui-tabbar__label">bill</p>
            <p class="weui-tabbar__label">calendar</p>
            <p class="weui-tabbar__label">note</p>
          </a>
        </div>
      </div>
    </div> -->
  </div>

</template>

<script>
export default {
  name: "HomePage"
}
</script>

<style scoped>

</style>
