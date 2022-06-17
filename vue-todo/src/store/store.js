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

  },
  mutations:{
    addOneItem(state, todoItem) {
      const obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeOneItem(state, { todoItem, index }){      
      localStorage.removeItem(todoItem.item);     
      state.todoItems.splice(index, 1);
    },
    toggleOneItem(state, { todoItem, index }) {
      // App.vue 컴포넌트 내에서 수정하도록 메서드 구성
      console.log(todoItem, index);
      state.todoItems[index].completed = !state.todoItems[index].completed;
      localStorage.removeItem(todoItem);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItem(state){
      state.todoItems = [];
      localStorage.clear();
    }
  },
  actions:{

  }  
})