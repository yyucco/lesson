import  { firebase, auth, db } from '@/plugins/firebase'
import {getUserFromCookie, getUserFromSession} from '@/helpers'

import Cookies from 'js-cookie'

export const state = () => ({
  currentUserUid: '',
  login: false,
  error: '',

 })

 export const mutations = {
  setcurrentUserUid (state, currentUserUid) {
    state.currentUserUid = currentUserUid
    state.login = (currentUserUid)? true : false;
  },
  error (state,errormessege) {
    state.error = errormessege;
  }
}

export const actions = {
 //クッキー
  async nuxtServerInit ({ commit }, { req }) {
    const user = getUserFromCookie(req)
    if(user) {
      await commit('setcurrentUserUid', user.user_id);
    } else {
      await commit('setcurrentUserUid',  null);
    }
  },
  //ログアウト
  async logout({ commit }) {  
    auth.signOut() 
    Cookies.remove('access_token'); 
    commit('setcurrentUserUid', null);
  },
  //ログイン
  async login({commit}, user) {
    const token = await auth.currentUser.getIdToken(true) 
    Cookies.set('access_token', token)  
    await commit('setcurrentUserUid', user)
  },
}

export const getters = {
  error (state) {
    return state.error;
  },
  getCurrentUserUid (state) {
    if (state.login && state.currentUserUid) return state.currentUserUid
    else return null
  },
  isAuthenticated(state) {
    return !!state.login && !!state.currentUserUid
  }
}

