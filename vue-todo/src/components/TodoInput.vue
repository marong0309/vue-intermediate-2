<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo" />
    <!-- <button @click="addTodo" class="addBtn">add</button> -->
    <span class="addContainer" @click="addTodo">
      <font-awesome-icon icon="fas fa-plus" class="addBtn" />
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: "",
    };
  },
  methods: {
    addTodo: function () {
      if (this.newTodoItem !== "") {
        var obj = { completed: false, item: this.newTodoItem };
        // console.log(this.newTodoItem);
        // // 저장하는 로직
        localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
        this.clearInput();
      }
    },
    clearInput: function () {
      this.newTodoItem = "";
    },
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  height: 100%;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
