<template>
  <div id="app">
    <h1>Todoリスト</h1>

    <div>
      <label><input type="radio" v-model="picked" value="all">全て</label>
      <label><input type="radio" v-model="picked" value="doing">作業中</label>
      <label><input type="radio" v-model="picked" value="done">完了</label>
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
        <tr v-for="(value, index) in this.getTodos" :key="index">
          <td>{{ index }}</td>
          <td>{{ value.task }}</td>
          <td><button @click="statusTask(index)">{{ value.status }}</button></td>
          <td><button @click="deleteTask(index)">削除</button></td>
        </tr>
      </tbody>
    </table>

    <h2>新規タスクの追加</h2>
    <input type="text" v-model="taskText">
    <button @click="addTask">追加</button>
  </div><!-- app -->
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data(){
    return {
      taskText: '',
      statusText: '作業中',
      picked: 'all'
    }
  },
  computed: {
  ...mapGetters([
    'getTodos'
    ]),
    todo(){
      const todo = {task: this.taskText, status: this.statusText};
      return todo;
    }
  },
  methods: {
    addTask() {
      this.$store.commit('setTodos', this.todo);
      this.taskText = '';
    },
    deleteTask(index){
      this.$store.commit('deleteTodos', index);
    },
    statusTask(index){
      this.$store.commit('statusTodos', index);
    }
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
