<template>
  <div>
    <transition-group name="list" tag="ul">
      <li
        v-for="(todoItem, index) in this.storedTodoItems"
        :key="todoItem.item"
        class="shadow"
      >
        <font-awesome-icon
          icon="fas fa-check"
          class="checkBtn"
          :class="{
            checkBtnCompleted: todoItem.completed,
          }"
          @click="toggleComplete({todoItem, index})"
        />
        <span :class="{ textCompleted: todoItem.completed }">{{
          todoItem.item
        }}</span>
        <span class="removeBtn" @click="removeTodo({todoItem, index})">
          <font-awesome-icon icon="fas fa-trash-alt" />
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  methods: {
    // helper함수에선 인자를 안넣어도 템플릿 내에 전달하는 인자를 전달해준다.
    // 대신 인자가 여러개일 경우 템플릿 단에서 객체로 묶어서 전달해야한다.
    ...mapMutations({
      removeTodo: "removeOneItem",
      toggleComplete: "toggleOneItem",
    }),      
  },
  computed:{
    // todoItems(){
    //   // return this.$store.getters.storedTodoItems      
    // }
    ...mapGetters(['storedTodoItems'])
    // ...mapGetters 속성 이름 부여
    // ...mapGetters(
    //   {todoItems: 'storedTodoItems'}
    // )
  }
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
.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
