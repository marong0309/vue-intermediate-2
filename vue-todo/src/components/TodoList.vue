<template>
  <div>
    <ul>
      <li
        v-for="(todoItem, index) in propsdata"
        :key="todoItem.item"
        class="shadow"
      >
        <font-awesome-icon
          icon="fas fa-check"
          class="checkBtn"
          :class="{
            checkBtnCompleted: todoItem.completed,
          }"
          @click="toggleComplete(todoItem, indedx)"
        />
        <span :class="{ textCompleted: todoItem.completed }">{{
          todoItem.item
        }}</span>
        <span class="removeBtn" @click="removeTodo(todoItem, index)">
          <font-awesome-icon icon="fas fa-trash-alt" />
        </span>
        <!-- <button @click="removeItem"></button> -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["propsdata"],
  methods: {
    removeTodo: function (todoItem, index) {
      // localStorage 영역만 지운다고 되는게 아니라
      localStorage.removeItem(todoItem);
      // 화면 영역에서도 지워줘야 한다.
      this.propsdata.splice(index, 1);
      // slice()는 기존배열을 변경하지않고 지움 그래서 splice() API를 씀
    },
    toggleComplete: function (todoItem, index) {
      todoItem.completed = !todoItem.completed;
      // 로컬 스토리지의 값을 갱신
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
  margin-top: auto;
  margin-bottom: auto;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
</style>
