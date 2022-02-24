<template>
  <div>
    <ul>
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
  name: 'HelloWorld',
  data () {
    return {
      dataServer: this.serverConfig.DataServer,
      username: '',
      password: ''
    }
  },
  mounted () {

  },
  methods: {
    logIn: function () {
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
