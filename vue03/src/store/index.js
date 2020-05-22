import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    setTodos(state, setTodo) {
      state.todos.push(setTodo);
    },
    deleteTodos(state, index) {
      state.todos.splice(index, 1);
    }
  },
  actions: {
  },
  getters: {
    getTodos: state => {	
      return state.todos;	
    }	
  },
  modules: {
  }
})
