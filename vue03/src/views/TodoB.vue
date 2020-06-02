<template>
  <div>
    <h1>Todoリスト</h1>

    <div>
      <label><input type="radio" v-model="picked" value="all">全て</label>
      <label><input type="radio" v-model="picked" value="doing">作業中</label>
      <label><input type="radio" v-model="picked" value="done">完了</label>
    </div>

    <table v-if="this.getTodos.allTodos[0]">
      <thead>
        <tr>
          <th>ID</th>
          <th>コメント</th>
          <th>状態</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todos" :key="todo.id">
          <td>{{ todo.id }}</td>
          <td>{{ todo.task }}</td>
          <td><button @click="changeStatus(todo.id)">{{ todo.status }}</button></td>
          <td><button @click="deleteTask(todo.id)">削除</button></td>
        </tr>
      </tbody>
    </table>

    <h2>新規タスクの追加</h2>
    <input type="text" v-model="taskText">
    <button @click="addTask">追加</button>
  </div>
</template>


<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      taskText: '',
      statusText: '作業中',
      picked: 'all'
    }
  },
  computed: {
    ...mapGetters({
      getTodos: 'moduleB/getTodos'    
    }),

    todos(){
      let todos = this.getTodos.allTodos;
      if(this.picked === 'doing') {
        todos = this.getTodos.doingTodos;
      } else if(this.picked === 'done') {
         todos = this.getTodos.doneTodos;
      }
      return todos;
    }
  },
  methods: {
    addTask() {
      const todo = {task: this.taskText, status: this.statusText};
      this.$store.dispatch('moduleB/addTask', todo);
      this.taskText = '';
    },
    deleteTask(index) {
      this.$store.dispatch('moduleB/deleteTask', index);
    },
    changeStatus(index) {
      this.$store.dispatch('moduleB/changeStatus', index);
    }
  }
}
</script>

