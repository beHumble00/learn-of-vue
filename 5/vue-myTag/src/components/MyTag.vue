<template>
  <div class="my-tag">
    <input
      class="input"
      type="text"
      placeholder="输入标签"
      v-if="isEdit"
      v-focus
      :value="modelValue"
      @keyup.enter="editComp"
      @blur="isEdit = false"
    />
    <div class="text" v-else @dblclick="edit">{{ modelValue }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEdit: false,
    };
  },
  methods: {
    edit() {
      this.isEdit = true;
    },
    editComp(e) {
      this.isEdit = false;
      this.$emit("update:modelValue", e.target.value);
    },
  },
  props: {
    modelValue: String,
  },
};
</script>

<style lang="less" scoped>
.my-tag {
  cursor: pointer;
  .input {
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    color: #666;
    &::placeholder {
      color: #666;
    }
  }
}
</style>