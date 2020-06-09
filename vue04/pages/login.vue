<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        ログイン
      </h1>
      <p class="error">{{ error }}</p>
      <div id="form">
        <label>メールアドレス <input type="email" name="email" v-model="email"></label>
        <label>パスワード <input type="password" name="password" v-model="password"></label>
      </div>

      <div class="links">
        <button class="button--green" :class="{invalid:btnActive}" @click="login">ログイン</button>
        <nuxt-link to="/signup">新規登録</nuxt-link>
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
      email: '',
      password: '',
      error:'',
    }
  },
  computed :{
    btnActive() {
      if(this.email && this.password ){
        return false;
      } 
      return true;
    }
  },
  methods : {
    login () {
      if(this.btnActive){
        return;
      }
      this.$store.dispatch('login', {email: this.email, password: this.password});
      this.error = this.$store.getters.error;
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