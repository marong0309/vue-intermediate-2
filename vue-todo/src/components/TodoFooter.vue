<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" @click="clearTodo">Clear All</span>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      activeBtn: false,
    };
  },
  methods: {
    clearTodo: function () {
      this.$emit("clearAll");
    },
  },
};
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
  cursor: pointer;
}
.clearAllContainer:hover {
  background-color: rgb(194, 43, 43);
  transition: all 0.3s ease-in-out;
  border-radius: inherit;
  border-radius: 5px;
}
.clearAllBtn:hover {
  color: white;
  transition: all 0.3s ease-in-out;
}
.clearAllBtn {
  color: #e20303;
  display: block;
}
</style>
