<template>
    <footer class="footer">
      <!-- 统计 -->
      <span class="todo-count">合 计:<strong>{{todoList.length}}</strong></span>
      <!-- 清空 -->
      <button class="clear-completed" @click="clearTodoList">清空任务</button>
    </footer>
</template>

<script>
export default {
  data(){
    return{
      
    }
  },
  props : ['todoList'],
  methods : {
    clearTodoList(){
      this.$emit('clearTodoList')
    }
  }
}
</script>

<style>

</style>