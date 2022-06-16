<template>
  <div id="app">
    <TodoHeader />
    <TodoInput @addTodoItem="addOneItem" />
    <TodoList :propsdata="todoItems" />
    <TodoFooter />
  </div>
</template>
<!-- v-on:하위 컴포넌트에서 발생시킨 이벤트 이름 = "현재 컴포넌트에서 발생시킨 이벤트" -->
<!-- v-props:아래 컴포넌트에서 받을 데이터명 = "현재 컴포넌트에서 전달할 데이터명" -->

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  created: function () {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
        }
      }
    }
  },
  data: function () {
    return {
      todoItems: [],
    };
  },
  name: "App",
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
  methods: {
    addOneItem: function (todoItem) {
      var obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
  },
};
</script>

<style>
#app {
  font-family: Black + Han + Sans, sans-serif;
}
body {
  text-align: center;
  background-color: #f6f6f6;
}
input {
  border-style: groove;
  width: 400px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
