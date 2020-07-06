<template>
  <div class="container">
    <logo />
      <div id="information">
      <p>{{ CurrentUserDocs.name }}さんようこそ!!</p>
      <div id="infoName">
        <p>残高: {{  CurrentUserDocs.money }} 円</p>
        <div class="links">
          <button class="button--green" @click="logout">ログアウト</button>
        </div>
      </div>
     </div><!-- information -->
      <p class="title">
        ユーザ一覧
      </p>
      <table>
        <thead>
          <tr>
            <td>ユーザー名</td>
            <td></td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(doc, uid) in usersDocs" :key="uid" >
            <td>{{ doc.name }}</td>
            <td>
              <button @click="modalOpen">waletを見る</button>
              <div class="modal modalhiddn">
                <div class="modalbox">
                  <p>{{ doc.name }}さんの残高</p>
                  <p>{{ doc.money }}</p>
                  <button @click="madalClose">close</button>
                </div>
                <div class="overlay" @click="madalClose"></div>
              </div><!-- modal -->
            </td>
            <td>
              <button @click="modalOpen">送る</button>
              <div class="modal modalhiddn">
                <div class="modalbox">
                  <p>あなたの残高：{{ CurrentUserDocs.money }}</p>
                  <p>送る金額</p>
                  <input type="text" v-model="sendmoney">
                  <button @click="sendMoney(uid,doc.money)" :class="{invalid:btnActive}">送る</button>
                  <p class='error' v-if='error'>{{ error }}</p>
                </div>
                <div class="overlay" @click="madalClose"></div>
              </div><!-- modal -->
            </td>
          </tr> 
        </tbody>
      </table>
    </div>
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
      sendmoney:0,
      usersDocs:{},
      CurrentUserDocs:{}
    }
  },
  mounted: function() {
    const docRef = db.collection('users');
    docRef.onSnapshot( snapshot => { 
      snapshot.forEach(( doc ) => {
        if(doc.id === this.getCurrentUserUid ) {
          this.CurrentUserDocs =  doc.data();
        } else {
          this.usersDocs[doc.id] = doc.data();
        }
      });
    })
  },
  computed: {
    btnActive() {
      this.$store.commit('error', '')      
      if (this.sendmoney > this.CurrentUserDocs.money) {
        this.$store.commit('error', '残高が不足です')
        return false;
      } 
      if (this.sendmoney > 0) {
        return false;
      }
      return true;
    },
    ...mapGetters([
      'getCurrentUserUid',
      'error'
    ]),
  },
  methods : {
    logout () { 
      this.$store.dispatch('logout')
      this.$router.push('/login')
    },
    modalOpen(event){
      event.target.nextElementSibling.classList.remove('modalhiddn');
    },
    madalClose(event){
      event.target.closest('.modal').classList.add('modalhiddn');
    },
    sendMoney(senduserUid, senduserMoney){
      if (!this.error) {
        let updatemoney = parseInt(this.CurrentUserDocs.money) - parseInt(this.sendmoney);
        let updateuid = this.getCurrentUserUid;
        this.update(updateuid, updatemoney);

        updatemoney = parseInt(senduserMoney) + parseInt(this.sendmoney);
        updateuid = senduserUid;
        this.update(updateuid, updatemoney);

        event.target.closest('.modal').classList.add('modalhiddn');
        this.sendmoney = 0;
      }  
    },
    update(updateuid,updatemoney){
      const docRef = db.collection('users').doc(updateuid);
      docRef.update({
        money:updatemoney,
      })
    },
  }
}
</script>

<style>
#lording {
  width: 100vw;
  height: 100vh;
  padding: 25vh 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #fff;
}
#lording .NuxtLogo {
  width: 50%;
  margin-top: 50px;
  animation: rotate 3s linear infinite;
  /* webkit用animation */
  -webkit-animation: rotate 3s linear infinite;
}
@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); } 
}
@-webkit-keyframes rotate {
  /* webkit用keyframes */ 
0% { -webkit-transform: rotate(0deg); }
100% { -webkit-transform: rotate(360deg); }
}
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