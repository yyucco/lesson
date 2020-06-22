import  { firebase, auth, db } from '@/plugins/firebase'

export const state = () => ({
  currentUser: {},
  login: false,
  error: '',
 })

 export const mutations = {
  currentUser (state, currentUser) {
    if (currentUser) {
      state.currentUser = {uid:currentUser.uid, name:currentUser.docdata.name,money:currentUser.docdata.money }; 
      state.login = true;
    } else {
      state.currentUser = {}; 
      state.login = false;  
    }
  },
  error (state,txet) {
    state.error = txet;
  }
}

export const actions = {
  //logout
  logout({ commit }) {
    auth.signOut()
    commit('currentUser', null);
  },
  //changedUser
  changedUser({ commit }, user) {
    if(user){
      db.collection('users').doc(user.uid).get()
        .then(doc => {
          commit('currentUser', {uid:user.uid,docdata:doc.data()});
        })
        .catch(err => {
          console.log('Error getting document', err);
        });
    }
  },
  // login
  login({ commit }, getUserData) {
    auth.signInWithEmailAndPassword(getUserData.email, getUserData.password);
  },
  // signup
  signup({ commit }, getUserData) {
    auth.createUserWithEmailAndPassword(getUserData.email, getUserData.password)
    .then(user => {
      let uid = user.user.uid;
      db.collection('users').doc(uid).set({
        name: getUserData.name,
        money: 500
      }); 
      console.log('signup成功！');
    })
    .catch(function(error) {
      console.log('signup失敗'+ error);
      commit('error',"signup失敗:", error.message);
    });
  },
}

export const getters = {
  getStateLogin (state) {
    return state.login;
  },
  error (state) {
    return state.error;
  },
  getCurrentUser (state) {
    return state.currentUser;
  }
}

