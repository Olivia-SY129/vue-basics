<template lang="">
  <div>
    <h1>User</h1>
    <div>{{ $route.params.id }}</div>
    <router-link :to="{ name: 'profile' }">Profile</router-link>
    |
    <router-link :to="{ name: 'posts' }">Posts</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
import UserPosts from "../components/UserPosts.vue";
import UserProfile from "../components/UserProfile.vue";

export default {
  name: "UserView",
  components: {},
  children: [
    {
      path: "",
      component: UserPosts,
    },
    {
      path: "",
      component: UserProfile,
    },
  ],
  data() {
    return {
      userName: "",
    };
  },
  created() {
    // mount된 시점
    this.userName = this.$route.params.id;
  },
};
</script>
<style lang=""></style>
