const routes = [
  {
    path: "/",
    component: MainContent
  },
  {
    path: "/about",
    component: About
  }
];

const router = new VueRouter({
  routes
});
