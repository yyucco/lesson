<template>
  <div>
    <h1>Todoリスト</h1>

    <div style="margin-bottom:20px">
      <label><input type="radio" v-model="disp" value="0">全て</label>
      <label><input type="radio" v-model="disp" value="1">作業中</label>
      <label><input type="radio" v-model="disp" value="2">完了</label>
    </div>

    <table>
      <thead>
        <tr>
          <th>完了</th>
          <th>タイトル</th>
          <th>編集</th>
          <th>消去</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todos" :key="todo.id" >
          <td><input type="checkbox" v-model="todo.done"></td>
          <td :class="{'todo-checked': todo.done}">{{todo.title}}</td>
          <td><button @click.stop="$router.push(`/todoC/edit/${todo.id}`)">Edit</button></td>
          <td><button @click.stop="deleteTodo(todo.id)">Delete</button></td>
        </tr>
      </tbody>
    </table>

    <h2>新規タスクの追加</h2>
    <button @click="$router.push('/todoC/add')">追加</button>
  </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data(){
    return {
      disp: '0',
      tosod:{}
    };
  },
  computed: {
    ...mapGetters({
      doneTodos: "moduleC/doneTodos",
      notDoneTodos: "moduleC/notDoneTodos",
      todosCount: "moduleC/todosCount",
      doneTodosCount: "moduleC/doneTodosCount",
      notDoneTodosCount :"moduleC/notDoneTodosCount",
      getTodoById :"moduleC/getTodoById"
    }),
    todos() {
     switch (this.disp) {
        case '1':
          return this.notDoneTodos;
        case '2':
          return this.doneTodos;
      }
      return this.$store.state.moduleC.todos;
    }
  },
  methods: {
    ...mapActions({
      changeDone: "moduleC/changeDone", 
      deleteTodo: "moduleC/deleteTodo"
    })
  }
}

</script>

<style>
.todo-checked {
  text-decoration: line-through;
}

</style>

