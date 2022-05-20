<template>
  <div class="weui-cells">
    <div class="weui-cell" v-for="category in categorys">
      <div class="weui-cell__bd">
        <p>{{category.id}}</p>
      </div>
      <div class="weui-cell__ft">{{category.type_name}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Category",
    data () {
      return {
        dataServer: this.$serverConfig.DataServer,
        categorys: ''
      }
    },
    mounted() {
      // 获取所有分类
      this.axios.get(this.dataServer + '/api/type/selctAllType'
      ).then(response => {
        console.log(response.data)
        this.categorys = response.data
      }).catch(error => {
        console.log(error)
      })
    }
  }
</script>

<style scoped>

</style>
