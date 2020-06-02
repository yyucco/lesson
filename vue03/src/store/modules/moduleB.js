export default {
  namespaced: true,
  state: {
    todos: []
  },
  mutations: {
    addTodos(state, todo) {
      state.todos.push(todo);
    },
    deleteTodos(state, index) {
      state.todos.splice(index, 1);
    },
    changeStatus(state, index) {
      state.todos[index].status =
      state.todos[index].status === '作業中' ? '完了' : '作業中';
    }
  },
  actions: {
    addTask({ commit }, todo) {
      commit('addTodos', todo);
    },
    deleteTask({ commit }, index) {
      commit('deleteTodos', index);
    },
    changeStatus({ commit }, index) {
      commit('changeStatus', index);
    }
  },
  getters: {
    getTodos: state => {	
      state.todos.forEach((todo, index) => {
        todo.id = index++;
      })
      const allTodos = state.todos;	
      const doingTodos =  state.todos.filter(value => 
        value.status === '作業中'
      );
      const doneTodos = state.todos.filter(value => 
        value.status === '完了'
      );
      return {allTodos, doingTodos, doneTodos};
    }
  }
}

  
