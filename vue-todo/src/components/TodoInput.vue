<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo" />
    <!-- <button @click="addTodo" class="addBtn">add</button> -->
    <span class="addContainer" @click="addTodo">
      <font-awesome-icon icon="fas fa-plus" class="addBtn" />
    </span>   
      <AlertModal v-if="showModal" @close="showModal = false">       
        <h3 slot="header" class="modalHeaderWrap">경고!
          <font-awesome-icon icon="fas fa-times" class="closeModalBtn" @click="showModal = false" />
        </h3>
        <p slot="body">텍스트를 입력해주세요</p>
        <div slot="footer">
          <i class="footerText">copyright Vue</i>
          <button @click="showModal = false">닫기</button>
          </div>
      </AlertModal>    
  </div>
</template>

<script>
import AlertModal from './common/AlertModal.vue'

export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false
    };
  },
  methods: {
    addTodo: function () {
      if (this.newTodoItem !== "") {
        this.$emit("addTodoItem", this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput: function () {
      this.newTodoItem = "";
    },
  },
  components:{
    AlertModal: AlertModal,
  }
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
  cursor: pointer;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.modalHeaderWrap{
  width: 100%;
  overflow: hidden;
}
.closeModalBtn{
  color: rgb(160, 160, 160);  
  cursor: pointer;  
  float: right; 
  vertical-align: middle;
  margin-top: 11px; 
}
.footerText{
  display: block;
}
</style>
