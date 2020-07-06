<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">新規登録画面</h1>
      <p v-if="error" class="error">{{ error }}</p>
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
import { firebase, auth, db } from '@/plugins/firebase'
import { mapGetters } from 'vuex'

export default {
  meta: {requiresAuth: true} ,
  components: {
    Logo
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
    }
  },
  computed :{
    btnActive() {
      if(this.name && this.email && this.password ){
        return false;
      } 
      return true;
    },
    ...mapGetters([
      'error'
    ]),
  },
  methods : {
    async signup () {
      if(this.btnActive){
        return;
      }
      try {
        const firebaseUser = await auth.createUserWithEmailAndPassword(this.email, this.password)
        console.log(firebaseUser)
        await db.collection('users').doc(firebaseUser.user.uid).set({
          name: this.name,
          money: 500
        })
        await this.$store.dispatch('login', firebaseUser.user.uid)
        this.$router.push('/') 
      } catch (error) {
       this.$store.commit('error',error)
      }
    },
    writeUserData (userId, email) {
      return db.collection('users').doc(userId).set({
          name: this.name,
          money: 500
      })
    }
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