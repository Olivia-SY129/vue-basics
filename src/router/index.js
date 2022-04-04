import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import BoardView from "../views/BoardView.vue";
import UserView from "../views/UserView.vue";
import UserPosts from "../components/UserPosts.vue";
import UserProfile from "../components/UserProfile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/board/:id",
    name: "board",
    component: BoardView,
  },
  {
    path: "/User/:id",
    name: "user",
    component: UserView,
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        name: "profile",
        path: "profile",
        component: UserProfile,
      },
      {
        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        name: "posts",
        path: "posts",
        component: UserPosts,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
