<template>
  <div>
    <div class="login-frame">
      <img :src="defaultPic" class="back-img">
    </div>
    <div class="login-box">
      <ul class="login-ul">
        <li class="login-li">
          <input type="text" v-bind="username" placeholder="用户名" class="login-input input-text">
        </li>
        <li class="login-li">
          <input type="password" v-bind="password" placeholder="密码" class="login-input input-password">
        </li>
      </ul>
      <input type="button" value="登录" @click = "logIn" class="login-input input-button">
    </div>
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
