<template>
  <div>
    <h1>Todoリスト</h1>

    <div>
      <label><input type="radio" v-model="picked" value="all" @change="changeRadio">全て</label>
      <label><input type="radio" v-model="picked" value="doing" @change="changeRadio">作業中</label>
      <label><input type="radio" v-model="picked" value="done" @change="changeRadio">完了</label>
    </div>

    <table v-if="this.getTodos[0]">
      <thead>
        <tr>
          <th>ID</th>
          <th>コメント</th>
          <th>状態</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, index) in filterTodos" :key="index">
          <td>{{ value.id }}</td>
          <td>{{ value.task }}</td>
          <td><button @click="changeStatus(value.id)">{{ value.status }}</button></td>
          <td><button @click="deleteTask(value.id)">削除</button></td>
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
  data(){
    return {
      taskText: '',
      statusText: '作業中',
      picked: 'all',
      filterTodos: this.$store.getters['moduleA/getTodos']
    }
  },
  computed: {
    ...mapGetters({
      getTodos: 'moduleA/getTodos'
    }),
    todo(){
      const todo = {task: this.taskText, status: this.statusText};
      return todo;
    }
  },
  methods: {
    addTask() {
      this.$store.commit('moduleA/setTodos', this.todo);
      this.taskText = '';
    },
    deleteTask(index){
      this.$store.commit('moduleA/deleteTodos', index);
    },
    changeStatus(index){
      this.$store.commit('moduleA/changeStatus', index);
    },
    changeRadio(e){  
      if (e.target.value === 'doing') {
        this.filterTodos = this.getTodos.filter(function(value) {
          return value.status === '作業中';
        });
      } else if (e.target.value === 'done') {
        this.filterTodos = this.getTodos.filter(function(value) {
          return value.status ===  '完了';
        });
      }	 else if (e.target.value === 'all') {
        this.filterTodos = this.getTodos;
      }
    }
  }
}
</script>

