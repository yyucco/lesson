<template>
  <div>
    <h2>タスクを追加する</h2>
    <edit-form :title.sync="title" :detail.sync="detail" @submit="add" />

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
    add() {
      let todo = { title: this.title, detail: this.detail };
      this.$store.dispatch("moduleC/createTodo", todo);
      this.$router.push("/todoC");
    }
  }
}
</script>