<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <!-- 위 방법은 path가 바뀔 경우 수동으로 바꾸어야함 -->
      <router-link :to="{ name: 'about' }">About</router-link> |
      <router-link
        :to="{
          name: 'board',
          params: { id: 'news' },
          query: { articleId: 77546 },
        }"
        >Board</router-link
      >
      |
      <router-link
        :to="{
          name: 'user',
          params: { id: '77577' },
        }"
        >User</router-link
      >
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
