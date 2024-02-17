<template>
  <div>
    {{ userInfo }}
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "userComp",
  computed: {
    ...mapState('user',['userInfo']),
  },
};
</script>

<style>
</style>