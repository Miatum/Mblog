<template>
  <div>
    <div class="mask show"></div>
    <div class="login-frame animate__animated animate__pulse">
      <img :src="defaultPic" class="back-img" alt="Miatum">
    </div>
    <div class="login-box">
      <div v-bind:class="[entranced ? 'avatar animate__animated animate__zoomIn' : 'circle-dashed-button flex animate__animated animate__zoomIn']" v-on:click="entrance">
        <span v-bind:class="[entranced ? 'hide' : 'show animate__animated animate__zoomIn']">ENTRANCE</span>
      </div>
      <div class="occupation"></div>
      <div v-bind:class="[entranced ? 'show PIN animate__animated animate__bounceIn' : 'hide', 'input-password']">
        <input type="password" placeholder="PIN" v-model="PIN" v-on:keyup.enter="rootLogin">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      dataServer: this.$serverConfig.DataServer,
      defaultPic: this.$serverConfig.DefaultPic,
      PIN: '',
      entranced: false
    }
  },
  mounted () {

  },
  methods: {
    // 点击entrance按钮
    entrance: function() {
      this.entranced = true
    },
    rootLogin: function () {
      this.axios.post(this.dataServer + '/api/user/rootLogin', {
        PIN:this.PIN
      }).then(response => {
        console.log(response.data)
        if (response.data.code == 200) {
          //  成功登录跳转页面
          this.$router.push('/HomePage')
        } else {
          console.log('登录失败')
          this.PIN = ''
        }
      }).catch(error =>{
        console.log(error)
      })
    }
  },
  watch: {
    avatarTransition: function () {
      function animate() {
        
      }
    }
  }
}
</script>
<style scoped>

</style>
