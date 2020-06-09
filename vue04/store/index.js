import  { firebase, auth, db } from '@/plugins/firebase'

export const state = () => ({
  user: {},
  uid:'EwrBJ10YVFZi6vhtjuWwVaQ5XHB2',
  login: false,
  error:'',
 })

 export const mutations = {
  loginID (state, uid) {
    state.uid = uid; 
  },
  switchLogin (state,bool) {
    state.login = bool;
  },
  error (state,txet) {
    state.error = txet;
  }
}

export const actions = {
  // login
  login({ commit }, getUserData) {
    auth.signInWithEmailAndPassword(getUserData.email, getUserData.password)
    .then(user => {
      auth.onAuthStateChanged(function (user) {
        commit('loginID', user.uid);
        commit('switchLogin',true );
        console.log('login成功！');
      });
    })
    .then(()=>{
      this.$router.push('/');
    })
    .catch((error) => {
      console.log('login失敗');
      commit('login失敗', error.message);
    })
  },
  // signup
  signup({ commit }, getUserData) {
    auth.createUserWithEmailAndPassword(getUserData.email, getUserData.password)
    .then(user => {
      const uid = user.user.uid;
      console.log( getUserData.name);
      db.collection('users').doc(uid).set({
        name: getUserData.name,
        money: 0
      }); 
      console.log('signup成功！');
      this.$router.push('/login');
    })
    .catch(function(error) {
      console.log('signup失敗');
      commit('error',"signup失敗:", error.message);
    });
  },
}

export const getters = {
  error (state) {
    return state.error;
  },
  isAuthenticated (state) {
    return state.login;
  },
  getName(state){
    const docRef = db.collection('users').doc(state.uid);
    let docData= new Array();
    docRef.get().then(function(doc) {
      docData.push(doc.data());
      console.log("getName成功!");
    }).catch(function(error) {
      console.log("getName失敗:", error);
    });
    return docData;
  }
}