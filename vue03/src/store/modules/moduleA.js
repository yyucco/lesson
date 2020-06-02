
export default {
  namespaced: true,
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
    changeStatus(state, index) {
      state.todos[index].status =
      state.todos[index].status === '作業中' ? '完了' : '作業中';
    }
  },
  actions: {
  },
  getters: {
    getTodos: state => {	
      state.todos.forEach((todo, index) => {
        todo.id = index++;
      })
      return state.todos;	
    }	
  }
}

  
