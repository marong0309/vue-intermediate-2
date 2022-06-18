import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from './modules/todoApp'
// import * as getters from './getters'
// import * as mutations from './mutations'

Vue.use(Vuex);

// const storage = {  
//   fetch(){
//     const arr = [];
//     if (localStorage.length > 0) {
//       // 반복문은 let으로 값을 바꿔서 쓰니까
//       for (let i = 0; i < localStorage.length; i++) {
//         if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
//           arr.push(
//             JSON.parse(localStorage.getItem(localStorage.key(i)))
//           );
//         }
//       }
//     }
//     return arr;
//   }
// }

export const store = new Vuex.Store({   
  modules:{
    todoApp
  },
  // state:{
  //   headerText: "TODO it!",
  //   todoItems: storage.fetch()  
  // }, 
  // getters,
  // mutations,  
})