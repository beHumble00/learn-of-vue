<template>
  <section class="main">
    <ul class="todo-list">
      <li class="todo" v-for="(item, idx) in todoList" :key="item.id">
        <div class="view">
          <span class="index">{{ idx + 1 }}.</span>
          <label>{{ item.name }}</label>
          <button class="destroy" @click="del(item.id)"></button>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ["todoList"],
  methods : {
    del(todoId){
      this.$emit('delTodo',todoId)
    }
  }
};
</script>

<style>
</style>