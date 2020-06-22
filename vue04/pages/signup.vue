<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">新規登録画面</h1>
      <div id="form">
        <label>ユーザー名 <input type="text" name="name" v-model="name"></label>
        <label>メールアドレス <input type="email" name="email" v-model="email"></label>
        <label>パスワード <input type="password" name="password" v-model="password"></label>
      </div>

      <div class="links">
        <button class="button--green" :class="{invalid:btnActive}" @click="signup">新規登録</button>
        <nuxt-link to="/login">ログイン</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  computed :{
    btnActive() {
      if(this.name && this.email && this.password ){
        return false;
      } 
      return true;
    }
  },
  methods : {
    signup () {
      if(this.btnActive){
        return;
      }
      this.$store.dispatch('signup', {name:this.name, email: this.email, password: this.password});
      this.$router.push('/');
    },
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}
#form > label{
  display: block;
  margin: 10px auto;
}
.links {
  margin-top: 15px;
}
</style>