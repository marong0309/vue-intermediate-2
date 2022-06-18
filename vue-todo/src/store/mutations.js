  const addOneItem = (state, todoItem) => {
    const obj = { completed: false, item: todoItem };
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
  }

  const removeOneItem = (state, payload) =>{      
    localStorage.removeItem(payload.todoItem.item);     
    state.todoItems.splice(payload.index, 1);
  }

  const toggleOneItem = (state, payload) => {
    // App.vue 컴포넌트 내에서 수정하도록 메서드 구성      
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    localStorage.removeItem(payload.todoItem);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
  }

  const clearAllItem = (state) =>{
    state.todoItems = [];
    localStorage.clear();
  }

  export { addOneItem, removeOneItem, toggleOneItem, clearAllItem }