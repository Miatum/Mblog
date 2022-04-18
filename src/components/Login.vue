<template>
  <div>
    <div class="login-frame">
      <img :src="defaultPic" class="back-img">
    </div>
    <div class="login-box">
      <ul class="login-ul">
        <li>
          <span>username</span>
          <input type="text" v-bind="username" class="input-text">
        </li>
        <li>
          <span>password</span>
          <input type="password" v-bind="password" class="input-password">
        </li>
        <li>
          <input type="button" value="login" @click = "logIn" class="input-button">
        </li>
      </ul>
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
