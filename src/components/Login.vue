<template>
  <div class="grid">
    <div>
      <img :src="defaultPic">
    </div>
    <ul class="absolute rt">
      <li>
        <span>username</span>
        <input type="text" v-bind="username">
      </li>
      <li>
        <span>password</span>
        <input type="password" v-bind="password">
      </li>
      <li>
        <input type="button" value="login" @click = "logIn">
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      dataServer: this.$serverConfig.DataServer,
      picServer: this.$serverConfig.PicServer,
      defaultPic: this.$serverConfig.DefaultPic,
      username: '',
      password: ''
    }
  },
  mounted () {
    var numbers = []
    var i = 122
    while (i > 0) {
      numbers.push(i % 10)
      i = (i - (i % 10)) / 10
    }
    var numSet = new Set(numbers)
    console.log(numbers.length)
    console.log(numSet.size)
  },
  methods: {
    logIn: function () {
      // /api/blog/selectPublicBlogByTypeId'
      this.axios.get('/api/user/login', {
        params: {
          username: this.username,
          password: this.password
        }
      }).then(response => {
        console.log(response.data)
        if (response.data.code == 200) {
          //  成功登录跳转页面
        } else {
          console.log('登录失败')
        }
      }).catch(error =>{
        console.log(error)
      })
    }
  }
}
</script>
<style scoped>
</style>
