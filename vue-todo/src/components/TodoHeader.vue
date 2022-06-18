<template>
  <!-- html -->
  <header>
    <h1>
      {{ this.title }}
    </h1>
  </header>
</template>

<script>
import { mapState } from 'vuex';
export default {
  // js script
  computed:{
    ...mapState(
      {
        title: 'headerText'
      }
    )
  }
};
</script>

<style scoped>
h1 {
  color: #2f3b52;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem;
}
</style>
