<template>
  <div id="app">
    <TodoHeader />
    <TodoInput @addTodoItem="addOneItem" />
    <TodoList
      :propsdata="todoItems"
      @removeItem="removeOneItem"
      @toggleItem="toggleOneItem"
    />
    <TodoFooter @clearAll="clearAllItem" />
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
    removeOneItem: function (todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    toggleOneItem: function (todoItem, index) {
      // App.vue 컴포넌트 내에서 수정하도록 메서드 구성
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItem: function () {
      // 내 생각
      // this.todoItems.splice(0, this.todoItems.length);
      // 캡틴판교 생각
      // 복잡하게 생각할 것 없이 빈배열로 만들어주면 됨
      this.todoItems = [];
      localStorage.clear();
    },
  },
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
