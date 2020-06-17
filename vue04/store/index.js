import  { firebase, auth, db } from '@/plugins/firebase'

export const state = () => ({
  uid:'',
  name: '',
  money: 0,
  login: false,
  error:'',
 })

 export const mutations = {
  usres (state, user) {
    if (user) {
      state.uid = user.uid;
      state.name = user.displayName;
      state.money = user.money;    
      state.login = true;
    } else {
      state.uid = '';
      state.name = '';
      state.money = '';  
      state.login = false;  
    }
  },
  error (state,txet) {
    state.error = txet;
  }
}

export const actions = {

  //changedUser
  changedUser({ commit },user) {
      console.log(user);
      if(user){
        commit('usres', user);
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
      user.user.updateProfile({
        displayName: getUserData.name,
      });
      db.collection('users').doc(uid).set({
        name: getUserData.name,
        money: 0
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
  getName (state) {
    return state.name;
  }
}

