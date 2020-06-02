<template>
  <div>
    <h2>タスクを追加する</h2>
    <edit-form :title.sync="title" :detail.sync="detail" @submit="edit" edit/>

  </div>
</template>

<script>
import EditForm from './editForm';
export default {
  components: {
    EditForm
  },
  data() {
    return {
      title: '',
      detail: ''
    }
  },
  methods: {
    edit() {
      let todo = { 
        id: Number(this.$route.params.id),
        title: this.title, 
        detail: this.detail 
      };
      this.$store.dispatch("moduleC/updateTodo", todo);
      this.$router.push("/todoC");
    }
  },
  created() {
    const getTodoById = this.$store.getters['moduleC/getTodoById'];
    const todo = getTodoById(Number(this.$route.params.id));
    if (todo === undefined) {
      return;
    }
    this.title = todo.title;
    this.detail = todo.detail;
  }
}
</script>