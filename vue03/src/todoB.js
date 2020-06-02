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
  ...mapGetters({
    getTodos: 'moduleB/getTodos'
  }),
    todo(){
      const todo = {task: this.taskText, status: this.statusText};
      return todo;
    }
  },
  methods: {
    addTask() {
      this.$store.commit('moduleB/setTodos', this.todo);
      this.taskText = '';
    },
    deleteTask(index){
      this.$store.commit('moduleB/deleteTodos', index);
    },
    statusTask(index){
      this.$store.commit('moduleB/changeStatus', index);
    }
  }
}
