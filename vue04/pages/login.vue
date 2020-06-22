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
import { firebase, auth, db } from '@/plugins/firebase'    

export default {
  meta: {requiresAuth: true },
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
      this.$router.push('/');
    },
  }
}
</script>

<style>
#form > label{
  display: block;
  margin: 10px auto;
}
.links {
  margin-top: 15px;
}
</style>