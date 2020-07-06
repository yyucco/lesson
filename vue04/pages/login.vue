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
import { mapGetters } from 'vuex'

export default {
  meta: {requiresAuth: true },
  components: {
    Logo
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  computed :{
    btnActive() {
      if(this.email && this.password ){
        return false;
      } 
      return true;
    },
    ...mapGetters([
      'error'
    ]),
  },
  methods : {
    login () {
      if(this.btnActive){
        return;
      }
    auth.signInWithEmailAndPassword(this.email, this.password) 
    .then(firebaseUser => {
      return this.$store.dispatch('login',firebaseUser.user.uid);
    })
    .then(() => this.$router.push('/'))
    .catch((error) => this.$store.commit('error',error))
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