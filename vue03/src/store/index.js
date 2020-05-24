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
    },
    statusTodos(state, index) {
      state.todos[index].status =
      state.todos[index].status === '作業中' ? '完了' : '作業中';
    },
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
