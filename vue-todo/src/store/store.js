import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {  
  fetch(){
    const arr = [];
    if (localStorage.length > 0) {
      // 반복문은 let으로 값을 바꿔서 쓰니까
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          arr.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
        }
      }
    }
    return arr;
  }
}

export const store = new Vuex.Store({   
  state:{
    headerText: "TODO it!",
    todoItems: storage.fetch()  
  },
  getters:{
    storedTodoItems(state){
      return state.todoItems;
    }
  },
  mutations:{
    addOneItem(state, todoItem) {
      const obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeOneItem(state, payload){      
      localStorage.removeItem(payload.todoItem.item);     
      state.todoItems.splice(payload.index, 1);
    },
    toggleOneItem(state, payload) {
      // App.vue 컴포넌트 내에서 수정하도록 메서드 구성      
      state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
      localStorage.removeItem(payload.todoItem);
      localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
    clearAllItem(state){
      state.todoItems = [];
      localStorage.clear();
    }
  },
  actions:{

  }  
})