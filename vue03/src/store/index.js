import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos:[ ]
  },
  mutations: {
    setTodos (state,setDate) {
      state.todos.push( setDate );
    }
  },
  actions: {
  },
  getters: {
    getState: state => {	
      return state;	
    }	
  },
  modules: {
  }
})
