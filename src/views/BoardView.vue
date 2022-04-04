<template lang="">
  <div>
    <h1>Board</h1>
    <div>{{ boardName }}</div>
    <div>{{ $route.params.id }}</div>
    <div>{{ $route.query.articleId }}</div>
  </div>
</template>
<script>
export default {
  name: "BoardView",
  components: {},

  data() {
    return {
      boardName: "",
    };
  },
  created() {
    // mount된 시점
    this.boardName = this.$route.params.id;
  },
};
</script>
<style lang=""></style>
