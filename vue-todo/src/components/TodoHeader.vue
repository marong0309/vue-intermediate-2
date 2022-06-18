<template>
  <!-- html -->
  <header>
    <h1>
      {{ this.$store.state.todoApp.headerText }}
      <!-- state의 경우 데이터 값을 가져오는 방식이 다르다. -->
    </h1>
  </header>
</template>

<script>
// import { mapState } from 'vuex';
export default {
  // // js script
  // computed:{
  //   ...mapState(
  //     {
  //       title: 'headerText'
  //     }
  //   )
  // }
};
</script>

<style scoped>
h1 {
  color: #2f3b52;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem;
}
</style>
