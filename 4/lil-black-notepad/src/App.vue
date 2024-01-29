<template>
  <!-- 主体区域 -->
  <section id="app">
    <TodoHeader @addTodo="addHandle"></TodoHeader>
    <!-- 列表区域 -->
    <TodoList :todoList="todoList" @delTodo="delHandle"></TodoList>
    <!-- 统计和清空 -->
    <TodoFooter :todoList="todoList" @clearTodoList="clearHandle"></TodoFooter>
  </section>
</template>

<script>
import TodoFooter from "./components/TodoFooter.vue";
import TodoHeader from "./components/TodoHeader.vue";
import TodoList from "./components/TodoList.vue";
export default {
  data() {
    return {
      todoList: JSON.parse(localStorage.getItem("todoList")) || [],
    };
  },
  components: {
    TodoHeader,
    TodoList,
    TodoFooter,
  },
  methods: {
    addHandle(todoName) {
      this.todoList.push({ id: new Date(), name: todoName });
    },
    delHandle(todoId) {
      this.todoList = this.todoList.filter((item) => item.id != todoId);
    },
    clearHandle() {
      this.todoList = [];
    },
  },
  watch: {
    todoList: {
      deep: true,
      handler(newValue) {
        localStorage.setItem("todoList", JSON.stringify(newValue));
      },
    },
  },
};
</script>

<style>
</style>
