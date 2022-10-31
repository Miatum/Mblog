<template>
  <div>
    <div class="top_bar">
      <router-link to="/">
      </router-link>
      <a>标签</a>
      <a>
      </a>
    </div>
    <div class="weui-cells">
      <div class="weui-cell" v-for="tag in tags">
        <div class="weui-cell__bd">
          <p>{{tag.id}}</p>
        </div>
        <div class="weui-cell__ft">{{tag.tag_name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Tag",
    data () {
      return {
        dataServer: this.$serverConfig.DataServer,
        tags: ''
      }
    },
    mounted() {
      // 获取所有标签
      this.axios.get(this.dataServer + '/api/tag/selctAllTag'
      ).then(response => {
        console.log(response.data)
        this.tags = response.data
      }).catch(error => {
        console.log(error)
      })
    }
  }
</script>

<style scoped>

</style>
