<template>
  <div class="container">
    <logo />
    <div id="information">
      <p>{{ getCurrentUser.name }}さんようこそ!!</p>
      <div id="infoName">
        <p>残高: {{  getCurrentUser.money }} 円</p>
        <div class="links">
          <button class="button--green" @click="logout">ログアウト</button>
        </div>
      </div>
     </div><!-- information -->

  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import  { firebase, auth, db } from '@/plugins/firebase'
import { mapGetters } from 'vuex'

export default {
  meta: {requiresAuth: true} ,
  components: {
    Logo
  },
  data() {
    return {
      currentUserUid:'',
      currentUserName:'',
      currentUserMoney: 0,
      sendmoney:0,
      usersDocs:{},
      error:'',
    }
  },
  computed: {
    ...mapGetters([
      'getCurrentUser'
    ]),
  },
  methods : {
    logout () {
      this.$store.dispatch('logout');
      this.$router.push('login');
    }
  }
}
</script>g

<style>
#information {
  margin: 10px auto;
}
#information,
#infoName {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal .modalbox{
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%); /* Safari用 */
  transform: translate(-50%, -50%);
  background-color: #eee;
  padding: 10px;
  z-index: 999;
}
.modal .overlay {
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%); /* Safari用 */
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .2);
  z-index: 998;
}
.modalhiddn {
  display: none;
}
</style>